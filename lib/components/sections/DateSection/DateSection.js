import React from 'react'
import Section from '../../containers/Section/Section'
import './DateSection.css'

export default function DateSection({datetime}) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

  return (
    <Section className="date">
      {`${days[datetime.getDay()]} ${months[datetime.getMonth()]} ${datetime.getDate()}, ${datetime.getFullYear()}`}
    </Section>
  )
}
