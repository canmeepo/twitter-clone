const Koa = require('koa');
const logger = require('koa-logger');
const app = new Koa();

app.use(logger());

app.use(ctx => {
  ctx.body = 'Hello noname';
});

app.listen(3000);