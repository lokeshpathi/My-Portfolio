import React from 'react'

function SkillCard({skill,img}) {
  return (
    <div className='flex justify-center flex-col items-center text-white w-[180px] md:w-[230px] h-[220px] md:h-[270px] px-[30px] py-[15px] shadow-lg' style={{backgroundColor:"rgba(0,0,0,0.125)"}}>
         <img src={img} className='w-full h-full object-contain bg-transparent'/>
         <div>{skill}</div>
    </div>
  )
}

export default SkillCard