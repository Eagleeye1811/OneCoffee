# ☕ OneCoffee

OneCoffee is a **video-calling and social interaction platform** where users can seamlessly connect with their loved ones.  
It provides real-time video communication, authentication (login/register), and an easy-to-use interface.

---

## 🚀 Features

- 🔐 **Authentication**: Login/Register system for secure access.  
- 🎥 **Video Calling**: Real-time video call rooms using WebRTC.  
- 👤 **Guest Access**: Join as a guest without registration.  
- 🖼 **Landing Page**: Modern UI with navigation options.  
- 🌐 **Routing**: Easy navigation between pages using React Router.  
- 🎨 **Responsive UI**: Styled with CSS and optimized for all devices.  

---

## 🛠️ Tech Stack

### Frontend:
- ⚛️ React.js  
- 🎨 CSS (Custom styling + gradients + flexbox layouts)  
- 🔗 React Router DOM  

### Backend:
- 🟢 Node.js with Express.js  
- 🗄 MongoDB (for storing user data & auth)  

### Others:
- 🔒 JWT for authentication  
- 📹 WebRTC / PeerJS for video calling  

---

## 📂 Project Structure

````markdown
OneCoffee/
│── frontend/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Landing, Auth, Call, Dashboard
│ │ ├── App.js # Main app
│ │ ├── App.css # Styling
│ │ └── index.js # Entry point
│
│── backend/ # Backend (Node + Express)
│ ├── routes/ # API routes
│ ├── models/ # MongoDB models
│ ├── controllers/ # Logic for auth & calls
│ └── server.js # Server entry
│
└── README.md

````


## ⚙️ Installation & Setup

### 1. Clone the Repository

````markdown
git clone https://github.com/Eagleeye1811/OneCoffee.git
cd OneCoffee
````

### 2. Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

### 3. Setup Environment Variables

Create a `.env` file inside `server/`:

```
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

### 4. Run the Project

#### Start Backend

```bash
cd server
npm start
```

#### Start Frontend

```bash
cd client
npm run dev
```

---

## 🎯 Usage

* Open [http://localhost:5173/](http://localhost:5173/) (or the given port).
* Navigate via the landing page:

  * Join a video call as **guest**.
  * **Register/Login** to access full features.
  * Create/Join a **call room** and start video calling.




