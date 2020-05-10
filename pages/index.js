import React, { useState, useEffect } from 'react'
import Layer from '../lib/components/containers/Layer/Layer'
import 'rc-slider/assets/index.css'
import Menu from '../lib/components/Menu/Menu';
import IconButton from '../lib/components/controls/IconButton/IconButton';
import Head from 'next/head';
import TimeSection from '../lib/components/sections/TimeSection/TimeSection';
import DateSection from '../lib/components/sections/DateSection/DateSection';

export default function index() {
  const [rgba, setRgba] = useState({
    r: 255,
    g: 255,
    b: 255,
    a: 0.8
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [datetime, setDatetime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDatetime(new Date()), 1000);
  }, []);

  const formatColor = () => `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;

  const setColor = (rgba) => setRgba(rgba);

  const openMenu = () => setMenuOpen(true);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Layer isMain={true} className="clock" zIndex={10} color={formatColor()}>
      <Head>
        <link rel="stylesheet" href="/static/font.css"/>
      </Head>
      <header className="clock-header">
        <DateSection datetime={datetime}/>
      </header>
      <div className="content">
        {menuOpen &&
          <Menu setColor={setColor} 
            red={rgba.r} 
            green={rgba.g} 
            blue={rgba.b} 
            alpha={rgba.a} 
            closeMenu={closeMenu}/>
        }
        <TimeSection datetime={datetime}/>
      </div>
      <footer className="clock-footer">
        <IconButton name="palette" color={formatColor()} onClick={openMenu}/>
      </footer>
    </Layer>
  )
}
