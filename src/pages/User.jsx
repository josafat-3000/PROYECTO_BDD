import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUser, updateUser } from '../api/user';
import { Card, Descriptions, Form, Input, Button, Spin, Alert } from 'antd';

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUser(id);
        setUser(data);
        form.setFieldsValue(data);
      } catch (error) {
        setError('Error fetching user');
        console.error('Error fetching user', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, form]);

  const handleSubmit = async (values) => {
    try {
      const updatedUser = await updateUser(id, values);
      setUser(updatedUser);
      setEditMode(false);
      navigate(`/users/view/${id}`);
    } catch (error) {
      setError('Error updating user');
      console.error('Error updating user', error);
    }
  };

  if (loading) {
    return <Spin tip="Cargando..." />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" showIcon />;
  }

  return (
    <Card title="Perfil del Usuario" bordered style={{ margin: '20px', textAlign: 'left' }}>
      {editMode ? (
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Nombre" name="nombre_U" rules={[{ required: true, message: 'Por favor ingrese su nombre' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Correo" name="correo_U" rules={[{ required: true, message: 'Por favor ingrese su correo' }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Guardar Cambios
            </Button>
            <Button type="default" onClick={() => setEditMode(false)} style={{ marginLeft: '10px' }}>
              Cancelar
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Descriptions column={1} bordered>
          <Descriptions.Item label="Nombre">{user.nombre_U}</Descriptions.Item>
          <Descriptions.Item label="Correo">{user.correo_U}</Descriptions.Item>
          <Descriptions.Item label="Rol">{user.rol}</Descriptions.Item>
        </Descriptions>
      )}
      {!editMode && (
        <Button type="primary" onClick={() => setEditMode(true)} style={{ marginTop: '20px' }}>
          Editar Perfil
        </Button>
      )}
    </Card>
  );
};

export default UserProfile;
