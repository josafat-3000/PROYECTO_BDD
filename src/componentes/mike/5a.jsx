import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, Table, Form, Spin, Alert } from 'antd';

const SearchTableComponent = () => {
  const [inputText, setInputText] = useState('');
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    if (inputText !== '') {
      setLoading(true);
      setError(null);

      // Realiza la petición HTTP POST
      axios.post('https://backconsultas-production.up.railway.app/api/query', { query: inputText })
        .then(response => {
          console.log(response.data);
          if (Array.isArray(response.data)) {
            const data = response.data;

            // Genera columnas dinámicamente
            const columns = Object.keys(data[0] || {}).map(key => ({
              title: key,
              dataIndex: key,
              key,
            }));

            setColumns(columns);
            setData(data.map((item, index) => ({ ...item, key: index })));
          } else {
            setData([]);
          }
          setLoading(false);
        })
        .catch(error => {
          setError('Error fetching data');
          setLoading(false);
        });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Form layout="inline" onFinish={handleSubmit} style={{ marginBottom: '20px' }}>
        <Form.Item>
          <Input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type to search..."
            style={{ width: '60vw' }} // Ajusta el ancho al 70% del viewport
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
      {loading && <Spin tip="Loading..." />}
      {error && <Alert message={error} type="error" />}
      {data.length > 0 && (
        <Table
          dataSource={data}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      )}
    </div>
  );
};

export default SearchTableComponent;
