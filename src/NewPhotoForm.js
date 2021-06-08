import React, { useState } from "react";

/**
 * 
 * 
 * 
 * 
 */
function NewPhotoFormData({ extractEXIFInfo, addPhoto, uploadPhoto }) {

  const [selectedPhoto, setSelectedPhoto] = useState(null);


  function handleChange(evt) {
    const photoFile = evt.target.files[0];
    setSelectedPhoto(photoFile);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try{
    await uploadPhoto(selectedPhoto);
    await extractEXIFInfo(selectedPhoto);
    await uploadPhoto(selectedPhoto);
    } catch (err){
      console.log(err);
    }
  }


  return (

    <div>
      <input type="file" onChange={handleChange}>
        <button onClick={handleSubmit}>
          Submit photo!
        </button>
      </input>
    </div>

  )

}

export default NewPhotoFormData;