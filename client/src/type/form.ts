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

export type AllForm = RegForm | AuthForm