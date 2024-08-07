import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Typography, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, getRoles, getSchools } from '../api/user';


const { Title } = Typography;
const { Option } = Select;

const Register = () => {
  const [roles, setRoles] = useState([]);
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [rolesData, schoolsData] = await Promise.all([getRoles(), getSchools()]);
        setRoles(rolesData);
        setSchools(schoolsData);
      } catch (error) {
        message.error('Error fetching roles or schools');
      }
    };
    fetchData();
  }, []);

  const onFinish = async (values) => {
    console.log(values)
    try {
      const response = await registerUser(values);
      if (response.error) {
        message.error(response.error);
      } else {
        message.success('User registered successfully');
        navigate('/login');
      }
    } catch (error) {
      console.error('Failed to register user:', error);
      message.error('Failed to register user');
    }
  };

  return (
    <div className="register-container">
      <Title level={2}>Registro de Usuario</Title>
      <Form
        name="register"
        onFinish={onFinish}
        layout="vertical"
      >

        <Form.Item
          name="nombre"
          label="Nombre"
          rules={[{ required: true, message: 'Por favor, ingrese su nombre!' }]}
        >
          <Input placeholder="Nombre" />
        </Form.Item>

        <Form.Item
          name="correo"
          label="Correo Electrónico"
          rules={[
            { required: true, message: 'Por favor, ingrese su correo electrónico!' },
            { type: 'email', message: 'El correo electrónico no es válido!' }
          ]}
        >
          <Input placeholder="Correo Electrónico" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Contraseña"
          rules={[{ required: true, message: 'Por favor, ingrese su contraseña!' }]}
        >
          <Input.Password placeholder="Contraseña" />
        </Form.Item>

        <Form.Item
          name="id_esc"
          label="Escuela"
          rules={[{ required: true, message: 'Por favor, seleccione su escuela!' }]}
        >
          <Select placeholder="Seleccione su escuela">
            {schools.map((school) => (
              <Option key={school.clave_E} value={school.clave_E}>
                {school.nombre_E}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="rol"
          label="Rol"
          rules={[{ required: true, message: 'Por favor, seleccione su rol!' }]}
        >
          <Select placeholder="Seleccione su rol">
            {roles.map((role) => (
              <Option key={role.id_rol} value={role.id_rol}>
                {role.rol}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-button">
            Registrarse
          </Button>
        </Form.Item>
      </Form>
      <div style={{ marginTop: '20px' }}>
        <Link to="/login">¿Ya tienes una cuenta? Inicia sesión</Link>
      </div>
    </div>
  );
};

export default Register;
