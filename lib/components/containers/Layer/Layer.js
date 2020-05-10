import React from 'react'
import './Layer.css'

export default function Layer({ isMain, className, zIndex, color, children }) {
  return (
    <>
      {isMain &&
        <main className={`layer ${className ? className : ''}`} style={{ zIndex: zIndex, color }}>
          <div className="layer-inner">
            {children}
          </div>
        </main>
      }
      {!isMain &&
        <section className={`layer ${className ? className : ''}`} style={{ zIndex: zIndex, color }}>
          <div className="layer-inner">
            {children}
          </div>
        </section>
      }
    </>
  )
}
