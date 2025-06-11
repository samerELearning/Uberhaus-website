import react, {use, useeffect, useState} from 'react';
import "../styles/Hero.css";

const images = [
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useeffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);
    
    return (
        <div className="hero" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            <div className="hero-overlay">
                <header className="hero-header">
                    <div className="logo">UBERHAUS</div>
                        <nav className="nav">
                            <a href="#services">Services</a>
                            <a href="#clients">Clients</a>
                            <a href="#about">About</a>
                        </nav>
                </header>
                <div className="image-indicator">
                    {images.map((_, i) => (
                    <div
                        key={i}
                        className={`line ${i === currentIndex ? "active" : ""}`}
                        style={{ animationDuration: currentIndex === i ? "5s" : "0s" }}>
                    </div>
          ))}
                </div>
            </div>    
        </div>
    );
}