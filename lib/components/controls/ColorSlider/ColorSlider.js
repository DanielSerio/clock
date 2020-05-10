import React from 'react'
import Slider from 'rc-slider'
import './ColorSlider.css'

export default function ColorSlider({name, value, onChange}) {
  const colors = {
    'red': 'linear-gradient(90deg, black, red)',
    'green': 'linear-gradient(90deg, black, green)',
    'blue': 'linear-gradient(90deg, black, blue)',
    'alpha': 'linear-gradient(90deg, black, white)'
  };

  const key = name.toLowerCase();

  return (
    <label className="label">
      <span className="name">{name}</span>
      <Slider min={0} 
        defaultValue={value}
        max={name.toLowerCase() === 'alpha' ? 1 : 255} 
        railStyle={{backgroundImage: colors[key]}}
        trackStyle={{backgroundColor: 'transparent'}}
        handleStyle={{borderColor: key, backgroundColor: 'black', boxShadow: '0 0 3px black'}}
        step={0.1}
        onAfterChange={onChange}/>
    </label>
  )
}
