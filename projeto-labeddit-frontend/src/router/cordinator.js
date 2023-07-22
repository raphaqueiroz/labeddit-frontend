export const handleHome = (navigate) => {
    navigate("/");
};

export const handleSignUp = (navigate) => {
    navigate("/signup");
};

export const handlePosts = (navigate) => {
    navigate("/posts");
};

export const handlePost = (navigate, id) => {
    navigate(`/post/${id}`);
};