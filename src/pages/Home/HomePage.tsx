import React from 'react';
import { Typography } from 'antd';
import { ReservationForm } from './components/ReservationForm';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';

const { Title, Text } = Typography;

const sectionStyle = {
  minHeight: '100vh', width: '100%', display: 'flex', alignItems: 'center', 
  justifyContent: 'center', padding: '100px 20px', backgroundSize: 'cover', 
  backgroundPosition: 'center', backgroundAttachment: 'fixed', position: 'relative' as const
};

export const HomePage: React.FC = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      
      <section style={{ ...sectionStyle, backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }}></div>
        <ReservationForm />
      </section>

      <section style={{ ...sectionStyle, background: '#fdfaf5' }}>
        <AboutSection />
      </section>

      <section style={{ ...sectionStyle, background: '#fff' }}>
        <ContactSection />
      </section>

      <footer style={{ background: '#1a1a1a', padding: '50px 20px', textAlign: 'center', borderTop: '1px solid #d4af37' }}>
        <Title level={3} style={{ color: '#d4af37', fontFamily: 'Playfair Display, serif' }}>MÜHÜR</Title>
        <Text style={{ color: '#888' }}>© 2026 Mühür Restaurant. Tüm Hakları Saklıdır.</Text>
      </footer>
    </div>
  );
};