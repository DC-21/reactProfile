import React from 'react'
import own from '../images/png/own.png';
import { Player } from '@lottiefiles/react-lottie-player';

const Hero = () => {
      
  return (
    <section className="text-gray-600 body-font flex w-full px-2 md:px-4 lg:px-8 items-center mb-0 h-fit">
      <div class="container mx-auto flex px-2 py-4 md:flex-row flex-col items-center w-full">
        <div className='w-full md:w-1/2 h-full'>
          <img className="object-cover object-center rounded h-[100%]" alt="hero" src={own}  />
        </div>
        <div className="text-center w-full md:w-1/2 items-center">
          <h1 className="title-font text-center md:text-left  mb-0 mt-8 font-bold md:text-3xl text-2xl text-gray-900 ">About Me</h1>
          <div className='w-full justify-center md:justify-start items-center flex'>
            <div className="h-1 w-32 md:w-40 bg-indigo-500 rounded justify-center"></div>
          </div>
          <p className="mb-4 w-full text-center md:text-left pt-4 text:sm md:text-md font-medium-bold text-large font-medium py-0 px-0">As an experienced web developer with a passion for cybersecurity, I have honed my skills in multiple areas to create secure and reliable web applications. I am proficient in HTML, CSS, JavaScript, React, and various databases. Additionally, my expertise in cybersecurity allows me to implement robust security protocols and ensure the safety of data and users.</p>
          <div className="flex justify-center md:justify-start">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-medium">Email</button>
          </div>
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json"
            className='h-[100%] w-[100%] hover:-translate-y-[15px] transition-all duration-500 ease-in-out'
            >
          </Player>
        </div>
      </div>
    </section>
  )
}

export default Hero
