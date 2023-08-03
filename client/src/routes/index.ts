import { ComponentType, lazy } from "react";

// const Home = lazy(() => import('../pages/Private/Home'))
const Login = lazy(() => import('../pages/Public/Login'))
const Register = lazy(() => import('../pages/Public/Register'))
const Reset = lazy(() => import('../pages/Public/Reset'))

export interface IRoute {
    path: string;
    component: ComponentType;
    type: string;
}

export enum RoutesNamesPrivate {
    HOME = "/",
}

export enum RoutesNamesPublic {
    LOGIN = "/login",
    REGISTER = "/register",
    RESET = "/reset",
}

export const privateRoutes: IRoute[] = [
    // { path: RoutesNamesPrivate.HOME, component: Home, type: "Home" },
];

export const publicRoutes: IRoute[] = [
    { path: RoutesNamesPublic.LOGIN, component: Login, type: "Login" },
    { path: RoutesNamesPublic.REGISTER, component: Register, type: "Register" },
    { path: RoutesNamesPublic.RESET, component: Reset, type: "Reset" },
];