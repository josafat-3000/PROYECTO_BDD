import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home"
import Schools from "./pages/Schools";
import { ProtectedRoute,ProtectedRoutesProfesor,ProtectedRoutesAdmin } from "./pages/Protected";
import AddTema from "./pages/AddTema";
import Practicas from "./pages/Practicas";
import EditPractica from './componentes/EditPractica';
import ViewPractica from './componentes/ViewPractica';
import UserProfile from "./pages/User";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="app">
      <Header className="header"style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
        <div className="logo" />
        <h1 style={{ color: 'white' }}>TeachRoom</h1>
      </Header>
      <Content className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />

            <Route element ={<ProtectedRoute/> }>
              <Route path="/home" element={<Home/>} />
              <Route path="/users/view/:id" element={<UserProfile />} />
            
              
              <Route path="/practicas/view/:id" element={<ViewPractica/>} />
              <Route path="/practices" element={<Practicas/>} />
              <Route element={<ProtectedRoutesProfesor/>}>
                <Route path="/addtema" element={< AddTema/>} />
                <Route path="/practicas/edit/:id" element={<EditPractica/>} />
              </Route>
              <Route element={<ProtectedRoutesAdmin/>}>
                <Route path="/schools" element={< Schools/>} />
              </Route>

            </Route>

            
          </Routes>
        </BrowserRouter>
      </Content>
    </Layout>
  );
}

export default App;
