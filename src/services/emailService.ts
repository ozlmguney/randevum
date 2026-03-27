import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TEMPLATE_ID_INITIAL = import.meta.env.VITE_EMAILJS_TEMPLATE_INITIAL;
const TEMPLATE_ID_STATUS = import.meta.env.VITE_EMAILJS_TEMPLATE_STATUS;

export interface EmailData {
  customerName: string;
  email: string;
  phone: string; 
  guestCount: number;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'rejected'; 
}

export const sendReservationEmail = async (data: EmailData) => {
  const templateParams = {
    to_email: data.email,
    customer_name: data.customerName,
    reservation_date: data.date,
    reservation_time: data.time,
    guest_count: data.guestCount,
    reply_to: "restoran-maili@gmail.com", 
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID_INITIAL, templateParams, PUBLIC_KEY);
};

export const sendStatusUpdateEmail = async (data: EmailData, status: 'confirmed' | 'rejected') => {
  const statusText = status === 'confirmed' ? 'ONAYLANDI' : 'REDDEDİLDİ';
  
  const templateParams = {
    to_email: data.email,
    customer_name: data.customerName,
    reservation_status: statusText, 
    reservation_date: data.date,
    reservation_time: data.time
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID_STATUS, templateParams, PUBLIC_KEY);
};