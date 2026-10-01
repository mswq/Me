import { lazy, Suspense } from 'react';
import NavShapes from './NavShapes.jsx';
import { NAV_ITEMS } from '../navItems.js';

const Letters = lazy(() => import('./Letters.jsx'));
const PAGES = NAV_ITEMS.filter((item) => item.route !== '/');

function Home () {
    return (
        <main className='home-container'>
            <h1 className='hero-title'>Hello I'm <span className='visually-hidden'>Ashley</span></h1>

            <Suspense fallback={null}>
                <Letters />
            </Suspense>

            <p className='hero-subtitle'>Pick a shape to explore</p>

            <NavShapes items={PAGES} labelHeight={36} className='home-nav' />
        </main>
    )
}

export default Home
