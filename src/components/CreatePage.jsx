import amongus from '../assets/amongus.png'
import CrewmateInput from './CrewmateInput'
import { supabase } from '../client'
import { useState } from 'react'

const CreatePage = () => {

    const [crewmate, setCrewmate] = useState({
        name: "",
        speed: 0,
        color: ""
    });

    const createCrewmate = async () => {
        await supabase
        .from('Crewmates')
        .insert({name: crewmate.name, speed: crewmate.speed, color: crewmate.color})
        .select();

        window.alert("Crewmate Successfully Created.")
    }

    const handleChange = (event) => {
        console.log("name: " + event.target.name + " value: " + event.target.value);
        setCrewmate((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div>
            <h1>Create a New Crewmate</h1>
            <img className="create-bg" src={amongus} />
            <CrewmateInput onChange={handleChange} />
            <button className="create-button" onClick={createCrewmate}>
                Create Crewmate
            </button>
        </div>
    )
}

export default CreatePage