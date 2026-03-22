import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_on89yj3";
const PUBLIC_KEY = "xOoml-ZJlyHFc_CRw";
const TEMPLATE_ID_INITIAL = "template_mw4mlyo"; 
const TEMPLATE_ID_STATUS = "template_5yq0c0h";

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