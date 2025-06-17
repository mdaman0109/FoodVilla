import React from "react";
class AboutClass extends React.Component
{

constructor(props)
{
    super(props)
    this.state=
    {
        userInfo:
        {
            name : "aman"
        }
    }
}


async componentDidMount()
{
    const data = await fetch("https://api.github.com/users/mdaman0109")
    const json = await data.json()

    this.setState(
        {
            userInfo : json
        }
    )
}

    render()
    {
        const{namee,place}=this?.props;
        const{name,login,avatar_url,location,company}=this?.state?.userInfo;
        return(

            
<div className="about">
        <h1>{namee}</h1>
        <h2>{name}</h2>
        <h2>{login}</h2>
        <img src={avatar_url}></img>
        <h3>{location}</h3>
        <h2>{company}</h2>
        <h2>{place}</h2>
        
    </div>

        )
    }
}

export default AboutClass;