const help = {
  name: `--help`,
  run() {
    console.info(
        `\nПрограмма запускает http-сервер и формирует файл с данными для API.

    Гайд:
    service.js <command>

    Команды:
    --version:            выводит номер версии
    --help:               печатает этот текст
    --generate <count>    формирует файл mocks.json`);
  }
};

export default help;
