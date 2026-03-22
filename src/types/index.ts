export type ReservationStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface IReservation {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  guestCount: number;
  date: string; 
  time: string; 
  tableNumber?: number;
  status: ReservationStatus;
  note?: string;
  createdAt: number;
}