import React from 'react'

export const GetinTouchBlock: React.FC = () => {
  return (
    <>
      <div className="p-5 sm:p-10 lg:p-20 flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Contact Form Section */}
        <div className="bg-white p-5 rounded-xl w-full lg:w-1/3">
          <form action="submit">
            <div className="mx-0 mb-4">
              <label htmlFor="name" className="pb-1 text-sm font-semibold uppercase">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                autoComplete="given-name"
                placeholder="Your name"
                className="mb-2 w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 dark:text-gray-300 sm:mb-4"
                name="name"
              />
            </div>
            <div className="mx-0 mb-4">
              <label htmlFor="contact" className="pb-1 text-sm font-semibold uppercase">
                Contact Number
              </label>
              <input
                type="number"
                id="number"
                autoComplete="given-name"
                className="mb-2 w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 dark:text-gray-300 sm:mb-4"
                name="contact"
              />
            </div>
            <div className="mx-0 mb-4">
              <label htmlFor="email" className="pb-1 text-sm font-semibold uppercase">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="mb-2 w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 dark:text-gray-300 sm:mb-4"
                name="email"
              />
            </div>
            <div className="mx-0 mb-4">
              <label htmlFor="message" className="pb-1 text-sm font-semibold uppercase">
                Message
              </label>
              <textarea
                id="textarea"
                name="textarea"
                placeholder="Write your message..."
                className="mb-2 w-full rounded-md border border-gray-300 py-2 pl-2 pr-4 dark:text-gray-300 sm:mb-4"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-green-700 text-white px-6 py-3 rounded-md transform duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Image and Info Section */}
        <div
          className="bg-[#034FA3] w-full lg:w-2/3 rounded-2xl relative flex h-screen md:h-auto"
          style={{
            backgroundImage: 'url(/bg-contact.svg)',
          }}
        >
          <div className="absolute flex flex-col items-center justify-center w-full h-full text-white lg:p-10">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-center">Get In Touch</h1>
              <img
                className="mt-6 mx-auto w-48"
                src="/contact-animate.svg"
                alt="Contact Animation"
              />
            </div>
            <div>
              <p className="text-center text-sm sm:text-base lg:text-lg">
                Reach out to Lincoln Corner Academy with any <br />
                questions or for more information on events and <br />
                resources. We're here to connect and assist you!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6 mx-auto">
                <div className="flex flex-col text-center">
                  <p className="font-semibold">Office Hours</p>
                  <p>Monday - Friday</p>
                  <p>08:00 AM - 05:00 PM</p>
                </div>
                <div className="flex flex-col text-center">
                  <p className="font-semibold">Get In Touch</p>
                  <p>051.2014000</p>
                  <p>051.2013200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 text-center flex flex-col gap-3 px-10 md:px-0">
        <h1 className="text-xl font-semibold text-green-700">Grow, Improve, Get Skills</h1>
        <p className="text-4xl font-bold max-w-[35rem] mx-auto">
          Every Week on your Inbox with new Courses & Events
        </p>
        <div className="relative w-full md:w-[30rem] mx-auto">
          <input
            type="text"
            className="p-3 pr-16 border border-gray-400 rounded-sm text-black placeholder:text-gray-700 w-full"
            placeholder="Enter Email Address"
          />
          <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-green-700 text-white px-4 py-2 rounded-sm transition-all duration-300">
            Subscribe Now
          </button>
        </div>
      </div>
    </>
  )
}
