
export default function Us() {
    return (
        <>
            <div className='max-w-3xl mx-auto pt-[120px]'>
                <p className=' block text-[25px]  text-center mx-[16px] text-[#03034e] font-bold'><span > Este es un Proyecto Creado por los Campista de  <br /> Talento Tech </span></p>

                <p className='text-center mt-20'><span className=' text-[12px] font-bold uppercase text-[#03034e]'>Buscanos En </span><br />
                    <a href="https://talentoai.tech/campus/" className=' text-[36px] font-bold text-[#03034e]'>www.talentotech.gov.co
                    </a>
                </p>
            </div>

            <div className='w-full bg-[#03034e] mt-4 '>
                <div className=' flex justify-center items-center p-[140px]'>
                    <form>
                        <div className='max-w-xl text-center my-4'>
                            <label className='text-white text-[40px] font-bold'> Suscribete y recibe nuestras novedades</label>
                        </div>
                        <div className=' flex justify-center items-center'>

                            <input type="email" name="" id="" placeholder='Ingresa tu E-mail' className='text-white border border-white w-1/2 p-2' />

                            <button type="submit" className='text-white font-bold ml-4 hover:bg-white hover:text-[#03034e] p-2' > Registrarse </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
