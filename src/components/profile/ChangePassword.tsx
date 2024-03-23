import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import useInputChange from '@/lib/hooks/useInput'

const ChangePassword = () => {
    const { inputValues, handleInputChange } =
    useInputChange()
// Destructuring values and input handlers from custom hook

  return (
    <div className='max-w-md w-full'>
              <p className='text-lg font-semibold mb-5'>Change Password</p>
              <div className='flex flex-col space-y-8'>
                 {/* Current Password input */}
                <div className='grid grid-cols-12 gap-2'>
                  <Label htmlFor='name' className='text-[12px] text-2 mt-2 col-span-3'>
                    Current Password
                  </Label>
                  <Input
                    name='prevPass'
                    className='col-span-9'
                    id='prevPass'
                    type='password'
                    onChange={handleInputChange}
                    placeholder='Current password'
                    value={inputValues?.prevPass || ''}
                  />
                </div>
                {/* New Password input */}
                <div className='grid grid-cols-12 gap-2'>
                  <Label htmlFor='email' className='text-[12px] text-2 mt-2 col-span-3'>
                    New password
                  </Label>
                  <Input
                    id='currPass'
                    className='col-span-9'
                    name='currPass'
                    type='password'
                    onChange={handleInputChange}
                    placeholder='New password'
                    value={inputValues?.currPass || ''}
                  />
                </div>
                  {/* Update Password button */}
                <div>
                  <button className='btn-primary'>Update Password</button>
                </div>
              </div>
            </div>
  )
}

export default ChangePassword