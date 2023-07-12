import { ComponentType, lazy } from "react";
import Login from "../pages/Public/Login";
import Register from "../pages/Public/Register";
import Reset from "../pages/Public/Reset";

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

];

export const publicRoutes: IRoute[] = [
    { path: RoutesNamesPublic.LOGIN, component: Login, type: "Login" },
    { path: RoutesNamesPublic.REGISTER, component: Register, type: "Register" },
    { path: RoutesNamesPublic.RESET, component: Reset, type: "Reset" },
];