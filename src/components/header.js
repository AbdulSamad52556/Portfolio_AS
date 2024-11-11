import React from 'react'

const Header = ({props}) => {
    const fnc = (val) =>{
        props(val)
    }
  return (
    <div className='flex gap-20 p-10 text-white font-serif bg-[#18061d] overflow-hidden'>
        <div className='cursor-pointer' onClick={()=>fnc('Home')}>Home</div>
        <div className='cursor-pointer' onClick={()=>fnc('About')}>About</div>
        <div className='cursor-pointer' onClick={()=>fnc('Services')}>Works</div>
        {/* <div className='cursor-pointer' onClick={()=>fnc('Blog')}>Blog</div> */}
    </div>
  )
}

export default Header
