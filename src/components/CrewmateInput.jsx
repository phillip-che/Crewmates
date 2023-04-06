const CrewmateInput = () => {
    return (
        <div className="crewmate-input" >
            <div className="name-input">
                <h3>Name:</h3>
                <input
                type="text" 
                placeholder="Enter Crewmate's Name">
                </input>
            </div>

            <div className="speed-input">
                <h3>Speed (MPH):</h3>
                <input
                type="text" 
                placeholder="Enter Speed in MPH">
                </input>
            </div>

            <div className="color-input">
                <h3>Color:</h3>
                <ul className="color-options">
                    <input type="radio" name="color" />
                    <label> Red</label><br />
                    <input type="radio" name="color" />
                    <label> Green</label><br />
                    <input type="radio" name="color" />
                    <label> Purple</label><br />
                    <input type="radio" name="color" />
                    <label> Yellow</label><br />
                    <input type="radio" name="color" />
                    <label> Orange</label><br />
                    <input type="radio" name="color" />
                    <label> Pink</label><br />
                    <input type="radio" name="color" />
                    <label> Rainbow</label>
                </ul>
            </div>
        </div>
    )
}

export default CrewmateInput