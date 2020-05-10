import React, { useState } from 'react'
import Layer from '../containers/Layer/Layer'
import ColorSlider from '../controls/ColorSlider/ColorSlider'
import './Menu.css'
import Swatch from '../Swatch/Swatch'
import IconButton from '../controls/IconButton/IconButton'

export default function Menu({red, green, blue, alpha, setColor, closeMenu}) {
  const [rgba, setRgba] = useState({
    r: red,
    g: green,
    b: blue,
    a: alpha
  });

  const formatColor = () => `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSave = () => {
    setColor(rgba);
    closeMenu();
  };

  const handleChange = (value, name) => {
    setRgba({
      ...rgba,
      [name]: value
    });
  };

  return (
    <Layer className="color-menu" zIndex={100}>
      <form className="color-menu-form" onSubmit={handleSubmit}>
        <ColorSlider name="Red" value={red} onChange={(v) => handleChange(v, 'r')}/>
        <ColorSlider name="Green" value={green} onChange={(v) => handleChange(v, 'g')}/>
        <ColorSlider name="Blue" value={blue} onChange={(v) => handleChange(v, 'b')}/>
        <ColorSlider name="Alpha" value={alpha} onChange={(v) => handleChange(v, 'a')}/>
        <footer className="color-menu-footer">
          <Swatch color={formatColor()}/>
          <IconButton name="save" color={formatColor()} onClick={handleSave}/>
        </footer>
      </form>
    </Layer>
  )
}
