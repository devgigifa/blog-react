import DefaultPage from "componentes/DefaultPage";
import Footer from "componentes/Footer";
import ScrollToTop from "componentes/ScrollToTop";
import NotFound from "paginas/NotFound";
import Post from "paginas/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Home from './paginas/Home';
import About from './paginas/About';

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="sobremim" element={<About />} />
        </Route>
        
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
