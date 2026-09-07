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
