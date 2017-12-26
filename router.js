const Router  = require('koa-router');

module.exports = function () {
    var router = new Router({
        prefix: '/api'
    })

    router.get('/test', async ctx => {
        ctx.body={
            data:'test'
        }
    })
    router.post('/posts', async ctx => {
        //-POST 请求提交过来的参数在  ctx.request.body里
        console.log(ctx.request.body)
        const bodys = ctx.request.body;
        ctx.body={
            data: bodys
        }
    })

    return router
}