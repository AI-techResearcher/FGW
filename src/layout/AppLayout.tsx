import { Outlet } from 'react-router-dom'
import Header from '@/components/header'
import TopNav from '@/components/TopNav'
import { Toaster } from '@/components/ui/toaster'

function AppLayout() {
  return (
    <main className='flex max-h-screen overflow-x-hidden w-full'>
      <div className="flex w-full">
        {/* Header component for the Left section of the layout */}
        <Header />

        <section className={`w-full`}>
          {/* Top navigation component */}
          <TopNav />
          <section className='max-h-screen w-full h-full pt-14 overflow-y-auto sm:pl-0 pl-14 dark:bg-transparent bg-[#DADAEA]/40'>
            {/* Outlet component to render nested routes */}
            <Outlet />
          </section>

          {/* Toast notifications component */}
          <Toaster />
        </section>
      </div>
    </main>
  )
}

export default AppLayout
