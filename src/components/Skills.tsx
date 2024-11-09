import React from 'react'

const Skills = () => {
  return (
    <div data-aos="zoom-in-up" id='skills' className='container pt-32'>
     <div className='grid md:grid-cols-2 gap-20 items-center'>
       <div>
        <h2 className='text-4xl md:text-5xl'>Proficiency in Various Programming Languages and Technologies</h2>
        <p className='text-gray-200 pt-2'>I possess a strong foundation in web development, with expertise in HTML and CSS, which allows me to create well-structured and visually appealing web pages. My proficiency in React enables me to build dynamic user interfaces that enhance user experience, while my knowledge of Next.js empowers me to develop efficient, server-side rendered applications. I also utilize TypeScript to ensure type safety and improve code quality, making my applications more robust and maintainable. Additionally, I leverage Tailwind CSS for rapid UI design, allowing me to create responsive and customizable layouts with ease.</p>
        </div>
        <div>
         <div className='grid grid-cols-2 text-blue-300 text-3xl sm:text-4xl'>
         <div className='space-y-2'>
            <h2>TYPESCRIPT</h2>
            <h2>REACT.JS</h2>
            <h2>NEXT.JS</h2>            
        </div>
        <div className='space-y-2'>
            <h2>TAILWIND CSS</h2>
            <h2>HTML</h2>
            <h2>CSS</h2>            
        </div>   
        </div>   
        </div> 
        </div>   
      
    </div>
  )
}

export default Skills
