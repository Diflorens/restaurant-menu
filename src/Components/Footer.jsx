import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-main">
      <div className="section">
        <div className="main-footer-info">
          <p>SEITO SUSHI SAND LAKE</p>
          <p>8031 TURKEY LAKE ROAD SUITE 700</p>
          <p>ORLANDO, FL 32819</p>
          <p>407-248-8888</p>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/seitosushisandlake/">
            <i class="fa-brands fa-facebook"></i>
          </a>

          <a href="https://www.instagram.com/seitosushisandlake/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.yelp.com/biz/seito-sushi-sand-lake-orlando">
            <i class="fa-brands fa-yelp"></i>
          </a>
          <a href="https://www.tripadvisor.com/Restaurant_Review-g34515-d1759254-Reviews-Seito_Sushi-Orlando_Florida.html">
            <i class="fa-brands fa-earlybirds"></i>
          </a>
        </div>
      </div>
      <br />
      <div className="footer-additional-info">
        <a href="https://www.seitosushisandlake.com/terms">
          Terms & Conditions
        </a>

        <a href="https://www.seitosushisandlake.com/terms">Privacy Policy</a>
        <a href="https://www.seitosushisandlake.com/terms">Refund Policy</a>
        <a href="https://www.seitosushisandlake.com/terms">Accessibility</a>
      </div>
    </div>
  );
}
export default Footer;
