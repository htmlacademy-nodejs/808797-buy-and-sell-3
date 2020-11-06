import Cli from './cli/index.js';

const ARGS_INDEX = 2;
const DEFAULT_COMMAND = `--help`;
const ExitCode = {
  success: 0
};

const incommingArguments = process.argv.slice(ARGS_INDEX);

const [command] = incommingArguments;

if (!incommingArguments.length || !Cli[command]) {
  console.info(`no command, or incorrect command`);
  Cli[DEFAULT_COMMAND].run();
  process.exit(ExitCode.success);
}

Cli[command].run(incommingArguments.slice(1));


/*
const runCommands = (args) => {
  if (args.length) {
    const [userCommand] = args;
    if (!Cli[userCommand]) {
      console.info(`unknown command: ${[userCommand]}`);
    } else {
      Cli[userCommand].run();
    }
    runCommands(args.slice(1));
  } else {
    Cli[DEFAULT_COMMAND].run();
  }
  process.exit(ExitCode.success);
};

runCommands(incommingArguments);
*/
