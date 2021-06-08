# App

Props: none
State: 
- isLoading????
- photos- array of photo objects which gets populated by fetchPhotos


- readPhoto(???)-- a function that reads EXIF data that we pass to our submit photo form
- addPhoto-- function that makes a POST request to /photos endpoint with formData passed in
- fetchPhotos-- makes a GET request to /photos endpoint utilizing full text search in some way??

Would have some conditional rendering

# Photo List

Props
- List of photos, array of objects
State
- none???

Maybe a presentational component that just renders HTML for each photo

# NewPhotoForm

Props: 
- function from App to read EXIF data
- function from App to make POST axios request to /photos endpoint
State:
- NewPhotoFormData
- maybe some isSuccessful boolean?

Would have regular handleChange function
Would try/catch addPhoto function passed down from App

# SearchPhotosForm

Props:
- fetchPhotos function from App to retrieve relevant photos
State:
- SearchPhotoFormData
- also maybe some isSuccessful boolean?

regular handleChange function
handleSubmit function, which would try/catch fetchPhotos

# EditPhotosForm

Props:
- some editPhoto function
- maybe particular photo's style properties????
State:
- probably various fields for what's being edited

Regular form boilerplate stuff
handleChange would make styling changes live, so the style
fields in the rendered HTML would change dynamically upon state changes
handleSubmit would probably call some function from App that sends
request to save changes made