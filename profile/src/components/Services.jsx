import React from 'react'
import hero from '../images/png/hero.png'
import mac from '../images/png/mac.png'
import web from '../images/png/web.png'
import mob from '../images/png/mob.png'

const Services = () => {
  return (
    <section className="text-gray-600 body-font flex">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="w-full mb-6 lg:mb-0 items-center justify-center">
        <h1 className="md:text-3xl text-2xl font-bold title-font mb-2 text-center text-gray-900">Services</h1>
        <div className='w-full justify-center items-center flex'>
          <div className="h-1 w-24 md:w-28 bg-indigo-500 rounded justify-center"></div>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4 hover:-translate-y-10 transition-all duration-500 ease-in-out ">
        <div className="bg-gray-100 p-6 rounded-lg h-fit md:h-[500px]">
          <img className="h-60 rounded w-full object-cover object-center mb-6" alt="hero" src={hero}/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font hover:bg-blue-100 hover:text-black text-large py-2 px-4 border border-gray-400 rounded shadow">Web Devlopment</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">FrontEnd</h2>
          <p className="leading-relaxed text-base">I develop intuitive, performant interface frontend websites based on clients criteria.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4 hover:-translate-y-10 transition-all duration-500 ease-in-out">
        <div className="bg-gray-100 p-6 rounded-lg h-fit md:h-[500px]">
          <img className="h-60 rounded w-full object-cover object-center mb-6" alt="mac" src={mac}/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font hover:bg-blue-100 hover:text-black text-large py-2 px-4 border border-gray-400 rounded shadow">CyberSecurity</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Web and Server pentesting</h2>
          <p className="leading-relaxed text-base">As an excellent web and server pentester i find and secures vulnerabilities effectively.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4 hover:-translate-y-10 transition-all duration-500 ease-in-out">
        <div className="bg-gray-100 p-6 rounded-lg h-fit md:h-[500px]">
          <img className="h-60 rounded w-full object-cover object-center mb-6" alt="web" src={web}/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font hover:bg-blue-100 hover:text-black text-large py-2 px-4 border border-gray-400 rounded shadow"> Automation & AI</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">AI chatbots</h2>
          <p className="leading-relaxed text-base">An excellent AI chatbot programmer designs intuitive, responsive conversational experiences efficiently.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4 hover:-translate-y-10 transition-all duration-500 ease-in-out">
        <div className="bg-gray-100 p-6 rounded-lg h-fit md:h-[500px]">
          <img className="h-60 rounded w-full object-cover object-center mb-6" alt="mob" src={mob}/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font hover:bg-blue-100 hover:text-black text-large py-2 px-4 border border-gray-400 rounded shadow">WebDevelopment</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Web Design</h2>
          <p className="leading-relaxed text-base">As an Excellent web design i design pleasing, user-friendly, and accessible websites.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Services
