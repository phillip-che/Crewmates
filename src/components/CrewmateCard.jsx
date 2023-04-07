import crewmateImg from "../assets/crewmate.ce385016.png"

const CrewmateCard = ({name, speed, color}) => {
    return (
        <div className="crewmate-card" id={color}>
            <img src={crewmateImg} className="single-crewmate"></img>
            <h3>Name: {name}</h3>
            <h3>Speed: {speed}</h3>
            <h3>Color: {color}</h3>
            <button className="edit-button">Edit Crewmate</button>
        </div>
    )
}

export default CrewmateCard