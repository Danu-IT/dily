export interface TownTypes {
    suggestions: TownType[]
}

export interface TownType {
    value: string;
    data: {
        city: string;
    }
}

export interface Categories {
    items: Category[];

}

export interface Category {
    value: string;
    icon: string;
    picture: string;
    subcategories: SubCategory[]
}

export interface SubCategory {
    value: string;
    type: string[];
}