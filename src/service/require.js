import {createRequire} from 'module';

const require = (module, callerUrl) => {
  return createRequire(callerUrl)(module);
};

export default require;
