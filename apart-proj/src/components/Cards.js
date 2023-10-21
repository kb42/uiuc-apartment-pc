import React from 'react';
import house from "../images/house_pic.jpg"
import '../styles/Cards.css';

function ApartmentCards() {
    return (
      <div class="cardHolder">
        <ul>
          <li class="card">
            <div class="info">
              <h2>123 Address Street<br />City, IL 12345</h2>
              <h3>$XXX / month</h3>
              <h3>X bed, X bath</h3>
              <h3>Features</h3>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <h3>Contact</h3>
              <ul class="contact">
                <li class="phone">+1 (234) 456-7890</li>
                <li class="email">generic@email.com</li>
              </ul>
            </div>
            <img class="pic" src={house} alt="House picture" />
          </li>
          <li class="card">
            <div class="info">
              <h2>123 Address Street<br />City, IL 12345</h2>
              <h3>$XXX / month</h3>
              <h3>X bed, X bath</h3>
              <h3>Features</h3>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <h3>Contact</h3>
              <ul class="contact">
                <li class="phone">+1 (234) 456-7890</li>
                <li class="email">generic@email.com</li>
              </ul>
            </div>
            <img class="pic" src={house} alt="House picture" />
          </li>
          <li class="card">
            <div class="info">
              <h2>123 Address Street<br />City, IL 12345</h2>
              <h3>$XXX / month</h3>
              <h3>X bed, X bath</h3>
              <h3>Features</h3>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <h3>Contact</h3>
              <ul class="contact">
                <li class="phone">+1 (234) 456-7890</li>
                <li class="email">generic@email.com</li>
              </ul>
            </div>
            <img class="pic" src={house} alt="House picture" />
          </li>
          <li class="card">
            <div class="info">
              <h2>123 Address Street<br />City, IL 12345</h2>
              <h3>$XXX / month</h3>
              <h3>X bed, X bath</h3>
              <h3>Features</h3>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <h3>Contact</h3>
              <ul class="contact">
                <li class="phone">+1 (234) 456-7890</li>
                <li class="email">generic@email.com</li>
              </ul>
            </div>
            <img class="pic" src={house} alt="House picture" />
          </li>
        </ul>
      </div>
    );
  }
  
  export default ApartmentCards;