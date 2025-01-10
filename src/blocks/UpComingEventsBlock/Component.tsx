import Link from 'next/link'
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const upComingEventCard = [
  {
    id: 1,
    image: '/event1.svg',
    para1: 'Unlocking Potential: Empowering Women Entrepreneurs',
    para2:
      'Join our live event on Facebook, hosted by Lincoln Corner connect, learn, and engage from anywhere!',
    date: 'Nov 16, 2025',
    time: '1 hr 30 min',
    peoples: '272 people responded',
    events: 'Event by Lincoln Corners Pakistan',
    public: 'Public  · Anyone on or off Facebook',
  },
  {
    id: 2,
    image: '/event2.svg',
    para1: 'Leadership & Advocacy Winter Camp in Karachi',
    para2:
      'Lincoln Corner Sind & Baluchistan are bringing the Winter Camp for 9th to 12th grades students.',
    date: 'Nov 16, 2025',
    time: '1 hr 30 min',
    peoples: '272 people responded',
    events: 'Event by Lincoln Corners Pakistan',
    public: 'Public  · Anyone on or off Facebook',
  },
  {
    id: 3,
    image: '/event3.svg',
    para1: 'Justice for Tomorrow, at Lincoln Corner Hyderabad ',
    para2:
      'The one day workshop will explore criminal justice reform and anti-trafficking strategies. Law students..',
    date: 'Nov 16, 2025',
    time: '1 hr 30 min',
    peoples: '272 people responded',
    events: 'Registration Link:  bit.ly/lchyd-JusticeforTomorrow',
    public: 'Public  · Anyone on or off Facebook',
  },
]

export const UpComingEventsBlock: React.FC = () => {
  const MonthMap: React.FC<any> = ({ months }) => {
    return (
      <div className="flex flex-wrap gap-4">
        {months.map((month, index) => (
          <span key={index} className="px-4 py-2 bg-[#E1E1E1] hover:bg-[#B8B8B8] rounded-sm">
            {month}
          </span>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="px-10  container mx-auto">
        <h3 className="text-xl font-semibold mb-4">2025</h3>
        <MonthMap months={months} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {upComingEventCard.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              <img src={card.image} alt={`Card ${card.id}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg font-semibold">{card.para1}</p>
                <p className="text-sm text-gray-600 mt-2">{card.para2}</p>
                <hr className="border-t-2 border-gray-400 my-6" />
                <h3 className="text-xl">Details</h3>
                <div className="flex flex-col gap-2">
                  <p className="text-sm">{card.date}</p>
                  <p className="text-sm">{card.time}</p>
                  <p className="text-sm">{card.peoples}</p>
                  <Link href="">
                    <p className="text-sm">{card.events}</p>
                  </Link>
                  <p className="text-sm">{card.public}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="bg-green-700 text-white px-4 py-3 mx-auto rounded-md w-[14rem] flex items-center justify-center space-x-2 group mt-5">
        <span>Explore More Events</span>
        {/* <IoIosArrowRoundForward className="text-2xl transition-transform duration-300 ease-in-out transform group-hover:rotate-[360deg] group-focus:rotate-[360deg] active:rotate-[360deg]" /> */}
      </button>
      <div
        className="h-screen flex relative mt-20"
        style={{
          backgroundImage: 'url(/image-22.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="relative mx-auto flex items-center">
          <img src="/youtube-2.svg" alt="" />
        </div>
      </div>
    </>
  )
}
