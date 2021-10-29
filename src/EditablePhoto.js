import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

/** EditablePhoto
 * 
 * Props: none for now
 * 
 * State:
 * - photo: individual photo object {id, image_url, ...}
 * 
 * App --> Routes --> EditablePhoto
 */
function EditablePhoto() {

  const { id } = useParams();

  const [photo, setPhoto] = useState(null);

 //TODO consider moving ajax calls to app and pass down as props?
  useEffect(function loadPhotoInfo() {

    async function fetchPhotoInfo() {
      console.log("fetchphoto in useeffect running");
      try {
        let response = await axios({
          method: 'get',
          url: `http://localhost:5000/image/${id}`
        });
        console.log("useEffect response is", response.data);
        setPhoto(curr => response.data);
      } catch (err) {
        console.error("App fetchPhotoInfo error", err);
        setPhoto(null);
      }
    }
    fetchPhotoInfo();
  }, [id]);

  async function addBlackAndWhite(){
    try {
      let response = await axios.post(
        `http://localhost:5000/image/${id}/black_and_white`,
        photo);
      console.log("response from black and white edit is", response);
    } catch(err){
      console.error(err);
    }
  }

  if (!photo){
    return <h1>Loading...</h1>;
  }

  console.log("EditablePhoto component rendered, photo is", photo );


  return (
    <div>
      <h2>Editing photo {id}</h2>
      <img src={photo.image_url} alt={photo.image_url}/>
      <br/>
      <button onClick={addBlackAndWhite}>Black and White!</button>
    </div>
  )

}

export default EditablePhoto;