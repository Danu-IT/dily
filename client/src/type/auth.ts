export interface LoginApiType {
    accessToken: string;
    refreshToken: string;
    user: UsetApiType;
}

export interface UsetApiType {
    name: string;
    surname: string;
    email: string;
    password: string;
}