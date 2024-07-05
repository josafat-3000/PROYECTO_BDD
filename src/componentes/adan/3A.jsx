import React, { useState } from 'react';

const Adan = () => {
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
    if (answers.q3 === 'a') newScore++;
    if (answers.q4 === 'b') newScore++;
    if (answers.q5 === 'b') newScore++;
    if (answers.q6 === 'b') newScore++;
    if (answers.q7 === 'a') newScore++;
    if (answers.q8 === 'a') newScore++;
    if (answers.q9 === 'a') newScore++;
    if (answers.q10 === 'b') newScore++;

    setScore(newScore);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Comparativa entre BD centralizadas vs BD Distribuidas</h1>

      <p>
        Un sistema de bases de datos distribuidas (DDBMS) es aquel en el que los datos están almacenados
        en múltiples ubicaciones físicas. A continuación se presentan las principales diferencias
        entre sistemas de bases de datos distribuidas y centralizadas, como la ubicación de datos, tolerancia a
        fallos y control de concurrencia. Las configuraciones básicas en un sistema de bases de datos distribuidas
        incluyen particiones independientes y la posibilidad de una central. La transparencia en este contexto
        implica ocultar la complejidad del sistema al usuario. Las siglas DDBMS significan Sistema de Gestión de Bases de Datos Distribuidas.
        En términos de disponibilidad, se refiere a la capacidad del sistema para garantizar que los datos estén
        accesibles y disponibles para los usuarios cuando lo necesiten. Mientras que la fiabilidad se
        relaciona con la capacidad del sistema para mantener la integridad y consistencia de los datos a pesar
        de fallos o errores. La fragmentación de datos es el proceso de dividir una base de datos en fragmentos
        distribuidos en diferentes servidores. Los propósitos de la fragmentación incluyen mejorar el rendimiento, la disponibilidad, la escalabilidad y la seguridad.
        Finalmente, la principal diferencia entre la fragmentación horizontal y vertical es que la horizontal
        divide por filas y la vertical por columnas.
      </p>

      <h2>Cuestionario</h2>

      <form onSubmit={handleSubmit}>
        <div style={styles.question}>
          <p>1. Ubicación de los datos de BD Distribuidas.</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="a"
              checked={answers.q1 === 'a'}
              onChange={handleChange}
            />
            a) Distribuidos en múltiples nodos
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="b"
              checked={answers.q1 === 'b'}
              onChange={handleChange}
            />
            b) Almacenados en un solo servidor
          </label>
        </div>

        <div style={styles.question}>
          <p>2. Ubicación de los datos de BD Centralizadas.</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="a"
              checked={answers.q2 === 'a'}
              onChange={handleChange}
            />
            a) Almacenados en un solo servidor
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="b"
              checked={answers.q2 === 'b'}
              onChange={handleChange}
            />
            b) Distribuidos en múltiples nodos
          </label>
        </div>

        <div style={styles.question}>
          <p>3. ¿Qué escalabilidad tienen la BD Distribuidas?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="a"
              checked={answers.q3 === 'a'}
              onChange={handleChange}
            />
            a) Escalabilidad horizontal y vertical
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="b"
              checked={answers.q3 === 'b'}
              onChange={handleChange}
            />
            b) Principalmente vertical
          </label>
        </div>

        <div style={styles.question}>
          <p>4. ¿Qué escalabilidad tienen la BD Centralizada?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q4"
              value="a"
              checked={answers.q4 === 'a'}
              onChange={handleChange}
            />
            a) Escalabilidad horizontal y vertical
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q4"
              value="b"
              checked={answers.q4 === 'b'}
              onChange={handleChange}
            />
            b) Principalmente vertical
          </label>
        </div>

        <div style={styles.question}>
          <p>5. ¿Cuál de las dos Bases de Datos tiene más tolerancia a fallos?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q5"
              value="a"
              checked={answers.q5 === 'a'}
              onChange={handleChange}
            />
            a) Centralizadas
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q5"
              value="b"
              checked={answers.q5 === 'b'}
              onChange={handleChange}
            />
            b) Distribuidas
          </label>
        </div>

        <div style={styles.question}>
          <p>6. ¿Cuál de las dos Bases de Datos tiene mayor rendimiento?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q6"
              value="a"
              checked={answers.q6 === 'a'}
              onChange={handleChange}
            />
            a) Centralizadas
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q6"
              value="b"
              checked={answers.q6 === 'b'}
              onChange={handleChange}
            />
            b) Distribuidas
          </label>
        </div>

        <div style={styles.question}>
          <p>7. ¿Cuál de las dos Bases de Datos es más costosa respecto a infraestructura?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q7"
              value="a"
              checked={answers.q7 === 'a'}
              onChange={handleChange}
            />
            a) Distribuidas
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q7"
              value="b"
              checked={answers.q7 === 'b'}
              onChange={handleChange}
            />
            b) Centralizadas
          </label>
        </div>

        <div style={styles.question}>
          <p>8. ¿Cuál de las dos Bases de Datos tiene mayor consistencia de datos?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q8"
              value="a"
              checked={answers.q8 === 'a'}
              onChange={handleChange}
            />
            a) Centralizadas
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q8"
              value="b"
              checked={answers.q8 === 'b'}
              onChange={handleChange}
            />
            b) Distribuidas
          </label>
        </div>

        <div style={styles.question}>
          <p>9. ¿Cuál de las dos Bases de Datos es más compleja en cuestión de gestión?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q9"
              value="a"
              checked={answers.q9 === 'a'}
              onChange={handleChange}
            />
            a) Distribuidas
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q9"
              value="b"
              checked={answers.q9 === 'b'}
              onChange={handleChange}
            />
            b) Centralizadas
          </label>
        </div>

        <div style={styles.question}>
          <p>10. ¿Cuál de las dos Bases de Datos tiene mayor seguridad?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q10"
              value="a"
              checked={answers.q10 === 'a'}
              onChange={handleChange}
            />
            a) Centralizadas
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q10"
              value="b"
              checked={answers.q10 === 'b'}
              onChange={handleChange}
            />
            b) Distribuidas
          </label>
        </div>

        <button type="submit" style={styles.button}>Enviar</button>
      </form>
      {score !== null && <p>Tu puntuación es: {score}/10</p>}
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

export default Adan;