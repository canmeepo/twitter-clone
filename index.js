const serve = require('koa-static');
const Koa = require('koa');
const logger = require('koa-logger');
const router = require('koa-router')();
const body = require('koa-body');
const app = new Koa();

app.use(logger());
app.use(serve('public'));
app.use(serve('uploads'));
app.use(router.routes());
app.listen(3000);

let threads = [];

router.get('/thread', function* () {
	this.body = threads;
})

router.post(
	'/thread',
	body({
		multipart: true,
		formidable: { uploadDir: 'uploads/'}
	}),
	function* () {
		const text = this.request.body.fields.text;
		const image = this.request.body.files.image.path.replace('unploads', '');
		threads.push({text, image})
		this.body = {ok: 'Ok'};
	}
);

