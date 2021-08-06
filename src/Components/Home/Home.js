import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className="homepage-view">
            <header className="app-header">
                <h1>Lessons from Abuelita </h1>
                <div className="links">
                <p className="saved-link">Saved Words & Sentences</p>
                <p className="origin-story-link">About Us</p>
                </div>
            </header>
            <main className="main-container">
                <section className="main-section">
                    <h3>
                        Welcome to <h2>Lessons from Abuelita!</h2> This is a place where Abuelitas and nietes (grandkids) can come together to practice their Spanish together, share their culture, and create a beautiful connection that transcends borders and distance. 
                    </h3>
                    <button>Let's start learning!</button>
                </section>
            </main>
        </section>
    )
}

export default Home;