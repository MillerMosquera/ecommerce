


export default function ProductCard({ product }) {
    
    return (
        <div>
            <div>
                <div>
                    <img 
                    src={product.image}
                    alt="Product Image"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                     />
                </div>
            </div>
            <h1></h1>
        </div>
    )
}