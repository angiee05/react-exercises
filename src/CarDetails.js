import React, { useEffect, useRef } from 'react'

export default function CarDetails({initialData = { model: "fiat", year: 2009, color: "grey" }}) {
    const modelRef = useRef()
    const yearRef = useRef()
    const colorRef = useRef()

    useEffect(() => {
        modelRef.current.value = initialData.model
        yearRef.current.value = initialData.year
        colorRef.current.value = initialData.color
        
    }, [initialData])


    return (
        <div>
            <form>
                <label>Modello:</label>
                <input ref={modelRef} name='model'></input>
                <label>Anno:</label>
                <input ref={yearRef} name='year'></input>
                <label>Colore:</label>
                <input ref={colorRef} name='color'></input>
            </form>
        </div>
    )
}
