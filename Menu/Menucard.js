import React from "react";
import Header from "./Header";
import Items from "./Items";
import './Menucard.css';

function Menucard() {
    return (  
     <div className = "container">

        <div className="header">
         <Header/>
        </div>

        <div className="img1">
         <Items 
         img = "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg"
         name = "Fact kjio jioijp"
         para = "dlkfjjj ljkldkjio ljdlflj ljoilijje ldkjfoiejm ljoij  ijdoif lkdjfie  idjfidsjf jifeljef fdsijf"
         price = "$43 / $55"/>
         </div>
         
         <div className="img2">
         <Items 
         img = "http://cdn.cnn.com/cnnnext/dam/assets/210211140233-03-classic-italian-dishes.jpg"
         name = "Fact kjio jioijp"
         para = "dlkfjjj ljkldkjio ljdlflj ljoilijje ldkjfoiejm ljoij  ijdoif lkdjfie  idjfidsjf jifeljef fdsijf"
         price = "$44 / $58"/>
         </div>
         
         <div className="img3">
         <Items 
         img = "http://sethlui.com/wp-content/uploads/2016/02/baboon-house-burger.jpg"
         name = "Fact kjio jioijp"
         para = "dlkfjjj ljkldkjio ljdlflj ljoilijje ldkjfoiejm ljoij  ijdoif lkdjfie  idjfidsjf jifeljef fdsijf"
         price = "$69 / $96"/>
         </div>

         <div className="img4">
         <Items 
         img = "https://cdn.lifehack.org/wp-content/uploads/2015/08/8-Hidden-Health-Benefits-Of-Spicy-Food-Supported-By-Science.jpg"
         name = "Fact kjio jioijp"
         para = "dlkfjjj ljkldkjio ljdlflj ljoilijje ldkjfoiejm ljoij  ijdoif lkdjfie  idjfidsjf jifeljef fdsijf"
         price = "$72 / $80"/>
         </div>

         <div className="img5">
         <Items 
         img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvdYgw85nlDhM3xsRnT5UjxrWJMFu4U60OA&usqp=CAU"
         name = "Fact kjio jioijp"
         para = "dlkfjjj ljkldkjio ljdlflj ljoilijje ldkjfoiejm ljoij  ijdoif lkdjfie  idjfidsjf jifeljef fdsijf"
         price = "$45 / $92"/>
         </div>

         <div className="img6">
         <Items 
         img = "https://stylesatlife.com/wp-content/uploads/2018/04/List-of-North-Indian-Food-Recipes-1.jpg.webp"
         name = "Fact kjio jioijp"
         para = "dlkfjjj ljkldkjio ljdlflj ljoilijje ldkjfoiejm ljoij  ijdoif lkdjfie  idjfidsjf jifeljef fdsijf"
         price = "$29 / $78"/>
         </div>

         <div className="img7">
         <Items 
         img = "https://i.insider.com/5fac1b057f8f4200182a644b?width=1136&format=jpeg"
         name = "Fact kjio jioijp"
         para = "dlkfjjj ljkldkjio ljdlflj ljoilijje ldkjfoiejm ljoij  ijdoif lkdjfie  idjfidsjf jifeljef fdsijf"
         price = "$49 / $68"/>
         </div>

         <div className="img8">
         <Items 
         img = "https://images.ctfassets.net/4f3rgqwzdznj/lRXYdlP1PCqKrflHbz03l/03e5176623b2c1bbafab91b415a01c3b/spicy-miso-ramen-1179781372.jpg"
         name = "Fact kjio jioijp"
         para = "dlkfjjj ljkldkjio ljdlflj ljoilijje ldkjfoiejm ljoij  ijdoif lkdjfie  idjfidsjf jifeljef fdsijf"
         price = "$66 / $77"/>
         </div>

         <div className="image">
            <img src="https://www.gannett-cdn.com/presto/2022/02/17/USAT/dd4ff760-4b64-4494-8d0b-c53f378c184f-4.png?crop=1911,1075,x8,y0&width=1600&height=800&format=pjpg&auto=webp" width= " 375" height = "180"/>
        </div>

        <div className="paragraph">
            <h3>Maeccenas nulla neque</h3>
            <p>djfao dfkjdsf dfjod sdjkfd jsdf j jidfa fdji hjdf jdskfhjdsk jkfhkdfh kdsljfh dhfdf fvbxbfx sdlfjisdnof dsfnodifn ofnadopf
                fjidf fdkdsafndsofipnf odsfndsfon ouidfndof
            </p>
            <button className="buttton">Read more</button>
         </div>
         <div className="end">
            <p>Copyrigth @ 2022 simple House | Design | TemplateMo </p>
         </div>


     </div>   


    );
}

export default Menucard ;