import React from 'react'
import "./IIB.css"

const IIB = () => {
    let changeSize = "changeSize"
    const handleMouseOver = (e) => {
        changeSize = "img"
        e.target.className = changeSize
    }

    const handleMouseLeave = (e) => {
        changeSize = "changeSize"
        e.target.className = changeSize
    }

    const handleOnClick = (e) => {
        console.log("single click")
    }

    const handleOnDoubleClick = (e) => {
        alert("double click")
    }

    const handleOnBlur = (e) => {
        console.log("on blur,  out of the input box")
    }

    const handleOnFocus = (e) => {
        console.log("on focus, on input box")
    }

    const handleOnCopy = () => {
        console.log("Copy")
    }

    const handleOnPaste = () => {
        console.log("Paste")
    }

    const handleOnCut = () => {
        console.log("Cut")
    }

    const handleCloseWindow = () => {
        window.open(window.location)
        window.close()
    }

    return (
        <>
            <div>
                <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" className={changeSize} onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} alt="placeholderImg" />
            </div>

            <div>
                <input type="text" placeholder='Enter Value' onFocus={handleOnFocus} onBlur={handleOnBlur} />
            </div>

            <div>
                <button onClick={handleOnClick} onDoubleClick={handleOnDoubleClick}>Button</button>
            </div>

            <div>
                <p onCopy={handleOnCopy} onCut={handleOnCut} onPaste={handleOnPaste}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente voluptatum nulla qui vitae voluptate voluptatem. Quos perspiciatis recusandae ullam sequi rerum ad possimus veritatis, soluta explicabo sunt at mollitia temporibus Error tempore iure deserunt quam explicabo voluptatum repellendus nulla incidunt magnam, doloremque quasi nobis fugit. Iste earum molestias harum incidunt? Vel similique maiores fugiat earum facere. Dolorum laudantium beatae nisi?
                </p>

                <button onClick={handleCloseWindow}>Close Window</button>
            </div>
        </>
    )
}

export default IIB