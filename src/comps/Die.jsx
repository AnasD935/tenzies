export default function Die(props) {
    return (
        <button onClick={() => props.holdDice(props.id)} className={props.isHeld ? "held" : ""}>
            {props.value}
        </button>
    )
}