const HeroSection = () => {
    return(
        <main className="hero container">
            <div className="Hero-content">
            <h1>YOUR STYLE DESERVES THE BEST</h1>
            <p> 
                YOUR STYLE DESERVES THE BEST — AND WE’RE HERE TO BRING IT TO 
                YOU WITH PREMIUM PRODUCTS, DESIGNED FOR COMFORT,  CONFIDENCE 
                AND A TREND THAT NEVER GOES OUT OF STYLE.
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className ="Shopping">
                <p>Also Available On</p>

            <div className="brand-icons">
              <img src="public/images/amazon.png" alt="amazon-logo"/>
              <img src="public/images/flipkart.png" alt="flipkart-logo"/>  
                </div>    
            </div>
            </div>
            <div className="Hero-image">
             <img src="public/images/hero.jpg" alt="hero-image"/>

            </div>
        </main>
    );
};

export default HeroSection;