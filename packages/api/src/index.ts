import Koa from 'koa';

const app = new Koa();

app.use((ctx) => {
  ctx.body = 'hello eb with monorepo';
});

app.listen(8080, () => {
  console.log('why 8080?');
});
