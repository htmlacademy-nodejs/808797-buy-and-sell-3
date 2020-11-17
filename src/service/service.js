import Cli from './cli/index.js';

const ARGS_INDEX = 2;
const DEFAULT_COMMAND = `--help`;
const ExitCode = {
  success: 0,
  error: 1
};

const incommingArguments = process.argv.slice(ARGS_INDEX);

const [command] = incommingArguments;

if (!incommingArguments.length || !Cli[command]) {
  console.info(`\nno command, or incorrect command`);
  Cli[DEFAULT_COMMAND].run();
  process.exit(ExitCode.error);
}

Cli[command].run(incommingArguments.slice(1));
