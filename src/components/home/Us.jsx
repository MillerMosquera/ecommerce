import React from 'react'

export default function Us() {
    return (
        <>
            <div className='max-w-3xl mx-auto pt-[120px]'>
                <p className=' block text-[25px]  text-center max-w-[540px] mx-[16px] text-[#03034e] font-bold'><span >This is an example store built using the VTEX platform.<br />Want to know more?</span></p>

                <p className='text-center mt-20'><span className=' text-[12px] font-bold uppercase text-[#03034e]'>Reach us at</span><br />
                    <a href="http://www.vtex.com.br" className=' text-[36px] font-bold text-[#03034e]'>www.vtex.com.br
                    </a>
                </p>
            </div>

            <div className='w-full bg-[#03034e] mt-4 '>
                <div className=' flex justify-center items-center p-[140px]'>
                    <form>
                        <div className='max-w-xl text-center my-4'>
                            <label className='text-white text-[40px] font-bold'> Subcribe to our newsletter</label>
                        </div>
                        <div className=' flex justify-center items-center'>

                            <input type="email" name="" id="" placeholder='Enter your Email address' className='text-white border border-white w-1/2 p-2' />

                            <button type="submit" className='text-white font-bold ml-4' > SIGN UP </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
