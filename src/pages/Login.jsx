import React, { useState, useContext } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { AuthContext } from "../context/auth";
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/user.js';

const { Title } = Typography;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authState, setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await loginUser(values);
      console.log('Response:', response); // Verificar la respuesta
      if (response.error) {
        alert(response.error);
      } else {
        localStorage.setItem("accessToken", response.token);
        
        console.log('Before setAuthState:', authState); // Estado antes de actualizar
        
        setAuthState({
          correo: response.correo,
          id: response.id,
          status: true,
          rol: response.rol
        });

        console.log('After setAuthState:', {
          correo: response.correo,
          id: response.id,
          status: true,
          
        }); // Estado después de actualizar
        
        navigate('/home');
      }
    } catch (error) {
      console.error("Failed to login:", error);
      message.error("Failed to login");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-container">
      <Title level={2}>Inicia Sesión</Title>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[
            { 
              required: true, 
              message: 'Por favor, ingrese su correo electrónico!' 
            },
            {
              type: 'email',
              message: 'El correo electrónico no es válido!',
            }
          ]}
        >
          <Input 
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </Form.Item>
        
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Por favor, ingrese su contraseña!' }]}
        >
          <Input.Password 
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button">
            Iniciar Sesión
          </Button>
        </Form.Item>
      </Form>
      <div style={{ marginTop: '20px' }}>
        <Link to="/register">¿No tienes una cuenta? Regístrate</Link>
      </div>
    </div>
  );
}

export default Login;
