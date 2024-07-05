import React, { useState } from 'react';

const Quiz = () => {
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
    q11: '',
    q12: '',
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
    if (answers.q2 === 'a') newScore++;
    if (answers.q3 === 'b') newScore++;
    if (answers.q4 === 'a') newScore++;
    if (answers.q5 === 'a') newScore++;
    if (answers.q6 === 'b') newScore++;
    if (answers.q7 === 'a') newScore++;
    if (answers.q8 === 'a') newScore++;
    if (answers.q9 === 'a') newScore++;
    if (answers.q10 === 'a') newScore++;
    if (answers.q11 === 'a') newScore++;
    if (answers.q12 === 'a') newScore++;

    setScore(newScore);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Homogeneidad en MySQL</h1>
      <p>
        En un sistema de gestión de bases de datos relacional como MySQL, la homogeneidad se refiere a la consistencia en la estructura de las tablas y la forma en que se almacenan y manipulan los datos. En MySQL, las bases de datos se organizan en tablas, cada una de las cuales tiene una estructura definida por un conjunto de columnas y un conjunto de filas. Cada columna tiene un nombre y un tipo de dato específico que define el tipo de información que puede almacenar.
      </p>
      <p>
        La homogeneidad en MySQL se refleja en que todas las filas de una tabla tienen la misma estructura, es decir, contienen el mismo número de columnas y cada columna tiene el mismo tipo de dato en todas las filas. Esto asegura que los datos estén organizados de manera consistente y facilita la consulta y manipulación de los datos.
      </p>
      <p>
        MySQL también ofrece cierta flexibilidad en términos de cómo se pueden definir las tablas y cómo se pueden almacenar los datos. Por ejemplo, MySQL permite la definición de columnas opcionales que pueden estar presentes o ausentes en cada fila, lo que puede introducir cierta variabilidad en la estructura de las tablas. Además, MySQL ofrece varios motores de almacenamiento que pueden tener diferentes características y comportamientos, lo que puede afectar la homogeneidad en términos de rendimiento y funcionalidad.
      </p>
      <h2>Cuestionario</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.question}>
          <p>1. ¿Qué es la homogeneidad en MySQL?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="a"
              checked={answers.q1 === 'a'}
              onChange={handleChange}
            />
            a) Consistencia en la estructura de las tablas
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="b"
              checked={answers.q1 === 'b'}
              onChange={handleChange}
            />
            b) Variabilidad en la estructura de las tablas
          </label>
        </div>
        <div style={styles.question}>
          <p>2. ¿Cómo se organiza una base de datos en MySQL?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="a"
              checked={answers.q2 === 'a'}
              onChange={handleChange}
            />
            a) En tablas con columnas y filas
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="b"
              checked={answers.q2 === 'b'}
              onChange={handleChange}
            />
            b) En archivos de texto planos
          </label>
        </div>
        <div style={styles.question}>
          <p>3. ¿Qué implica la independencia de sitio central en MySQL?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="a"
              checked={answers.q3 === 'a'}
              onChange={handleChange}
            />
            a) Almacenamiento en un solo servidor
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="b"
              checked={answers.q3 === 'b'}
              onChange={handleChange}
            />
            b) Almacenamiento distribuido en múltiples servidores
          </label>
        </div>
        <div style={styles.question}>
          <p>4. ¿Qué es la replicación en MySQL?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q4"
              value="a"
              checked={answers.q4 === 'a'}
              onChange={handleChange}
            />
            a) Proceso de mantener copias idénticas de una base de datos en múltiples servidores
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q4"
              value="b"
              checked={answers.q4 === 'b'}
              onChange={handleChange}
            />
            b) Proceso de dividir una base de datos en fragmentos
          </label>
        </div>
        <div style={styles.question}>
          <p>5. ¿Qué ofrece MySQL Cluster?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q5"
              value="a"
              checked={answers.q5 === 'a'}
              onChange={handleChange}
            />
            a) Alta disponibilidad y operación continua
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q5"
              value="b"
              checked={answers.q5 === 'b'}
              onChange={handleChange}
            />
            b) Solo almacenamiento local
          </label>
        </div>
        <div style={styles.question}>
          <p>6. ¿Qué implica la independencia de ubicación en MySQL?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q6"
              value="a"
              checked={answers.q6 === 'a'}
              onChange={handleChange}
            />
            a) Instalación en servidores ubicados en diferentes lugares
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q6"
              value="b"
              checked={answers.q6 === 'b'}
              onChange={handleChange}
            />
            b) Instalación en un solo servidor
          </label>
        </div>
        <div style={styles.question}>
          <p>7. ¿MySQL ofrece independencia de fragmentación nativa?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q7"
              value="a"
              checked={answers.q7 === 'a'}
              onChange={handleChange}
            />
            a) No, pero existen soluciones de terceros
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q7"
              value="b"
              checked={answers.q7 === 'b'}
              onChange={handleChange}
            />
            b) Sí, nativamente
          </label>
        </div>
        <div style={styles.question}>
          <p>8. ¿Qué son las tablas FEDERATED en MySQL?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q8"
              value="a"
              checked={answers.q8 === 'a'}
              onChange={handleChange}
            />
            a) Tablas que permiten acceder y consultar datos en bases de datos remotas como si fueran locales
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q8"
              value="b"
              checked={answers.q8 === 'b'}
              onChange={handleChange}
            />
            b) Tablas que solo existen localmente
          </label>
        </div>
        <div style={styles.question}>
          <p>9. ¿Qué ofrece la replicación en MySQL?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q9"
              value="a"
              checked={answers.q9 === 'a'}
              onChange={handleChange}
            />
            a) Redundancia y alta disponibilidad
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q9"
              value="b"
              checked={answers.q9 === 'b'}
              onChange={handleChange}
            />
            b) Solo almacenamiento local
          </label>
        </div>
        <div style={styles.question}>
          <p>10. ¿Qué se necesita para la independencia de red en MySQL?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q10"
              value="a"
              checked={answers.q10 === 'a'}
              onChange={handleChange}
            />
            a) Uso del protocolo TCP/IP
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q10"
              value="b"
              checked={answers.q10 === 'b'}
              onChange={handleChange}
            />
            b) Uso de conexiones directas sin red
          </label>
        </div>
        <div style={styles.question}>
          <p>11. ¿MySQL ofrece independencia de hardware?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q11"
              value="a"
              checked={answers.q11 === 'a'}
              onChange={handleChange}
            />
            a) Sí, puede ejecutarse en una variedad de plataformas
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q11"
              value="b"
              checked={answers.q11 === 'b'}
              onChange={handleChange}
            />
            b) No, solo en hardware específico
          </label>
        </div>
        <div style={styles.question}>
          <p>12. ¿Qué permite la independencia de DBMS en MySQL?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q12"
              value="a"
              checked={answers.q12 === 'a'}
              onChange={handleChange}
            />
            a) Integración con otros sistemas de bases de datos a través de estándares como SQL y ODBC
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q12"
              value="b"
              checked={answers.q12 === 'b'}
              onChange={handleChange}
            />
            b) Solo funcionar de forma aislada
          </label>
        </div>
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
      {score !== null && <p>Tu puntuación es: {score}/12</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
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
  buttonHover: {
    backgroundColor: '#45a049',
  },
};

export default Quiz;