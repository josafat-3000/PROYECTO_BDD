import React, { useState, useEffect } from 'react';
import { getSchools, createSchool } from '../api/user';
import { Card, Form, Input, Button, List, Typography } from 'antd';

const { Title } = Typography;

const Schools = () => {
  const [schools, setSchools] = useState([]);
  const [newSchool, setNewSchool] = useState({ clave: '', nombre: '' });

  useEffect(() => {
    const fetchSchools = async () => {
      const data = await getSchools();
      setSchools(data);
    };
    fetchSchools();
  }, []);

  const handleChange = (e) => {
    setNewSchool({ ...newSchool, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const data = await createSchool(newSchool);
    setSchools([...schools, data]);
    setNewSchool({ clave: '', nombre: '' });
  };

  return (
    <Card title="Gestión de Escuelas" bordered style={{ margin: '20px' }}>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Clave" required>
          <Input
            name="clave"
            value={newSchool.clave}
            onChange={handleChange}
            placeholder="Clave"
          />
        </Form.Item>
        <Form.Item label="Nombre" required>
          <Input
            name="nombre"
            value={newSchool.nombre}
            onChange={handleChange}
            placeholder="Nombre"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Añadir Escuela
          </Button>
        </Form.Item>
      </Form>
      <List
        header={<Title level={4}>Lista de Escuelas</Title>}
        bordered
        dataSource={schools}
        renderItem={(school) => (
          <List.Item key={school.clave_E}>
            {school.nombre_E}
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Schools;
