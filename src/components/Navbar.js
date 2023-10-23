import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-black w-1/6 h-screen text-white rounded-tr-[50px] flex flex-col justify-between items-center fixed top-0 left-0'>
            <div className='flex flex-col space-y-10'>
                <div className='text-[40px]'>
                    <div>
                        ICON
                    </div>
                    <div>
                        NSS VIIT
                    </div>
                </div>

                <div>
                    OVERVIEW Dashboard
                </div>

                <div>
                    Profile
                </div>

                <div>
                    Participation Status
                </div>

                <div>
                    Certification
                </div>

            </div>

            <div className='flex flex-col space-y-2 w-5/5 items-center'>
                <div>
                    Logout
                </div>

                <div className='bg-[#fbda77] text-black text-[12px] px-4'>
                    Designed and Developed By <b>WebFUDGE</b>
                </div>
            </div>

        </div>
    )
}

export default Navbar