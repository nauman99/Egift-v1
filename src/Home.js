import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home fade-in">
      <div className="home__container">
        <h1 className="shop_title">Send E-Gift Cards to Your Loved Ones</h1>
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1526899855819-ebaedbc239a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Whether you're throwing a birthday bash or a private party, choose one of these great birthday gift cards to celebrate in style."
            price={1.99}
            rating={5}
            image="https://9cba5880bc14451f9693-e0fe15aac731c5feebe40b7a92b75181.ssl.cf5.rackcdn.com/birthday-confetti-preview.png"
          />
          <Product
            id="49538094"
            title="A greeting card is an illustrated piece of card stock or high quality paper featuring an expression of friendship or other sentiment."
            price={2.99}
            rating={4}
            image="https://static.archiesonline.com/public/images/product/large/8907089481787-(1).jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="The selection of wedding invitation designs depends upon the choice of props, the cultural inheritance of the props and wedding couple"
            price={199.99}
            rating={3}
            image="http://www.pngall.com/wp-content/uploads/5/Wedding-Card-Envelope-PNG-Pic.png"
          />
          <Product
            id="23445930"
            title="Google Play has the music, movies, TV shows, books, magazines, and Android apps and games you love. "
            price={10.99}
            rating={5}
            image="https://lh3.googleusercontent.com/7Rp8nh8n5Y3DdY-YM01O0gSDqa-BwKYlKGzwPMlBvFsOaaHYfVdQ4uJhs-AY_w07dZdsnTFz8XIYeBZ6w7RGfwJeVTt93ISin6rXHA=s0"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
