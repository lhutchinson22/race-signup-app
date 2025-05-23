import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [featuredRaces, setFeaturedRaces] = useState([]);
  const [upcomingRaces, setUpcomingRaces] = useState([]);

  useEffect(() => {
    // Static race data with updated image paths
    const data = {
      featured: [
        { name: "City Marathon", description: "Experience the thrill of the City Marathon, a premier event attracting runners from around the globe.", image: "/images/napamarathon.jpg" },
        { name: "Trail Run Challenge", description: "Challenge yourself with the Trail Run, navigating through scenic landscapes and rugged terrain.", image: "/images/herald+cycle+tour542.jpeg" },
        { name: "Road Cycling Race", description: "Join the Road Cycling Race, a high-speed competition for cycling enthusiasts.", image: "/images/napamarathon.jpg" }
      ],
      upcoming: [
        { name: "Local 5K Fun Run", description: "Join the Local 5K Fun Run, a family-friendly event perfect for all ages and fitness levels.", image: "/images/marathon2.jpeg" },
        { name: "Community Bike Ride", description: "Participate in the Community Bike Ride, a leisurely ride through the city's scenic routes.", image: "/images/Athletes_at_an_Olympic_distance_triathlon.jpg" },
        { name: "Triathlon Sprint", description: "Test your endurance with the Triathlon Sprint, combining swimming, cycling, and running.", image: "/images/herald+cycle+tour542.jpeg" }
      ]
    };

    // Update state with static data
    setFeaturedRaces(data.featured);
    setUpcomingRaces(data.upcoming);
  }, []);

  return (
    <div className="App">
      <header className="hero">
        <h1>Find Your Next Challenge</h1>
        <p>Explore a wide range of races, from local 5Ks to international marathons. Discover events that match your fitness level and goals.</p>
        <button>Explore Races</button>
      </header>

      <section className="featured-races">
        <h2>Featured Races</h2>
        <div className="race-grid">
          {featuredRaces.map((race, index) => (
            <div key={index} className="race-card">
              <div className="image-container">
                {race.image ? (
                  <img
                    src={race.image}
                    alt={race.name}
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = '/images/placeholder.png'; // Use a placeholder image if the image fails to load
                    }}
                  />
                ) : (
                  <p>Image not available</p>
                )}
              </div>
              <h3>{race.name}</h3>
              <p>{race.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="upcoming-races">
        <h2>Upcoming Races</h2>
        <div className="race-grid">
          {upcomingRaces.map((race, index) => (
            <div key={index} className="race-card">
              <div className="image-container">
                <img
                  src={race.image}
                  alt={race.name}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = '/images/placeholder.png'; // Use a placeholder image if the image fails to load
                  }}
                />
              </div>
              <h3>{race.name}</h3>
              <p>{race.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>©2024 RaceReady. All rights reserved.</p>
        <nav>
          <button onClick={() => window.location.href = '#'}>About</button>
          <button onClick={() => window.location.href = '#'}>Contact</button>
          <button onClick={() => window.location.href = '#'}>Terms of Service</button>
          <button onClick={() => window.location.href = '#'}>Privacy Policy</button>
        </nav>
      </footer>
    </div>
  );
}

export default App;
