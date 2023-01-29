import React from "react";
import './AboutUs.css';


function AboutUs() {
    return (
<div className="about-container">

        <div className="item1">
            <img src="https://www.webstaurantstore.com/uploads/blog/2022/1/sushi-roll-on-slate-min.jpg" alt="team" />
            <article className="text">Seito Sushi is a highly unique dining experience inspired by fine cuisine, hi energy horpitality. It is a place to see and be seen!</article>
        </div>

        <div className="item2">
            <img src="https://blogassets.7shifts.com/2021/10/restaurant-staffing--1-.jpg" alt="talk" />
            <article className="text">The selections at Seito Sushi has its roots in Asian culture with added American twists and the cocktails combine premium spirits with the freshest ingredients.</article>
        </div>

<div className="item3">
<img src="https://www.webstaurantstore.com/uploads/blog/2022/1/traditional-japanese-nigiri-sushi-with-salmon-placed-between-chopsticks-min.jpg" alt="menu" />
<article className="text">As most sushi includes raw fish as the main ingredient, you may understandably think that sushi is very fishy. But more often than not, there won't be strong fishy flavors involved. </article>
</div>

<div className="item4">
            <img src="https://thekitchencommunity.org/wp-content/uploads/2021/01/Nigiri-Vs.-Sashimi-e1611774086205.jpg" alt="place" />
            <article className="text">However, sushi has very mild and neutrally flavored food with no strong fishy flavors. Adding salmon, tuna, or eel to sushi gives it a unique flavor.</article>
        </div>

<div className="item5">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRed_FS9ihljMXVvVNrEQ0F9SuNsCtCnbUUD0Cn0IT_NbhuqygdHEg9zCuggao5V3V2Zy0&usqp=CAU" alt="knife" />
<article className="text">The concept of sushi was likely introduced to Japan in the ninth century, and became popular there as Buddhism spread.</article>
</div>

<div className="item6">
            <img src="https://www.lacademie.com/wp-content/uploads/2021/09/sushi-served-with-wasabi.jpg" alt="spoon" />
            <article className="text">Due to the specially curated menu, we cannot accommodate vegan or vegetarian menus. We will do our best to accommodate all serious allergies and dietary restrictions.</article>
        </div>
        </div>
    )
}

export default AboutUs;