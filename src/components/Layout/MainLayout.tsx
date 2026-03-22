import React from 'react';
import { Layout, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title } = Typography;

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh', background: 'transparent' }}>
      <Header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        background: '#1a1a1a', 
        padding: '0 50px',
        height: '80px',
        position: 'fixed',
        width: '100%',
        zIndex: 1000, 
        borderBottom: '1px solid #d4af37'
      }}>
        <Title 
          level={2} 
          onClick={() => navigate('/')}
          style={{ color: '#d4af37', margin: 0, cursor: 'pointer', fontFamily: 'Playfair Display, serif', letterSpacing: '2px' }}
        >
          MÜHÜR
        </Title>
        <div style={{ color: '#fff', cursor: 'pointer', opacity: 0.8 }} onClick={() => navigate('/login')}>
          Yönetici Girişi
        </div>
      </Header>

      <Content style={{ padding: 0 }}>
        {children}
      </Content>
    </Layout>
  );
};