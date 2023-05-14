import React from 'react'
import own from '../images/png/own.png';
import { Player } from '@lottiefiles/react-lottie-player';

const Hero = () => {
      
  return (
    <section className="text-gray-600 body-font flex w-full px-2 md:px-4 lg:px-8 items-center mb-96 h-fit">
      <div class="container mx-auto flex px-2 py-4 md:flex-row flex-col items-center w-full">
        <div className='w-full md:w-1/2 h-full md:h-[365px]'>
          <img className="object-contain object-center rounded" alt="hero" src={own}  />
        </div>
        <div className="text-center w-full md:w-1/2 items-center">
          <h1 className="title-font text-center md:text-left sm:text-4xl text-3xl mb-4 mt-8 font-medium text-gray-900 ">About Me</h1>
          <p className="mb-4 w-full text-center md:text-left text:sm md:text-md font-medium-bold text-large font-medium py-0 px-0">As an experienced web developer with a passion for cybersecurity, I have honed my skills in multiple areas to create secure and reliable web applications. I am proficient in HTML, CSS, JavaScript, React, and various databases. Additionally, my expertise in cybersecurity allows me to implement robust security protocols and ensure the safety of data and users.</p>
          <div className="flex justify-center md:justify-start">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Email</button>
          </div>
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_xafe7wbh.json"
            className='h-1/2 w-1/2'
            >
          </Player>
        </div>
      </div>
    </section>
  )
}

export default Hero
