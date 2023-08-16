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
        alert(e.target.value)
    }
    return (
        <>
            <form action="">
                <input type="text" placeholder='Enter Text' name='inp' onChange={handleInp} />

                <button onClick={handleSubmit} type="submit">submit</button>
                <button type="reset">reset</button>
            </form>

            <form action="">

                <input type="text" />
                <button type='submit' onKeyPress={handleKeyPress}>Button</button>
            </form>
        </>
    )
}

export default Form