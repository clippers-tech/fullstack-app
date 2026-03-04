# Fullstack App

Next.js frontend + Express backend.

## Structure

```
frontend/    → Next.js (deployed on Vercel)
backend/     → Express + TypeScript (deployed on Render)
```

## Local Development

### Backend
```bash
cd backend
npm install
npm run dev
```
Runs on `http://localhost:5000`

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:3000`

## Deployment

### Frontend → Vercel
1. Import from GitHub on [vercel.com](https://vercel.com)
2. Set root directory to `frontend`
3. Add env: `NEXT_PUBLIC_API_URL` = your Render backend URL

### Backend → Render
1. Connect repo on [render.com](https://render.com)
2. Use the `render.yaml` blueprint, or manually:
   - Root directory: `backend`
   - Build: `npm install && npm run build`
   - Start: `npm start`
3. Add env: `FRONTEND_URL` = your Vercel frontend URL
