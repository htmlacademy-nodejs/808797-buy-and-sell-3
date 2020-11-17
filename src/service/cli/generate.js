import generateOffers from '../generate-offers.js';
import fs from 'fs';

const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;

const generate = {
  name: `--generate`,
  run(args) {
    let count = Number.parseInt(args[0], 10) || DEFAULT_COUNT;
    if (count > 1000) {
      return console.info(`Не больше 1000 объявлений`);
    }
    const offers = JSON.stringify(generateOffers(count), null, `\t`);
    console.info(offers);
    fs.writeFile(FILE_NAME, offers, (err) => {
      if (err) {
        return console.error(`Can't write data to file...`);
      }
      return console.info(`Operation success. File created.`);
    });
    return null;
  }
};

export default generate;
