import React from 'react';
import Image from 'next/image'
import microscope from '../images/microscope_africa.png';
import ines from '../images/ines_logo.png';
import asm from '../images/asm_logo.png';
import nat from '../images/nat_logo.png';


function Hero() {
  return (
    <section className="dark:bg-gray-900"><br/><br/><br/>   
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="animate-flip-up animate-once animate-ease-out animate-duration-[2000ms] mr-auto place-self-center lg:col-span-7">
                <span className="max-w-1xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white" id="title">Welcome to the </span>
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white" id="main_title">
                   African Life Science Enhancement Forum</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">The African Life Science Enhancement Forum aims to enhance life science research and innovation in Africa by creating a community of life science aspirants, current students, experts, and stakeholders in the field across Africa. Together, we can improve the quality and sustainability of life for all Africans.</p>
                
                <a href="https://t.me/alsef_association" className="animate-jump inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-pink-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Join The Community
                </a> 
            </div>
            <div className="animate-jump-in animate-duration-[2000ms] hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src={microscope}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            </div>                
        </div>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase" id="sec-title">Partner with</span>
            <div className="animate-fade animate-duration-[2000ms] flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                    <Image
                        src={asm}
                        alt="Picture of the asm"
                        width={100}
                        height={40}
                    />                    
                </a>
                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                    <Image
                        src={ines}
                        alt="Picture of the ines"
                        width={160}
                        height={70}
                    />                          
                </a>
                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                    <Image
                        src={nat}
                        alt="Picture of the nat"
                        width={100}
                        height={40}
                    />                                                      
                </a>         
            </div>
        </div> 
      </section>
  )
}

export default Hero