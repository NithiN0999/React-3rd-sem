import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import {Button,Grid} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Pizza', price: '$10.99', image: 'https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg' },
    { id: 2, name: 'Burger', price: '$8.99', image: 'https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg' },
    { id: 3, name: 'Pasta', price: '$12.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCjQaFkttBepPEa2C1mLd6huoAKwpxUJtYA&usqp=CAU' },
    { id: 4, name: 'Salad', price: '$6.99', image: 'https://natashaskitchen.com/wp-content/uploads/2020/01/Cobb-Salad-Recipe-6.jpg' },
    { id: 5, name: 'Sushi', price: '$14.99', image: 'https://media.istockphoto.com/id/1053854126/photo/all-you-can-eat-sushi.jpg?s=612x612&w=0&k=20&c=qqPJBYcxR0fgmzIFj_k2V6Mbo12hBBCucs1i5HcGYA0=' },
    { id: 6, name: 'Pani-Puri', price: '$1.99', image: 'https://media.istockphoto.com/id/1177589252/photo/famous-indian-street-food-gol-gappa-puchka-and-pani-puri.jpg?s=612x612&w=0&k=20&c=vEzDpMLQHo3bZ65tJxGciJ7lg-6Zq7RKJyZ2g4OpxGI=' },
    { id: 7, name: 'Briyani', price: '$5.99', image: 'https://media.istockphoto.com/id/1207518039/photo/biryani-indian-asian-rice-meal.jpg?s=612x612&w=0&k=20&c=-y1KP1jL1UGI9RswgeTtWpPige6LYGqbGgWAXbILYII=' },
    { id: 8, name: 'Sambar rice', price: '$0.99', image: 'https://media.istockphoto.com/id/1191003093/photo/vegetable-masala-oats-khichadi-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=Ra4p1_ItjZn9cfO3gbv8v022dQ0k3sjSc98rrLk4dT8=' },
    { id: 9, name: ' tandoori chicken', price: '$4.99', image: 'https://media.istockphoto.com/id/995903748/photo/smoked-and-spicy-tandoori-chicken-grilling-with-smoke.jpg?s=612x612&w=0&k=20&c=xq_apF2Osk5HYFOgBS9crRi1puLozxyGWFuCUV0mhYg=' },
    { id: 10, name: 'Mixed Cocktail', price: '$24.99', image: 'https://media.istockphoto.com/id/180821895/photo/glass-cups-filled-with-different-flavored-mojitos.jpg?s=612x612&w=0&k=20&c=bfOIWgZ-vaUVoO0HCtsDUFJZzuHSpr-avkqZ8JErQ5A=' },
    { id: 11, name: 'Lemon Rice', price: '$0.99', image: 'https://media.istockphoto.com/id/1084183216/photo/lemon-rice-is-a-south-indian-turmeric-rice-or-maharashtrian-recipe-called-fodnicha-bhat-made.jpg?s=612x612&w=0&k=20&c=QEeDdhjg5z6CxIdLKMSv-wxctpiTothqtfZvQgF0JTM=' },
    { id: 12, name: 'Crispy chicken', price: '$6.99', image: 'https://img.freepik.com/free-photo/fried-chicken-french-fries-white-plate_74190-4869.jpg?size=626&ext=jpg&ga=GA1.1.706302649.1701010898&semt=ais' },
    { id: 12, name: 'fried rice', price: '$6.99', image: 'https://img.freepik.com/free-photo/fried-rice_1203-8380.jpg?size=626&ext=jpg&ga=GA1.1.706302649.1701010898&semt=ais' },
    { id: 12, name: 'momos', price: '$6.99', image: 'https://static.vecteezy.com/system/resources/thumbnails/023/870/103/small/gyoza-japanese-traditional-food-asian-dumpling-poster-illustration-png.png' },
    { id: 12, name: 'Pasta', price: '$6.99', image: 'https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=612x612&w=0&k=20&c=5ro7Cvwx79tWpyN1r2hy3DwplFi5FuPrD_4DYD8tZpg=' },
  ];

  const backgroundStyle = {
    backgroundImage: 'url("your-background-image-url.jpg")', // Replace with your actual image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="menu" style={{ ...backgroundStyle, padding: '40px' }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-ezI0LlT53Z02Vp1OKL68HiL/7yIiN0s9YGBO3SN/WEQ0fPvKVtjk4/X+02zefWXp" crossorigin="anonymous"/>

      <nav style={{ background: '#333', padding: '10px', color: 'white',border:'20px solid black' }}>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item>
          <h1 style={{ margin: 0 }}>BalavinVeedu</h1>
        </Grid>
        <Grid item>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <li style={{ margin: '0 10px' }}>Home</li>
            <li style={{ margin: '0 10px' }}>Profile</li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/lo">
                <Button variant="contained">Sign In</Button>
              </Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/re">
                <Button variant="contained">Register</Button>
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </nav>
      <h2>Our Menu</h2>
      <ShoppingCartIcon />
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} style={{ width: '100%', height: '40%' }} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      <footer style={{ background: '#333', padding: '10px', color: 'white', textAlign: 'center' }}>
      <p>
        &copy; 2023 BalavinVeedu. All rights reserved. Follow us on instagram @BalavinVeedu
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" style={{ margin: '0 5px' }}></i>
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-google" style={{ margin: '0 5px' }}></i>
        </a>
        <a href="https://www.xapp.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-xing" style={{ margin: '0 5px' }}></i>
        </a>
      </p>
    </footer>
    </section>
    
  );
};

export default Menu;
