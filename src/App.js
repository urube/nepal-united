import React from 'react';

import { FindUs, Footer, Gallery, Header, Awards, LatestNews, Team } from './container';
import { Navbar, Main } from './components';
import './App.css';

function App() {
    return (
        <div className='background'>
            <Main />
            <Navbar />
            <Header />
            <LatestNews />
            <Awards />
            <Team />
            <Gallery />
            <FindUs />
            <Footer />
        </div>
    )
}

export default App 