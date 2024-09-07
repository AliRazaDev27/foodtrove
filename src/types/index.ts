export type Product = {
    _id: string;
    title: string;
    description: string;
    thumbnail: string;
    images: string[];
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    category: string;
    brand: string|null;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    returnPolicy: string;
    reviews: Review[];
}
export type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}
export type ProductQuery = {
    page: number,
    search: string|null,
    sortBy: string|null,
    minPrice: number|null,
    maxPrice: number|null,
    category: string|null,
    brand: string|null,
}
