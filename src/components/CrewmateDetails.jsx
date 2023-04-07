import { useParams } from "react-router-dom"

const CrewmateDetails = () => {

    let params = useParams();

    return (
        <div>
            Crewmate ID: {params.crewmateID}
        </div>
    )
}

export default CrewmateDetails