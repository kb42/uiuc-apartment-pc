import React from 'react';
import '../styles/Apartment.css';
import house from "../images/house_pic.jpg"

function ApartmentPage() {
    return (
        <div class = "apartment-page">
            <div class = "content">
                <div class = "title-section">
                    <h1>Apartment Name</h1>
                    <div class="apartment-address">
                        <h2>123 Address Street</h2>
                        <p>City, IL 12345</p>
                    </div>
                    <table>
                        <tr>
                            <th>Price</th>
                            <th>Bedrooms</th>
                            <th>Bathrooms</th>
                            <th>Sq. Feet</th>
                        </tr>
                        <tr>
                            <td>$xxx-$xxx</td>
                            <td>y - y bd</td>
                            <td>y - y ba</td>
                            <td>zzz - z,zzz sq ft</td>
                        </tr>
                    </table>
                </div>
                <div class = "details-section">
                    <h1>Amenities</h1>
                    <div class = "amenities-details">
                        <h2>details</h2>
                        <p>Descrpotion Descrpotion Descrpotion Descrpotion 
                            Descrpotion Descrpotion Descrpotion Descrpotion
                            Descrpotion Descrpotion Descrpotion Descrpotion
                            Descrpotion Descrpotion Descrpotion Descrpotion
                            Descrpotion Descrpotion Descrpotion Descrpotion
                        </p>
                    </div>
                    <div class = "amenities-list">
                        <ul>
                            <li>amenity</li>
                            <li>amenity</li>
                            <li>amenity</li>
                            <li>amenity</li>
                            <li>amenity</li>
                        </ul>
                    </div>
                </div>
                <div class = "contact-section">
                    <h1>Contact</h1>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: xxxx@xxx.com</p>
                </div>
            </div>
            <div class = "images">
                <img class="image" src={house} alt="House" />
                <div class = "switch-images">
                    <h1 id="left-arrow">&lt;</h1>
                    <h1>&gt;</h1>
                </div>
            </div>
        </div>
    );
}

export default ApartmentPage;