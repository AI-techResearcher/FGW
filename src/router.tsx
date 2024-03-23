import { Navigate, Route } from 'react-router-dom'
import { createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import withLazyLoading from './lib/hoc/withLoading'
//layout
import AppLayout from '@/layout/AppLayout'

// each pages, with lazy load the page components
const Dashboard = withLazyLoading(() => import('@/pages/dashboard'))
const Profile = withLazyLoading(() => import('@/pages/profile'))
const Setting = withLazyLoading(() => import('@/pages/setting'))
const Todos = withLazyLoading(() => import('@/pages/todos'))
const Notebook = withLazyLoading(() => import('@/pages/notebook'))
const Bookmark = withLazyLoading(() => import('@/pages/bookmark'))
const Calender = withLazyLoading(() => import('@/pages/calender'))
const ChatBasic = withLazyLoading(() => import('@/pages/chatbasic'))
const ChatAdvance = withLazyLoading(() => import('@/pages/chatadvance'))
const ChatPro = withLazyLoading(() => import('@/pages/chatpro'))


// All routes
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Navigate to={'/dashboard'} />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Setting />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/notes' element={<Notebook />} />
        <Route path='/bookmarks' element={<Bookmark />} />
        <Route path='/calender' element={<Calender />} />
        <Route path='/chat' element={<ChatBasic />} />
        <Route path='/chat/advance' element={<ChatAdvance />} />
        <Route path='/chat/pro' element={<ChatPro />} />
      </Route>
  )
)

export default router
