import React from 'react';
import { Layout, Menu, Button, Typography, Row, Col } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUserGraduate, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './App.css'; // Import the CSS file

const { Header, Content } = Layout;
const { Text } = Typography;

const LandingPage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="navbar" style={{ backgroundColor: '#000', padding: '0 50px' }}>
        <div className="logo">Scyrotech</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ marginLeft: 'auto' }}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Courses</Menu.Item>
          <Menu.Item key="3">Mentors</Menu.Item>
          <Menu.Item key="4">About</Menu.Item>
          <Menu.Item key="login" style={{ marginLeft: 'auto' }}>
            <Button type="link" style={{ color: '#1890ff' }} icon={<LoginOutlined />}>
              Login
            </Button>
          </Menu.Item>
          <Menu.Item key="register">
            <Button type="primary" style={{ backgroundColor: '#1890ff', border: 'none' }}>Register</Button>
          </Menu.Item>
        </Menu>
      </Header>

      <Content style={{padding: '30px', backgroundColor: '#ffffff' }}>
  <Row justify="center" align="middle" gutter={[16, 16]}>
    <Col xs={24} md={12} style={{ textAlign: 'center' }}>
      <div className="quality-circle">
        <span className="quality-text">Quality Education Made Easy</span><br></br>
        <Text className="empowering-text">
          Empowering You with the Latest Online Learning System & Resources to Fuel Your Knowledge Growth
        </Text>
      </div>
      <div style={{ marginTop: '5px' }}>
        <Button type="primary" size="large" style={{ marginRight: '10px' }}>Get Started</Button>
        <Button size="large">Learn More</Button>
      </div>
    </Col>
    <Col xs={24} md={12}>
      <img src="/lp.png" alt="Education Illustration" style={{ maxWidth: '200%' }} />
    </Col>
  </Row>

  <div className="stats-container">
  <Row justify="center" align="middle" gutter={[16, 16]}>
    <Col xs={24} md={8}>
      <div className="stats-box">
          <div class="new">
          <FontAwesomeIcon icon={faBook} size="2x" />
           </div> 
           <div class="new2">
           <h1>10k+</h1>
        <p className='course'>Total Courses</p>
           </div>
      </div>
      
      
    </Col>
    <Col xs={24} md={8}>
      <div className="stats-box">
      <div class="new">
          <FontAwesomeIcon icon={faUserGraduate} size="2x" />
          </div>
          <div class="new2">
           <h1>500+</h1>
        <p className='course'>Expert Mentors</p>
      </div>
    </div>
    </Col>
    <Col xs={24} md={8}>
      <div className="stats-box">
      <div class="new">
          <FontAwesomeIcon icon={faGlobe} size="2x" />
          </div>
          <div class="new2">
           <h1>300k+</h1>
        <p className='course'>Students Globally</p>
      </div>
      </div>
    </Col>
  </Row>
</div>
</Content>
    </Layout>
  );
};

export default LandingPage;
