
let knex = require("knex");

let getDb = env => {
  const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } = env;
  db = knex({
    client: "mysql",
    connection: {
      host: MYSQL_HOST,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DB
    }
  });

  db
    .raw("select 1+1 as result")
    .then(() => {
      // there is a valid connection in the pool
    })
    .catch(err => {
      console.log("knex/mysql connection error on startup", err);
    });

  return db;
};
exports.getDb = getDb;