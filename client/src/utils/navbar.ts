import { BiSpreadsheet } from "react-icons/bi"
import { BsShop } from "react-icons/bs"
import { FaHandHoldingHeart } from 'react-icons/fa'

export const navbar = [
    {
        value: 'Доска объявлений',
        path: '/board',
        activate: false,
    }, {
        value: 'Сервисный центр',
        path: '/service',
        activate: false
    }, {
        value: 'Интернет-магазин Dily.ru',
        path: '/shop',
        activate: false
    }, {
        value: 'Скупка',
        path: '/purchase',
        activate: false
    }]

export const mockDashboard = [
    {
        value: 'Объявление',
        path: '/',
        activate: false,
        pic: BiSpreadsheet
    },
    {
        value: 'Магазины',
        path: '/',
        activate: false,
        pic: BsShop
    }, {
        value: 'Благотворительность',
        path: '/',
        activate: false,
        pic: FaHandHoldingHeart
    }
]