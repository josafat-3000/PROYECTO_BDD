import React, { useState } from 'react';
import ER from '../../assets/images/ER.png';


import Arch from "./1a"
const ModeloEntidadRelacion = () => {
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: [],
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
    if (answers.q2 === 'c') newScore++;
    if (answers.q3 === 'b') newScore++;
    if (JSON.stringify(answers.q4.sort()) === JSON.stringify(['a', 'c'])) newScore++;

    setScore(newScore);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Modelo Entidad-Relación</h1>
      <p>
        Un modelo de entidad-relación (ER) es una herramienta conceptual utilizada para representar la estructura de una base de datos de una manera gráfica. Permite definir las entidades relevantes, sus atributos y las relaciones entre ellas. A continuación se presenta un ejemplo de un modelo ER básico.
      </p>

      <h2>Ejemplo de Diagrama ER</h2>
      <div style={{ textAlign: 'center' }}>
            <img src={ER} alt="INNER JOIN"  style={styles.centeredImage} />
            </div>

      <h2>Componentes del Modelo ER</h2>

      <h3>1. Entidades</h3>
      <p>
        Las entidades representan objetos o conceptos del mundo real que tienen una existencia independiente en la base de datos.
      </p>
      <ul>
        <li><strong>Cliente:</strong> Representa a los clientes de la empresa.</li>
        <li><strong>Producto:</strong> Representa los productos que la empresa vende.</li>
        <li><strong>Pedido:</strong> Representa los pedidos realizados por los clientes.</li>
      </ul>

      <h3>2. Atributos</h3>
      <p>
        Los atributos son las propiedades o características de una entidad.
      </p>
      <ul>
        <li><strong>Cliente:</strong> ID Cliente, Nombre, Dirección, Teléfono.</li>
        <li><strong>Producto:</strong> ID Producto, Nombre, Precio, Categoría.</li>
        <li><strong>Pedido:</strong> ID Pedido, Fecha, Cantidad, ID Cliente, ID Producto.</li>
      </ul>

      <h3>3. Relaciones</h3>
      <p>
        Las relaciones describen cómo las entidades interactúan entre sí.
      </p>
      <ul>
        <li><strong>Cliente - Pedido:</strong> Un cliente puede realizar muchos pedidos.</li>
        <li><strong>Pedido - Producto:</strong> Un pedido puede incluir múltiples productos.</li>
      </ul>

      <h3>Diagrama ER en Texto</h3>
      <p>
        Aquí se muestra una representación textual del diagrama ER:
      </p>
      <pre>
{`
Entidad Cliente:
  - ID Cliente (Clave primaria)
  - Nombre
  - Dirección
  - Teléfono

Entidad Producto:
  - ID Producto (Clave primaria)
  - Nombre
  - Precio
  - Categoría

Entidad Pedido:
  - ID Pedido (Clave primaria)
  - Fecha
  - Cantidad
  - ID Cliente (Clave foránea)
  - ID Producto (Clave foránea)

Relaciones:
  - Cliente (1) --- (N) Pedido
  - Pedido (1) --- (N) Producto
`}
      </pre>

      <h1 style={styles.header}>Cuestionario</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.question}>
          <p>1. ¿Qué representan las entidades en un modelo ER?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="a"
              checked={answers.q1 === 'a'}
              onChange={handleChange}
            />
            a) Objetos o conceptos del mundo real con existencia independiente
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="b"
              checked={answers.q1 === 'b'}
              onChange={handleChange}
            />
            b) Relaciones entre objetos
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="c"
              checked={answers.q1 === 'c'}
              onChange={handleChange}
            />
            c) Atributos de una entidad
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q1"
              value="d"
              checked={answers.q1 === 'd'}
              onChange={handleChange}
            />
            d) Esquemas de bases de datos
          </label>
        </div>

        <div style={styles.question}>
          <p>2. ¿Qué son los atributos en una entidad?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="a"
              checked={answers.q2 === 'a'}
              onChange={handleChange}
            />
            a) Entidades con existencia independiente
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="b"
              checked={answers.q2 === 'b'}
              onChange={handleChange}
            />
            b) Relaciones entre entidades
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="c"
              checked={answers.q2 === 'c'}
              onChange={handleChange}
            />
            c) Propiedades o características de una entidad
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q2"
              value="d"
              checked={answers.q2 === 'd'}
              onChange={handleChange}
            />
            d) Claves foráneas en una entidad
          </label>
        </div>

        <div style={styles.question}>
          <p>3. ¿Qué representa la relación "Cliente - Pedido" en un modelo ER?</p>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="a"
              checked={answers.q3 === 'a'}
              onChange={handleChange}
            />
            a) Un pedido puede ser realizado por un solo cliente
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="b"
              checked={answers.q3 === 'b'}
              onChange={handleChange}
            />
            b) Un cliente puede realizar muchos pedidos
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="c"
              checked={answers.q3 === 'c'}
              onChange={handleChange}
            />
            c) Un cliente puede realizar solo un pedido
          </label>
          <label style={styles.label}>
            <input
              type="radio"
              name="q3"
              value="d"
              checked={answers.q3 === 'd'}
              onChange={handleChange}
            />
            d) Muchos clientes pueden realizar muchos pedidos
          </label>
        </div>

        <div style={styles.question}>
          <p>4. Selecciona los atributos del "Producto" en un modelo ER:</p>
          <label style={styles.label}>
            <input
              type="checkbox"
              name="q4"
              value="a"
              checked={answers.q4.includes('a')}
              onChange={handleChange}
            />
            a) ID Producto
          </label>
          <label style={styles.label}>
            <input
              type="checkbox"
              name="q4"
              value="b"
              checked={answers.q4.includes('b')}
              onChange={handleChange}
            />
            b) Nombre
          </label>
          <label style={styles.label}>
            <input
              type="checkbox"
              name="q4"
              value="c"
              checked={answers.q4.includes('c')}
              onChange={handleChange}
            />
            c) Precio
          </label>
          <label style={styles.label}>
            <input
              type="checkbox"
              name="q4"
              value="d"
              checked={answers.q4.includes('d')}
              onChange={handleChange}
            />
            d) ID Pedido
          </label>
        </div>

        <button type="submit" style={styles.button}>Enviar</button>
      </form>
      {score !== null && <p>Tu puntuación es: {score}/4</p>}

      <Arch/>

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
  },
  diagram: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
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
  centeredImage: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '100%',
    maxHeight: '100%'
},
};

export default ModeloEntidadRelacion;