import React, { useState } from 'react'
import "./Size.css"

function Size() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const size = [6, 7, 8, 9, 10, 11]

    const setSize = (index) => {
        setCurrentIndex(index);
    }

    return (
        <div className='Size'>
            <div className='SizeDisplay'>
                <h5><strong>SELECT SIZE (UK Size): </strong>{size[currentIndex]}</h5>
                <p>size Guide</p>
            </div>
            <div className='SelectSize'>
                {size.map((value, index) => {
                    return <div
                        key={index}
                        onClick={() => setSize(index)}
                        className={currentIndex === index ? 'sizeActive' : 'unactive'}
                    >{value}</div>
                })}
            </div>

        </div>
    )
}

export default Size