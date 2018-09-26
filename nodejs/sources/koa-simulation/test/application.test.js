const Application = require('../lib/application');

const app = new Application();

// app.use((req, res) => {
//   console.log('====================================');
//   console.log('System Init !');
//   console.log('====================================');

//   res.end('Hello, The simulation system of KOA !');
// });

app.use(ctx => {
  console.log(ctx.req.url);
  console.log(ctx.request.req.url);
  console.log(ctx.response.req.url);
  console.log(ctx.request.url);
  console.log(ctx.request.path);
  console.log(ctx.url);
  console.log(ctx.path);
});

app.listen(3000);
