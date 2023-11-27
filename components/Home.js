import React from "react";
function Home() {
  return (
    <div>
      
        <nav>
            <a href="#home">Home </a>
            <a href="#menu"> Menu </a>
            <a href="#offers"> Offers & combos </a>
            <a href="#History"> Food History </a>
        </nav>
      <header>
          <h1>balainveedu online website</h1>
      </header>

      <section>
        <table>
        <div className="menu-item">
          <img src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg" alt="Burger"/>
          <div>
            <h2>Burger</h2>
            <p>Delicious beef burger with lettuce, tomato, and cheese.</p>
            <p>$5.99</p>
            <button>Add to Cart</button>
          </div>
        </div>

        <div className="menu-item">
          <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg" alt="Pizza"/>
          <div>
            <h2>Pizza</h2>
            <p>Classic Margherita pizza with tomato, mozzarella, and basil.</p>
            <p>$8.99</p>
            <button>Add to Cart</button>
          </div>
        </div>

        <div className="menu-item">
          <img src="https://b.zmtcdn.com/data/pictures/3/56583/e6a22059ba273aa73a7c04f0d4789c9d.jpg?fit=around|960:500&crop=960:500;*,*" alt="Briyani"/>
          <div>
            <h2>Balavinveedu Special Combo</h2>
            <p>Vanga vanga saptu poonga!!!!</p>
            <p>$16.00</p>
            <button>Add to Cart</button>
          </div>
        </div>
        </table>
      </section>
    </div>
  );
}

export default Home;

