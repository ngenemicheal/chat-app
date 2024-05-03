import express from 'express';
import dotenv from 'dotenv';
import authRoutes from '../backend/routes/auth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server');
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));