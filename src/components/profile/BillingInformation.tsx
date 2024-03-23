import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Input } from '../ui/input'
import { ScrollArea } from '../ui/scroll-area'
import { Label } from '../ui/label'
import useInputChange from '@/lib/hooks/useInput'

const BillingInformation = () => {
    const { inputValues, handleInputChange } =
    useInputChange()
    // Handle when input changes and inputValue for each input

       // Array of billing methods
  const billingMethods = ['PayPal', 'Card', 'Bank Transfer']

  return (
    <div>
    <p className='text-lg font-semibold'>Billing Information</p>

    <div className='space-y-5 mt-4 max-w-xs w-full'>
      <Select>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Payment Method' />
        </SelectTrigger>
        <SelectContent>
          <ScrollArea className='h-16'>
            {/* Mapping all billing string */}
            {billingMethods.map((e, i) => (
              <SelectItem value={e} key={i}>
                {e}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
      <div className='flex flex-col space-y-2 gap-2'>
        <Label htmlFor='username' className='font-normal'>
          {/* Billing institution */}
          Billing Address
        </Label>
        <Input
          id='Billing_Address'
          name='billing_address'
          onChange={handleInputChange}
          placeholder='Your Billing Institution'
          value={inputValues?.billing_address || ''}
        />
      </div>
      {/* Button for submit payment method */}
      <button type='button' className='btn-primary'>Add Payment Method</button>
    </div>
  </div>
  )
}

export default BillingInformation