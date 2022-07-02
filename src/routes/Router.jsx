import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Followers } from "../pages/followers/Followers";
import { Footer } from "../pages/footer/Footer";
import { Home } from "../pages/home/Home";
import { Navbar } from "../pages/navbar/Navbar";
import { RepoDetails } from "../pages/repoDetails/RepoDetails";


export const Router = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/followers'} element={<Followers />} />
                <Route path={'/details/:id'} element={<RepoDetails />} />
            </Routes>

            <Footer />
        </>
    );
};