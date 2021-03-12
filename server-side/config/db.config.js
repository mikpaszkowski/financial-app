module.exports = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "Password123",
  DB: "financedb",
  dialect: "mysql",
  pool: {
    max: 4,
    min: 0,
    idle: 12000,
    acquire: 35000,
    evict: 3000
  }
};
