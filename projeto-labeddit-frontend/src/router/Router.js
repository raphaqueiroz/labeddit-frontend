import LoginPage from "../pages/loginpage/LoginPage";
import SignupPage from "../pages/signupPage/SignupPage"
import PostsPage from "../pages/postsPage/PostsPage";
import PostPage from "../pages/postPage/PostPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
                <Route path="/posts" element={<PostsPage/>} />
                <Route path="/post/:id" element={<PostPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router