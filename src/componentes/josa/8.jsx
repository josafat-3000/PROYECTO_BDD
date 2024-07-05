import { Typography, Card, Row, Col } from 'antd';
const { Title, Text ,Paragraph} = Typography;


import img1 from "../../assets/images/img/1.png";
import img3 from "../../assets/images/img/2.png"
import img4 from "../../assets/images/img/3.png"
import img5 from "../../assets/images/img/4.png"
import img7 from "../../assets/images/img/5.png"
import img6 from "../../assets/images/img/6.png"
import img2 from "../../assets/images/img/7.png"

import Tabla from "../mike/5a";


const TextComponent = () => {
  return (
    <Card style={{ width: "90%", margin: '0 auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
      <Title level={2}>Fragmentación de datos</Title>
      <Text strong>Considere los siguientes esquemas:</Text><br />
      <div style={{ padding: 20 }}>
      <Card
        hoverable
        style={{ width: 500, margin: '0 auto' }}
        cover={<img alt="Image 4" src={img1} />}  // Usar la imagen importada
      >
        
      </Card>

      <Card
        hoverable
        style={{ width: 500, margin: '0 auto' }}
        cover={<img alt="Image 4" src={img2} />}  // Usar la imagen importada
      >
        
      </Card>


      <Card
        hoverable
        style={{ width: 500, margin: '0 auto' }}
        cover={<img alt="Image 4" src={img3} />}  // Usar la imagen importada
      >
        
      </Card>
      <Card
        hoverable
        style={{ width: 500, margin: '0 auto' }}
        cover={<img alt="Image 4" src={img4} />}  // Usar la imagen importada
      >
        
      </Card>
      <Card
        hoverable
        style={{ width: 500, margin: '0 auto' }}
        cover={<img alt="Image 4" src={img5} />}  // Usar la imagen importada
      >
        
      </Card>
      <Card
        hoverable
        style={{ width: 500, margin: '0 auto' }}
        cover={<img alt="Image 4" src={img6} />}  // Usar la imagen importada
      >
        
      </Card>
      <Card
        hoverable
        style={{ width: 500, margin: '0 auto' }}
        cover={<img alt="Image 4" src={img7} />}  // Usar la imagen importada
      >
        
      </Card>

      

      </div>
      <div style={{ padding: 20 }}>
      <Card>
        <Typography>
          <Title level={3}>19.1 Fragmentación horizontal</Title>
          <Paragraph>
            Del esquema 1:
          </Paragraph>
          <Paragraph>
            <ul>
              <li>Obtenga el fragmento F1 de la relación PROJECT cuando el tipo de proyecto sea OUTSIDE. Fragmento F1.</li>
              <li>Obtenga el fragmento F2 de la relación PROJECT cuando el tipo de proyecto sea INSIDE. Fragmento F2.</li>
              <li>Obtenga el nombre del cliente cuando la ciudad de origen de este sea Londres y se encuentre asignado al proyecto P01. Fragmento F3.</li>
              <li>Obtenga el salario del empleado E001. Fragmento F4.</li>
              <li>Obtenga los nombres de la ciudad de designación del empleado cuando la ciudad de origen sea Londres. Fragmento F5.</li>
              <li>Obtenga las marcas cuya sede es Londres y el número de proyectos que se manejan en tal marca y ciudad. Fragmento F6.</li>
              <li>Obtenga las ganancias totales de las marcas cuya ciudad sede es Paris. Fragmento F7.</li>
              <li>Obtenga el total de empleados que se encuentren designados a París. Fragmento F8.</li>
              <li>Obtenga los nombres de los proyectos asignados a employee 1. Fragmento F9.</li>
              <li>Obtenga las marcas asignadas a employee 1. Fragmento 10</li>
            </ul>
          </Paragraph>

          <Title level={3}>19.2 Fragmentación vertical</Title>
          <Paragraph>
            Del esquema 1:
          </Paragraph>
          <Paragraph>
            <ul>
              <li>F1: Obtenga los nombres, claves de líder y claves de marcas de los proyectos.</li>
              <li>F2: Obtenga los nombres de los clientes y las claves de los proyectos.</li>
              <li>F3: Obtenga los nombres de los empleados, las ciudades a las que se encuentran asignados el salario.</li>
              <li>F4: Obtenga las marcas, número de proyectos, y el total de ganancias.</li>
            </ul>
          </Paragraph>
          <Paragraph>
            Del esquema 2:
          </Paragraph>
          <Paragraph>
            <ul>
              <li>F1: Obtenga los nombres y edades de todos los ingenieros.</li>
              <li>F2: Obtenga los nombres de todos los ingenieros.</li>
            </ul>
          </Paragraph>
          <Paragraph>
            Del esquema 3:
          </Paragraph>
          <Paragraph>
            <ul>
              <li>F1: Obtenga el fragmento correspondiente a la relación de atributos PROVEEDOR y ESTADO.</li>
              <li>F2: Obtenga las ciudades de origen de los proveedores.</li>
              <li>F3: Obtenga los nombres de las PARTES, COLORES y CIUDADES del catálogo de PARTES. Ordénelos por el peso en forma descendente.</li>
              <li>F4: Obtenga las ciudades de origen de las PARTES.</li>
              <li>F5: Obtenga los nombres de los proyectos y las ciudades de origen. Ordénelos por ciudad de forma ascendente.</li>
              <li>F6: Obtenga todas las cantidades de partes y las claves de proyecto correspondientes.</li>
            </ul>
          </Paragraph>

          <Title level={3}>19.3 Fragmentación mixta</Title>
          <Paragraph>
            Del esquema 1:
          </Paragraph>
          <Paragraph>
            <ul>
              <li>F1 = Qproject-id,branch-no,project-leader-id(Project)</li>
              <li>F2 = Qproject-id,project-name,project-type,amount(Project)</li>
              <li>F11 = σproject-type="inside" (Qproject-id,branch-no,project-leader-id(Project))</li>
              <li>F12 = σproject-type="outside" (Qproject-id,branch-no,project-leader-id(Project))</li>
              <li>F21 = σproject-type="inside" (Qproject-id,project-name,project-type,amount(Project))</li>
              <li>F22 = σproject-type="outside" (Qproject-id,project-name,project-type,amount(Project))</li>
            </ul>
          </Paragraph>

          <Title level={3}>20. Fragmentación derivada</Title>
          <Paragraph>
            Del esquema 4:
          </Paragraph>
          <Paragraph>
            <ul>
              <li>Obtenga la clave del alumno, los nombres de los alumnos, el nombre de la materia y la nota correspondientes a quienes estudien en CIME.</li>
              <li>Obtenga la clave del alumno, los nombres de los alumnos, el nombre de la materia y la nota correspondientes a quienes estudien en EISIC.</li>
              <li>Obtenga los datos de la materia cuando la calificación de los alumnos sea superior a 8.</li>
              <li>Obtenga la clave del alumno, la materia y la nota cuando la nota sea mayor o igual a 8 y agrupe por escuela.</li>
            </ul>
          </Paragraph>
        </Typography>
      </Card>
    </div>




    <div style={{ padding: '20px', background: '#fafafa', textAlign: 'center' }}>
        <Tabla/>
        </div>


    </Card>
  );
};

export default TextComponent;