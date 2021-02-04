import Koa from 'koa';

const app = new Koa();

app.use((ctx) => {
  ctx.body = 'hello eb with monorepo';
});

app.listen(3000, () => {
  console.log('running server on 3000...');
});
