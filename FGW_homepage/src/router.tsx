import { Route } from 'react-router-dom'
import { createRoutesFromElements, createBrowserRouter } from 'react-router-dom'

//layout
import AppLayout from '@/layout/AppLayout'

// pages
import Home from '@/pages/Home'
import CaseStudy from '@/pages/CaseStudy'
import Community from '@/pages/Community'
import CommunityPost from '@/pages/CommunityPost'
import Contact from '@/pages/Contact'
import Cookies from '@/pages/Cookies'
import Faq from '@/pages/FAQ'
import Login from '@/pages/Login'
import Pricing from '@/pages/Pricing'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import Register from '@/pages/Register'
import TermsAndCondition from '@/pages/TermsOfService'
// import ErrorPage from '@/pages/ErrorPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='case-study' element={<CaseStudy />} />
        <Route path='contact' element={<Contact />} />
        <Route path='community' element={<Community />} />
        <Route path='community/:id' element={<CommunityPost />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='privacy-policy' element={<PrivacyPolicy />} />
        <Route path='terms-of-service' element={<TermsAndCondition />} />
        <Route path='cookies-policy' element={<Cookies />} />
      </Route>
    </>
  )
)

export default router
