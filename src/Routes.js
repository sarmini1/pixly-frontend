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
 * 
 * App --> Routes --> Home, NewPhotoForm
 */
function Routes({ photos, addPhoto }) {

  console.log("routes rendered, photos", photos);
  return (
    <Switch>
      <Route exact path="/">
        <Home photos={photos} test="hello" />
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

//<EditPhotoForm editPhoto={editPhoto}/>
