# Modern Portfolio Website

A stunning, modern portfolio website with dark theme and red accents, built with React, TypeScript, Tailwind CSS, and a Node.js/MongoDB backend.

## 🚀 Features

### Frontend
- **Modern Design**: Dark theme with vibrant red accents
- **Responsive**: Works perfectly on desktop and mobile
- **Animations**: Smooth scroll animations using Framer Motion
- **Interactive**: Hover effects and micro-interactions
- **SEO Optimized**: Meta tags and semantic HTML

### Backend
- **Contact Form**: MongoDB integration for storing submissions
- **Resume Download**: Secure file serving
- **Spam Protection**: Basic spam detection and rate limiting
- **Admin Panel**: View and manage contact submissions
- **Security**: Helmet, CORS, and rate limiting

## 🛠️ Tech Stack

**Frontend:**
- React 18 + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- Vite

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Express Validator
- Rate Limiting

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)

### Setup

1. **Clone and install dependencies:**
```bash
npm install
cd server && npm install
```

2. **Environment Configuration:**
```bash
cp .env.example .env
```
Edit `.env` with your configuration:
- MongoDB connection string
- JWT secret
- Admin credentials

3. **Add your resume:**
Place your resume PDF file in `server/public/resume.pdf`

4. **Start the development servers:**

Frontend (Terminal 1):
```bash
npm run dev
```

Backend (Terminal 2):
```bash
npm run server:dev
```

## 🎨 Customization

### Personal Information
Update the following files with your details:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Name and title
   - Profile image/initials
   - Social media links

2. **About Section** (`src/components/About.tsx`):
   - Professional story
   - Statistics and achievements

3. **Skills Section** (`src/components/Skills.tsx`):
   - Technical skills and proficiency levels
   - Technology stack

4. **Projects Section** (`src/components/Projects.tsx`):
   - Project details, images, and links
   - Technologies used

5. **Experience Section** (`src/components/Experience.tsx`):
   - Work experience
   - Education
   - Certifications

6. **Contact Section** (`src/components/Contact.tsx`):
   - Contact information
   - Social media links

### Styling
- Colors: Modify Tailwind classes (red-500, etc.)
- Fonts: Update in `src/index.css`
- Animations: Adjust Framer Motion settings

## 🔧 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `GET /api/contact/stats` - Get contact statistics
- `PUT /api/contact/:id/status` - Update contact status

### Resume
- `GET /api/resume/download` - Download resume PDF
- `GET /api/resume/info` - Get resume file information

### Health Check
- `GET /api/health` - Server health status

## 🔒 Security Features

- **Rate Limiting**: Prevents spam and abuse
- **Input Validation**: Server-side validation for all inputs
- **Spam Detection**: Basic keyword and pattern detection
- **CORS Protection**: Configured for specific origins
- **Helmet**: Security headers
- **JWT Authentication**: For admin routes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Backend (Railway/Heroku/DigitalOcean)
1. Set environment variables
2. Deploy the `server` folder
3. Ensure MongoDB is accessible

### Environment Variables for Production
```env
NODE_ENV=production
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-secure-jwt-secret
FRONTEND_URL=https://your-portfolio-domain.com
```

## 📊 Admin Panel

Access contact form submissions:
1. Authenticate: `POST /api/auth/login`
2. View contacts: `GET /api/contact`
3. Update status: `PUT /api/contact/:id/status`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:
1. Check the console for errors
2. Verify environment variables
3. Ensure MongoDB is running
4. Check network connectivity

---

**Made with ❤️ and modern web technologies**