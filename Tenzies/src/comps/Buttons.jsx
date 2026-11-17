import './Buttons.css'

function Buttons(props) {

    const buttons = props.numbers.map((num) => {
        return (
            <button className="die-button" isHeld={false}>
                {num}
            </button>
        )
    })

    return (
        <div className="buttons-container">
            {buttons}
        </div>
    )
}

export default Buttons