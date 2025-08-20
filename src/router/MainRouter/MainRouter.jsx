import Home from "../../pages/Home/Home";
import Signin from "../../pages/Signin/Signin";
import Write from "../../pages/Write/Write";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<Write />} />
        <Route path="/board" element={<Board />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default MainRouter;