import { ProductData } from "@/utilty/mockData"
import { IProduct } from "@/utilty/interfaces"
import CatalogCard from "./CatalogCard"
interface propstype {
    category: string,
}
const CatalogPageBody = (props: propstype) => {
    console.log(props.category)
    return (
        <div className="md:p-20 flex justify-center md:justify-between flex-wrap gap-5">
            {
                ProductData.filter((product: IProduct) => (product.ProductCategory?.toLowerCase() === props.category.toLowerCase()))
                    .map((product: IProduct) => (
                        <CatalogCard key={product.ProductId} product={product} showCategory={false}></CatalogCard>
                    ))
            }
        </div>
    )
}

export default CatalogPageBody