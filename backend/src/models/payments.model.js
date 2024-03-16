// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
    const sequelizeClient = app.get("sequelizeClient");
    const payments = sequelizeClient.define(
        "payments",
        {
            orderId: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            contact: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            paymentStatus: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            paymentIdRazorpay: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            studentIdImage: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            studentId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastCheckIn:{
                type : DataTypes.DATEONLY,
                allowNull : true,
            }
        },
        {
            hooks: {
                beforeCount(options) {
                    options.raw = true;
                },
            },
        },
    );

    // eslint-disable-next-line no-unused-vars
    payments.associate = function (models) {
        // Define associations here
        // See https://sequelize.org/master/manual/assocs.html
    };

    return payments;
};
