import React from 'react';
import { Form, Input, Button, Card, Typography, message, Divider } from 'antd';
import { UserOutlined, LockOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

interface LoginFormValues {
  username?: string;
  password?: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: LoginFormValues) => {
    if (values.username === 'admin@muhur.com' && values.password === 'admin123') {
      message.success('Mühür yetkisi onaylandı. Hoş geldiniz.');
      navigate('/admin');
    } else {
      message.error('Yetkisiz giriş denemesi. Bilgileri kontrol edin.');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#1a1a1a', 
      backgroundImage: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, rgba(26,26,26,1) 70%)', 
      padding: '20px'
    }}>
      <Button 
        type="text" 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate('/')}
        style={{ position: 'absolute', top: '40px', left: '40px', color: '#d4af37' }}
      >
        Ana Sayfaya Dön
      </Button>

      <Card 
        style={{ 
          width: '100%', 
          maxWidth: '400px', 
          borderRadius: '15px', 
          background: '#ffffff',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          border: '1px solid #d4af37',
          textAlign: 'center'
        }}
      >
        <div style={{ marginBottom: '30px' }}>
          <Title level={2} style={{ fontFamily: 'Playfair Display, serif', margin: 0, letterSpacing: '2px' }}>
            MÜHÜR
          </Title>
          <Text type="secondary">Yönetici Paneli Erişimi</Text>
          <Divider style={{ borderColor: '#d4af37', margin: '15px 0' }} />
        </div>

        <Form<LoginFormValues> 
          name="login_form"
          layout="vertical"
          onFinish={onFinish}
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Lütfen kullanıcı adınızı girin!' }]}
          >
            <Input 
              prefix={<UserOutlined style={{ color: '#d4af37' }} />} 
              placeholder="Kullanıcı Adı" 
              style={{ borderRadius: '8px' }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Lütfen şifrenizi girin!' }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: '#d4af37' }} />}
              placeholder="Şifre"
              style={{ borderRadius: '8px' }}
            />
          </Form.Item>

          <Form.Item style={{ marginTop: '30px' }}>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              style={{ 
                height: '50px', 
                background: '#1a1a1a', 
                borderColor: '#d4af37',
                fontWeight: 'bold',
                borderRadius: '8px'
              }}
            >
              GİRİŞ YAP
            </Button>
          </Form.Item>
        </Form>
        
        <Text italic style={{ fontSize: '12px', color: '#999' }}>
          Erişim yetkiniz yoksa lütfen sistem yöneticisi ile görüşün.
        </Text>
      </Card>
    </div>
  );
};