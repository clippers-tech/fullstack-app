'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [health, setHealth] = useState<string>('Checking...');
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetch(`${apiUrl}/api/health`)
      .then((res) => res.json())
      .then((data) => setHealth(data.status || 'Connected'))
      .catch(() => setHealth('Backend not reachable'));
  }, [apiUrl]);

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '1.5rem', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>Fullstack App</h1>
      <p style={{ fontSize: '1.1rem', opacity: 0.7 }}>Next.js Frontend + Express Backend</p>
      <div style={{ padding: '1rem 2rem', borderRadius: '8px', border: '1px solid #333', marginTop: '1rem' }}>
        <p>Backend Status: <strong>{health}</strong></p>
      </div>
      <p style={{ fontSize: '0.85rem', opacity: 0.5, marginTop: '2rem' }}>Frontend on Vercel &bull; Backend on Render</p>
    </main>
  );
}