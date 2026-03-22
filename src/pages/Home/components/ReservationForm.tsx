import React from 'react';
import { Form, Input, DatePicker, TimePicker, InputNumber, Button, Card, Row, Col, Typography, Divider, message } from 'antd';
import { MailOutlined, PhoneOutlined, UserOutlined, TeamOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { createReservation } from '../../../services/reservationService';
import { sendReservationEmail, type EmailData } from '../../../services/emailService';

const { Title, Text } = Typography;

interface ReservationFormValues {
  customerName: string;
  email: string;
  phone: string;
  guestCount: number;
  date: dayjs.Dayjs;
  time: dayjs.Dayjs;
}

export const ReservationForm: React.FC = () => {
  const [form] = Form.useForm();

 const onFinish = async (values: ReservationFormValues) => {
    try {
      const formattedData: EmailData = {
        customerName: values.customerName,
        email: values.email,
        phone: values.phone,
        guestCount: values.guestCount,
        date: values.date.format('YYYY-MM-DD'),
        time: values.time.format('HH:mm'),
        status: 'pending', 
      };
      
      await createReservation(formattedData);
      await sendReservationEmail(formattedData);
      
      message.success('Mührünüzü bastık! Onay maili kutunuza düşecektir.');
      form.resetFields();
    } catch (err) {
      console.error("Rezervasyon hatası:", err);
      message.error('Bir hata oluştu, lütfen tekrar deneyiniz.');
    }
  };

  return (
    <Card 
      style={{ 
        width: '100%', 
        maxWidth: '650px', 
        borderRadius: '20px', 
        border: '1px solid #d4af37',
        margin: '0 auto' 
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Title level={2} style={{ color: '#d4af37' }}>MÜHÜR</Title>
        <Text type="secondary">Zarafet ve lezzetin buluşma noktası.</Text>
        <Divider />
      </div>

      <Form form={form} layout="vertical" onFinish={onFinish} size="large">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item 
              name="customerName" 
              label="Ad Soyad" 
              rules={[{ required: true, message: 'Lütfen adınızı giriniz' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Özlem Güney" />
            </Form.Item>
          </Col>
          
          <Col span={12}>
            <Form.Item 
              name="email" 
              label="E-posta" 
              rules={[{ required: true, type: 'email', message: 'Geçerli bir e-posta giriniz' }]}
            >
              <Input prefix={<MailOutlined />} placeholder="ornek@mail.com" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item 
              name="phone" 
              label="Telefon" 
              rules={[{ required: true, message: 'Telefon numaranızı giriniz' }]}
            >
              <Input prefix={<PhoneOutlined />} placeholder="0555..." />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item name="guestCount" label="Kişi" rules={[{ required: true }]}>
              <InputNumber prefix={<TeamOutlined />} min={1} max={20} style={{ width: '100%' }} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item name="date" label="Tarih" rules={[{ required: true }]}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item name="time" label="Saat" rules={[{ required: true }]}>
              <TimePicker format="HH:mm" style={{ width: '100%' }} minuteStep={30} />
            </Form.Item>
          </Col>
        </Row>

        <Button 
          type="primary" 
          htmlType="submit" 
          block 
          style={{ 
            height: '50px', 
            background: '#1a1a1a', 
            borderColor: '#d4af37', 
            marginTop: '10px' 
          }}
        >
          REZERVASYON YAP
        </Button>
      </Form>
    </Card>
  );
};