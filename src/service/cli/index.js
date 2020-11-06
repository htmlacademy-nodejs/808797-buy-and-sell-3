import version from './version.js';
import help from './help.js';
import generate from './generate.js';

const Cli = {
  [version.name]: version,
  [help.name]: help,
  [generate.name]: generate
};

export default Cli;
