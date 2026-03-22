import React, { useEffect, useState } from 'react';
import { Layout, Card, Col, Row, Statistic, Table, Tag, Button, message, Space } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined, DatabaseOutlined } from '@ant-design/icons';
import { fetchReservations, updateReservationStatus } from '../../services/reservationService';
import type { ColumnsType } from 'antd/es/table';

const { Content } = Layout;

interface Reservation {
  id: string;
  name?: string;
  fullName?: string;
  adSoyad?: string;
  customerName?: string;
  ad?: string;           
  email?: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  guestCount?: number;   
  status: 'pending' | 'approved' | 'rejected';
}

const AdminDashboard: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await fetchReservations();
      console.log("Gelen Veri Yapısı:", data[0]);
      setReservations(data);
    } catch {
      message.error("Veriler yüklenirken hata oluştu!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusUpdate = async (id: string, newStatus: 'approved' | 'rejected') => {
    try {
      await updateReservationStatus(id, newStatus);
      message.success(`Rezervasyon ${newStatus === 'approved' ? 'onaylandı' : 'reddedildi'}.`);
      loadData();
    } catch {
      message.error("Güncelleme sırasında hata oluştu.");
    }
  };

  const stats = {
    total: reservations.length,
    pending: reservations.filter(r => r.status === 'pending').length,
    approved: reservations.filter(r => r.status === 'approved').length,
    rejected: reservations.filter(r => r.status === 'rejected').length,
  };

  const columns: ColumnsType<Reservation> = [
    { 
  title: 'Müşteri Adı', 
  key: 'name',
  render: (_, record: Reservation) => {
    const name = record.name || 
                 record.fullName || 
                 record.adSoyad || 
                 record.customerName || 
                 record.ad;

    return <b>{name || 'İsim Bilgisi Yok'}</b>
  }
},
    { 
      title: 'E-Posta', 
      dataIndex: 'email', 
      key: 'email',
      render: (email) => email || '-'
    },
    { 
      title: 'Telefon', 
      dataIndex: 'phone', 
      key: 'phone',
    },
    { 
      title: 'Tarih / Saat', 
      key: 'dateTime',
      render: (_, record: Reservation) => (
        <span>{record.date} - {record.time}</span>
      )
    },
    { 
      title: 'Kişi Sayısı', 
      key: 'guests',
      render: (_, record: Reservation) => {
        const count = record.guests || record.guestCount || 0;
        return <Tag color="blue">{count} Kişi</Tag>;
      }
    },
    {
      title: 'Durum',
      dataIndex: 'status',
      key: 'status',
      render: (status: Reservation['status']) => {
        const statusConfig = {
          approved: { color: 'green', text: 'ONAYLANDI' },
          rejected: { color: 'red', text: 'REDDEDİLDİ' },
          pending: { color: 'gold', text: 'BEKLEMEDE' },
        };
        const { color, text } = statusConfig[status] || statusConfig.pending;
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: 'İşlemler',
      key: 'action',
      render: (_, record: Reservation) => (
        <Space size="middle">
          {record.status === 'pending' && (
            <>
              <Button 
                type="primary" 
                onClick={() => handleStatusUpdate(record.id, 'approved')}
                style={{ backgroundColor: '#52c41a' }}
              >
                Onayla
              </Button>
              <Button 
                danger 
                onClick={() => handleStatusUpdate(record.id, 'rejected')}
              >
                Reddet
              </Button>
            </>
          )}
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Content style={{ padding: '24px', marginTop: '80px' }}>
        <h1 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 'bold' }}>
          MÜHÜR Yönetim Paneli
        </h1>

        <Row gutter={[16, 16]} style={{ marginBottom: '32px' }}>
          <Col xs={24} sm={12} lg={6}>
            <Card variant="borderless" hoverable>
              <Statistic title="Toplam" value={stats.total} prefix={<DatabaseOutlined style={{ color: '#1890ff' }} />} />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card variant="borderless" hoverable>
              <Statistic title="Bekleyen" value={stats.pending} valueStyle={{ color: '#faad14' }} prefix={<ClockCircleOutlined />} />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card variant="borderless" hoverable>
              <Statistic title="Onaylanan" value={stats.approved} valueStyle={{ color: '#52c41a' }} prefix={<CheckCircleOutlined />} />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card variant="borderless" hoverable>
              <Statistic title="Reddedilen" value={stats.rejected} valueStyle={{ color: '#ff4d4f' }} prefix={<CloseCircleOutlined />} />
            </Card>
          </Col>
        </Row>

        <Card title="Rezervasyon Listesi" variant="borderless">
          <Table 
            dataSource={reservations} 
            columns={columns} 
            rowKey="id" 
            loading={loading}
          />
        </Card>
      </Content>
    </Layout>
  );
};

export { AdminDashboard }; 
export default AdminDashboard;