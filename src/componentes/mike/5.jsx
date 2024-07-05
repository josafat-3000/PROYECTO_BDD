import React, { useState } from 'react';
import Tabla from "./5a";
import { Row, Col } from 'antd';

const ConsultasSQLCentralizadas = () => {
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newScore = 0;

    if (answers.q1 === 'a') newScore++;
    if (answers.q2 === 'b') newScore++;
    if (answers.q3 === 'a') newScore++;
    if (answers.q4 === 'b') newScore++;
    if (answers.q5 === 'a') newScore++;
    if (answers.q6 === 'c') newScore++;

    setScore(newScore);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Consultas SQL Centralizadas</h1>

      <section style={styles.section}>
        <h2 style={styles.subheader}>Seleccionar todos los registros de una tabla</h2>
        <pre style={styles.code}>
          SELECT * FROM Cliente;
        </pre>
        <p style={styles.description}>
          Esta consulta recupera todas las filas y columnas de la tabla <code>Cliente</code>.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheader}>Seleccionar registros con una condición específica</h2>
        <pre style={styles.code}>
          SELECT * FROM Producto WHERE Categoría = 'Electrónica';
        </pre>
        <p style={styles.description}>
          Esta consulta selecciona todos los productos que pertenecen a la categoría 'Electrónica'.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheader}>Insertar un nuevo registro</h2>
        <pre style={styles.code}>
          {`INSERT INTO Cliente (ID_Cliente, Nombre, Dirección, Teléfono)\nVALUES (1, 'Juan Pérez', '123 Calle Principal', '555-1234');`}
        </pre>
        <p style={styles.description}>
          Esta consulta inserta un nuevo cliente en la tabla <code>Cliente</code> con los valores especificados.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheader}>Actualizar un registro existente</h2>
        <pre style={styles.code}>
          {`UPDATE Producto\nSET Precio = 299.99\nWHERE ID_Producto = 101;`}
        </pre>
        <p style={styles.description}>
          Esta consulta actualiza el precio del producto con <code>ID_Producto</code> 101 a 299.99.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheader}>Eliminar un registro específico</h2>
        <pre style={styles.code}>
          DELETE FROM Pedido WHERE ID_Pedido = 5001;
        </pre>
        <p style={styles.description}>
          Esta consulta elimina el pedido con <code>ID_Pedido</code> 5001 de la tabla <code>Pedido</code>.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheader}>Realizar una unión entre dos tablas</h2>
        <pre style={styles.code}>
          {`SELECT Pedido.ID_Pedido, Pedido.Fecha, Cliente.Nombre\nFROM Pedido\nINNER JOIN Cliente ON Pedido.ID_Cliente = Cliente.ID_Cliente;`}
        </pre>
        <p style={styles.description}>
          Esta consulta realiza una unión entre las tablas <code>Pedido</code> y <code>Cliente</code>, y selecciona el ID del pedido, la fecha del pedido y el nombre del cliente.
        </p>
      </section>

      <h1 style={styles.header}>Cuestionario</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.question}>
          <p>1. ¿Qué consulta SQL selecciona todos los registros de la tabla Cliente?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="a"
              checked={answers.q1 === 'a'}
              onChange={handleChange}
            />
            a) SELECT * FROM Cliente;
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="b"
              checked={answers.q1 === 'b'}
              onChange={handleChange}
            />
            b) SELECT * FROM Producto;
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="c"
              checked={answers.q1 === 'c'}
              onChange={handleChange}
            />
            c) SELECT * FROM Pedido;
          </label>
        </div>

        <div style={styles.question}>
          <p>2. ¿Qué consulta SQL selecciona todos los productos de la categoría 'Electrónica'?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="a"
              checked={answers.q2 === 'a'}
              onChange={handleChange}
            />
            a) SELECT * FROM Producto WHERE Categoría = 'Ropa';
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="b"
              checked={answers.q2 === 'b'}
              onChange={handleChange}
            />
            b) SELECT * FROM Producto WHERE Categoría = 'Electrónica';
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="c"
              checked={answers.q2 === 'c'}
              onChange={handleChange}
            />
            c) SELECT * FROM Producto WHERE Categoría = 'Alimentos';
          </label>
        </div>

        <div style={styles.question}>
          <p>3. ¿Qué consulta SQL inserta un nuevo registro en la tabla Cliente?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="a"
              checked={answers.q3 === 'a'}
              onChange={handleChange}
            />
            a) INSERT INTO Cliente (ID_Cliente, Nombre, Dirección, Teléfono) VALUES (1, 'Juan Pérez', '123 Calle Principal', '555-1234');
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="b"
              checked={answers.q3 === 'b'}
              onChange={handleChange}
            />
            b) INSERT INTO Producto (ID_Producto, Nombre, Precio, Categoría) VALUES (1, 'Laptop', 999.99, 'Electrónica');
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="c"
              checked={answers.q3 === 'c'}
              onChange={handleChange}
            />
            c) INSERT INTO Pedido (ID_Pedido, Fecha, ID_Cliente) VALUES (1, '2024-01-01', 1);
          </label>
        </div>

        <div style={styles.question}>
          <p>4. ¿Qué consulta SQL actualiza el precio del producto con ID_Producto 101 a 299.99?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q4"
              value="a"
              checked={answers.q4 === 'a'}
              onChange={handleChange}
            />
            a) UPDATE Producto SET Precio = 299.99 WHERE ID_Producto = 101;
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q4"
              value="b"
              checked={answers.q4 === 'b'}
              onChange={handleChange}
            />
            b) UPDATE Producto SET Precio = 299.99 WHERE ID_Producto = 101;
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q4"
              value="c"
              checked={answers.q4 === 'c'}
              onChange={handleChange}
            />
            c) UPDATE Pedido SET Precio = 299.99 WHERE ID_Producto = 101;
          </label>
        </div>

        <div style={styles.question}>
          <p>5. ¿Qué consulta SQL elimina el pedido con ID_Pedido 5001?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q5"
              value="a"
              checked={answers.q5 === 'a'}
              onChange={handleChange}
            />
            a) DELETE FROM Pedido WHERE ID_Pedido = 5001;
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q5"
              value="b"
              checked={answers.q5 === 'b'}
              onChange={handleChange}
            />
            b) DELETE FROM Cliente WHERE ID_Cliente = 5001;
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q5"
              value="c"
              checked={answers.q5 === 'c'}
              onChange={handleChange}
            />
            c) DELETE FROM Producto WHERE ID_Producto = 5001;
          </label>
        </div>

        <div style={styles.question}>
          <p>6. ¿Qué consulta SQL realiza una unión entre las tablas Pedido y Cliente?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q6"
              value="a"
              checked={answers.q6 === 'a'}
              onChange={handleChange}
            />
            a) SELECT Pedido.ID_Pedido, Pedido.Fecha, Cliente.Nombre FROM Pedido LEFT JOIN Cliente ON Pedido.ID_Cliente = Cliente.ID_Cliente;
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q6"
              value="b"
              checked={answers.q6 === 'b'}
              onChange={handleChange}
            />
            b) SELECT Pedido.ID_Pedido, Pedido.Fecha, Cliente.Nombre FROM Pedido RIGHT JOIN Cliente ON Pedido.ID_Cliente = Cliente.ID_Cliente;
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q6"
              value="c"
              checked={answers.q6 === 'c'}
              onChange={handleChange}
            />
            c) SELECT Pedido.ID_Pedido, Pedido.Fecha, Cliente.Nombre FROM Pedido INNER JOIN Cliente ON Pedido.ID_Cliente = Cliente.ID_Cliente;
          </label>
        </div>

        <button type="submit" style={styles.button}>Enviar</button>
      </form>
      {score !== null && <p>Tu puntuación es: {score}/6</p>}
      <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col>
        {/* Tu componente a centrar */}
        <div style={{ padding: '20px', background: '#fafafa', textAlign: 'center' }}>
        <Tabla/>
        </div>
      </Col>
    </Row>
 
  
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '20px',
  },
  subheader: {
    fontSize: '1.2em',
    marginBottom: '10px',
  },
  code: {
    background: '#f4f4f4',
    padding: '10px',
    borderRadius: '5px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
  },
  description: {
    marginTop: '10px',
  },
  question: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ConsultasSQLCentralizadas;