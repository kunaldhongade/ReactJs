import React from 'react'

const List = ({ layout, items }) => {
    return (
        <>
            {/* <ul type={layout}> */}
            <ul style={{ listStyleType: layout }}>
                {items.map(elem => {
                    return <li>{elem}</li>
                })}
            </ul>
        </>
    )
}

export default List