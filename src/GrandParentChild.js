// this is event bubbling

import React from 'react'
import "./GrandParentChild.css"

const GrandParentChild = () => {

    const handleOnClick1 = (e) => {
        e.stopPropagation()
        console.log("GrandParent")
    }
    const handleOnClick2 = (e) => {
        e.stopPropagation()
        console.log("parent")
    }
    const handleOnClick3 = (e) => {
        e.stopPropagation()
        console.log("child")
    }
    return (
        <>
            <div className='grandparent' onClick={handleOnClick1}>
                GrandParent
                <div className='parent' onClick={handleOnClick2}>
                    Parent
                    <div className='child' onClick={handleOnClick3}>Child</div>
                </div>
            </div>
        </>
    )
}

export default GrandParentChild