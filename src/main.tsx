import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@/index.css'
import App from '@/App.tsx'
import Home from '@/routes/index.tsx'
import ResourceToolsPage from '@/routes/resource-tools.tsx'
import SecurityTipsPage from '@/routes/security-tips.tsx'
import AwarenessLocalPage from '@/routes/awareness-local.tsx'
import NotFound from '@/routes/error/NotFound.tsx'
import { ThemeProvider } from "@/components/theme/theme-provider.tsx"
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Analytics />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="resource-tools" element={<ResourceToolsPage />} />
            <Route path="security-tips" element={<SecurityTipsPage />} />
            <Route path="awareness-local" element={<AwarenessLocalPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
