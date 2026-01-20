require("dotenv").config();

module.export = {
    DB_URI: process.env.DB_URI,
    DB_NAME: process.env.DB_NAME,
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
};
