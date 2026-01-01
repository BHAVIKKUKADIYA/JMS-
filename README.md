JMS Advasary - Luxury Watch Marketplace
A premium full-stack E-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). This platform allows users to browse luxury timepieces, while authorized admins can manage the product inventory.

🌟 Key Features
User Authentication: Secure registration and login using JSON Web Tokens (JWT) and Bcrypt encryption.

Admin Dashboard: Full CRUD functionality (Create, Read, Update, Delete) for admin users.

Protected Routes: Frontend and Backend security layers to prevent unauthorized access.

Responsive Design: Fully optimized for mobile, tablet, and desktop views using Tailwind CSS.

State Management: Efficient data handling with React Hooks and Axios for API calls.

🛠️ Tech Stack
Frontend: React.js, Tailwind CSS, React Router

Backend: Node.js, Express.js

Database: MongoDB Atlas (Cloud)

Security: JWT, LocalStorage, Route Guarding

📸 Project Showcases
🔐 Authentication & Access
Experience a secure entry with JWT-based protection.

Registration & Login


<img src="https://github.com/user-attachments/assets/b7f1b636-dc9b-4f8a-ad0c-f83bd895d428" width="45%" /> <img src="https://github.com/user-attachments/assets/42c57a09-cf63-4c9f-9eb1-73171ea37fb3" width="45%" />

<p align="center"><i>Registration Page and Login Interface</i></p>

Security Gate (Login Required)


<img src="https://github.com/user-attachments/assets/de74d1b1-21ef-4d8e-8c59-459132a2fc65" width="90%" />

🛡️ Admin Management (CRUD)
Authorized admins have full control over the luxury watch collection.

Admin Dashboard (Responsive)


<img src="https://github.com/user-attachments/assets/19e80164-90d2-4952-908f-0f55e5d7c1cb" width="60%" /> <img src="https://github.com/user-attachments/assets/9799b0a2-579e-4b79-8933-8f0623a71339" width="18%" /> <img src="https://github.com/user-attachments/assets/f26c1c03-0c31-4c6f-93a9-9def4ecbf94c" width="15%" />

<p align="center"><i>Desktop, iPad, and Mobile views for Admin Management</i></p>

Inventory Operations


<img src="https://github.com/user-attachments/assets/1219ab6e-6901-4ab8-95ab-3bb701eab4f3" width="30%" /> <img src="https://github.com/user-attachments/assets/a87ed1a0-90cd-4ba5-87fc-8eb636c1a65f" width="30%" /> <img src="https://github.com/user-attachments/assets/f974d1ca-8b53-4102-bf2e-f7830e501dbd" width="30%" />

<p align="center"><i>Add New Product | Edit Existing | Delete Confirmation</i></p>

⌚ User Experience
A seamless shopping experience across all devices.

Collection Gallery


<img src="https://github.com/user-attachments/assets/d20fd24a-4d21-49d9-8732-cca025c4be84" width="60%" /> <img src="https://github.com/user-attachments/assets/25997c60-69b2-4511-94a2-bffa4a4a6b42" width="18%" /> <img src="https://github.com/user-attachments/assets/8f5eefa1-6100-4f72-96d9-86bcef752cad" width="15%" />

Product Details View


<img src="https://github.com/user-attachments/assets/a8508b33-c4af-478c-bc8c-a425286cb0dc" width="70%" /> <img src="https://github.com/user-attachments/assets/1172fd77-0ef1-4575-b8a0-e4e9c220f2b9" width="20%" />

🗄️ Backend & Database
Powered by MongoDB Atlas and a robust REST API.

MongoDB Atlas Schema


<img src="https://github.com/user-attachments/assets/a8bbb29e-eb4d-4172-b31e-9ebf0afb871f" width="90%" />


<img src="https://github.com/user-attachments/assets/01bdfb49-f3d1-47cd-9527-0a1b3d647cc3" width="45%" /> <img src="https://github.com/user-attachments/assets/3ce43857-4cd1-44d1-b4f6-816445a7df5d" width="45%" />

<p align="center"><i>Collections Architecture: Products and Users Data</i></p>

API Performance


<img src="https://github.com/user-attachments/assets/abc34b42-dbab-4724-8c7b-6893844c9d3b" width="90%" />

<p align="center"><i>Successful GET request call for product data</i></p>

⚙️ Installation & Setup
1. Clone the Repository
Bash

git clone https://github.com/BHAVIKKUKADIYA/JMS-.git
cd JMS-

2. Backend Setup
Navigate to the server folder, create a .env file, and install dependencies.

Bash

cd server
npm install
Add your variables: PORT=5000, MONGO_URI, and JWT_SECRET. Run with npm start.

3. Frontend Setup
Navigate to the client folder and launch the development server.

Bash

cd client
npm install
npm run dev
