//import {useDevice} from '../hooks/useDevice'
import { useState, useEffect } from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import './Header.css';

const items = [{
    id:0,
    url: "/",
    label: "Apparel & Accessories",
    submenu: [{label:"Clothing", url:"/" }, {label:"Accesories", url:"/accesorios" }, {label:"Eyeglasses", url:"/" }]
  },
  {
    id:1,
    url: "/",
    label: "Home & Decor",
    submenu: []
  },
  {
    id:2,
    url: "/",
    label: "More",
    submenu: [ {label:"About Us", url:"/" }, {label:"FAQ", url:"/" }]
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

export default function Header() {
    const windowSize = useDevice();
   
    return(
        <header className='header_container'>
            {windowSize > 900 ? <HeaderDesktop items={items}/>
            : <HeaderMobile items={items} /> }
            
        </header>
    )
}