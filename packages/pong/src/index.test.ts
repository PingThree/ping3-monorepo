import { describe, expect, it } from "vitest";
import * as pong from "./index";

describe("@ping3/pong", () => {
  it("should export ping3Abi", () => {
    expect(pong.ping3Abi).toBeDefined();
    expect(Array.isArray(pong.ping3Abi)).toBe(true);
  });

  it("should export ping3Address", () => {
    expect(pong.ping3Address).toBeDefined();
    expect(typeof pong.ping3Address).toBe("object");
  });

  it("should export ping3Config", () => {
    expect(pong.ping3Config).toBeDefined();
    expect(pong.ping3Config.abi).toBeDefined();
    expect(pong.ping3Config.address).toBeDefined();
  });

  it("should export React hooks", () => {
    expect(pong.useReadPing3).toBeDefined();
    expect(pong.useWritePing3).toBeDefined();
    expect(pong.useSimulatePing3).toBeDefined();
  });

  it("should export specific contract function hooks", () => {
    expect(pong.useReadPing3GetUserPongCount).toBeDefined();
    expect(pong.useWritePing3TagLocation).toBeDefined();
    expect(pong.useSimulatePing3TagLocation).toBeDefined();
  });
});
