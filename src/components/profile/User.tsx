import React, { useState } from 'react'
import ProfilePicture from '../profilePic'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { ScrollArea } from '../ui/scroll-area'
import { Dialog, DialogTrigger , DialogContent, DialogDescription, DialogTitle, DialogHeader} from '../ui/dialog'
import useInputChange from '@/lib/hooks/useInput'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { FaPencilAlt } from 'react-icons/fa'
import { currentLevelOfEducation, examLists, professionalFields, studentType } from '@/lib/data/dummyData'
import { countries } from 'countries-list'

const User = () => {
  // Destructuring values and input handlers from custom hook
    const { inputValues, handleInputChange } =
    useInputChange()
    
    // Extracting country names from the `countries` object
    const countryNames = Object.values(countries).map((country) => country.name)
    const countryNamesArray = countryNames.map((country) => String(country))
  
    // State for user type selection (student or job)
    const [userType, setUserType] = useState('')
    const student = userType === 'student'
    const job = userType === 'job'
    
    // beyond is EditProdile Components when user click edit button
function EditProfile() {
    return (
      <Dialog>
        <DialogTrigger>
          <button className='px-3 py-1 rounded-md border dark:border-gray-900 text-[12px] sm:text-sm flex justify-center items-center gap-3 text-2'>
            <FaPencilAlt />
            Edit
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className='h-80'>
            <div className='space-y-4 px-3'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  name='name'
                  id='name'
                  onChange={handleInputChange}
                  placeholder='Your name'
                  value={inputValues?.name || ''}
                />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Surname</Label>
                <Input
                  name='surname'
                  id='surname'
                  onChange={handleInputChange}
                  placeholder='Your Surname'
                  value={inputValues?.surname || ''}
                />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  onChange={handleInputChange}
                  placeholder='Your email address'
                  value={inputValues?.email || ''}
                />
              </div>

              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='username'>Number</Label>
                <Input
                  name='number'
                  onChange={handleInputChange}
                  placeholder='Your phone number'
                  value={inputValues?.number || ''}
                />
              </div>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Preparing for' />
                </SelectTrigger>
                <SelectContent>
                  <ScrollArea className='h-28'>
                    {examLists.map((e, i) => {
                      return (
                        <SelectItem value={e} key={i}>
                          {e}
                        </SelectItem>
                      )
                    })}
                  </ScrollArea>
                </SelectContent>
              </Select>
              {/* Contact Information */}
              <div className='bg-light-purple px-3 py-3 rounded-xl'>
                <p className='text-base font-semibold text-gray-800'>
                  Contact Information
                </p>
                <div className='mt-4 space-y-3'>
                  <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='username' className='font-normal'>
                      Address
                    </Label>
                    <Input
                      name='address'
                      onChange={handleInputChange}
                      placeholder='Your Address'
                      value={inputValues?.address || ''}
                    />
                  </div>
                  <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='username' className='font-normal'>
                      Phone Number
                    </Label>
                    <Input
                      name='number'
                      onChange={handleInputChange}
                      placeholder='Your phone number'
                      value={inputValues?.number || ''}
                    />
                  </div>
                </div>
              </div>
              {/* Contact Information */}
              <Select onValueChange={(e) => setUserType(e)}>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='User Type' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='student'>Student</SelectItem>
                  <SelectItem value='job'>Working Professional</SelectItem>
                </SelectContent>
              </Select>
                {/* avaiable components condition If dont have job  */}
              {job && (
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Professional Field' />
                  </SelectTrigger>
                  <SelectContent>
                    {professionalFields.map((e, i) => (
                      <SelectItem value={e} key={i}>
                        {e}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
                 {/* avaiable components condition If user is student  */}
              {student && (
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Field of Study' />
                  </SelectTrigger>
                  <SelectContent>
                    {studentType.map((e, i) => (
                      <SelectItem value={e} key={i}>
                        {e}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
               {/* avaiable components condition If user is student  */}
              {student && (
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Current Level of Education' />
                  </SelectTrigger>
                  <SelectContent>
                    {currentLevelOfEducation.map((e, i) => (
                      <SelectItem value={e} key={i}>
                        {e}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
               {/* avaiable components condition If user is student  */}
              {student && (
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='username'>Educational Institution</Label>
                  <Input
                    id='educationalInstitute'
                    name='educationalInstitute'
                    onChange={handleInputChange}
                    placeholder='Your Educational Institution'
                    value={inputValues?.educationalInstitute || ''}
                  />
                </div>
              )}
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Country of Residence' />
                </SelectTrigger>
                <SelectContent>
                  <ScrollArea className='h-28'>
                    {/* Mapping country names and show each country */}
                    {countryNamesArray.map((e, i) => (
                      <SelectItem value={e} key={i}>
                        {e}
                      </SelectItem>
                    ))}
                  </ScrollArea>
                </SelectContent>
              </Select>
            </div>
          </ScrollArea>
          {/* Save the data user button */}
          <div className='flex justify-end'>
            <button className='btn-primary'>Save</button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  return (
    <div className='space-y-4'>
              <div className='card border dark:border-gray-900'>
                <div className='flex justify-end'>
                  <EditProfile />
                </div>
                <div className='flex gap-5 sm:gap-10 items-start'>
                  <ProfilePicture />
                  <div className='mt-3'>
                    {/*  You can change the Value of john doe if the app has cookies for user */}
                    <h2 className='text-2xl font-medium'>John Doe</h2>
                    <p className='text-2 text-[12px] sm:text-sm'>samijack09</p>
                    <p className='text-2 text-[12px] sm:text-sm'>
                      Los Angeles, California, USA
                    </p>
                  </div>
                </div>
              </div>
              <div className='card border dark:border-gray-900'>
                <div className='flex justify-end'>
                  <EditProfile />
                </div>
                <p className='text-lg font-semibold'>Personal Information</p>
                <div className='grid grid-cols-2 sm:grid-cols-3 mt-4'>
                  <div className='space-y-4'>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>First Name</p>
                      <p className='text-[12px] sm:text-sm text-2'>Sami</p>
                    </div>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>Email</p>
                      <p className='text-[12px] sm:text-sm text-2'>email@gmail.com</p>
                    </div>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>
                        Working Professional
                      </p>
                      <p className='text-[12px] sm:text-sm text-2'>Information Technology</p>
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>Surname</p>
                      <p className='text-[12px] sm:text-sm text-2'>Joe</p>
                    </div>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>
                        Mobile Phone
                      </p>
                      <p className='text-[12px] sm:text-sm text-2'>(213) 555-1234</p>
                    </div>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>
                        Educational Institution
                      </p>
                      <p className='text-[12px] sm:text-sm text-2'>Graduated</p>
                    </div>
                  </div>
                  <div className='space-y-4'>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>Username</p>
                      <p className='text-[12px] sm:text-sm text-2'>samijack09</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card border dark:border-gray-900'>
                <div className='flex justify-end'>
                  <EditProfile />
                </div>
                <p className='text-lg font-semibold'>Address Details</p>
                <div className='grid grid-cols-2 mt-4'>
                  <div className='space-y-3'>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>Country</p>
                      <p className='text-[12px] sm:text-sm text-2'>United States of America</p>
                    </div>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>
                        Postal Code
                      </p>
                      <p className='text-[12px] sm:text-sm text-2'>ERT 62574</p>
                    </div>
                  </div>
                  <div className='space-y-3'>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>City/State</p>
                      <p className='text-[12px] sm:text-sm text-2'>Califonia, USA</p>
                    </div>
                    <div>
                      <p className='text-[12px] sm:text-sm font-semibold text-2'>Tax ID</p>
                      <p className='text-[12px] sm:text-sm text-2'>AS564178969</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default User