import React from 'react';

const Form = () => {
    let inp;
    const handleInp = (e) => {
        inp = e.target.value
    }

    const handleSubmit = (e) => {
        console.log(inp)
        e.preventDefault()
    }

    const handleKeyPress = (e) => {
        e.preventDefault()
        console.log(e.key)
        console.log(e.target.value)
        if (e.key === 'Enter') {
            alert(e.target.value)
            console.log("You entered enter!")
        }
    }
    return (
        <>
            <form action="">
                <input type="text" placeholder='Enter Text' name='inp' onChange={handleInp} />

                <button onClick={handleSubmit} type="submit">submit</button>
                <button type="reset">reset</button>
            </form>

            <form action="">
                <input type="text"
                    placeholder="Enter something"
                    onKeyPress={handleKeyPress} />
            </form>
        </>
    )
}

export default Form