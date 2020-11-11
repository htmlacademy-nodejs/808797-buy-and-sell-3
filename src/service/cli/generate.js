import generateOffers from '../generate-offers.js';
import fs from 'fs';

const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;

const generate = {
  name: `--generate`,
  run(args) {
    // const offers = generateOffers(Number.parseInt(args[0], 10) || DEFAULT_COUNT);
    // const offers = JSON.stringify(generateOffers(Number.parseInt(args[0], 10) || DEFAULT_COUNT));
    const offers = JSON.stringify(generateOffers(Number.parseInt(args[0], 10) || DEFAULT_COUNT), null, `\t`);
    console.info(offers);
    fs.writeFile(FILE_NAME, offers, (err) => {
      if (err) {
        return console.error(`Can't write data to file...`);
      }
      return console.info(`Operation success. File created.`);
    });
  }
};

export default generate;
