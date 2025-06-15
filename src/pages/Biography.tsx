import React from 'react';
import './Biography.css';

const Biography: React.FC = () => {
  return (
    <div className="biography-container">
      <h1 className="bio-title">About Me</h1>

      <section className="bio-section">
        <div className="bio-text">
          <p>
            I was born and raised in Duluth, Minnesota, on an island in Lake Superior. Duluth is a unique city built on a hillside and proudly home to one of the last outdoor youth hockey leagues in the world — a perfect fit for someone like me, who grew up with a deep love for the game.
          </p>
            <img src="/images/header-background.jpg" alt="Duluth bridge" className="bio-img-inline" />
          <p>
            Hockey played a central role in my life. I was fortunate to represent Duluth East High School twice in the Minnesota State High School Hockey Tournament, even making it to the championship game — a childhood dream come true. I played Division I hockey at the United States Military Academy at West Point and later earned a contract offer with the Toledo Walleye, a professional team. However, duty called, and I chose to fulfill my military commitment.
          </p>

          <div className="bio-image-row">
            <img src="/images/Hockey/hockey2.jpg" alt="Hockey Memory" className="bio-img-horizontal" />
            <img src="/images/Hockey/Hockey4.jpg" alt="With Friends" className="bio-img-grid" />
            <img src="/images/Hockey/Hockey5.jpg" alt="Family Time" className="bio-img-grid" />
          </div>

          <p>
            Graduating from West Point and commissioning as a Second Lieutenant in the U.S. Army stands as one of the proudest moments of my life. I'm currently stationed at Fort Bliss, Texas, serving as a Signal Platoon Leader, where I lead 16 soldiers in providing critical network transport services for a Division Communications Node.
          </p>
          <img src="/images/Family/Family2.jpg" alt="Graduation at West Point" className="bio-img-inline" />

          <p>
            Outside the military, I’m passionate about hockey, golf, movies, spending time with my nieces, and renovating my house. I’m currently pursuing a Master’s in Software Development at Boston University.
          </p>
          <img src="/images/Family/Family3.jpg" alt="Macy LEE" className="bio-img-grid" />
          <img src="/images/Family/Family7.jpg" alt="McKeena Jean" className="bio-img-grid" />
          <img src="/images/Family/Family4.jpg" alt="rents" className="bio-img-grid" />

          <p className="bio-quote">
            <em>"If you ain't first, you're last."</em>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Biography;