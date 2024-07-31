import React from 'react'
import pic from '/pic-4.png'

import python from '/python-logo.png'
import javascript from '/js-logo.png'
import java from '/java-logo.png'
import git from '/git-logo.png'
import docker from '/docker-logo.png'
import k8s from '/k8s-logo.png'
import terraform from '/terraform-logo.png'
import node from '/node-logo.png'
import express from '/express-logo.png'
import react from '/react-logo.png'
import mongoDB from '/mongoDB-logo.png'
import aws from '/aws-logo.png'
import tailwind from '/tailwind-logo.png'

import github from '/github-logo.png'
import linkedin from '/linkedin-logo.png'
import instagram from '/instagram-logo.png'
import mail from '/mail-logo.png'
import replit from '/replit-logo.png'

import SkillCard from './SkillCard'

function Home() {
    const faq='text-gray-400 text-3xl cursor-pointer';
    const ans='text-white text-[25px] mt-[20px]'
    const skills=[
        {
            skill:"python",
            img:python
        },
        {
            skill:"javascript",
            img:javascript
        },
        {
            skill:"Java",
            img:java
        },
        {
            skill:"Git",
            img:git
        },
        {
            skill:"Terraform",
            img:terraform,
        },
        {
            skill:"AWS",
            img:aws
        },
        {
            skill:"MongoDB",
            img:mongoDB
        },
        {
            skill:"Node.js",
            img:node
        },
        {
            skill:"Express.js",
            img:express
        },
        {
            skill:"React",
            img:react
        },
        {
            skill:"Tailwind css",
            img:tailwind
        },
        {
            skill:"Docker",
            img:docker
        },
        {
            skill:"Kubernetes",
            img:k8s
        }
    ]
  return (
    <div className='w-full'>
        <section id="home" className='flex flex-col-reverse md:flex-row justify-between items-center px-[30px] shadow-md py-[20px] w-full gap-[20px]'>
                <div className='flex items-center text-4xl text-white flex-col'>
                <div className='flex items-center '>
                    I'm <span className='text-5xl md:text-7xl text-yellow-300'>&nbsp;LOKESH</span>
                </div>
                <div className='flex flex-col md:flex-row text-xl md:text-4xl'>
                    <div>MERN STACK DEVELOPER &nbsp;</div>
                    <div> & Devops Enthusiast</div>
                </div>
                <div>
                <a href="#contact" className='flex justify-center items-center px-4 py-2 bg-yellow-300 text-white rounded-md border-2 border-solid border-yellow-300 mt-[20px] pb-[11px]'>contact</a>
                </div>
                </div>
                <div className='flex'>
                    <img src={pic} className='w-[550px]' />
                </div>
        </section>

        <section id="about" className='mt-[70px]'>
             <h1 className='text-4xl md:text-7xl text-white font-serif'>About</h1>
             <div className='flex justify-center gap-[10px] text-xl md:text-2xl text-white font-sans mt-[25px] text-justify'>
                <div className='hidden md:block w-[500px] h-[3px] mt-[14px] bg-yellow-300'></div>
                <div className=' md:leading-10'>
                I am a final-year B.Tech student majoring in Computer Science, specializing in the <span className='text-yellow-300'>MERN stack</span>. With a robust background in web development, I have created diverse projects, including an Airbnb clone using MERN, an Amazon clone with React and Firebase, a movie recommendation app, a blog app, a Disney clone, and a React-based food delivery app.

                Driven by a keen interest in DevOps, I have explored essential tools such as <span className=' text-yellow-300'>AWS, Terraform (an IaC tool), Docker, and Kubernetes</span>. I furthered my expertise through certification courses in "Introduction to Containers, Docker, and Kubernetes" , "Introduction to DevOps" and "Developing fron-end applications using react" from IBM on Coursera. Additionally, I completed an <span className='text-yellow-300'> AWS Cloud virtual internship</span> through AICTE.

                I possess strong communication and problem-solving skills honed through practical projects and coursework. I am eager to apply my technical skills and hands-on experience to contribute effectively to innovative projects and collaborative teams in the tech industry.
                </div>
             </div>
        </section>

        <section id="skills" className='flex flex-col justify-center items-center mt-[70px]'>
            <h1 className='text-7xl text-white font-serif'>Skills</h1>
            <div className='flex justify-center flex-wrap items-center gap-[30px] text-2xl mt-[25px]'>
               {
                skills.map((item,index)=>(
                    <SkillCard key={index} skill={item.skill} img={item.img}/>
                ))
               }
            </div>
        </section>

        <section id='projects' className='flex flex-col justify-center mt-[70px] shadow-md px-5 py-5'>
            <h1 className='text-7xl text-white font-serif'>
                Projects
            </h1>
            <div className='mt-[30px]'>
                <details open className='mt-[20px]'>
                    <summary className={faq}>Netfilx UI clone with HTML & CSS</summary>
                    <div>
                    <div  className={ans}>The Netflix Clone project is a static web page that replicates the user interface of the popular streaming service, Netflix. Built solely with HTML and CSS, this project was an essential part of my learning journey, providing a hands-on experience that deepened my understanding of web development fundamentals.
                        
                    </div>
                    <a href="https://github.com/lokeshpathi/Netflix-UI-clone-using-HTML-and-CSS" target='_blank' className='inline-block px-4 py-2 rounded-md text-gray-700 bg-yellow-300 mx-2 my-2'>GitHub Link</a>
                    </div>
                    
                </details>
                <details className='mt-[20px]'>
                    <summary className={faq}>Food delivery App </summary>
                    <div>
                    <div className={ans}>
                    The Food Delivery App is a frontend application built with React and Tailwind CSS. Designed to provide a seamless user experience, this app allows users to browse food items, add items to their cart, adjust quantities, and remove items as needed. Utilizing the Context API for state management, the app ensures efficient and reactive data handling.
                    </div>
                    <a href="https://github.com/lokeshpathi/food-delivery-app" target='_blank' className='inline-block px-4 py-2 rounded-md text-gray-700 bg-yellow-300 mx-2 my-2'>GitHub Link</a>
                    </div>
                </details>
                <details  className='mt-[20px]'>
                    <summary className={faq}>Disney clone with React</summary>
                    <div>
                    <div className={ans}>The Disney Clone is a React-based web application that replicates the user interface of the popular Disney streaming service. By leveraging the TMDB (The Movie Database) API, this project showcases how to integrate external APIs into a React application efficiently.</div>
                    <a href="https://github.com/lokeshpathi/Disney-clone-React-app" target='_blank' className='inline-block px-4 py-2 rounded-md text-gray-700 bg-yellow-300 mx-2 my-2'>GitHub Link</a>
                    </div>
                </details>             
                <details  className='mt-[20px]'>
                    <summary className={faq}>Blog App</summary>
                    <div>
                    <div className={ans}>
                    The Blog App is a full stack web application built using the MERN stack (MongoDB, Express, React, Node.js). This project was instrumental in helping me understand the complete lifecycle of web application development, from creating the frontend and backend to integrating with a database and deploying the application.
                    </div>
                    <a href="https://github.com/lokeshpathi/Blog-MERN" target='_blank' className='inline-block px-4 py-2 rounded-md text-gray-700 bg-yellow-300 mx-2 my-2'>GitHub Link</a>
                    </div>
                </details>
                <details  className='mt-[20px]'>
                    <summary className={faq}>Airbnb Clone with MERN</summary>
                   <div>
                   <div className={ans}>The Airbnb Clone is a full stack web application built using the MERN stack (MongoDB, Express, React, Node.js). This project replicates the core functionalities of the Airbnb platform, allowing users to create listings, book places, and manage their bookings. It focuses on implementing essential CRUD operations, providing a streamlined version of the original Airbnb service.</div>
                   <a href="https://github.com/lokeshpathi/Airbnb-Clone" target='_blank' className='inline-block px-4 py-2 rounded-md text-gray-700 bg-yellow-300 mx-2 my-2'>GitHub Link</a>
                   </div>
                </details>
                <details  className='mt-[20px]'>
                    <summary className={faq}>MovieManiacs App WITH MERN</summary>
                    <div>
                    <div className={ans}>MovieManiacs is a movie recommendation web application built using the MERN stack (MongoDB, Express, React, Node.js). The application categorizes movies by regions and genres, providing users with a seamless browsing experience through a left-side navigation bar. Users can explore top movies, view detailed information, and engage with the content by liking, favoriting, and adding movies to their watchlist.</div>
                    <a href="https://github.com/lokeshpathi/Movie-DiscoveryApp" target="_blank" className='inline-block px-4 py-2 rounded-md text-gray-700 bg-yellow-300 mx-2 my-2'>GitHub Link</a>
                    </div>
                </details>
                
                <details  className='mt-[20px]'>
                    <summary className={faq}>Amazon Clone with react & firebase</summary>
                   <div>
                   <div className={ans}>The Amazon Clone is a web application that replicates key functionalities of the popular e-commerce platform, Amazon. This project is built using React for the frontend and Firebase for the backend. It was a pivotal project for me, providing hands-on experience with Firebase and demonstrating how it simplifies backend tasks for frontend development.</div>
                   <a href="https://github.com/lokeshpathi/Amazon-clone" target="_blank" className='inline-block px-4 py-2 rounded-md text-gray-700 bg-yellow-300 mx-2 my-2'>GitHub Link</a>
                   </div>
                </details>

                <details  className='mt-[20px]'>
                    <summary className={faq}>Personal Portfolio website using react</summary>
                   <div>
                   <div className={ans}>A personal portfolio website built with React to showcase projects, skills, and experience. The website features a clean, modern design and provides visitors with an overview of the developer's work, including project descriptions, technology stacks, and links to code repositories.</div>
                   <a href="https://github.com/lokeshpathi/My-Portfolio/" target="_blank" className='inline-block px-4 py-2 rounded-md text-gray-700 bg-yellow-300 mx-2 my-2'>GitHub Link</a>
                   </div>
                </details>
            </div>
        </section>

        <section id="certifications" className='flex flex-col justify-center mt-[70px] shadow-md px-5 py-3'>
           <h1 className='text-4xl md:text-7xl text-white font-serif'>Certifications</h1>
           <div className='mt-[30px]'>
              <div className={faq}>
                Developing Front-End Apps with react- by IBM through Coursera
              </div>
              <a href="https://coursera.org/share/810cf2b0af2ffd4e13c2d10c9e738efb" className='inline-block px-4 py-2 rounded-md text-gray-700 bg-yellow-300 my-2 hover:opacity-50 transition-all ease-in-out' target='__blank'>Show Credential</a>
           </div>
           <div className='mt-5'>
            <div className={faq}>
            Introduction to Containers w/ Docker, Kubernetes & OpenShift
            </div>
            <a href="https://coursera.org/share/4d5edd2d85e8e1adb400273a85f2f565" className='inline-block px-4 py-2 rounded-md text-gray-700 bg-yellow-300 my-2 hover:opacity-50 transition-all ease-in-out' target='__blank'>Show Credential</a>
           </div>
           <div className='mt-5'>
            <div className={faq}>
            Foundations of Cybersecurity
            </div>
            <a href="https://coursera.org/share/04d78fb3f26482aa39bb5652cd48dccb" className='inline-block px-4 py-2 rounded-md text-gray-700 bg-yellow-300 my-2 hover:opacity-50 transition-all ease-in-out' target='__blank'>Show Credential</a>
           </div>
           <div  className='mt-5'>
            <div className={faq}>
            Introduction to DevOps
            </div>
            <a href="https://coursera.org/share/dc2c34ede6df3be1bd721d0e20644d17" className='inline-block px-4 py-2 rounded-md text-gray-700 bg-yellow-300 my-2 hover:opacity-50 transition-all ease-in-out' target='__blank'>Show Credential</a>
           </div>
           <div className='mt-5'>
            <div className={faq}>
            Introduction to Agile Development and Scrum
            </div>
            <a href="https://coursera.org/share/a4d4d18c6882c23d13a2d84118043ae2" className='inline-block px-4 py-2 rounded-md text-gray-700 bg-yellow-300 my-2 hover:opacity-50 transition-all ease-in-out' target='__blank'>Show Credential</a>
           </div>
        </section>

        <section id='contact' className='flex flex-col justify-center mt-[100px] shadow-md px-5 py-3'>
        <h1 className='text-4xl md:text-7xl text-white font-serif'>Contact</h1>
        <div>
            <div className={faq}>Hello, Contact/Follow :</div>
            <div className='flex items-center justify-center gap-5'>              
                <a href="https://www.linkedin.com/in/lokesh-pathi-31094b229/"
                target='_blank'
                >
                    <img src={linkedin} className='w-[45px]'/>
                </a>
                <a href="https://github.com/lokeshpathi" target='_blank'><img src={github} className='w-[60px]'/></a>
                <a href="https://www.instagram.com/_black_beard__7/" target='_blank'><img src={instagram} className='w-[45px]'/></a>
                <a href="mailto:lokeshpathi39@gmail.com" target='_blank'><img src={mail} className='w-[60px]'/></a>
                <a href="https://replit.com/@lokeshpathi39" target='_blank'><img src={replit} className='w-[40px]'/></a>
            </div>
            <div className='mt-[10px]  text-gray-400 text-center'><p>Made <i class="fa fa-heart-o"></i> in india</p></div>
            <div className='text-center text-gray-400'><i class="fa-regular fa-copyright"></i>copyright 2024 Pathi Lokesh</div>
        </div>
        </section>
    </div>
    
  )
}

export default Home