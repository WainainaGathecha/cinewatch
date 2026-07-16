import { Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/layout/Navbar';
import BottomNav from './components/ui/layout/BottomNav';
import HeroSection from './components/ui/movies/HeroSection';

function App() {
    return (
        <div className='bg-surface min-h-screen text-on-surgace'>
            <Navbar />
            <HeroSection
                title="The Drama"
                tagline="Directed by Kristoffer Borgli, The Drama is an A24 dark comedy that follows an engaged couple, Charlie (Robert Pattinson) and Emma (Zendaya). During a pre-wedding dinner with friends, a playful game of confessions goes horribly wrong when Emma reveals a highly disturbing secret from her past, throwing their impending marriage into a tailspin."
                rating={9.2}
                backdropUrl="https://images.usplash.com/photo-1502134249126-9f3755a50d78"
                isFeatured={true}
            />


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
