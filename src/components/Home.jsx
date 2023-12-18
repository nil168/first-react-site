import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillAmazonCircle,
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Swapnanil</h1>
          <p>Aspiring web developer</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="graphics" />

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            eum adipisci inventore ipsa repellendus consequuntur qui quos
            aspernatur a quidem, ipsam facere, impedit maiores, ad autem.
            Repellat laudantium quaerat facere!
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who am I?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, qui accusamus velit ex voluptatibus, perferendis
            enim odio libero animi quas deleniti rerum quae nostrum magni
            blanditiis, praesentium distinctio. Recusandae omnis, quia,
            assumenda mollitia deleniti ea tempora magnam sint aut voluptate
            facere doloremque natus expedita ut aliquid laboriosam, nihil id
            enim voluptas quo qui nobis perferendis. Dignissimos, deleniti
            corrupti! Vel, necessitatibus.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
