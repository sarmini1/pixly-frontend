import React, { useState } from "react";
import piexif from "piexifjs";

/**
 * 
 * 
 * 
 * 
 */
function NewPhotoForm({ extractEXIFInfo, addPhoto, uploadPhoto }) {

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  console.log("NewPhotoForm selectedPhoto --->", selectedPhoto);


  function handleChange(evt) {
    const photoFile = evt.target.files[0];
    setSelectedPhoto(photoFile);
  }

  async function handleSubmit(evt) {

    evt.preventDefault();
    var reader = new FileReader();
    reader.onloadend = async function (e) {
      const res = await fetch(e.target.result)
      const blob = await res.blob()
      debugger;
      var exifObj = piexif.load(blob);
      debugger;
      for (var ifd in exifObj) {
        if (ifd == "thumbnail") {
          continue;
        }
        console.log("-" + ifd);
        console.log("What is exifObj", exifObj);
        for (var tag in exifObj[ifd]) {
          console.log("  " + piexif.TAGS[ifd][tag]["name"] + ":" + exifObj[ifd][tag]);
        }
      }
    };
    reader.readAsDataURL(selectedPhoto);
  }



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

  return (

    <div>
      <form>
        <input type="file" onChange={handleChange}>
        </input>
        <button onClick={handleSubmit}>
          Submit photo!
        </button>
      </form>
    </div>

  )

}

export default NewPhotoForm;