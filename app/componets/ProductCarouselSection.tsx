import { ProductCategory, ProductData } from "@/utilty/mockData";
import Sections from "./Section";
import { IProduct, IProductCategory } from "@/utilty/interfaces";
import Carousel from "./Carousel";
import CatalogCard from "./catalog/CatalogCard";
import Link from "next/link";
const ProductCarouselSection = () => {
    return (
        <>
            {ProductCategory.length &&
                <div className="text-5xl text-orange-950 underline font-bold pb-2 pt-8 text-center">
                    Trending Content
                </div>
            }
            {ProductCategory.map((item: IProductCategory) => (
                <>
                    <Link href={`/viewCatalog/${item.Slug}`}>
                        <Sections key={item.CategoryId} heading={item.CategoryName} />
                    </Link>
                    <Carousel>
                        {
                            ProductData.filter((product: IProduct) => (product.ProductCategory === item.Slug))
                                .map((product: IProduct) => (
                                    <CatalogCard key={product.ProductId} product={product} showCategory={false}></CatalogCard>
                                ))
                        }
                    </Carousel>

                </>
            ))
            }
        </>
    )
}

export default ProductCarouselSection