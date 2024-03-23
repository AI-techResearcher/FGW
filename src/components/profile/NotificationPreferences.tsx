import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../ui/select'
import { ScrollArea } from '../ui/scroll-area'

const NotificationPreferences = () => {
    
  // Array of options for enabling or disabling a feature
  const enableDisabled = ['Enabled', 'Disabled']

  return (
    <div>
    <p className='text-lg font-semibold'>Notification Preferences</p>
    <div className='mt-4 space-y-3 max-w-xs w-full'>
      <Select>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Email Notifications' />
        </SelectTrigger>
        <SelectContent>
          <ScrollArea className='h-16'>
            {enableDisabled.map((e, i) => (
              <SelectItem value={e} key={i}>
                {e}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='In-App Notifications' />
        </SelectTrigger>
        <SelectContent>
          <ScrollArea className='h-16'>
            {enableDisabled.map((e, i) => (
              <SelectItem value={e} key={i}>
                {e}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>
    {/* Submit Save Change Email notification */}
    <button className='btn-primary mt-5'>Save</button>
  </div>
  )
}

export default NotificationPreferences