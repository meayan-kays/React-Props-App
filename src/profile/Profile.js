import React from 'react'
import ProTypes from 'prop-types'

const spanStyle = {textTransform : "uppercase", fontSize : "30px", color : "#00A8CC"}
const buttonStyle = {width : "150px", backgroundColor : "#79bbff", padding :" 15px" , fontFamily : "Trebuchet MS",
                    fontSize: "20px", fontWeight : "bold", color: "white", background:"linear-gradient(to bottom, #79bbff 5%, #378de5 100%)",
                    cursor :"pointer", border : "1px solid #337bc4", marginLeft : "125px"}

const Profile = props => {
    function  handleName (e){
        e.preventDefault();
       alert(`Profile User's Name is ${props.fullName}`);
    }

    return (
        <div style={{display : "flex",flexDirection : "row-reverse", justifyContent : "flex-end"}}>
            <div style={{margin : "50px", display : "flex", flexDirection : "column", justifyContent : "space-between"}}>
                <h2>My name is <span style={spanStyle}>{props.fullName}</span></h2>
                <h3>{props.bio}</h3>
                <h3>I am  <span style={spanStyle}>{props.profession}</span></h3>
                <button onClick={handleName} style={buttonStyle}>Show Me</button>
            </div>
            <hr style={{margin :" 25px 50px", border : "1px solid #81b214"}} />
            <div style={{margin : "25px"}}>
                {props.children}
            </div>
        </div>
    )
}

Profile.defaultProps = {
    fullName : "John Doe",
    bio : "This is my biography.",
    profession : "Multi-Professional Jobs",
}

Profile.proTypes = {
    fullName : ProTypes.string,
    bio : ProTypes.string,
    profession : ProTypes.string,
    handleName : ProTypes.func
}

export default Profile
