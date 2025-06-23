import { index, onchainTable, primaryKey, relations } from "ponder";

export type Role = "sentinel" | "allocator";

export const vault = onchainTable(
  "vault",
  (t) => ({
    // Composite primary key
    address: t.hex().notNull(),
    chainId: t.integer().notNull(),

    // one-to-one token reference
    tokenAddress: t.hex().notNull(),

    // one-to-one roles
    owner: t.hex().notNull(),
    curator: t.hex(),

    // Metadata
    name: t.text().notNull(),
    symbol: t.text().notNull(),

    // Timestamps
    createdAt: t.timestamp().notNull(),
    createdAtBlock: t.bigint().notNull(),
    createdAtTx: t.hex().notNull(),
  }),
  (tbl) => ({
    pk: primaryKey({ columns: [tbl.address, tbl.chainId] }),

    // Optimized indexes
    ownerIdx: index().on(tbl.owner),
    curatorIdx: index().on(tbl.curator),
    tokenIdx: index().on(tbl.tokenAddress, tbl.chainId),
  })
);

export const token = onchainTable(
  "token",
  (t) => ({
    address: t.hex().notNull(),
    chainId: t.integer().notNull(),

    name: t.text().notNull(),
    symbol: t.text().notNull(),

    // ERC-20 decimals fit comfortably into SMALLINT, but Drizzle uses integer().
    decimals: t.integer().notNull(),

    createdAtBlock: t.bigint(), // optional on-chain provenance
  }),
  (tbl) => ({
    pk: primaryKey({ columns: [tbl.address, tbl.chainId] }),

    symbolIdx: index().on(tbl.symbol), // quick lookup by symbol
  })
);

// vault relations
export const vaultMember = onchainTable(
  "vaultMember",
  (t) => ({
    // composite primary key
    vaultAddress: t.hex().notNull(),
    chainId: t.integer().notNull(),

    // member address
    member: t.hex().notNull(),

    // role
    role: t.text().$type<Role>().notNull(),

    // timestamp
    addedAtBlock: t.bigint().notNull(),
  }),
  (tbl) => ({
    pk: primaryKey({
      columns: [tbl.vaultAddress, tbl.chainId, tbl.member, tbl.role],
    }),

    // optimized indexes
    byMemberIdx: index().on(tbl.member),
    byVaultIdx: index().on(tbl.vaultAddress, tbl.chainId),
  })
);

// vault.members → VaultMember[]
export const vaultRelations = relations(vault, ({ many }) => ({
  members: many(vaultMember),
}));

// vaultMember.vault → Vault
export const vaultMemberRelations = relations(vaultMember, ({ one }) => ({
  vault: one(vault, {
    fields: [vaultMember.vaultAddress, vaultMember.chainId],
    references: [vault.address, vault.chainId],
  }),
}));

// vault.token → Token
export const vaultTokenRelations = relations(vault, ({ one }) => ({
  token: one(token, {
    fields: [vault.tokenAddress, vault.chainId],
    references: [token.address, token.chainId],
  }),
}));

// token.vaults → Vault[]
export const tokenRelations = relations(token, ({ many }) => ({
  vaults: many(vault),
}));
