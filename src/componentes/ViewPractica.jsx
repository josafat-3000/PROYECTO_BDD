import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPractica } from '../api/user';
import { Card, Descriptions, Spin, Alert } from 'antd';
import Uno from "./mike/1";
import Dos from "./adan/2";
import Tres from "./adan/3";
import Cuatro from "./erick/4";
import Cinco from "./mike/5";
import Seis from "./erick/6/6";
import Siete from "./mike/7";
import Ocho from "./josa/8";
import Nueve from "./josa/9";

const ViewPractica = () => {
  const { id } = useParams();
  const [practica, setPractica] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPractica(id);
        setPractica(...data);
        console.log(practica)
      } catch (error) {
        setError('Error fetching practica');
        console.error('Error fetching practica', error);
      }
    };
    fetchData();
  }, [id]);


  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  const renderComponentById = (id) => {
    switch (parseInt(id)) {
      case 1:
        return <Uno />;
      case 2:
        return <Dos />;
      case 3:
        return <Tres />;
      case 4:
        return <Cuatro />;
      case 5:
        return <Cinco />;
      case 6:
        return <Seis />;
      case 7:
        return <Siete />;
      case 8:
        return <Ocho />;
      case 9:
        return <Nueve />;
      default:
        return <></>;
    }
  };

  return (
    <Card title="Detalles de la Práctica" bordered style={{ margin: '20px', textAlign: 'left' }}>
      <Descriptions column={1} bordered>
        <Descriptions.Item label="Nombre">{practica.nombre_P}</Descriptions.Item>
        <Descriptions.Item label="Descripción">{practica.descripcion_P}</Descriptions.Item>
        <Descriptions.Item label="Calificación">{practica.calificacion || 'N/A'}</Descriptions.Item>
      </Descriptions>
      {renderComponentById(id)}
    </Card>
  );
};

export default ViewPractica;
