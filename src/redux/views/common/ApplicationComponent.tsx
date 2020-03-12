import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ProjectsList from "../projects/ProjectsList";
import MessagesPage from "../messages/MessagesPage";
import {Header} from "./Header";
import {Sidebar} from "./Sidebar";
import {SortRow} from "../projects/Sort";
import {Footer} from "../messages/Footer";

const ApplicationComponent: React.FC = () => {
    return (
        <>
            <Header/>
            <div className='main'>
                <Sidebar/>
                <div className='main__container'>
                    <SortRow/>

                    <BrowserRouter>
                        <Route path='/projects/' component={ProjectsList}/>
                        <Route path='/threads' component={MessagesPage}/>
                    </BrowserRouter>

                </div>
            </div>
            <Footer/>
        </>
    )
};

export default ApplicationComponent;