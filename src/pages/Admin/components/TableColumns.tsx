import { Tag, Button, Typography, Flex } from 'antd';
import { 
  UserOutlined, MailOutlined, PhoneOutlined, 
  CalendarOutlined, FieldTimeOutlined, TeamOutlined, 
  CheckCircleOutlined, CloseCircleOutlined, DeleteOutlined 
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

const { Text } = Typography;

interface ReservationRecord {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guestCount: number;
  status: 'pending' | 'confirmed' | 'rejected';
}

export const getColumns = (
  handleStatusChange: (record: ReservationRecord, status: 'confirmed' | 'rejected') => void,
  handleDelete: (id: string) => void
): ColumnsType<ReservationRecord> => [ 
  {
    title: 'Müşteri Bilgileri',
    key: 'customer',
    fixed: 'left' as const,
    render: (_, record) => ( 
      <Flex vertical>
        <Text strong style={{ fontSize: '15px' }}>
          <UserOutlined style={{ color: '#d4af37', marginRight: '8px' }} />
          {record.customerName}
        </Text>
        <Text type="secondary" style={{ fontSize: '11px', marginLeft: '24px' }}>
          ID: #{record.id?.slice(-4).toUpperCase()}
        </Text>
      </Flex>
    ),
  },
  {
    title: 'İletişim',
    key: 'contact',
    render: (_, record) => (
      <Flex vertical gap={4}>
        <a href={`mailto:${record.email}`}><MailOutlined /> {record.email}</a>
        <a href={`tel:${record.phone}`} style={{ color: '#52c41a' }}><PhoneOutlined /> {record.phone}</a>
      </Flex>
    ),
  },
  {
    title: 'Detaylar',
    key: 'details',
    render: (_, record) => (
      <Flex vertical gap={2}>
        <Text><CalendarOutlined /> {record.date}</Text>
        <Text><FieldTimeOutlined /> {record.time}</Text>
        <Tag color="blue" style={{ width: 'fit-content' }}>
          <TeamOutlined /> {record.guestCount} Kişi
        </Tag>
      </Flex>
    ),
  },
  {
    title: 'Durum',
    dataIndex: 'status',
    key: 'status',
    render: (status: ReservationRecord['status']) => {
      const config = {
        pending: { color: 'gold', text: 'BEKLİYOR' },
        confirmed: { color: 'green', text: 'ONAYLANDI' },
        rejected: { color: 'red', text: 'REDDEDİLDİ' },
      };
      const curr = config[status];
      return <Tag color={curr.color}>{curr.text}</Tag>;
    },
  },
  {
    title: 'İşlemler',
    key: 'action',
    render: (_, record) => (
      <Flex gap="small">
        {record.status === 'pending' && (
          <>
            <Button 
              type="primary" 
              icon={<CheckCircleOutlined />} 
              onClick={() => handleStatusChange(record, 'confirmed')}
              style={{ background: '#52c41a', borderColor: '#52c41a' }}
            />
            <Button 
              danger 
              icon={<CloseCircleOutlined />} 
              onClick={() => handleStatusChange(record, 'rejected')}
            />
          </>
        )}
        <Button 
          type="text" 
          danger 
          icon={<DeleteOutlined />} 
          onClick={() => handleDelete(record.id)} 
        />
      </Flex>
    ),
  },
];