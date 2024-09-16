import React from "react";
import Sh from "./Sh";

function WhyChooseUsCard() {
  return (
    <>
      <div className="why-choose-section">
        <div className="container">
          <div className="row my-5">
            {/* <div className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img
                    src="images/truck.svg"
                    alt="Image"
                    className="imf-fluid"
                  />
                </div>
                <h3>Fast &amp; Free Shipping</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div> */}
            <Sh one ={{icon:"images/truck.svg",title:"Fast Free Shipping",description:"Enjoy fast and free shipping on every order, bringing comfort and style to your home without the wait."}}/>
            <Sh one ={{icon:"images/bag.svg",title:"Easy to Shop",description:"Discover a seamless shopping experience—easy navigation, effortless checkout, and everything you need just a click away"}}/>
            <Sh one ={{icon:"images/support.svg",title:"24/7 Support",description:"Transform your home with stylish, modern furniture designed for comfort and elegance. Find the perfect piece to elevate every room."}}/>
            <Sh one ={{icon:"images/return.svg",title:"Hassle Free Returns",description:"Shop with confidence—our hassle-free returns ensure a smooth and easy process, so you can find the perfect fit without the worry."}}/>
            
           
            
           
            
            
          
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUsCard;