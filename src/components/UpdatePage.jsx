import amongus from '../assets/amongus.png'
import CrewmateInput from './CrewmateInput'

const UpdatePage = () => {
    return (
        <div className="update-page">
            <h1>Update Your Crewmate</h1>
            <img className="update-bg" src={amongus} />
            <h3>Current Crewmate Info:</h3>
            <CrewmateInput />

            <button className="update-button">
                Update Crewmate
            </button>

            <button className="delete-button">
                Delete Crewmate
            </button>
        </div>
    )
}

export default UpdatePage