import React, {useState} from "react";
import { Link, useNavigate  } from "react-router-dom";
import './Home.css'

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchText.trim()) {
      navigate(`/search?q=${searchText}`);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Food Delivery</h1>
          <hr />
          <p>Find your favorite meals delivered right to your doorstep</p>
          <div className="search-box">
            <input
              type="text"
              placeholder="Search for food, restaurant..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn-small1" onClick={handleSearch}>Search</button>
          </div>
        </div>
      </section>

      {/* Food Items List */}
      <section className="food-items">
        <h2>Popular Food Items</h2>
        <div className="food-items-list">
          <div className="food-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBmcXJEEsowdGTC1j3Q_sF9GhcchHH7EFHNg&s" alt="Pizza" />
            <p>Pizza</p>
          </div>
          <div className="food-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCrEENCElGIIXTS1cmsf-zAEU_m6V-RK8nQ&s" alt="Burger" />
            <p>Burger</p>
          </div>
          <div className="food-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7hjiHYlHT8qClEjOICvtRakU8j6eg3l5Z3Q&s" alt="Sushi" />
            <p>Sushi</p>
          </div>
          <div className="food-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbUoIL7ND1tU4LIZ1njGysektBAOJikqW-Q&s" alt="Pasta" />
            <p>Pasta</p>
          </div>
          <div className="food-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QL93c5KC_3jrHipnGrBAiK9xTJNlZ9Mkqg&s" alt="Salad" />
            <p>Salad</p>
          </div>
        </div>
        <div className="containsButtons">
          <span className="buttons btnColourChange"><a href="/view-orders">Orders</a></span>
          <span className="buttons"><a href="/browse">Browse</a></span>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
