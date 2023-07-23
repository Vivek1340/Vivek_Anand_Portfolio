import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-7xl mx-auto relative z-0 sm:px-10 px-6 sm:py-10 py-6'>
    <div className='flex w-full justify-between flex-col md:flex-row'>
      <div>
        <h2 className='text-white font-bold mb-4'>Contacts</h2>
        <p className='text-secondary'>vivekanand1340@gmail.com</p>
        <p className='text-secondary'>7970956724</p>
      </div>
      <div className='flex w-full md:w-[150px] justify-between my-4 md:my-0'>

        <a href='https://www.linkedin.com/in/vivek-anand-aab0b9189/'>Linkedin</a>
        <a href="https://github.com/vivek1340/">Github</a>
      </div>
    </div>
    <p className='w-full text-center'>copyright © 2023</p>
    </div>
  )
}

export default Footer
