import React from 'react'

const EventCard = ({ details }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                <div className='flex flex-row'>
                <div className='flex flex-col items-center m-3'>
                  <div ><img className='rounded-[10px]' src={details.img} alt="title" /></div>

                  <div className="flex items-start justify-between p-2 rounded-t">
                    <h3 className="text-2xl font-semibold">
                      {details.title}
                    </h3>
                  </div>

                  <div>by {details.club}</div> 
                </div>
            
                <div className="relative p-3 flex-auto">
                  
                <div className="flex items-start justify-between rounded-t">
                    <h3 className="text-2xl font-semibold">
                      Description
                    </h3>
                  </div>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {details.description}
                  </p>
                </div>

              </div>

                <div className="flex items-center justify-end pr-5 pb-2 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


      <div className={`w-[250px] h-[300px] bg-black rounded-[10px] m-3 flex flex-col justify-evenly items-center cursor-pointer`} style={{ backgroundImage: `url(${details.img})`, backgroundSize: 'cover' }}
        onClick={() => setShowModal(true)}>

        <div className='w-4/5 h-1/3'></div>

        <div className='w-4/5 h-2/3 bg-white mb-3 rounded-[10px] p-3 flex flex-col justify-between'>
          <div className='font-bold'>{details.title}</div>
          <div className='text-[12px]'>by {details.club}</div>
          <div className='bg-[#e4e4e4] text-[10px] w-20 rounded-[10px] p-[2px]'>{details.date}</div>
          <div>{details.location}</div>
          <div>{details.offerings}</div>
        </div>
      </div>
    </>
  )
}

export default EventCard