## 📋 Kazam EV Tech Assignment

This project is a **Note App** built with **React**, **Node.js**, **MQTT**, **Redis**, and **MongoDB**.  
Users can add notes, and the notes are stored in real-time using **MQTT** and **Redis**, then moved to **MongoDB** when the limit exceeds.  
The app is fully deployed with a professional UI designed using **Tailwind CSS**.

![home](https://github.com/user-attachments/assets/6706ebba-fbf8-4d3f-8156-ad6ee95385ad)

---

## 🚀 Tech Stack Used

- **Frontend**: React.js + Vite + Tailwind CSS + MQTT.js
- **Backend**: Node.js + Express.js + MQTT + Redis + MongoDB
- **Database**: MongoDB Atlas
- **Caching**: Redis Cloud
- **Real-time Messaging**: MQTT (broker.emqx.io public broker)
- **Hosting**:
  - Frontend: Vercel
  - Backend: Render

---

## 🌍 Deployed URLs

- **Frontend**: [https://kazamanikant.vercel.app](https://kazamanikant.vercel.app)
- **Backend**: [https://kazamanikantapi.onrender.com](https://kazamanikantapi.onrender.com)

---

## 🛠️ How To Install and Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Manikantkr-1004/Fullstack-Task-Manikant.git
cd frontend or cd backend
npm install
npm run dev
```

Make sure to add env file in backend and frontend to run properly.

- For Backend ENV : PORT, MONGO_URI, REDIS_URL, REDIS_PORT, REDIS_PASSWORD, REDIS_KEY, MQTT_URL
- For Frontend ENV : VITE_API_URL, VITE_MQTT_URL

---

## 🤝 Feel Free To Connect

If you have any questions, feedback, or want to collaborate, feel free to connect with us anytime! 🚀
Let’s build something amazing together! 💬
