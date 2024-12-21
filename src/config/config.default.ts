import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1734768216539_762',
  koa: {
    port: 7001,
  },
  swagger: {
    title: 'midway-basic',
    description: 'This is a swagger-ui for midwayjs project',
    version: '1.0.0',
    enable: true,
    swaggerPath: '/dosc',
  },
} as MidwayConfig;
