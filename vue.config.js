module.exports = {
    css: {
      loaderOptions: {
        scss: {
            prependData: `
            
            @import "@/styles/main.scss";
          `
        }
      }
    },
    devServer: {
      host: 'localhost'
    }
  };