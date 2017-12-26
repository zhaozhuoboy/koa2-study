const Koa = require('koa');
const cors = require('@koa/cors');

const app = new Koa();
//关闭cors
app.use(cors());
// app.use(async ctx => {
//     ctx.response.body ={msg:'服务器错误'};
// });

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

const router = require('./router')();
app.use(router.routes());





app.listen(3000);