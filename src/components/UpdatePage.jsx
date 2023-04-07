import amongus from '../assets/amongus.png'
import CrewmateInput from './CrewmateInput'
import { supabase } from '../client'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UpdatePage = () => {

    const [crewmate, setCrewmate] = useState([]);
    const [inputs, setInputs] = useState({
        name: "",
        speed: 0,
        color: ""
    });
    let params = useParams();

    useEffect(() => {
        const getCrewmate = async () => {
            await supabase
            .from('Crewmates')
            .select()
            .eq('id', params.crewmateID)
            .then((response) => {
                console.log(response.data[0])
                setCrewmate(response.data[0]);
            }) 
        }
        getCrewmate();
    }, []);

    const updateCrewmate = async () => {
        console.log(inputs)
        if(inputs.name.length > 0) {
            await supabase
            .from('Crewmates')
            .update({name: inputs.name})
            .eq('id', params.crewmateID)
        }
        if(inputs.speed > 0) {
            await supabase
            .from('Crewmates')
            .update({speed: inputs.speed})
            .eq('id', params.crewmateID)
        }
        if(inputs.color.length > 0) {
            await supabase
            .from('Crewmates')
            .update({color: inputs.color})
            .eq('id', params.crewmateID)
        }
        window.location.reload();
        window.alert("Crewmate Successfully Updated.")
    }

    const deleteCrewmate = async () => {
        await supabase
        .from('Crewmates')
        .delete()
        .eq('id', params.crewmateID)

        window.location = "/gallery";
        window.alert("Crewmate Successfully Deleted.")
    }

    const handleChange = (event) => {
        console.log("name: " + event.target.name + " value: " + event.target.value);
        setInputs((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div className="update-page">
            <h1>Update Your Crewmate</h1>
            <img className="update-bg" src={amongus} />
            <h2>Current Crewmate Info:</h2>
            <h3>Name: {crewmate.name}, Speed: {crewmate.speed}, Color: {crewmate.color}</h3>
            <CrewmateInput onChange={handleChange} />

            <button className="update-button" onClick={updateCrewmate}>
                Update Crewmate
            </button>

            <button className="delete-button" onClick={deleteCrewmate}>
                Delete Crewmate
            </button>
        </div>
    )
}

export default UpdatePage