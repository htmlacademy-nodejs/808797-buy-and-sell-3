import require from '../require.js';

const packageJsonFile = require(`../../../package.json`, import.meta.url);

const version = {
  name: `--version`,
  run() {
    console.info(packageJsonFile.version);
  }
};

export default version;
