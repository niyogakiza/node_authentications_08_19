const connection = {
  development: {
    username: process.env.SEQUELIZE_USER,
    password: process.env.SEQUELIZE_PASSWORD,
    database: "",
    host: process.env.SEQUELIZE_HOST,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "password",
    database: "database",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};

module.exports = connection;
