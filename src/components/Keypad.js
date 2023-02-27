
function Keypad (){

    const handleChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <button>
            <input type="text" placeholder="password" onChange={handleChange}/>
            </button>
        </div>
    )
}

export default Keypad;