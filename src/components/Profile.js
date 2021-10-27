import React from 'react'

const Profile = ({photo, profession, fullName, bio, handleName}) => {
    return (
       
           <div className="container" onClick={()=> handleName(fullName)} >
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={photo} style={{width:"400px", height:"600px"}} alt="profile one" />
            </div>
            <ul className="social-icons">
              <li>
                <a href>
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fab fa-dribbble" />
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>{fullName}
                <br />
                <span className="job-title">{profession}</span>
                <p>{bio}</p>
              </h2>
            </div>
          </div>
        </div>{/* end box wrapper */} 
 
      </div>
    
    )
}
Profile.defaultProps={
    photo:"https://img-4.linternaute.com/JJ0Skx8vB7zmLBWaT9Zevs-N4Cc=/1240x/smart/7ed2862b6c20462fba01314b3d0cb8cc/ccmcms-linternaute/17258928.jpg"  ,  
    fullName:"anonym",
    bio:"insert bio"

}
export default Profile
 