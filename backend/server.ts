import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import admin from 'firebase-admin'; 
import { createRequire } from 'module';

const nodeRequire = createRequire(import.meta.url);
const serviceAccount = nodeRequire('./serviceAccountKey.json');

dotenv.config();

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/reservations', async (_req: Request, res: Response): Promise<void> => {
  try {
    const snapshot = await db.collection('reservations').orderBy('createdAt', 'desc').get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(data);
  } catch (error) {
    const err = error as Error;
    res.status(500).send(err.message);
  }
});

app.post('/api/reservations', async (req: Request, res: Response): Promise<void> => {
  try {
    const reservationData = req.body;
    const docRef = await db.collection('reservations').add({
      ...reservationData,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      status: 'pending'
    });
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
});

app.put('/api/reservations/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await db.collection('reservations').doc(String(id)).update({ status });
    res.status(200).send("Güncellendi");
  } catch (error) {
    const err = error as Error;
    res.status(500).send(err.message);
  }
});

app.delete('/api/reservations/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await db.collection('reservations').doc(String(id)).delete();
    res.status(200).send("Başarıyla silindi");
  } catch (error) {
    const err = error as Error;
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`-----------------------------------------`);
  console.log(`✅ Sunucu http://localhost:${PORT} portunda aktif.`);
  console.log(`-----------------------------------------`);
});