import winston from 'winston';

import { AxiosTransport } from 'winston-fetch-axios';

let dateString = new Date(new Date()).toISOString().split('T')[0];
dateString = dateString.replace('-', '.');

export const log = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.prettyPrint()
  ),
  transports: [
    new winston.transports.Console(),
    // new CustomHttpElasticTransport({
    //   ssl: true,
    //   host: 'kolenka-inc-4135333449.eu-central-1.bonsaisearch.net',
    //   port: 443,
    //   auth: {
    //     username: 'NX4jPVtxmC',
    //     password: 'QNw5bzyHoXC9YFkr'
    //   },
    //   path: `filebeat-7.10.2-${dateString}/_doc/`,
    //   headers: {
    //     'Content-type': 'application/json'
    //   }
    // }),
    new AxiosTransport({
      url: 'https://kolenka-inc-4135333449.eu-central-1.bonsaisearch.net:443',
      path: `filebeat-7.10.2-${dateString}/_doc/`,
      auth: 'Tlg0alBWdHhtQzpRTnc1Ynp5SG9YQzlZRmty',
      authType: 'basic'
    })
  ]
});
