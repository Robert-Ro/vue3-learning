require('./main.ts')
// https://github.com/TypeStrong/ts-loader/issues/352

if (module.hot) {
  module.hot.accept(['./main'], function () {
    require('./main.ts')
  })
}
