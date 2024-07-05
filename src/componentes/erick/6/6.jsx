import React, { useState } from 'react';
import correctAnswers from './answers.json';
import departamentos from '../../../assets/images/departamentos.png';
import empleados from '../../../assets/images/empleados.png';
//import full from '../../../assets/images/full.png';
import inner_join from '../../../assets/images/inner_join.png';
import join_resultado from '../../../assets/images/join_resultado.png';
//import left_excluding from '../../../assets/images/left_excluding.png';
import left_resultado from '../../../assets/images/left_resultado.png';
import left from '../../../assets/images/left.png';
//import right_excluding from '../../../assets/images/right_excluding.png';
import right_resultado from '../../../assets/images/right_resultado.png';
import right from '../../../assets/images/right.png';

const productos = [
    { id: 1, nombre: 'Producto 1', categoria_id: 1, proveedor_id: 1 },
    { id: 2, nombre: 'Producto 2', categoria_id: 3, proveedor_id: 2 },
    { id: 3, nombre: 'Producto 3', categoria_id: 2, proveedor_id: 1 },
];

const categorias = [
    { id: 1, nombre: 'Categoría 1' },
    { id: 2, nombre: 'Categoría 2' },
    { id: 3, nombre: 'Categoría 3' },
];

const proveedores = [
    { id: 1, nombre: 'Proveedor 1' },
    { id: 2, nombre: 'Proveedor 2' },
    { id: 3, nombre: 'Proveedor 3' },
];

const executeQuery = (query) => {
    let result = [];

    if (query.includes('LEFT JOIN categorias')) {
        result = productos.map(p => ({
            ...p,
            categoria: categorias.find(c => c.id === p.categoria_id) || null
        }));
    } else if (query.includes('LEFT JOIN productos')) {
        result = categorias.map(c => ({
            ...c,
            productos: productos.filter(p => p.categoria_id === c.id) || null
        }));
    } else if (query.includes('LEFT JOIN proveedores')) {
        result = productos.map(p => ({
            ...p,
            proveedor: proveedores.find(pr => pr.id === p.proveedor_id) || null
        }));
    } else if (query.includes('RIGHT JOIN productos')) {
        result = proveedores.map(pr => ({
            ...pr,
            productos: productos.filter(p => p.proveedor_id === pr.id) || null
        }));
    } else if (query.includes('LEFT JOIN categorias') && query.includes('LEFT JOIN proveedores')) {
        result = productos.map(p => ({
            ...p,
            categoria: categorias.find(c => c.id === p.categoria_id) || null,
            proveedor: proveedores.find(pr => pr.id === p.proveedor_id) || null
        }));
    }

    return result;
};

const renderTable = (data) => {
    if (!data || data.length === 0) return <p>No hay datos para mostrar</p>;

    const headers = Object.keys(data[0]);

    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {headers.map((header, idx) => (
                            <td key={idx}>{JSON.stringify(row[header], null, 2)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const Quiz = () => {
    const [answers, setAnswers] = useState({
        p1: '',
        p2: '',
        p3: '',
        p4: '',
        p5: '',
    });

    const [score, setScore] = useState(null);
    const [results, setResults] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAnswers({
            ...answers,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let correctCount = 0;
        Object.keys(correctAnswers).forEach((question) => {
            if (answers[question] === correctAnswers[question]) {
                correctCount += 1;
            }
        });

        const calculatedScore = (correctCount / Object.keys(correctAnswers).length) * 10;
        setScore(calculatedScore);

        // Ejecuta las consultas ingresadas por el usuario
        const queryResults = {};
        for (const [key, value] of Object.entries(answers)) {
            try {
                const result = executeQuery(value);
                queryResults[key] = result;
            } catch (error) {
                queryResults[key] = error.message;
            }
        }
        setResults(queryResults);

        // Convierte las respuestas a JSON
        const answersJSON = JSON.stringify(answers);
        console.log(answersJSON);
    };


    return (
        <div className="quiz" style={styles.container}>
            <h1 style={styles.header}>Operación JOIN</h1>
            <h2>Introducción</h2>
            <p>
                La función JOIN en SQL se utiliza para combinar filas de dos o más tablas basadas en una columna relacionada entre ellas. Es una operación fundamental 
                en bases de datos relacionales que permite extraer datos combinados de múltiples tablas de manera eficiente. Existen varios tipos de JOIN, cada uno 
                con su propia lógica para la combinación de datos.
            </p>
            
            <h3>INNER JOIN</h3>
            <p>
                Es uno de los tipos de combinaciones más utilizados en SQL. Su objetivo es devolver todas las filas de las tablas involucradas en la combinación que 
                tienen valores coincidentes en las columnas especificadas. En otras palabras, se utiliza para combinar filas de dos o más tablas cuando existe una 
                relación entre ellas.
            </p>
            <h4>Descripción del Funcionamiento</h4>
            <div>    
                <ul>    
                    <li>
                        Identificación de Columnas Relacionadas: Primero se deben seleccionar las columnas que tienen una relación entre las tablas. Estas 
                        tablas son comúnmente claves primarias y foráneas.      
                    </li>
                    <li>
                        Comparación de Valores: Compara los valores de las columnas especificadas en las tablas involucradas. Solo las filas donde los valores 
                        de estas columnas coinciden, serán incluídas en el resultado.
                    </li>
                    <li>
                        Combinación de Filas: Una vez identificadas las coincidencias, las filas correspondientes de ambas tablas se combinan en una sola fila 
                        de resultado. 
                    </li>
                </ul>
            </div>
            <h4>Representación en Álgebra Relacional</h4>
            <p>
                Se representa mediante el operador de 'Unión natural' u operador de combinación.
            </p>
            <div style={{ textAlign: 'center' }}>
            <img src={inner_join} alt="INNER JOIN"  style={styles.centeredImage} />
            </div>
            <h4>Ejemplo práctico</h4>
            <p>
                Se definen dos tablas: Empleados (nombre y departamento) y Departamentos (ID y Nombre).
            </p>
            
            <div style={{ textAlign: 'center' }}>
                <img src={empleados} alt="Empleados" width="245" height="115" />
                <img src={departamentos} alt="Departamentos" width="245" height="115" />
            </div>
            

            <p>
                Al realizar el JOIN entre ambas tablas, donde existe relación entre Id y Departamentoid da como resultado:
            </p>
            <p><strong>SELECT</strong> * <strong>FROM</strong> Empleados E <strong>JOIN</strong> Departamentos D <strong>ON</strong> E.DepartamentoId = D.Id</p>
            <div style={{ textAlign: 'center' }}>
            <img src={join_resultado} alt="Resultado JOIN" width="245" height="115" />
            </div>

            <h3>LEFT JOIN</h3>
            <p>
                El LEFT JOIN (o LEFT OUTER JOIN) es una operación de combinación en SQL que devuelve todas las filas de la tabla de la izquierda y las filas 
                coincidentes de la tabla de la derecha. Si no hay coincidencia, las columnas de la tabla de la derecha en el resultado contendrán valores NULL.    
            </p>
            <h4>Descripción del Funcionamiento</h4>
            <div>    
                <ul>    
                    <li>
                        Identificación de Columnas Relacionadas: Similar al INNER JOIN, se deben identificar las columnas que tienen una relación entre las 
                        tablas.    
                    </li>
                    <li>
                        Comparación de Valores: El LEFT JOIN: Compara los valores de las columnas especificadas en las tablas involucradas. Sin embargo, a 
                        diferencia del INNER JOIN, todas las filas de la tabla de la izquierda se incluyen en el resultado. 
                    </li>
                    <li>
                        Combinación de Filas: Si hay coincidencias entre las columnas relacionadas, las filas se combinan. Si no hay coincidencia, las filas 
                        de la tabla de la izquierda se combinan con valores NULL en las columnas de la tabla de la derecha. 
                    </li>
                </ul>
            </div>
            <h4>Representación en Álgebra Relacional</h4>
            <p>
                A diferencia de un INNER JOIN, donde se busca una intersección respetada por ambas tablas, con LEFT JOIN damos prioridad a la tabla de la izquierda, 
                y buscamos en la tabla derecha. Se representa con el operador de combinación externa izquierda.
            </p>
            <p>
                Si no existe ninguna coincidencia para alguna de las filas de la tabla de la izquierda, de igual forma todos los resultados de la primera tabla se 
                muestran.
            </p>
            <div style={{ textAlign: 'center' }}>
            <img src={left} alt="LEFT JOIN" />
            </div>
            
            <h4>Ejemplo práctico</h4>
            <p>
                La tabla Empleados es la primera tabla en aparecer en la consulta (en el FROM), por lo tanto ésta es la tabla LEFT (izquierda), y todas sus filas 
                se mostrarán en los resultados.
            </p>
            <p>
                La tabla Departamentos es la tabla de la derecha (aparece luego del LEFT JOIN). Por lo tanto, si se encuentran coincidencias, se mostrarán los 
                valores correspondientes, pero sino, aparecerá NULL en los resultados.
            </p>
            <div style={{ textAlign: 'center'}}>
                <img src={empleados} alt="Empleados" width="245" height="115" />
                <img src={departamentos} alt="Departamentos" width="245" height="115" />
            </div>
            <p><strong>SELECT</strong> E.Nombre <strong>as</strong> 'Empleado', D.Nombre <strong>as</strong> 'Departamento' <strong>FROM</strong> Empleados E 
            <strong>LEFT JOIN</strong> Departamentos D <strong>ON</strong> E.DepartamentoId = D.Id</p>
           
            <div style={{ textAlign: 'center'}}>           
            <img src={left_resultado} alt="Resultado LEFT JOIN" width="245" height="115" />
            </div>

            <h3>RIGHT JOIN</h3>    
            <p>
                El RIGHT JOIN (o RIGHT OUTER JOIN) es una operación de combinación en SQL que devuelve todas las filas de la tabla de la derecha y las 
                filas coincidentes de la tabla de la izquierda. Si no hay coincidencia, las columnas de la tabla de la izquierda en el resultado contendrán 
                valores NULL.    
            </p>
            <h4>Descripción del Funcionamiento</h4>
            <div>    
                <ul>    
                    <li>
                        Identificación de Columnas Relacionadas: Al igual que con otros tipos de JOIN, se deben identificar las columnas que tienen una 
                        relación entre las tablas.
                    </li>
                    <li>
                        Comparación de Valores: El RIGHT JOIN compara los valores de las columnas especificadas en las tablas involucradas. A diferencia del INNER JOIN, todas las 
                        filas de la tabla de la derecha se incluyen en el resultado.
                    </li>
                    <li>
                        Combinación de Filas: Si hay coincidencias entre las columnas relacionadas, las filas se combinan. Si no hay coincidencia, las 
                        filas de la tabla de la derecha se combinan con valores NULL en las columnas de la tabla de la izquierda.
                    </li>
                </ul>
            </div>
            <h4>Representación en Álgebra Relacional</h4>
            <p>
                Se representa mediante el operador de combinación externa derecha. En el RIGHT JOIN, se da prioridad a la tabla de la derecha, y buscamos 
                en la tabla izquierda.
            </p>
            <div style={{ textAlign: 'center'}}>
            <img src={right} alt="RIGHT JOIN" />
            </div>
            <h4>Ejemplo práctico</h4>
            <p>
                La tabla Empleados es la tabla de la derecha y todas sus filas se mostrarán en los resultados.
            </p>
            <p>
                La tabla Departamentos es la tabla de la izquierda (aparece luego del RIGHT JOIN). Si se encuentran coincidencias, se mostrarán los 
                valores correspondientes, pero sino, aparecerá NULL en los resultados.
            </p>
            <div style={{ textAlign: 'center'}}>
                <img src={empleados} alt="Empleados" width="245" height="115" />
                <img src={departamentos} alt="Departamentos" width="245" height="115" />
            </div>
            <p><strong>SELECT</strong> E.Nombre <strong>as</strong> 'Empleado', D.Nombre <strong>as</strong> 'Departamento' <strong>FROM</strong> Empleados E 
            <strong>RIGHT JOIN</strong> Departamentos D <strong>ON</strong> E.DepartamentoId = D.Id</p>
            <div style={{ textAlign: 'center'}}>
            <img src={right_resultado} alt="Resultado RIGHT JOIN" width="245" height="115" />
            </div>
            

            <h3>Referencias</h3>
            <ul>
                <li>Elmasri, Ramez. Sistemas de bases de datos. Pearson Educación, 2015.</li>
                <li>Connolly, Thomas M., y Carolyn E. Begg. Database systems: A practical approach to design, implementation, and management. Pearson education, 2005.</li>
                <li>Navathe, Shamkant B., y Elmasri, Ramez. Fundamentos de Sistemas de Bases de Datos. Pearson Educación, 2015.</li>
            </ul>

            <h1 style={styles.header}>Cuestionario sobre Consultas SQL con JOINs</h1>
            <p>De acuerdoa las siguientes tablas, contestar las preguntas</p>
            <div>
                <h2>Tabla: Productos</h2>
                {renderTable(productos)}
                <h2>Tabla: Categorías</h2>
                {renderTable(categorias)}
                <h2>Tabla: Proveedores</h2>
                {renderTable(proveedores)}
            </div>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div style={styles.question}>
                    <label style={styles.label}>
                        1. Escribe una consulta SQL para obtener todos los productos y sus respectivas categorías, incluyendo los productos que no tienen categoría.
                        <br></br>
                        <input
                            type="text"
                            name="p1"
                            value={answers.p1}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        2. Escribe una consulta SQL para obtener todas las categorías y los productos que pertenecen a cada una, incluyendo las categorías que no tienen productos.
                        <br></br>
                        <input
                            type="text"
                            name="p2"
                            value={answers.p2}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        3. Escribe una consulta SQL para obtener todos los productos y sus respectivos proveedores, incluyendo los productos que no tienen proveedores.
                        <br></br>
                        <input
                            type="text"
                            name="p3"
                            value={answers.p3}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        4. Escribe una consulta SQL para obtener todos los proveedores y los productos que suministran, incluyendo los proveedores que no tienen productos.
                        <br></br>
                        <input
                            type="text"
                            name="p4"
                            value={answers.p4}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        5. Escribe una consulta SQL para obtener todos los productos, sus categorías y sus proveedores, incluyendo los productos que no tienen categorías ni proveedores.
                        <br></br>
                        <input
                            type="text"
                            name="p5"
                            value={answers.p5}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit" style={styles.button}>Enviar</button>
            </form>

            {score !== null && <p>Tu puntuación es: {score.toFixed(2)}/10</p>}

            {Object.keys(results).length > 0 && (
                <div>
                    <h2>Resultados de las Consultas</h2>
                    {Object.entries(results).map(([key, result]) => (
                        <div key={key}>
                            <h3>Consulta {key}</h3>
                            {renderTable(result)}
                        </div>
                    ))}
                </div>
            )}
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



export default Quiz;