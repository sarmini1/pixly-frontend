import { Link } from "react-router-dom";
import Photo from "./Photo";

/** Home
 * 
 * Props: none for now
 * 
 * State: none
 * 
 * App --> Routes --> Home
 */
function Home({ photos, test }) {

  console.log("Home component rendered, photos are", photos);
  console.log("Home component rendered, test prop is", test);

  return (
    <div>
      <h1>Pixly</h1>
      <Link to="/upload">Upload a new photo!</Link>
      {photos.map(photo => <Photo
        id={photo.id}
        key={photo.id}
        image_url={photo.image_url}
      ></Photo>)}
    </div>
  )

}

export default Home;