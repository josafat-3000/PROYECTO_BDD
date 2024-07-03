import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, Row, Col, Button } from 'antd';
import { AuthContext } from '../context/auth';
import { UserOutlined, BookOutlined, BankOutlined, ExperimentOutlined, LogoutOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Home = () => {
  const { authState, setAuthState } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setAuthState({
      username: '',
      id: '',
      status: false,
      rol: ''
    });
  };

  const renderCards = () => {
    const { rol } = authState; // Suponiendo que authState tiene un campo role para el rol del usuario
    switch (rol) {
      case 3:
        return (
          <>
            <Col span={8}>
              <Link to="/practices">
                <Card hoverable style={styles.card} bodyStyle={styles.cardBody}>
                  <ExperimentOutlined style={styles.icon} />
                  <span>Gestión de prácticas</span>
                </Card>
              </Link>
            </Col>
            <Col span={8}>
              <Link to={`/users/view/${authState.id}`}>
                <Card hoverable style={styles.card} bodyStyle={styles.cardBody}>
                  <UserOutlined style={styles.icon} />
                  <span>Perfil</span>
                </Card>
              </Link>
            </Col>
          </>
        );
      case 2:
        return (
          <>
            <Col span={8}>
              <Link to="/addtema">
                <Card hoverable style={styles.card} bodyStyle={styles.cardBody}>
                  <BookOutlined style={styles.icon} />
                  <span>Gestión de temas</span>
                </Card>
              </Link>
            </Col>
            <Col span={8}>
              <Link to="/practices">
                <Card hoverable style={styles.card} bodyStyle={styles.cardBody}>
                  <ExperimentOutlined style={styles.icon} />
                  <span>Gestión de prácticas</span>
                </Card>
              </Link>
            </Col>
            <Col span={8}>
              <Link to={`/users/view/${authState.id}`}>
                <Card hoverable style={styles.card} bodyStyle={styles.cardBody}>
                  <UserOutlined style={styles.icon} />
                  <span>Perfil</span>
                </Card>
              </Link>
            </Col>
          </>
        );
      case 1:
        return (
          <>
            <Col span={8}>
              <Link to={`/users/view/${authState.id}`}>
                <Card hoverable style={styles.card} bodyStyle={styles.cardBody}>
                  <UserOutlined style={styles.icon} />
                  <span>Perfil</span>
                </Card>
              </Link>
            </Col>
            <Col span={8}>
              <Link to="/addtema">
                <Card hoverable style={styles.card} bodyStyle={styles.cardBody}>
                  <BookOutlined style={styles.icon} />
                  <span>Gestión de temas</span>
                </Card>
              </Link>
            </Col>
            <Col span={8}>
              <Link to="/schools">
                <Card hoverable style={styles.card} bodyStyle={styles.cardBody}>
                  <BankOutlined style={styles.icon} />
                  <span>Gestión de escuelas</span>
                </Card>
              </Link>
            </Col>
            <Col span={8}>
              <Link to="/practices">
                <Card hoverable style={styles.card} bodyStyle={styles.cardBody}>
                  <ExperimentOutlined style={styles.icon} />
                  <span>Gestión de prácticas</span>
                </Card>
              </Link>
            </Col>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <Title level={2}>Bienvenido</Title>
      <Row gutter={[16, 16]} style={styles.cardsContainer}>
        {renderCards()}
      </Row>
      <Button type="danger" icon={<LogoutOutlined />} onClick={handleLogout} style={styles.logoutButton}>
        Cerrar Sesión
      </Button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
  },
  cardsContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '150px',
    textAlign: 'center',
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  logoutButton: {
    marginTop: '20px',
  },
};

export default Home;
