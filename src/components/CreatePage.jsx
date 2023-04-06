import amongus from '../assets/amongus.png'
import CrewmateInput from './CrewmateInput'

const CreatePage = () => {
    return (
        <div>
            <h1>Create a New Crewmate</h1>
            <img className="create-bg" src={amongus} />
            <CrewmateInput />
        </div>
    )
}

export default CreatePage