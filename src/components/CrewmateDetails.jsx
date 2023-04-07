import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom"
import suspect from "../assets/suspect.bdfacc7e.png"

const CrewmateDetails = () => {

    let params = useParams();

    const [crewmate, setCrewmate] = useState([])

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
    }, [])

    return (
        <div>
            <h1>Crewmate: {crewmate.name}</h1>
            <h1>Stats:</h1>
            <h2>Color: {crewmate.color}</h2>
            <h2>Speed: {crewmate.speed} MPH</h2>
            {crewmate.speed >= 10 ? (
                <h3> 
                    Wow, this Crewmate is super fast, that will be helpful! 🏃💨
                </h3>
            ) : (
                <h3> 
                    You may want to find a Crewmate with more speed, this one is kind of slow 😬
                </h3>
            )}
            <Link to={`/${params.crewmateID}/edit`}>
                <button>Wanna edit this Crewmate?</button>
            </Link>
            <div>
                <img height="150px" src={suspect} />
            </div>
        </div>
    )
}

export default CrewmateDetails