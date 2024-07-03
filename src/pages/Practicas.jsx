import React, { useState, useEffect, useContext } from 'react';
import { getPractices, getTopics, createPractice, getStudents } from '../api/user'; // Añade getStudents
import { Form, Input, Button, Select, List } from 'antd';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';

const Practicas = () => {
  const [practicas, setPracticas] = useState([]);
  const [temas, setTemas] = useState([]);
  const [students, setStudents] = useState([]); // Añadido para almacenar estudiantes
  const [form] = Form.useForm();
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const practicasData = await getPractices();
      const temasData = await getTopics();
      const studentsData = await getStudents(); // Añade la llamada a la API para obtener estudiantes
      setTemas(temasData);
      setPracticas(practicasData);
      setStudents(studentsData); // Almacena los estudiantes
    };
    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const data = await createPractice({ ...values, profesor_practica: authState.id });
      setPracticas([...practicas, data]);
      form.resetFields();
    } catch (error) {
      console.error('Error adding practica', error);
    }
  };

  const filterPracticas = () => {
    if (authState.rol === 2) {
      return practicas.filter(practica => practica.profesor_practica === authState.id);
    } else if (authState.rol === 3) {
      return practicas.filter(practica => practica.usuario_practica === authState.id);
    }
    return [];
  };

  return (
    <div>
      <h1>Gestión de Prácticas</h1>
      {authState.rol === 2 && (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ nombre_P: '', descripcion_P: '', tema_id: null, calificacion: null, usuario_practica: '', profesor_practica: authState.id }}
        >
          <Form.Item
            label="Tema"
            name="tema_id"
            rules={[{ required: true, message: 'Por favor seleccione un tema' }]}
          >
            <Select placeholder="Seleccione un tema">
              {temas.map((tema) => (
                <Select.Option key={tema.id_T} value={tema.id_T}>
                  {tema.nombre_T}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Nombre"
            name="nombre_P"
            rules={[{ required: true, message: 'Por favor ingrese el nombre de la práctica' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Descripción"
            name="descripcion_P"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Calificación"
            name="calificacion"
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Usuario de la Práctica"
            name="usuario_practica"
            rules={[{ required: true, message: 'Por favor seleccione un usuario' }]}
          >
            <Select placeholder="Seleccione un usuario">
              {students.map((student) => (
                <Select.Option key={student.id_U} value={student.id_U}>
                  {student.nombre_U}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Agregar Práctica
            </Button>
          </Form.Item>
        </Form>
      )}
      <List
        dataSource={filterPracticas()}
        renderItem={practica => (
          <List.Item key={practica.id_P}>
            <List.Item.Meta
              title={
                authState.rol === 2 ? (
                  <Link to={`/practicas/edit/${practica.id_P}`}>{practica.nombre_P}</Link>
                ) : (
                  <Link to={`/practicas/view/${practica.id_P}`}>{practica.nombre_P}</Link>
                )
              }
              description={`Descripción: ${practica.descripcion_P} - Calificación: ${practica.calificacion || 'N/A'}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Practicas;
