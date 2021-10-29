import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from "./Home";
import NewPhotoForm from './NewPhotoForm';
import EditablePhoto from './EditablePhoto';

/** Routes component
 * 
 * Props:
 * - photos: array of photo objects [{id, description, image_url, ...}]
 * - addPhoto: function for sending photo to cloud via ajax 
 * 
 * State:
 * - none
 * 
 * App --> Routes --> Home, NewPhotoForm
 */
function Routes({ photos, addPhoto }) {

  console.log("routes rendered, photos", photos);
  return (
    <Switch>
      <Route exact path="/">
        <Home photos={photos} />
      </Route>
      <Route exact path="/upload">
        <NewPhotoForm addPhoto={addPhoto} />
      </Route>
      <Route exact path="/edit/:id">
        <EditablePhoto />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;