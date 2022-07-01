import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { RepoDetails } from "../pages/repoDetails/RepoDetails";


export const Router = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/details/:id'} element={<RepoDetails />} />
            </Routes>
        </>
    );
};