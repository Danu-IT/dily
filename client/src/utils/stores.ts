import mvidio from '../assets/stores/mvidio.svg'
import cat from '../assets/stores/cat.svg'
import xiaomi from '../assets/stores/xiaomi.svg'
import sofa from '../assets/stores/sofa.svg'
import kid from '../assets/stores/kid.svg'

interface Store {
    title: string;
    img: string;
    star: number;
    city: string;
    color: string;
}

export const stores: Store[] = [{
    title: 'М-ВИДЕО',
    city: 'Москва',
    img: mvidio,
    star: 5,
    color: 'red'
}, {
    title: 'КОТ-ОБОРМОТ',
    city: 'Москва',
    img: cat,
    star: 5,
    color: '#FC9024'
}, {
    title: 'XIAOMI',
    city: 'Москва',
    img: xiaomi,
    star: 5,
    color: '#00C65E'
}, {
    title: 'ДИВАНЫ ТУТ',
    city: 'Москва',
    img: sofa,
    star: 5,
    color: '#1EAE8B'
}, {
    title: 'ДЕТСКИЙ МИР',
    city: 'Москва',
    img: kid,
    star: 4,
    color: '#01C1FB'
}]