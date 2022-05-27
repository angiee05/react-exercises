import React from 'react'

export default function Sum({ numbers }) {
  return (
    <div>
        <h1>La somma è:{numbers.reduce((a,b) => a+b)}</h1>
    </div>
  )
}
