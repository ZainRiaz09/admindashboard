import React from 'react'

const Card = ({ data }) => {
    const { heading, subheading, image,color, projects } = data;
  return (
    <div className="card box" style = {{backgroundColor: color}}>
      
    <div>
    <div className="boxHeading d-flex justify-content-between">
      <div className="card-content">
        <h6>{heading}</h6>
        <p>{subheading}</p>
      </div>
      <div>
      <img src={`/img/${image}`} alt="" />
      </div>
    </div>
    <div className="boxDes">
      <div>
      {projects.map((project, index) => (
            <ul key={index} className="d-flex justify-content-between flex-row flex-wrap">
              <li>{project.projectName}</li>
              <li className="boxDesStatus">{project.status}</li>
            </ul>
          ))}
       
      </div>
      </div>
    </div>
    </div>
  )
}

export default Card