import { createConnection, createPool } from "mysql2/promise";


const pool = createPool({
  host: "mysqldb",
  port: 3306,
  user: "root",
  password:'root'
})

export default pool 