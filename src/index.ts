// import { log } from './winston-elasticsearch-logger';
import { log } from './axios-fetch-elastic';

export const sayHello = () => {
  let dateString = new Date(new Date()).toISOString().split('T')[0];
  dateString = dateString.replace('-', '.');
  log.info('hello world');
  log.info(`Time now: ${dateString}`);
  return 1;
};

sayHello();
