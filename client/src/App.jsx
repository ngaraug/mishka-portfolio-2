import './App.css'
import ArticlesPage from './pages/ArticlesPage.jsx'
import BlogsPage from './pages/BlogsPage.jsx'
import BooksRecPage from './pages/BooksRecPage.jsx'
import Home from "./pages/Home.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AdminLogin from './pages/admin/AdminLogin.jsx'
import SingleBlogPage from './pages/SingleBlogPage.jsx'
import AdminHome from './pages/admin/AdminHome.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/articles' element={<ArticlesPage />}/>
          <Route path='/blogs' element={<BlogsPage />}/>
          <Route path='/reviews' element={<BooksRecPage />}/>
          <Route path='/admin' element={<AdminLogin />}/>
          <Route path='/admin/home' element={<AdminHome />}/>
          <Route path='/blogs/:blogTitle' element={<SingleBlogPage />}/> {/* Temporary */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
