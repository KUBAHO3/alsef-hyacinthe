import React from 'react'
import Image from 'next/image'
import students from '../images/students.jpg';
import experts from '../images/experts.jpg';
import stakeholders from '../images/stakeholders.jpg';

function About() {
  return (
    <section className="py-8" id="about">
    <span className="font-semibold text-gray-400 flex items-center justify-center pb-8 uppercase" id="sec-title">Who we are!</span>
    <div className="flex items-center justify-center w-full flex-wrap max-w-screen-2xl mx-auto content-center gap-x-8 gap-y-4">
      <div className="animate-fade-right animate-duration-[2000ms] max-w-sm gap-x-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
              src={students}
              alt="Picture of the student"
              width={500}
              height={500}
          />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" id="title">Students</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The Forum welcomes young students from Africa and around the world to participate in life science research and innovation on the continent.</p>
        </div>
      </div>
      <div className="animate-fade-down animate-duration-[2000ms] max-w-sm gap-x-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
              src={experts}
              alt="Picture of the expert"
              width={500}
              height={500}
          />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" id="title">Experts</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The Forum provides a platform for life science experts to share their knowledge and connect with other professionals in the field.</p>
        </div>
      </div>
      <div className="animate-fade-left animate-duration-[2000ms] max-w-sm gap-x-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image
              src={stakeholders}
              alt="Picture of the stakeholder"
              width={500}
              height={500}
          />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" id="title">Stakeholders</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The Forum invites academic institutions, research centres, and investors, to engage with the life science community in Africa and support its development.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About