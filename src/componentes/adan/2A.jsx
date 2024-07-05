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
    if (answers.q7 === 'a') newScore++;
    if (answers.q8 === 'a') newScore++;
    if (answers.q9 === 'b') newScore++;
    if (answers.q10 === 'b') newScore++;
    if (answers.q11 === 'a') newScore++;

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
        <div>
          <p>1. ¿Qué es la fragmentación horizontal?</p>
          <label>
            <input type="radio" name="q1" value="a" onChange={handleChange} /> Selección de filas
          </label>
          <label>
            <input type="radio" name="q1" value="b" onChange={handleChange} /> Proyección de columnas
          </label>
          <label>
            <input type="radio" name="q1" value="c" onChange={handleChange} /> Combinación de proyección y selección
          </label>
        </div>
        <div>
          <p>2. ¿Qué es un DDBMS?</p>
          <label>
            <input type="radio" name="q2" value="a" onChange={handleChange} /> Sistema de Gestión de Bases de Datos Distribuidas
          </label>
          <label>
            <input type="radio" name="q2" value="b" onChange={handleChange} /> Sistema de Gestión de Bases de Datos Descentralizadas
          </label>
          <label>
            <input type="radio" name="q2" value="c" onChange={handleChange} /> Sistema de Gestión de Bases de Datos Combinadas
          </label>
        </div>
        <div>
          <p>3. ¿Cuál es un beneficio de la fragmentación vertical?</p>
          <label>
            <input type="radio" name="q3" value="a" onChange={handleChange} /> Distribuir la carga de lectura entre diferentes nodos
          </label>
          <label>
            <input type="radio" name="q3" value="b" onChange={handleChange} /> Reducir la redundancia de datos
          </label>
          <label>
            <input type="radio" name="q3" value="c" onChange={handleChange} /> Acceso independiente a columnas específicas
          </label>
        </div>
        <div>
          <p>4. ¿Qué se busca con la fragmentación de datos?</p>
          <label>
            <input type="radio" name="q4" value="a" onChange={handleChange} /> Mejorar rendimiento, disponibilidad, escalabilidad y seguridad
          </label>
          <label>
            <input type="radio" name="q4" value="b" onChange={handleChange} /> Reducir el espacio de almacenamiento
          </label>
          <label>
            <input type="radio" name="q4" value="c" onChange={handleChange} /> Aumentar la complejidad del sistema
          </label>
        </div>
        <div>
          <p>5. ¿Qué implica la transparencia en un sistema distribuido?</p>
          <label>
            <input type="radio" name="q5" value="a" onChange={handleChange} /> Exponer la complejidad al usuario
          </label>
          <label>
            <input type="radio" name="q5" value="b" onChange={handleChange} /> Ocultar la complejidad del sistema al usuario
          </label>
          <label>
            <input type="radio" name="q5" value="c" onChange={handleChange} /> Aumentar la visibilidad de los datos
          </label>
        </div>
        <div>
          <p>6. ¿Qué es la disponibilidad en un sistema distribuido?</p>
          <label>
            <input type="radio" name="q6" value="a" onChange={handleChange} /> Mantener la integridad de los datos frente a fallos
          </label>
          <label>
            <input type="radio" name="q6" value="b" onChange={handleChange} /> Garantizar que los datos estén accesibles cuando se necesiten
          </label>
          <label>
            <input type="radio" name="q6" value="c" onChange={handleChange} /> Distribuir los datos en múltiples ubicaciones físicas
          </label>
        </div>
        <div>
          <p>7. ¿Qué es la fiabilidad en un sistema distribuido?</p>
          <label>
            <input type="radio" name="q7" value="a" onChange={handleChange} /> Mantener la integridad de los datos frente a fallos
          </label>
          <label>
            <input type="radio" name="q7" value="b" onChange={handleChange} /> Garantizar que los datos estén accesibles cuando se necesiten
          </label>
          <label>
            <input type="radio" name="q7" value="c" onChange={handleChange} /> Distribuir los datos en múltiples ubicaciones físicas
          </label>
        </div>
        <div>
          <p>8. ¿Cuál es la principal diferencia entre fragmentación horizontal y vertical?</p>
          <label>
            <input type="radio" name="q8" value="a" onChange={handleChange} /> La horizontal divide por filas y la vertical por columnas
          </label>
          <label>
            <input type="radio" name="q8" value="b" onChange={handleChange} /> La vertical divide por filas y la horizontal por columnas
          </label>
          <label>
            <input type="radio" name="q8" value="c" onChange={handleChange} /> Ambas dividen por filas
          </label>
        </div>
        <div>
          <p>9. ¿Qué configura un sistema de bases de datos distribuidas?</p>
          <label>
            <input type="radio" name="q9" value="a" onChange={handleChange} /> Una única partición central
          </label>
          <label>
            <input type="radio" name="q9" value="b" onChange={handleChange} /> Particiones independientes con posibilidad de una central
          </label>
          <label>
            <input type="radio" name="q9" value="c" onChange={handleChange} /> Solo particiones dependientes
          </label>
        </div>
        <div>
          <p>10. ¿Qué implica la autonomía local en un sistema distribuido?</p>
          <label>
            <input type="radio" name="q10" value="a" onChange={handleChange} /> Requiere consultar datos pasando por todos los nodos
          </label>
          <label>
            <input type="radio" name="q10" value="b" onChange={handleChange} /> No requiere consultar datos pasando por todos los nodos
          </label>
          <label>
            <input type="radio" name="q10" value="c" onChange={handleChange} /> No permite consultas distribuidas
          </label>
        </div>
        <div>
          <p>11. ¿Cuál es un ejemplo de fragmentación horizontal?</p>
          <label>
            <input type="radio" name="q11" value="a" onChange={handleChange} /> Seleccionar proyectos de tipo 'outside'
          </label>
          <label>
            <input type="radio" name="q11" value="b" onChange={handleChange} /> Proyección de columnas específicas
          </label>
          <label>
            <input type="radio" name="q11" value="c" onChange={handleChange} /> Agrupación de datos por ciudades
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