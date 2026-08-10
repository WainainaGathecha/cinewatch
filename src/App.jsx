import { Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/layout/Navbar';
import BottomNav from './components/ui/layout/BottomNav';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

function App() {
    return (
        <div className='bg-surface min-h-screen text-on-surface'>
            <Navbar />
                        
            <main className='pt-16 pb-20'>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/search' element={<SearchPage />}></Route>
                    <Route path="/movie/:id" element={<MovieDetailsPage />}></Route>
                </Routes>
            </main>
            <BottomNav />

        </div>
    );
}


export default App