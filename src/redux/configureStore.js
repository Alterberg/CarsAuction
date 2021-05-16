if (process.env.NODE_ENV === "development") {
    module.exports = require("./configureStore.dev");
} else if (process.env.NODE_ENV === "production") {
    module.exports = require("./configureStore.prod");
}