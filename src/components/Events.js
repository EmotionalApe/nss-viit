import React, { useState } from 'react'
import EventCard from './EventCard'

const Events = () => {

    const [time, settime] = useState()
    const [club, setclub] = useState()
    const [events, setEvents] = useState('interestedEvents')

    return (
        <div className='w-9/12 h-[calc(100vh-50px) mx-5 flex flex-col mt-[30px]'>

            <div className='w-full h-[70px] bg-white flex flex-row justify-evenly py-3 rounded-[10px] items-center'>
                <div onClick={() => setEvents('myParticipation')} style={{ fontWeight: events === 'myParticipation' ? 'bold' : 'normal'}} className='cursor-pointer'>
                    My Participation
                </div>
                <div onClick={() => setEvents('interestedEvents')} style={{ fontWeight: events === 'interestedEvents' ? 'bold' : 'normal'}} className='cursor-pointer'>
                    Interested Events
                </div>
                <div onClick={() => setEvents('pastEvents')} style={{ fontWeight: events === 'pastEvents' ? 'bold' : 'normal' }} className='cursor-pointer'>
                    Past Events
                </div>
            </div>

            <div className='h-[50px] w-1/2 flex flex-row justify-evenly rounded-[10px] my-2 items-center'>
                <div>
                    Filter :
                </div>

                <div className='h-full w-1/3 py-2 bg-white flex justify-center rounded-[10px]'>
                    <select
                        value={time}
                        onChange={e => settime(e.target.value)}>
                        <option value="select">Select</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                    </select>
                </div>

                <div className='h-full w-1/3 py-2 bg-white flex justify-center rounded-[10px]'>
                    <select
                        value={club}
                        onChange={e => setclub(e.target.value)}>
                        <option value="select">Select</option>
                        <option value="EDC">EDC</option>
                        <option value="NSS">NSS</option>
                    </select>
                </div>

            </div>

            <div className='w-full flex flex-row flex-wrap'>
                <EventCard
                    details={{
                        title: 'National Seminar',
                        club: 'nss',
                        date: '16 October 2023',
                        location: 'Seminar Hall VIIT',
                        offerings: ["certificate", "Gifts"],
                        img: 'https://static1.bigstockphoto.com/5/6/4/large1500/465007643.jpg',
                        description: 'tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget'
                    }}
                />

                <EventCard
                    details={{
                        title: 'National Seminar',
                        club: 'nss',
                        date: '16 October 2023',
                        location: 'Seminar Hall VIIT',
                        offerings: ["certificate", "Gifts"],
                        img: 'https://static1.bigstockphoto.com/5/6/4/large1500/465007643.jpg',
                        description: 'tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget'
                    }}
                />

                <EventCard
                    details={{
                        title: 'National Seminar',
                        club: 'nss',
                        date: '16 October 2023',
                        location: 'Seminar Hall VIIT',
                        offerings: ["certificate", "Gifts"],
                        img: 'https://static1.bigstockphoto.com/5/6/4/large1500/465007643.jpg',
                        description: 'tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget'
                    }}
                />

                <EventCard
                    details={{
                        title: 'National Seminar',
                        club: 'nss',
                        date: '16 October 2023',
                        location: 'Seminar Hall VIIT',
                        offerings: ["certificate", "Gifts"],
                        img: 'https://static1.bigstockphoto.com/5/6/4/large1500/465007643.jpg',
                        description: 'tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget'
                    }}
                />

                <EventCard
                    details={{
                        title: 'National Seminar',
                        club: 'nss',
                        date: '16 October 2023',
                        location: 'Seminar Hall VIIT',
                        offerings: ["certificate", "Gifts"],
                        img: 'https://static1.bigstockphoto.com/5/6/4/large1500/465007643.jpg',
                        description: 'tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget'
                    }}
                />
            </div>

        </div>
    )
}

export default Events