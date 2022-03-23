const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://api.xhboke.com/doc/movie/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
