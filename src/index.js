import app from './app.js';
import pool from './db.js';

app.get("/", async (req, res) => {
  try {
    // Obtener la hora actual de MySQL
    const [result] = await pool.query("SELECT NOW()");

    // Crear una tabla si no existe
    const [result2] = await pool.query(
      "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))"
    );

    // Insertar un valor en la tabla 'users'
    const [result3] = await pool.query("INSERT INTO users (name) VALUES ('John Doe')");

    // Enviar la respuesta con la hora actual
    res.send({
      time: result[0], // Hora actual
      tableCreated: result2, // Información sobre la creación de la tabla
      insertResult: result3, // Resultado de la inserción
    });
  } catch (error) {
    // Manejo de errores
    console.error("Error ejecutando la consulta: ", error);
    res.status(500).send("Error ejecutando la consulta.");
  }
});
