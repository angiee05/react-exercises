import React from 'react'

export default function Sum({ numbers = [1,2,3,4] }) {
  return (
    <div>
        <h1>La somma è:{numbers.reduce((a,b) => a+b)}</h1>
    </div>
  )
}
