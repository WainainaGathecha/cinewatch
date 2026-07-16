import { Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/layout/Navbar';
import BottomNav from './components/ui/layout/BottomNav';

function App() {
    return (
        <div className='bg-surface min-h-screen text-on-surgace'>
            <Navbar />

            <main className='pt-16 pb-20'>
                <Routes>
                    <Route path='/' element={<div>Home page goes here</div>}></Route>
                    <Route path='/search' element={<div>Search page</div>}></Route>
                    <Route path='/my-list' element={<div>My List page</div>}></Route>
                    <Route path='/profile' element={<div>Profile page</div>}></Route>
                </Routes>
            </main>

            <BottomNav />
        </div>
    );
}



export default App
