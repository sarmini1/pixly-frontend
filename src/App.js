import './App.css';
import "axios";
import EXIF from "exif-js";

function App() {

  //isLoading state
  //list of photos state

  function extractEXIFInfo(selectedPhoto){
    //utilizes exif js library and returns
    //an object of information
    const photoData = EXIF.getData(selectedPhoto);
    console.log(photoData);
    
  }

  async function uploadPhoto(selectedPhoto){
    //uploads image to AWS
  }

  async function addPhoto(NewPhotoFormData){
    //makes axios POST request to /photos endpoint
    //with NewPhotoFormData passed in
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
