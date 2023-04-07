const CrewmateInput = ({onChange}) => {
    return (
        <div className="crewmate-input" >
            <div className="name-input">
                <h3>Name:</h3>
                <input
                name="name"
                type="text"
                onChange={onChange} 
                placeholder="Enter Crewmate's Name">
                </input>
            </div>

            <div className="speed-input">
                <h3>Speed (MPH):</h3>
                <input
                name="speed"
                type="text"
                onChange={onChange} 
                placeholder="Enter Speed in MPH">
                </input>
            </div>

            <div className="color-input">
                <h3>Color:</h3>
                <ul className="color-options">
                    <input type="radio" value="red" name="color" onChange={onChange} /> Red
                    <br />
                    <input type="radio" value="green" name="color" onChange={onChange} /> Green
                    <br />
                    <input type="radio" value="purple" name="color" onChange={onChange} /> Purple
                    <br />
                    <input type="radio" value="yellow" name="color" onChange={onChange} /> Yellow
                    <br />
                    <input type="radio" value="orange" name="color" onChange={onChange} /> Orange
                    <br />
                    <input type="radio" value="pink" name="color" onChange={onChange} /> Pink
                    <br />
                    <input type="radio" value="rainbow" name="color" onChange={onChange} /> Rainbow
                </ul>
            </div>
        </div>
    )
}

export default CrewmateInput