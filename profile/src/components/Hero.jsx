import React from 'react'
import own from '../images/png/own.png';

const Hero = () => {
      
  return (
    <section className="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={own}  />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font text-center md:text-left sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">About Me</h1>
          <div className="h-1 w-40 bg-indigo-500 rounded"></div>
          <p className="mb-8 text-center md:text-left leading-relaxed text-lg font-medium-bold hover:bg-blue-100 hover:text-black text-large font-medium py-2 px-4 border border-gray-400 rounded shadow">As an experienced web developer with a passion for cybersecurity, I have honed my skills in both areas to create secure and reliable web applications.I am proficient in HTML, CSS, JavaScript, React, and various databases. Additionally, my expertise in cybersecurity allows me to implement robust security protocols and ensure the safety of data and users.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">About Me</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
