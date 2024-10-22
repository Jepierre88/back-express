import { createConnection, createPool } from "mysql2/promise";


const pool = createPool({
  host: "database-1.czuseiamuhpc.us-east-2.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password:'admin123456'
})

export default pool 