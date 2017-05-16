const serve = require('koa-static');
const Koa = require('koa');
const logger = require('koa-logger');
const router = require('koa-router')();
const app = new Koa();

app.use(logger());
app.use(serve('public'));
app.use(router.routes());
app.listen(3000);

router.get('/post', function* () {
	this.body = [
		{
			label: '1dog',
			text: '2dog'
		},
		{
			label: '1cat',
			text: '2cat'
		}
	];
})

