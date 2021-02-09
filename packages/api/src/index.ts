import Koa from 'koa';

const app = new Koa();

app.use((ctx) => {
  ctx.body = 'hello eb with monorepo1';
});

app.listen(8080, () => {
  console.log('why 8080?');
});
