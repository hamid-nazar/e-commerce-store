export interface Billboard {
    id: number
    label: string
    imageUrl: string
};

export interface Category {
    id: number
    name: string
    billboard: Billboard
};

export interface Size {
    id: number
    name: string
    value: string
};

export interface Color {
    id: number
    name: string
    value: string
};

export interface Image {
    id: number
    url: string
};

export interface Product{
    id: number
    category:Category
    name: string
    price: number
    isFeatured: boolean
    size: Size
    color: Color
    images: Image[]
}