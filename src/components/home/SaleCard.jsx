

export default function SaleCard() {
    return (
        <>
            <section className="w-full max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="flex h-100">
                    <div className="w-full bg-gray-100 flex items-center justify-center">
                        <div className="text-center flex flex-col items-center justify-center p-6 m-12">
                            <h2 className="text-lg pb-4 w-full font-bold text-gray-800">Grandes Descuentos </h2>
                            <button
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded-lg transition-colors duration-300 ease-in-out">
                                Explora
                            </button>
                        </div>
                        <div className="p-2 relative overflow-hidden">
                            <img
                                src="https://storecomponents.vtexassets.com/arquivos/banner-infocard2.png"
                                alt="Clearance Sale"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}