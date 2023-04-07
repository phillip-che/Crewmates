import { useEffect, useState } from "react"
import CrewmateCard from "./CrewmateCard"
import { supabase } from "../client";
import { Link } from "react-router-dom"

const GalleryPage = () => {

    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const getCrewmates = async () => {
            await supabase
            .from('Crewmates')
            .select()
            .order('created_at', { ascending: true })
            .then(({data}) => {
                setCrewmates(data);
            });
        }
        getCrewmates();
    }, [])

    return (
        <div className="gallery">
            <h1>Your Crewmate Gallery</h1>
            {crewmates ? (
                <div className="crewmate-list">
                    {crewmates.map((crewmate) => (
                        <Link 
                        className="link"
                        to={`/${crewmate.id}`}
                        key={crewmate.id}
                        >
                            <CrewmateCard
                            name={crewmate.name}
                            speed={crewmate.speed} 
                            color={crewmate.color}
                            />
                        </Link>
                    ))}
                </div>
            ) : (
                <div>Your Gallery is Empty</div>
            )}
        </div>
    )
}

export default GalleryPage