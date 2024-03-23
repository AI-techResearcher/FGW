import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { FaFacebook, FaLinkedin } from 'react-icons/fa6'
import { useState } from 'react'
// import { Button } from '@/components/ui/button'
import useInputChange from '@/lib/hooks/useInput'
import { useEffect } from 'react'
import {HelpAndSupport, ChangePassword, User, BillingInformation, Privacy, NotificationPreferences, SosialMediaIntegration} from '@/components/profile'

export default function Profile() {
   // Destructuring values and input handlers from custom hook
  const {  handleCustomChange } =
    useInputChange()

  useEffect(() => {
    // set default
    handleCustomChange({
      name: 'John doe',
      email: 'example@email.com',
      username: 'johndoe189',
      number: '0534392329',
      surname: 'John',
    })
  }, [])

  enum TabList {
    Profile = 'Profile',
    NotificationPreferences = 'Notification Preferences',
    Security = 'Security',
    BillingInformation = 'Billing Information',
    // SocialMediaIntegration = 'Social Media Integration',
    DataPrivacy = 'Data Privacy',
    HelpAndSupport = 'Help and Support',
  }

    // Array of tab names
  const tabList = Object.values(TabList)

  // State for the currently selected tab
  const [currentTab, setCurrentTab] = useState(tabList[0])

  return ( 
    <main className='p-3 min-h-[94vh] h-full'>
      <div className='card flex flex-col-reverse gap-10 sm:grid grid-cols-12'>
        <div className='col-span-2'>
           {/* Navigation section with a list of tabs */}
          <nav className='flex flex-col gap-y-3'>
               {/* Mapping through tabList to render individual tabs */}
            {tabList.map((tab, i) => {
              return (
                <button
                  key={i}
                  className={`text-left font-medium px-3 py-2 rounded-md text-[12px] sm:text-sm ${
                    tab === currentTab
                      ? 'bg-[#3A7FE133] text-[#3A7FE1]'
                      : 'text-2'
                  }`}
                  onClick={() => setCurrentTab(tab)}
                >
                  {tab}
                </button>
              )
            })}
            {/* Logout button section */}
            <div className='mt-10'>
              <button className='text-[12px] sm:text-sm px-4 py-2 rounded-md border-2 border-[#3A7FE1] text-[#3A7FE1] font-bold flex gap-3 items-center'>
                <RiLogoutBoxLine />
                Log Out
              </button>
            </div>
          </nav>
        </div>
        
        <div className='col-span-10 card border dark:border-gray-900 shadow'>
          {/* Rendering content based on the currently selected tab */}
          {currentTab === TabList.Profile && <User />}
          {currentTab === TabList.NotificationPreferences && <NotificationPreferences />}
          {currentTab === TabList.Security && <ChangePassword />}
          {currentTab === TabList.BillingInformation && <BillingInformation />}
          {currentTab === TabList.DataPrivacy && <Privacy />}
          {currentTab === TabList.HelpAndSupport && <HelpAndSupport />}
          {/* {currentTab === TabList.SocialMediaIntegration && <SosialMediaIntegration />} */}
         
        </div>
      </div>
    </main>
  )
}
