import React from 'react'

function Contactus() {
  return (
    <section className="py-8" id="contact">
        <span className="font-semibold text-gray-400 flex items-center justify-center pb-8 uppercase" id="sec-title">Contact us</span>
        <div className="px-4 w-full max-w-screen-xl mx-auto content-center">
          <iframe style={{border:0, width: "100%", height: '270px' }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className="flex flex-wrap items-center justify-center width max-w-screen-xl mx-auto px-3 my-4 content-center ">
          <div className="w-full md:w-4/12 pr-4">
            <div className="relative px-4 py-3 my-3 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
              </svg>
              <div className="space-y-2">
                <h6 className="text-slate-800 font-semibold">Location:</h6>
                <p>Musanze, Street, NR 4 RD, Rwanda</p>
              </div>
            </div>
            <div className="relative px-4 py-3 my-3 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
              </svg>
              <div className="space-y-2">
                <h6 className="text-slate-800 font-semibold">Email:</h6>
                <p>htuyubahe@gmail.com</p>
              </div>
            </div>
            <div className="relative px-4 py-3 my-3 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
              </svg>
              <div className="space-y-2">
                <h6 className="text-slate-800 font-semibold">Call:</h6>
                <p>+917981821981</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-8/12 pl-4">
            <div className="py-3 lg:py-3">
                <form action="#" className="space-y-3">
                    <div>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@ALFSEForum.com" required></input>
                    </div>
                    <div>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
                    </div>
                    <div className="sm:col-span-2">
                        <textarea id="message" rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg border border-gray-300 bg-primary-700 sm:w-fit hover:bg-pink-100 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contactus