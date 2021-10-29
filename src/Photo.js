import { Link } from "react-router-dom";

/** Photo
 * 
 * Props: none for now
 * 
 * State: none
 * 
 * App --> Routes --> Home
 */
function Photo({id, image_url}) {

  //console.log("Photo component rendered, id is", id );

  return (
    <div>
      <h2>{id}</h2>
      <img src={image_url} alt={image_url}/>
      <br/>
      <Link to={`/edit/${id}`}>Edit photo!</Link>
    </div>
  )

}

export default Photo;

