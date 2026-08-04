import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/ui/layout/Navbar';
import BottomNav from './components/ui/layout/BottomNav';
import HeroSection from './components/ui/movies/HeroSection';
import PopularSection from './components/ui/movies/PopularSection';
import TrendingSection from './components/ui/movies/TrendingSection';
import SearchPage from './pages/SearchPage';

function App() {
    return (
        <div className='bg-surface min-h-screen text-on-surface'>
            <BrowserRouter>            
                <main className='pt-16 pb-20'>
                    <Routes>
                        <Route path='/' element={<div>Home page goes here</div>}></Route>
                        <Route path='/search' element={<SearchPage />}></Route>
                        <Route path='/my-list' element={<div>My List page</div>}></Route>
                        <Route path='/profile' element={<div>Profile page</div>}></Route>
                    </Routes>
                </main>
            </BrowserRouter>
            <Navbar />
            <HeroSection />
            <PopularSection />
            <TrendingSection />




            <BottomNav />

        </div>
    );
}



export default App
