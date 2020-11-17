import require from '../require.js';
// import packageJsonFile from '../../../package.json'; // Будем работать только с флагом --experimental-json-modules
const packageJsonFile = require(`../../../package.json`, import.meta.url);

const version = {
  name: `--version`,
  run() {
    console.info(packageJsonFile.version);
  }
};

export default version;
