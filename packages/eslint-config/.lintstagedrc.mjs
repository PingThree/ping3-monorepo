export default {
  '*.js': ['eslint --fix --cache --max-warnings 0 --'],
  '*.{json,js,md}': ['prettier --write --'],
}
