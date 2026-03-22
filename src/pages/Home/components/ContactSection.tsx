import React from 'react';
import { Row, Col, Typography, Flex } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const ContactSection: React.FC = () => (
  <Row gutter={[40, 40]} style={{ maxWidth: '1200px', width: '100%' }}>
    <Col md={12}>
      <Title level={2} style={{ fontFamily: 'Playfair Display, serif' }}>Bize Ulaşın</Title>
      <Flex vertical gap={12} style={{ marginTop: '30px' }}>
        <Text><EnvironmentOutlined style={{ color: '#d4af37' }} /> Teşvikiye Caddesi, No: 12/A, Nişantaşı, İstanbul</Text>
        <Text><PhoneOutlined style={{ color: '#d4af37' }} /> +90 352 567 90 00</Text>
        <Text><MailOutlined style={{ color: '#d4af37' }} /> info@muhurrestaurant.com</Text>
      </Flex>
    </Col>
    <Col md={12}>
      <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d4af37' }}>
        <iframe
          title="Mühür Restaurant Lokasyon"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.1234!2d28.99!3d41.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAzJzAwLjAiTiAyOMKwNTknMjQuMCJF!5e0!3m2!1str!2str!4v123456789"
          width="100%" height="100%" style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </Col>
  </Row>
);