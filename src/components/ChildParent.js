import Compo from "./Compo"

const Parent = ({ children }) => {
    return <>
        <h1>Parent</h1>
        {children}
    </>
}



const ChildParent = () => {
    return (
        <>
            <Parent>
                <Compo />
            </Parent>
        </>
    )
}

export default ChildParent