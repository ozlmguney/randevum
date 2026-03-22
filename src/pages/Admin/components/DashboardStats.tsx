import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';

interface Reservation {
  date: string;
  status: string;
}

interface StatsProps {
  reservations: Reservation[];
}

export const DashboardStats: React.FC<StatsProps> = ({ reservations }) => {
  const today = new Date().toISOString().split('T')[0];

  return (
    <Row gutter={[24, 24]} style={{ marginBottom: '30px' }}>
      <Col xs={24} sm={8}>
        <Card variant="borderless" style={{ borderLeft: '4px solid #d4af37' }}>
          <Statistic title="Toplam Rezervasyon" value={reservations.length} />
        </Card>
      </Col>
      <Col xs={24} sm={8}>
        <Card variant="borderless" style={{ borderLeft: '4px solid #faad14' }}>
          <Statistic title="Bekleyen Talepler" value={reservations.filter(r => r.status === 'pending').length} />
        </Card>
      </Col>
      <Col xs={24} sm={8}>
        <Card variant="borderless" style={{ borderLeft: '4px solid #52c41a' }}>
          <Statistic title="Bugünkü Masalar" value={reservations.filter(r => r.date === today).length} />
        </Card>
      </Col>
    </Row>
  );
};