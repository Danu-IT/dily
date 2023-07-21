export interface RegForm {
    name: string;
    surname: string;
    email: string;
    password: string;
    cpassword: string;
}

export interface AuthForm {
    email: string;
    password: string;
}

export interface RegFormApi {
    name: string;
    surname: string;
    email: string;
    password: string;
}

export interface ErrorForm {
    value: string;
    error: string;
}

export type AllForm = RegForm | AuthForm