import React from "react";
import "./App.css"
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer store={props.store}/>}/>
                        <Route path="/profile/*" element={<Profile store={props.store}/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
