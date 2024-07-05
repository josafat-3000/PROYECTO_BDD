import React, { useState } from 'react';

const  adan = () => {
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
});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setAnswers((prevAnswers) => {
        const updatedAnswers = prevAnswers[name].includes(value)
          ? prevAnswers[name].filter((answer) => answer !== value)
          : [...prevAnswers[name], value];
        return { ...prevAnswers, [name]: updatedAnswers };
      });
    } else {
      setAnswers({
        ...answers,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newScore = 0;

    if (answers.q1 === 'a') newScore++;
    if (answers.q2 === 'a') newScore++;
    if (answers.q3 === 'c') newScore++;
    if (answers.q4 === 'a') newScore++;
    if (answers.q5 === 'b') newScore++;
    if (answers.q6 === 'b') newScore++;
    if (answers.q7 === 'a') newScore++; //NO AGGREGADO
    if (answers.q8 === 'a') newScore++;
    if (answers.q9 === 'b') newScore++;
    if (answers.q10 === 'b') newScore++;
    if (answers.q11 === 'a') newScore++;
/**
    if (JSON.stringify(answers.q3.sort()) === JSON.stringify(['a', 'c'])) newScore++;
 */
    setScore(newScore);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Cuestionario de repaso</h1>

      <p>
          Un sistema de bases de datos distribuidos almacena datos en múltiples ubicaciones físicas. 
          Las diferencias entre sistemas distribuidos y centralizados incluyen ubicación de datos, 
          tolerancia a fallos y control de concurrencia. Las configuraciones básicas en sistemas
          distribuidos son particiones independientes con posibilidad de una central. La transparencia 
          implica ocultar la complejidad del sistema al usuario. Las siglas DDBMS significan Sistema de 
          Gestión de Bases de Datos Distribuidas. La disponibilidad se refiere a garantizar que los datos 
          estén accesibles cuando se necesiten. La fiabilidad en este contexto es mantener la integridad 
          de los datos frente a fallos. Un esquema que requiere consultar datos pasando por todos los nodos
          carece de autonomía local, independencia de operación e independencia de red. La fragmentación
          de datos implica dividir una base en fragmentos distribuidos en diferentes servidores. Los 
          propósitos incluyen mejorar rendimiento, disponibilidad, escalabilidad y seguridad. La diferencia
          principal entre fragmentación horizontal y vertical es que la horizontal divide por filas y la 
          vertical por columnas.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={styles.question}>

    <p>1. ¿¿Qué es un sistema de base de datos distribuidos??</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="a"
              checked={answers.q1 === 'a'} //CORRECTA
              onChange={handleChange}
            />
             a) Sistema en el que los datos están almacenados en la misma ubicación física
          </label>

          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="b"
              checked={answers.q1 === 'b'}
              onChange={handleChange}
            />
             b) Sistema en el que los datos están almacenados en múltiples ubicaciones físicas
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="c"
              checked={answers.q1 === 'c'}
              onChange={handleChange}
            />
             c) Sistema en el que los datos apenas se van a crear
          </label>

        </div>

        <div style={styles.question}>
    <p>2. Seleccione al menos tres diferencias entre los sistemas de BD distribuidas vs centralizadas.</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="a"
              checked={answers.q2 === 'a'} //CORRECTA
              onChange={handleChange}
            />
            a) Ubicación de datos, tolerancia a fallos y control de concurrencia
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="b"
              checked={answers.q2 === 'b'}
              onChange={handleChange}
            />
            b) Ubicación de datos.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="c"
              checked={answers.q2 === 'c'}
              onChange={handleChange}
            />
            c) Correción de errores.
          </label>
        </div>

        <div style={styles.question}>
    <p>3. Seleccione las configuraciones básicas en un sistema de BD distribuidas.</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="a"
              checked={answers.q3 === 'a'}
              onChange={handleChange}
            />
            a) Un solo sistema de gestión.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="b"
              checked={answers.q3 === 'b'}
              onChange={handleChange}
            />
            b) Misma unidad de procesamiento.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="c"
              checked={answers.q3 === 'c'} //CORRECTA
              onChange={handleChange}
            />
            c) Particiones independientes y siempre debe existir una central.
          </label>
        </div>

        <div style={styles.question}>
    <p>4. ¿Qué es la transparencia?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q4"
              value="a"
              checked={answers.q4 === 'a'} //CORRECTA
              onChange={handleChange}
            />
            a) Ocultar la complejidad del sistema al usuario
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q4"
              value="b"
              checked={answers.q4 === 'b'}
              onChange={handleChange}
            />
            b) Mostrar la complejidad del sistema al usuario.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q4"
              value="c"
              checked={answers.q4 === 'c'}
              onChange={handleChange}
            />
            c) Configurar la complejidad del sistema al usuario.
          </label>
        </div>

        <div style={styles.question}>
    <p>5. ¿Qué significan las siglas DDBMS y cual es su definición?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q5"
              value="a"
              checked={answers.q5 === 'a'}
              onChange={handleChange}
            />
            a) Sistema de Bases de Datos Centralizadas.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q5"
              value="b"
              checked={answers.q5 === 'b'}
              onChange={handleChange}
            />
            b) Sistema de Gestión de Bases de Datos Centralizadas.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q5"
              value="c"
              checked={answers.q5 === 'c'}
              onChange={handleChange}
            />
            c) Sistema de Gestión de Bases de Datos Distribuidas.
          </label>
        </div>

                  <div style={styles.question}>
    <p>6. ¿Qué es la disponibilidad en el contexto de BD distribuidas? </p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q6"
              value="a"
              checked={answers.q6 === 'a'}
              onChange={handleChange}
            />
            a) Datos disponibles.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q6"
              value="b"
              checked={answers.q6 === 'b'} //CORRECTA
              onChange={handleChange}
            />
            b) Capacidad del sistema para garantizar que los datos estén accesibles y disponibles para los usuarios cuando lo necesiten.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q6"
              value="c"
              checked={answers.q6 === 'c'}
              onChange={handleChange}
            />
            c) Interoperabilidad
          </label>
        </div>


        <div style={styles.question}>
    <p>7. ¿Qué es la fiabilidad en el contexto de BD distribuidas?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q7"
              value="a"
              checked={answers.q7 === 'a'} //CORRECTA
              onChange={handleChange}
            />
            a) Capacidad del sistema para mantener la integridad y consistencia de los datos,
incluso en presencia de fallos o errores.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q7"
              value="b"
              checked={answers.q7 === 'b'}
              onChange={handleChange}
            />
            b) Que el usuario pueda modificar como administrador.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q7"
              value="c"
              checked={answers.q7 === 'c'}
              onChange={handleChange}
            />
            c) Que no exista error en compilación.
          </label>
        </div>


        <div style={styles.question}>
    <p>8. Si se tiene una BD almacenada en CDMX y se requiere hacer una consulta desde una base en 
                  Gto, pero dichos datos no se encuentran disponibles en CDMX y se requiere pasar por todos 
                  los nodos del sistema. ¿De cuál o cuáles de los 12 objetivos carece tal  esquema?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q8"
              value="a"
              checked={answers.q8 === 'a'} //CORRECTA
              onChange={handleChange}
            />
            a) Autonomía local, independencia de operación e independencia de red.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q8"
              value="b"
              checked={answers.q8 === 'b'}
              onChange={handleChange}
            />
            b) Dependencia local y dependencia de operación.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q8"
              value="c"
              checked={answers.q8 === 'c'}
              onChange={handleChange}
            />
            c) No necesita ningún objetivo.
          </label>
        </div>



        <div style={styles.question}>
    <p>9. ¿Qué es la fragmentación de datos?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q9"
              value="a"
              checked={answers.q9 === 'a'}
              onChange={handleChange}
            />
            a) Dividir datos.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q9"
              value="b"
              checked={answers.q9 === 'b'}
              onChange={handleChange}
            />
            b) Juntar bases de datos.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q9"
              value="c"
              checked={answers.q9 === 'c'} //CORRECTA
              onChange={handleChange}
            />
            c) Dividir una base de datos en fragmentos, distribuidos en diferentes servidores dentro de una red.
          </label>
        </div>


        <div style={styles.question}>
    <p>10. ¿Cuales son los propósitos fragmentación de datos?.</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q10"
              value="a"
              checked={answers.q10 === 'a'}
              onChange={handleChange}
            />
            a) Filtrar los datos necesarios dentro de una base.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q10"
              value="b"
              checked={answers.q10 === 'b'}//CORRECTA
              onChange={handleChange}
            />
            b) Mejora del rendimiento, disponibilidad, escalabilidad y seguridad.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q10"
              value="c"
              checked={answers.q10 === 'c'}
              onChange={handleChange}
            />
            c) Aumentar la escalabilidad y seguridad.
          </label>
        </div>


        <div style={styles.question}>
    <p>11. ¿Cuál es la principal diferencia entre la fragmentación horizontal y la vertical?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q11"
              value="a"
              checked={answers.q11 === 'a'} //CORRCTA
              onChange={handleChange}
            />
            a) La fragmentación horizontal divide por filas y la vertical por columnas.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q11"
              value="b"
              checked={answers.q11 === 'b'}
              onChange={handleChange}
            />
            b) La fragmentación horizontal divide por columnas y la vertical por filas.
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q11"
              value="c"
              checked={answers.q11 === 'c'}
              onChange={handleChange}
            />
            c) Ambas se dividen en filas
          </label>
        </div>


        <button type="submit" style={styles.button}>Enviar</button>
      </form>
      {score !== null && <p>Tu puntuación es: {score}/11</p>}
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

export default adan;