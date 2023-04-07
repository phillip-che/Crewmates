import crewmateImg from "../assets/crewmate.ce385016.png"

const CrewmateCard = ({name, speed, color}) => {
    return (
        <div className="crewmate-card">
            <img src={crewmateImg} className="single-crewmate"></img>
            <h4>Name: {name}</h4>
            <h4>Speed: {speed}</h4>
            <h4>Color: {color}</h4>
            <button className="edit-button">Edit Crewmate</button>
        </div>
    )
}

export default CrewmateCard