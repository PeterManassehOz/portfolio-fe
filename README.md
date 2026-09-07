# Oz Peter Manasseh — Portfolio

A modern, responsive developer portfolio built with Next.js and powered by a custom REST API.

The portfolio showcases my experience, education, achievements, projects, technical skills, and professional journey through a polished, animated interface.

The application is backed by a dedicated Express + TypeScript API and MongoDB database, with a separate administration dashboard for managing portfolio content.

## Live Portfolio

**Public Website:**  
https://ozpetermanasseh.vercel.app

## Related Repositories

- **Public Frontend:** https://github.com/PeterManassehOz/portfolio-fe
- **Admin CMS:** https://github.com/PeterManassehOz/portfolio-admin
- **Backend API:** https://github.com/PeterManassehOz/portfolio-server

---

## Features

- Responsive portfolio experience
- Animated UI interactions
- Hero section
- About section
- Experience
- Education
- Achievements
- Projects and project case studies
- Contact functionality
- Dynamic content loaded from the backend API
- Cloud-hosted project images
- SEO-friendly Next.js architecture
- Production deployment with Vercel

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- CSS animations
- Next.js App Router

### Backend Integration

- REST API
- Axios
- MongoDB
- Cloudinary

### Deployment

- Vercel — Frontend
- Render — Backend API

---

## Architecture

The public portfolio is one part of a larger full-stack system.

```text
                    ┌─────────────────────────┐
                    │     Public Portfolio     │
                    │       Next.js            │
                    │         Vercel           │
                    └────────────┬────────────┘
                                 │
                                 │ REST API
                                 ▼
                    ┌─────────────────────────┐
                    │      Portfolio API       │
                    │   Express + TypeScript   │
                    │         Render           │
                    └────────────┬────────────┘
                                 │
                         ┌───────┴───────┐
                         ▼               ▼
                  ┌────────────┐   ┌────────────┐
                  │  MongoDB   │   │ Cloudinary │
                  │   Atlas    │   │   Images   │
                  └────────────┘   └────────────┘

```

A separate Next.js administration application communicates with the same backend to manage the content displayed on the public portfolio.

Project Structure

```text

portfolio-fe/
├── app/
├── components/
├── services/
├── public/
├── types/
├── utils/
├── package.json
└── README.md

```

Getting Started
1. Clone the repository

```text

git clone https://github.com/PeterManassehOz/portfolio-fe.git
cd portfolio-fe

```
3. Install dependencies

```text
npm install

```

5. Configure environment variables

Create a .env.local file:

```text

NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api/v1

```
The production application uses the deployed Portfolio API.

4. Start the development server

```text
npm run dev

The application will be available at:

http://localhost:3000

```
5. Build for production

```text

npm run build

```
Content Management

Portfolio content is not hardcoded into the public application.

The public frontend retrieves content from the Portfolio API, which allows the portfolio to be updated through a dedicated administration dashboard.

This makes the portfolio behave more like a real content-driven application than a static personal website.

Deployment

The frontend is deployed on Vercel.

The backend API is deployed separately on Render.

Environment-specific API configuration is provided through Vercel environment variables.

Author
Oz Peter Manasseh

Full-Stack Engineer focused on building modern, scalable web applications and intuitive digital experiences.
