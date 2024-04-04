import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

function AppLayout() {
  const [showApp, setShowApp] = useState(false)
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useLayoutEffect(() => {
    const loader = document.getElementById('loader')

    document.body.style.overflow = 'visible'

    const delay = 5000

    const timeoutId = setTimeout(() => {
      if (loader) {
        loader.style.display = 'none'
      }
      setShowApp(true)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <>
      {showApp && (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  )
}

export default AppLayout
