import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Heading from './components/Heading';
import Signup from './pages/user/Signup';
import Login from './pages/user/Login';
import MyPage from './pages/user/MyPage';
import Upload from './pages/product/Upload';
import Product from './pages/product/Product';
import Edit from './pages/product/Edit';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, clearUser } from './reducer/userSlice.js';
import firebase from './firebase.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/product/:productNum" element={<Product />} />
        <Route path="/edit/:productNum" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
