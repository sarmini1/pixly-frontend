import { Link } from "react-router-dom";
import Photo from "./Photo";

/** Home
 * 
 * Props:
 * - photos: array of photo objects [{id, description, image_url, ...}]
 * 
 * State: none
 * 
 * Routes --> Home --> Photo
 */
function Home({ photos }) {

  console.log("Home component rendered, photos are", photos);

  return (
    <div>
      <h1>Pixly</h1>
      <Link to="/upload">Upload a new photo!</Link>
      {photos.map(photo => <Photo
        id={photo.id}
        key={photo.id}
        imageUrl={photo.image_url}
      ></Photo>)}
    </div>
  )

}

export default Home;