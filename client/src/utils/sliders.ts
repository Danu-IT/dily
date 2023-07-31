import delivery from '../assets/slider/delivery.svg'
import help from '../assets/slider/help.svg'
import prod from '../assets/slider/prod.svg'
import rem from '../assets/slider/rem.svg'

export interface SliderInfotype {
    title: string;
    body: string;
    pic: string;
    path: string;
    bg: string;
    color: string;
}

export const sliderInfo: SliderInfotype[] = [
    {
        title: 'Доставка',
        body: 'Проверка при получении и возможность бесплатно вернуть товар',
        pic: delivery,
        path: '/',
        bg: '#FFB762',
        color: 'white'
    },
    {
        title: 'Продайте нам',
        body: 'Нет времени ждать? Продайте свой товар нам и получите деньги уже сейчас',
        pic: prod,
        path: '/',
        bg: '#FFF',
        color: 'black'
    },
    {
        title: 'Помоги другим',
        body: 'Передайте ваши вещи детским домам и благотворительным организациям',
        pic: help,
        path: '/',
        bg: '#01C65E',
        color: 'white'
    },
    {
        title: 'Ремонт',
        body: 'Отремонтируем любую вещь быстро и качественно',
        pic: rem,
        path: '/service',
        bg: '#FFF',
        color: 'black'
    }
]