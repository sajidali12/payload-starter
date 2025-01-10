import { ArrowRight } from 'lucide-react'
import React from 'react'
const InteractiveCardData = [
  {
    title: 'Interactive Learning\nEnvironment',
    backgroundImage: '/pic10.png',
  },
  {
    title: 'Cultural Exchange\nOpportunities',
    backgroundImage: '/pic09.png',
  },
  {
    title: 'Comprehensive Learning\n Materials',
    backgroundImage: '/pic11.png',
  },
]

const InteractiveCard: React.FC<any> = ({ title, backgroundImage }) => {
  return (
    <div
      className="transform h-[35rem] flex relative mt-20 rounded-2xl overflow-hidden transition duration-300 hover:scale-105"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute w-full h-full bg-[#350000] opacity-40"></div>
      <div className="relative mx-auto flex items-center top-44 text-white">
        <div className="w-[5px] h-[70px] bg-white mr-4 rounded-md"></div>
        <p className="text-2xl">
          {title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
export const LearnEnglishBlock: React.FC = () => {
  return (
    <>
      <div className="pt-14">
        <h1 className="text-4xl text-center mb-5 font-bold">Learn English</h1>
        <p className="text-center">
          Learning English opens opportunities for global communication, career growth, and cultural
          exchange.
          <br /> Mastering the language empowers you to connect, collaborate, and succeed worldwide.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-10 md:px-20 container mx-auto">
        {InteractiveCardData.map((card, index) => (
          <InteractiveCard
            key={index} // It's a good practice to provide a unique key for each component
            title={card.title}
            backgroundImage={card.backgroundImage}
          />
        ))}
      </div>
      <button className="bg-green-700 text-white px-4 py-3 mx-auto rounded-md w-[12rem] flex items-center justify-center space-x-2 group mt-5">
        <span>Discover More</span>
        <ArrowRight className="text-2xl transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg] group-focus:rotate-[360deg] active:rotate-[360deg]" />
      </button>
    </>
  )
}
