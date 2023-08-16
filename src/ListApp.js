import React from 'react'
import List from './List'
const ListApp = () => {

    const items = ["Mango", "Banana", "Coconut", "Kiwi"]
    return (
        <>
            <List layout={"disc"} items={items} />
            <List layout={"circle"} items={items} />
            <List layout={"square"} items={items} />
            <List layout={"decimal"} items={items} />
            <List layout={"decimal-leading-zero"} items={items} />
            <List layout={"lower-roman"} items={items} />
            <List layout={"upper-roman"} items={items} />
            <List layout={"lower-alpha"} items={items} />
            <List layout={"upper-alpha"} items={items} />
            <List layout={"lower-greek"} items={items} />
            <List layout={"upper-greek"} items={items} />
            <List layout={"lower-latin"} items={items} />
            <List layout={"upper-latin"} items={items} />
            <List layout={"armenian"} items={items} />
            <List layout={"georgian"} items={items} />
            <List layout={"upper-latin"} items={items} />
            <List layout={"none"} items={items} />
        </>
    )
}

export default ListApp