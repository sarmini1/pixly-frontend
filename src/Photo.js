import { Link } from "react-router-dom";

/** Photo
 * 
 * Props:
 * - id: integer
 * - imageUrl: string
 * 
 * State: none
 * 
 * Home --> Photo
 */
function Photo({ id, imageUrl }) {

  //console.log("Photo component rendered, id is", id );

  return (
    <div>
      <h2>{id}</h2>
      <img src={imageUrl} alt={imageUrl} />
      <br />
      <Link to={`/edit/${id}`}>Edit photo!</Link>
    </div>
  )

}

export default Photo;

