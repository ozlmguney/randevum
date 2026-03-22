import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export const AboutSection: React.FC = () => (
  <Row gutter={[60, 40]} align="middle" style={{ maxWidth: '1200px', width: '100%' }}>
    <Col md={12} xs={24}>
      <div style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
        <img 
          src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800" 
          alt="Hikayemiz"
          style={{ borderRadius: '4px', zIndex: 2, position: 'relative', width: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
        />
        <div style={{ position: 'absolute', top: '20px', left: '-20px', width: '100%', height: '100%', border: '2px solid #d4af37', zIndex: 1 }}></div>
      </div>
    </Col>
    <Col md={12} xs={24}>
      <Title level={4} style={{ color: '#d4af37', letterSpacing: '3px', textTransform: 'uppercase' }}>Hikayemiz</Title>
      <Title level={1} style={{ fontFamily: 'Playfair Display, serif', marginTop: 0 }}>Geleneksel Tatlar, Modern Yorumlar</Title>
      <Paragraph style={{ fontSize: '18px', color: '#444', lineHeight: '1.8' }}>
        MÜHÜR, İstanbul'un köklü mutfak mirasını modern bir gastronomi anlayışıyla birleştiriyor. Topraklarımızdan aldığımız ilhamla, her tabağa kendi "mührümüzü" basıyoruz. 
      </Paragraph>
    </Col>
  </Row>
);