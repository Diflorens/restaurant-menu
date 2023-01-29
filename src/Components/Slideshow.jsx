import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'

const images = [
  'https://cdn.theculturetrip.com/wp-content/uploads/2017/06/the-garden-at-mozaic-1024x582.jpg',
  'https://cdn.galaxy.tf/unit-media/tc-default/uploads/images/restaurant_photo/001/531/131/restaurants-0010-miiyama2-standard.jpg',
  'https://s3.amazonaws.com/winecountry-media/wp-content/uploads/2021/03/24181540/Ox-Anchor-InterContintental-Hotels-Groupl-1320x880-1.jpg',
  'https://www.asiaone.com/sites/default/files/styles/a1_og_image/public/original_images/Dec2020/20201224_restaurant_fb.jpg?itok=rh3fHfoC',
  'https://www.gunaydindubai.com/gunaydindubai_files/2017524152531796_DSC09733-HDR-14.jpg',
  'http://ww1.prweb.com/prfiles/2005/12/21/325327/restnite2.jpg'
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.3}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
      
    )
}
export default Slideshow