import CrewmateCard from "./CrewmateCard"

const GalleryPage = ({crewmates}) => {
    return (
        <div>
            <h1>Your Crewmate Gallery</h1>
            {crewmates ? (
                <div>
                    {crewmates.map((crewmate) => {
                        <CrewmateCard 
                        key={crewmate.name}
                        name={crewmate.name}
                        color={crewmate.color}
                        speed={crewmate.speed} 
                        />
                    })}
                </div>
            ) : (
                <div>Your Gallery is Empty</div>
            )}
        </div>
    )
}

export default GalleryPage