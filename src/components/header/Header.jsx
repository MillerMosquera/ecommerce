//import {useDevice} from '../hooks/useDevice'
import { useEffect, useState } from 'react';
import './Header.css';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const items = [{
    id:0,
    url: "/ropa-accesorios",
    label: "Ropa y accesorios",
    submenu: [{label:"Ropa", url:"ropa-accesorios/ropa" }, {label:"Accesorios", url:"ropa-accesorios/accesorios" }, {label:"Gafas", url:"/ropa-accesorios/gafas" }]
  },
  {
    id:1,
    url: "/hogar-decoracion",
    label: "Hogar y decoración",
    submenu: []
  },
  {
    id:2,
    url: "/mas",
    label: "Más",
    submenu: [ {label:"Quienes Somos", url:"/" }, {label:"Preguntas frecuentes", url:"/" }]
}]

function useDevice() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowSize, window]);

    return windowSize
};

export default function Header({ itemCount, onCartClick }) {
    const windowSize = useDevice();
   
    return(
        <header className='header_container'>
            {windowSize > 900 ? 
                <HeaderDesktop items={items} itemCount={itemCount} onCartClick={onCartClick}/> :
                <HeaderMobile items={items} itemCount={itemCount} onCartClick={onCartClick} /> 
            }
        </header>
    )
}