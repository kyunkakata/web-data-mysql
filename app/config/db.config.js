module.exports = {
  HOST: "http://192.168.1.182",
  port: 8080,
  path: "/phpmyadmin",
  USER: "admin",
  PASSWORD: "123456",
  DB: "ban_hang_pnj",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
