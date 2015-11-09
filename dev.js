// require the module as normal
var bs = require("browser-sync").create();

bs.watch("*.html").on("change", bs.reload);
bs.watch("dist/app/*.js").on("change", bs.reload);

// .init starts the server
bs.init({
    proxy: "localhost:5000",
    open: false
});
