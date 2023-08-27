export interface IProductCategory {
    CategoryId: number,
    CategoryName: string,
    Slug: string
}
export interface IProduct {
    ProductId: number,
    ProductName: string,
    ProductPrice: number,
    ProductCategory?: string
    ImageUrl?: string
}