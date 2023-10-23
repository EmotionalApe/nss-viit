import React from 'react'
import photo from '../images/portrait-white-man-isolated.jpg'

const Profile = () => {
    return (
        <div className='w-3/12 h-[calc(100vh-50px)]  flex flex-col bg-white mx-8 rounded-[10px] items-center mt-[30px]'>
            <div className='flex flex-col items-center h-1/3'>
                <div className="relative mx-auto rounded-full overflow-hidden h-28 w-40 my-8">
                    <img src={photo} alt='profile' />
                </div>
                <div className='font-bold text-[20px]'>Abhiraj Maid</div>

                <div className='flex space-x-3'>
                    <div>BTECH IT</div>
                    <div>VIIT 25</div>
                </div>
            </div>

            <hr className="h-[2px] my-8 bg-[#e6e6e6] border-0 w-4/5"></hr>

            <div className='w-full h-2/3'>
                <div className='w-full h-1/3 flex flex-col items-center'>
                    <div>Skills</div>
                    <div className='w-4/5 h-2/5 bg-[#f4f4f4] rounded-[10px] border-2 border-[#e7e7e7]'>
                    </div>
                </div>

                <div className='w-full h-1/3 flex flex-col items-center'>
                    <div>Interests</div>
                    <div className='w-4/5 h-2/5 bg-[#f4f4f4] rounded-[10px] border-2 border-[#e7e7e7]'>
                    </div>
                </div>

                <div className='w-full h-1/3 flex flex-col items-center'>
                    <div>Notifications</div>
                    <div className='w-4/5 h-3/5 bg-[#f4f4f4] rounded-[10px] border-2 border-[#e7e7e7]'>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Profile