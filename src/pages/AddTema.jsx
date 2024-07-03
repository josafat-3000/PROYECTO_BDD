import React, { useState, useEffect } from 'react';
import { getTopics, createTopic } from '../api/user';
import { Form, Input, Button, List } from 'antd';

const Temas = () => {
  const [temas, setTemas] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchTemas = async () => {
      const data = await getTopics();
      setTemas(data);
    };
    fetchTemas();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const data = await createTopic(values);
      setTemas([...temas, data]);
      form.resetFields();
    } catch (error) {
      console.error('Error adding tema', error);
    }
  };

  return (
    <div>
      <h1>Gestión de Temas</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ titulo: '', descripcion: '' }}
      >
        <Form.Item
          label="Título"
          name="nombre_T"
          rules={[{ required: true, message: 'Por favor ingrese el título' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Agregar Tema
          </Button>
        </Form.Item>
      </Form>
      <List
        dataSource={temas}
        renderItem={tema => (
          <List.Item key={tema.id_T}>
            <List.Item.Meta
              title={tema.nombre_T}
              description={tema.descripcion}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Temas;
