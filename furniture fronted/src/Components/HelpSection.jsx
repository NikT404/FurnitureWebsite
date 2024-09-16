import React from "react";

function HelpSection() {
  return (
    <>
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src="images/img-grid-1.jpg" alt="Untree.co" />
                </div>
                <div className="grid grid-2">
                  <img src="images/img-grid-2.jpg" alt="Untree.co" />
                </div>
                <div className="grid grid-3">
                  <img src="images/img-grid-3.jpg" alt="Untree.co" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                We Help You Make Modern Interior Design
              </h2>
              <p>
                Our solutions make it easy to bring modern interior design to life. We offer seamless processes that simplify even the most complex design projects. Whether you're starting fresh or renovating, we provide expert guidance every step of the way. Our designs are tailored to meet your unique needs, ensuring a stylish and functional space.
              </p>
              <ul className="list-unstyled custom-list my-4">
                <li>Modern Interior Designs – We create stylish, modern spaces that look great and work well.</li>
                <li>Easy Process – We make the design process simple, helping you transform your space without stress.</li>
                <li>Up-to-date Trends – We use the latest design ideas and tools to make sure your space is modern.</li>
                <li>On-time Delivery – We finish projects efficiently, ensuring everything is done on time.</li>
              </ul>
              <p>
                <a herf="#" className="btn">
                  Explore
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpSection;
