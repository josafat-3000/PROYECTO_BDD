import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPractica, updatePractica } from '../api/user';
import { Form, Input, Button, Spin, Alert, Card } from 'antd';

const EditPractica = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [practica, setPractica] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPractica(id);
        setPractica(data);
        form.setFieldsValue({ calificacion: data.calificacion });
      } catch (error) {
        setError('Error fetching practica');
        console.error('Error fetching practica', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, form]);

  const handleSubmit = async (values) => {
    try {
      await updatePractica(id, { calificacion: values.calificacion });
      navigate(`/practicas/view/${id}`);
    } catch (error) {
      setError('Error updating practica');
      console.error('Error updating practica', error);
    }
  };

  if (loading) {
    return <Spin tip="Cargando..." />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  return (
    <Card title="Editar Calificación de la Práctica" bordered style={{ margin: '20px' }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ calificacion: practica.calificacion }}
      >
        <Form.Item
          label="Calificación"
          name="calificacion"
          rules={[{ required: true, message: 'Por favor ingrese la calificación' }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Guardar Cambios
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default EditPractica;
