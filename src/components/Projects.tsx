import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
  
  {
    id: 0,
    title: "Static Resume Builder",
    desc: "Create a polished, professional resume in minutes with our easy-to-use static resume builder.",
    img: "/myproject_01.jpg",
    tags: ["HTML", "CSS"],
  },
  {
    id: 1,
    title: "Dynamic Resume Builder",
    desc: "Craft a customizable, interactive resume that evolves with your career using our dynamic resume builder.",
    img: "/myproject_02.jpg",
    tags: ["HTML", "CSS", "TYPESCRIPT", "JAVASCRIPT"],
  },
  {
    id: 2,
    title: "Static Resume Builder",
    desc: "Create a polished, professional resume in minutes with our easy-to-use static resume builder.",
    img: "/myproject_01.jpg",
    tags: ["HTML", "CSS"],
  },
  
];

const projects = () => {
  return (
    <div data-aos="zoom-in" id='projects' className='container pt-32 '>
      <Heading title='My projects'/>
      <div className='  gap-10 flex space-x-4 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default projects
