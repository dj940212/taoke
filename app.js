const Koa = require('koa')
const koaStatic = require('koa-static')
const path = require('path')
const Router = require('koa-router');
const staticPath = './'

const app = new Koa();
const router = new Router();

// router.get('/users/:id', (ctx, next) => {
//   	ctx.body = "1242343"
// 	next()
// });

// app
//   .use(router.routes())
//   .use(router.allowedMethods());



app.use(koaStatic(path.join( __dirname,  staticPath)))

app.use((ctx, next) => {
  return next().then(() => {
    if (ctx.path === '/123') {
      ctx.body = 'Try `GET /package.json`'
    }
  })
})


app.listen(8085)
