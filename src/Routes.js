import NavBar from 'components/NavBar';
import PaginaPadrao from 'components/PaginaPadrao';
import Home from 'pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<PaginaPadrao />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router