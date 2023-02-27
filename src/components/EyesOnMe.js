function EyesOnMe (){
    const focusHandler = () => {
        alert("Good!")
    }
    const blurHandler = () => {
        alert("Hey! Eyes on me!")
    }
    return (
        <div>
            <button onFocus={focusHandler} onBlur={blurHandler} >
                Click me
            </button>
        </div>
    )
}

export default EyesOnMe;