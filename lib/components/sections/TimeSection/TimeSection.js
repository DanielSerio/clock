import React from 'react'
import Section from '../../containers/Section/Section'
import './TimeSection.css'

export default function TimeSection({datetime}) {
  function ampm() { return datetime.getHours() > 11 ? 'PM' : 'AM'; }
  
  function hour() { 
    const h = datetime.getHours();
    return h > 12 ? h % 12 : h;
  }

  function min() { return `${datetime.getMinutes()}`.padStart(2, '0'); }

  function sec() { return `${datetime.getSeconds()}`.padStart(2, '0'); }

  return (
    <Section className="time">
      <div className="primary">{hour()}:{min()}</div>
      <div className="secondary">
        <div className="sec">{sec()}</div>
        <div className="ampm">{ampm()}</div>
      </div>
    </Section>
  )
}
