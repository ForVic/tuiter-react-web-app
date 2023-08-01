import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen/index";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import TuitSummaryList from "./tuit-summary-list";
import { Navigate } from "react-router";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import tuitsReducer from "./reducers/tuits-reducer";
import {Provider} from "react-redux";


function Tuiter() {
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});
  return (
    <Provider store={store}>
    <div>
      <Nav />
      <div className="row">
        <div className="col-2">
          <NavigationSidebar />
        </div>
        <div className="col-7">
          <Routes>
            <Route path="/" element={<Navigate to="./home"/>} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
        <div className="col-3">
          <div className="d-none d-lg-block">
            <WhoToFollowList/>
            </div>
        </div>
      </div>
    </div>
    </Provider>
  );
}
export default Tuiter;
