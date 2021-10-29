import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import "axios";
import EXIF from "exif-js";
import Routes from "./Routes";
import axios from "axios";
// import NewPhotoForm from "./NewPhotoForm";
//import NavBar from "./NavBar";


function App() {

  const [needsPhotos, setNeedsPhotos] = useState(true);
  const [photos, setPhotos] = useState(null);
  const [debug, setDebug] = useState(Math.random())

  console.log("App component rendered, photos are", photos);
  console.log("App component rendered, loading state is", needsPhotos);
  console.log("App component debug", debug);

  useEffect(function loadPhotoInfo() {

    async function fetchPhotoInfo() {
      console.log("fetchphoto in useeffect running");
      try {
        let response = await axios({
          method: 'get',
          url: 'http://localhost:5000/photos'
        });
        console.log("useEffect response is", response.data);
        setPhotos(curr => response.data);
        setNeedsPhotos(false);
        //setNeedsPhotos(false);
      } catch (err) {
        console.error("App fetchPhotoInfo error", err);
        setNeedsPhotos(true);
      }
    }
    //setNeedsPhotos(true);
    fetchPhotoInfo();
  }, []);

  async function addPhoto(photoData){
    let response = await axios.post(
      'http://localhost:5000/new',
      photoData);
    setPhotos(currPhotos => [response.data, ...currPhotos]);
  }

  if (needsPhotos){
    return <h1>Loading</h1>;
  }

  console.log("ACTUAL CONTENT RENDERED, PHOTOS ARE", photos);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes photos={photos} addPhoto={addPhoto}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
