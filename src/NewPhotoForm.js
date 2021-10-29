import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
//import piexif from "piexifjs";

/** New Photo Form
 * 
 * Props:
 * - addPhoto: function to add a new photo to cloud
 * 
 * State:
 * - selectedPhoto: null or file
 * - photoTitle: string
 * - uploadComplete: boolean
 * 
 * Routes --> NewPhotoForm
 */
function NewPhotoForm({ addPhoto }) {

  //const [name, setName] = useState("test");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // TODO consider changing photoTitle state to formData, holding more text fields
  const [photoTitle, setPhotoTitle] = useState("");
  const [uploadComplete, setUploadCompleted] = useState(false);
  console.log("NewPhotoForm selectedPhoto --->", selectedPhoto);


  function handleChange(evt) {

    const { name, value } = evt.target;

    if (name === "photoTitle") {
      setPhotoTitle(curr => value);
    } else {
      const photoFile = evt.target.files[0];
      setSelectedPhoto(photoFile);
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    const data = new FormData();
    console.log("selectedphoto in submit is", selectedPhoto);
    data.append('selectedPhoto', selectedPhoto);
    //data.append('photoTitle', photoTitle);
    console.log("data in submit is", data.get('selectedPhoto'));

    try {
      await addPhoto(data)
      setSelectedPhoto(null);
      setUploadCompleted(true);
    } catch (err) {
      console.error("error is", err);
      setUploadCompleted(false);
    }
  }

  if (uploadComplete) {
    return <Redirect to="/" />
  }

  return (

    <div>
      <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="photoTitle"
          value={photoTitle}
          onChange={handleChange}>
        </input>
        <input
          type="file"
          onChange={handleChange}>
        </input>
        <button>
          Submit photo!
        </button>
      </form>
    </div>
  );

}

export default NewPhotoForm;



  // await uploadPhoto(selectedPhoto);
  // await extractEXIFInfo(selectedPhoto);
  // await uploadPhoto(selectedPhoto);


  //   // Callback from a <input type="file" onchange="onChange(event)">
  //   var reader = new FileReader();
  //   reader.onload = function (e) {
  //     // The file's text will be printed here
  //   };
  //   let readFile = reader.readAsDataURL(selectedPhoto);
  //   console.log("readFile--->", readFile)


  // }