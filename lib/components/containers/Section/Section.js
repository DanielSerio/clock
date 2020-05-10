import React from 'react'

export default function Section({className, children}) {
  return <section className={`section ${className ? className : ''}`}>{children}</section>;
}
