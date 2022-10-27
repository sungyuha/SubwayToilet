import Layout from "./Components/Layout";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import PageNotice from "./pages/PageNotice";
import PageSuggest from "./pages/PageSuggest";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import PageNotice_Write from "./pages/PageNotice_Write";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page-notice" element={<PageNotice />} />
        <Route path="/page-notice/write" element={<PageNotice_Write />} />
        <Route path="/page-suggest" element={<PageSuggest />} />
        
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
