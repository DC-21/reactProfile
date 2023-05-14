import React from 'react'
import hero from '../images/png/hero.png'
import mac from '../images/png/mac.png'
import web from '../images/png/web.png'
import mob from '../images/png/mob.png'

const Services = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Services</h1>
        <div className="h-1 w-40 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-700">Kindly checkout our Services</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" alt="hero" src={hero}/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Web Devlopment</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">FrontEnd</h2>
          <p className="leading-relaxed text-base">As an excellent frontend developer i craft intuitive, performant interfaces with precision based on client's criteria.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" alt="mac" src={mac}/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">CyberSecurity</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Web and Server pentesting</h2>
          <p className="leading-relaxed text-base">As an excellent web and server pentester finds and secures vulnerabilities effectively.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" alt="web" src={web}/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"> Automation & AI</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">AI chatbots</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" alt="mob" src={mob}/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">WebDevelopment</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Web Design</h2>
          <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Services
