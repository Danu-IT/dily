export interface TownTypes {
    suggestions: TownType[]
}

export interface TownType {
    value: string;
    data: {
        city: string;
    }
}