import React from 'react'

function About() {
  return (
    <section className="py-8">
    <span className="font-semibold text-gray-400 flex items-center justify-center pb-8 uppercase">Who we are!</span>
    <div className="flex items-center justify-center w-full flex-wrap max-w-screen-2xl mx-auto content-center gap-x-8 gap-y-4">
      <div className="max-w-sm gap-x-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src="https://images.pexels.com/photos/1206101/pexels-photo-1206101.jpeg" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Students</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The Forum welcomes young students from Africa and around the world to participate in life science research and innovation on the continent.</p>
        </div>
      </div>
      <div className="max-w-sm gap-x-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src="https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Experts</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The Forum provides a platform for life science experts to share their knowledge and connect with other professionals in the field.</p>
        </div>
      </div>
      <div className="max-w-sm gap-x-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src="https://media.istockphoto.com/id/1422816407/photo/hand-holding-wooden-block-with-text-stakeholder-management-and-expectations-business.jpg?b=1&s=612x612&w=0&k=20&c=nLb1FIPrIYaNhaB4fNKkYURz0Y-QX9Po_n98wVtNHqg=" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Stakeholders</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">The Forum invites relevant stakeholders, including academic institutions, research centres, policymakers and investors, to engage with the life science community in Africa and support its development.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About