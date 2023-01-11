import React, { Suspense } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

const RemoteApp1 = React.lazy(() => import('mfApp1/App'))

const App = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <ErrorBoundary>
      <Suspense fallback="loading...">
        <RemoteApp1 />
      </Suspense>
      {/* <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '40px 0',
          fontSize: 24,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          {pathname !== '/' && (
            <button type="button" onClick={() => navigate(-1)}>
              Назад
            </button>
          )}

          <Routes>
            <Route path="/" element={<Navigation />} />
            <Route path="/host" element={<div>Host</div>} />
            <Route
              path="/app1"
              element={
                <ErrorBoundary>
                  <Suspense fallback="loading...">
                    <RemoteApp1 />
                  </Suspense>
                </ErrorBoundary>
              }
            />
          </Routes>
        </div>
      </main> */}
    </ErrorBoundary>
  )
}

export default App
