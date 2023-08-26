import { ProductCategory, ProductData } from "@/utilty/mockData";
import Sections from "./Section";
import { IProduct, IProductCategory } from "@/utilty/interfaces";
import Carousel from "./Carousel";
import CatalogCard from "./catalog/CatalogCard";
const ProductCarouselSection = () => {
    return (
        <>
            {ProductCategory.length &&
                <div className="text-5xl text-orange-950 underline font-bold p-2 text-center">
                    Trending Content
                </div>
            }
            {ProductCategory.map((item: IProductCategory) => (
                <Sections key={item.CategoryId} heading={item.CategoryName}>
                    <Carousel>
                        {
                            ProductData.filter((product: IProduct) => (product.ProductCategory === item.CategoryName))
                                .map((product: IProduct) => (
                                    <CatalogCard key={product.ProductId} product={product} showCategory={false}></CatalogCard>
                                ))
                        }
                    </Carousel>
                </Sections>
            ))}
        </>
    )
}

export default ProductCarouselSection