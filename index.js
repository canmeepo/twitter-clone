const serve = require('koa-static');
const Koa = require('koa');
const logger = require('koa-logger');
const app = new Koa();

app.use(logger());
app.use(serve('uploads'));

app.listen(3000);