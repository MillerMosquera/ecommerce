import { useState } from 'react';

export default function Us() {

    const [email , setEmail ] = useState("") // email 
    const [isSubmitting, setIsSubmitting] = useState(false); // se esta enviando - animacion spinner
    const [success, setSuccess] = useState(false); // se envio

        const handleSubmit = (e) => { 

            e.preventDefault();
            setIsSubmitting(true); // Mostrar spinner

            // Simulamos envío t
            setTimeout(() => {
            setIsSubmitting(false); // Ocultamos spinner
            setSuccess(true);       // Mostramos mensaje
            setEmail("");           // Limpiamos campo
            }, 2000); // 2 segundos de espera
        }
    return (
        <>
            <div className='max-w-3xl mx-auto pt-[120px]'>
                <p className=' block text-[25px]  text-center mx-[16px] text-[#03034e] font-bold'><span > Este es un Proyecto Creado por los Campistas de  <br /> Talento Tech </span></p>

                <p className='text-center mt-20'><span className=' text-[12px] font-bold uppercase text-[#03034e]'>Buscanos En </span><br />
                    <a href="https://talentoai.tech/campus/" className=' text-[36px] font-bold text-[#03034e]'>www.talentotech.gov.co
                    </a>
                </p>
            </div>

            <div className='w-full bg-[#03034e] mt-4 '>
                <div className=' flex justify-center items-center p-[140px]'>
                    <form onSubmit={ handleSubmit }>

                    <div className='max-w-xl text-center my-4'>
                        <label className='text-white text-[40px] font-bold'> Suscríbete y recibe ofertas exclusivas</label>
                    </div>

                    {success ? (

                        <p className="text-green-400 font-semibold text-xl text-center">
                        Gracias por registrarte
                        </p>

                    ) : (

                        <div className="flex justify-center items-center space-x-4">
                        <input
                            type="email"
                            placeholder="Ingresa tu Email"
                            className="text-white border border-white bg-transparent rounded-md w-1/2 p-2 focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <button
                            type="submit"
                            className="bg-white text-[#03034e] font-bold px-4 py-2 rounded-md hover:bg-gray-200 transition"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                            <span className="flex items-center gap-2">

                                <svg
                                className="animate-spin h-5 w-5 text-[#03034e]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>

                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8H4z"
                                ></path>

                                </svg>

                                Enviando...

                            </span>

                            ) : (

                            "Registrarse"

                            )}

                        </button>
                        </div>
                    )}
                    </form>
                </div>
            </div>

        </>
    )
}
