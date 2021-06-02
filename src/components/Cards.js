import React from 'react'
import CardItem from './CardItem'
import "./Cards.css";

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images1/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images1/img-2.jpg"
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images1/img-3.jpg"
                            text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                            label="Mistery"
                            path="/services"
                        />
                        <CardItem
                            src="images1/img-4.jpg"
                            text="Experience football on top of the Himilayan Mountains"
                            label="Game"
                            path="/sign-up"
                        />
                        <CardItem
                            src="images1/img-8.jpg"
                            text="Ride through the Sahara Desert on guided camel tour"
                            label="Adrenaline"
                            path="/products"
                        />
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Cards
