import { IProduct } from "@/utilty/interfaces"
interface propType {
    product: IProduct,
    showCategory: boolean
}

const CatalogCard = (props: propType) => {
    const { product, showCategory } = props;
    return (
        <div className="carousel-item">
            <div className="card w-72 md:w-96 bg-gray-200 shadow-xl">
                <figure><img src={product.ImageUrl} alt="productImage" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.ProductName}</h2>
                    {showCategory &&
                        <h3>{product.ProductCategory}</h3>
                    }
                    <p className="font-bold">Rs. {product.ProductPrice}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-orange-700 hover:bg-orange-800 border-none text-white">View Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogCard