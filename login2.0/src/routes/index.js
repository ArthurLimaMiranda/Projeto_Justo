import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-routes-dom";
import Home from "../pages/home";
import Signin from "../pages/Signin/styles";
import Signup from "../pages/Signup/styles";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />;
};


const RoutesApp = () => {
    return (
        <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/home" element={<Private Item={Home}/> }/>
                <Route path="/" element={<Signin />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route path="*" element={<Signin />} />

            </Routes>
        </Fragment>
        </BrowserRouter>
    );
};

export default  RoutesApp;