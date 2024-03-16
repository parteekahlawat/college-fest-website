const payments = require("./payments/payments.service.js");
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(payments);
};
