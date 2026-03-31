
<img width="1190" height="847" alt="image" src="https://github.com/user-attachments/assets/e85ffb5c-4c4a-46ba-94d9-73dca9c07b35" />

# 🎓 Smart Campus ERP System - SIH 2024

> **Built with AI Assistance**: This project was developed with the help of Amazon Q Developer AI, leveraging AI-powered code generation, debugging, and optimization to accelerate development and ensure best practices.

A comprehensive college management system built for Smart India Hackathon 2024 with cutting-edge features including online admission, DigiLocker integration, AI analytics, and IoT monitoring.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.2-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.0-cyan)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Features

### 🎯 Core Modules
- **Online Admission Portal** - Remote college applications with DigiLocker document verification
- **Multi-Role Dashboards** - Student, Faculty, Admin, and Parent portals
- **Fee Management** - Academic, hostel, and transport fee payment with history tracking
- **Attendance System** - Smart attendance with face recognition, QR codes, and geo-fencing
[27964d67-c463-4baf-90a1-2e6d6d3fd570.pdf](https://github.com/user-attachments/files/26372315/27964d67-c463-4baf-90a1-2e6d6d3fd570.pdf)

### 🤖 AI & Advanced Features
- **AI Analytics Dashboard** - Predictive insights and performance analysis
- **Smart Chatbot** - Voice-enabled AI assistant with context-aware responses
- **Career Guidance AI** - Job matching and skill gap analysis
- **Mental Health Monitor** - AI mood analysis and wellness tracking
- **Predictive Analytics** - Student performance prediction and risk assessment

### 🔐 Security & Verification
- **DigiLocker Integration** - Government document verification during admission
- **Blockchain Certificates** - Tamper-proof digital certificates with QR verification
- **Role-Based Access Control** - Secure authentication for all user types

### 🌐 Smart Campus Features
- **IoT Dashboard** - Real-time campus monitoring with smart sensors
- **Emergency Response System** - SOS alerts and campus safety coordination
- **Sustainability Dashboard** - Carbon footprint tracking and green initiatives
- **Virtual Campus Tour** - AR/VR 360° campus exploration

## 🛠️ Tech Stack

- **Frontend**: React.js 19, Tailwind CSS, Framer Motion
- **Routing**: React Router v7
- **State Management**: Context API
- **Icons**: React Icons
- **Charts**: Chart.js, React-Chartjs-2
- **3D Graphics**: Three.js, React Three Fiber
- **Build Tool**: Vite
- **QR Code**: qrcode library

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/kpatil2005/SIH-College-ERP-System.git

# Navigate to project directory
cd SIH-College-ERP-System

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

## 🔑 Demo Credentials

| Role | Username | Password |
|------|----------|----------|
| Student | `student` | `password` |
| Faculty | `faculty` | `password` |
| Admin | `admin` | `password` |
| Parent | `parent` | `password` |

## 🎯 Key Workflows

### 1. Online Admission Process
1. Visit `/admission` route
2. Fill personal information
3. Select course from available options
4. Upload documents or connect DigiLocker
5. Pay application fee (₹1,500)
6. Review and submit application

### 2. Admin Approval Flow
1. Login as admin
2. Navigate to "Admission Apps" in sidebar
3. Review submitted applications
4. Approve/Reject with one click
5. System auto-generates student credentials
6. Email sent to student (simulated)

### 3. Student Login & Dashboard
1. Use generated credentials from admission approval
2. Access personalized dashboard with admission details
3. View all student features and services

## 📱 Features by Role

### 👨‍🎓 Student Dashboard
- Personal profile with admission information
- Academic performance tracking (CGPA, SGPA)
- Smart attendance marking (Face, QR, Geo-fence)
- Fee payment and transaction history
- DigiLocker document verification
- AI career guidance and job matching
- Mental health monitoring
- Emergency SOS system
- Blockchain certificates
- Virtual campus tour

### 👨‍🏫 Faculty Dashboard
- Student management and lookup
- Attendance tracking and marking
- Grade entry and management
- Assignment creation and tracking
- Predictive analytics for student performance
- Student risk assessment

### 👨‍💼 Admin Dashboard
- Admission application management
- Student approval/rejection workflow
- Finance reports and analytics
- Hostel management
- IoT campus monitoring
- Sustainability tracking
- Access control management

### 👨‍👩‍👧 Parent Dashboard
- Student progress tracking
- Real-time attendance records
- Fee payment and history
- Examination results viewing
- Hostel status monitoring

## 🌟 Innovative Features

1. **DigiLocker Integration** - Fetch government-verified documents (Aadhar, Marksheets, Certificates) during admission
2. **AI-Powered Analytics** - Predictive insights for student performance and risk identification
3. **Blockchain Certificates** - Tamper-proof digital credentials with QR code verification
4. **IoT Campus Management** - Real-time sensor monitoring for energy, security, and environment
5. **Emergency Response** - Campus-wide safety system with SOS alerts
6. **Mental Health AI** - Proactive wellness monitoring with mood analysis
7. **Virtual Campus Tour** - AR/VR 360° campus exploration
8. **Smart Attendance** - Multi-modal attendance (Face recognition, QR, Bluetooth, Geo-fence)

## 📂 Project Structure

```
project1/
├── src/
│   ├── components/
│   │   ├── Admin/          # Admin dashboard components
│   │   ├── Student/        # Student dashboard components
│   │   ├── Faculty/        # Faculty dashboard components
│   │   ├── Parent/         # Parent dashboard components
│   │   └── Shared/         # Shared/common components
│   ├── context/            # React Context for state management
│   ├── assets/             # Images and static files
│   └── App.jsx             # Main app component with routing
├── public/                 # Public assets
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🤖 AI-Assisted Development

This project leverages AI assistance throughout the development process:

- **Code Generation**: AI-powered component creation and feature implementation
- **Bug Fixing**: Automated error detection and resolution
- **Code Optimization**: AI-suggested performance improvements
- **Best Practices**: AI-guided architecture and design patterns
- **Documentation**: AI-assisted README and code documentation

**AI Tools Used**:
- **Amazon Q Developer** - Primary AI coding assistant
- AI-powered debugging and testing
- Intelligent code suggestions and completions

This demonstrates how AI can accelerate development while maintaining code quality and following industry standards.

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory (optional):
```env
VITE_APP_NAME=QuickCampus ERP
VITE_API_URL=your_api_url_here
```

### Tailwind Configuration
Tailwind CSS is configured in `tailwind.config.js` with custom colors:
- Primary: `#003566`
- Secondary: `#ffc300`

## 🤝 Contributing

This project was developed for Smart India Hackathon 2024. Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

Developed by **Kalpesh Patil** for SIH 2024 Finals

- GitHub: [@kpatil2005](https://github.com/kpatil2005)
- LinkedIn: [Kalpesh Patil](https://linkedin.com/in/kalpesh-patil-2a30a9290)

## 📞 Contact

For queries regarding this project, please open an issue on GitHub or reach out via:
- Email: Contact through GitHub profile
- Portfolio: [StyleHub E-commerce](https://stylehub-ecommerce-react.vercel.app)

## 🙏 Acknowledgments

- Smart India Hackathon 2024 for the opportunity
- Amazon Q Developer for AI assistance
- Open source community for amazing libraries
- React and Vite teams for excellent tools

---

**Note**: This is a demonstration project for SIH 2024. DigiLocker integration is simulated for demo purposes. For production use, implement actual DigiLocker API integration with proper credentials and government approval.

## 📸 Screenshots

*Add screenshots of your application here*

## 🎥 Demo Video

*Add demo video link here*

---

**Made with ❤️ for Smart India Hackathon 2024**
