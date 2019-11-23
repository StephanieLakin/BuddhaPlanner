import React from 'react'


const ProjectDetails = (props) => {
    const id = props.match.params.id;
    console.log(props)
    return(     
<div className="container section project details">
 <div className="card z-depth-0 ">
     <div className="card-content ">
         <span className="card-title">
             Project Title - {id}
         </span>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore fugiat illo, nesciunt, vero velit perspiciatis totam sequi aliquid asperiores et necessitatibus nulla odio. Dignissimos voluptate odit, eius rem voluptas ipsam.</p>
        <div className="card-action grey lighten-4 grey text">
        <div >Posted by: user</div>
        <div>5 August 2019</div>          
     </div>
 </div>
</div>
</div>
 )
}
export default ProjectDetails