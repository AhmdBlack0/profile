function About() {
  return (
    <div className="about-sec" id="about">
      <div className="about-sec-one">
        <h3>Who am I ?</h3>
        <p className="description">A Web Developer / Developer Located In Our Lovely Earth</p>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet,
          Qui deserunt consequatur fugit repellendusillo voluptas?</span>
        <a href="#">Download My CV</a>
      </div>
      <div className="about-sec-two">
        <h3>Personal Info</h3>
        <ul className="info">
          <li><span>Birthdate</span> : 08/05/2004</li>
          <li><span>Email</span> : AhmdBlack.0@gmail.com</li>
          <li><span>Phone</span> : + 00000000</li>
          <li><span>Address</span> : Egypt.</li>
        </ul>
        <div className="links">
          <a href="https://www.facebook.com/profile.php?id=61561155398652" target="_blank"><i className="fa-brands fa-facebook" title="facebook"></i></a>
          <a href="https://github.com/AhmdBlack0" target="_blank"><i className="fa-brands fa-github" title="github"></i></a>
          <a target="_blank"><i className="fa-brands fa-linkedin" title="linkedIn"></i></a>
          <a target="_blank"><i className="fa-brands fa-x-twitter" title="X"></i></a>
          <a target="_blank"><i className="fa-solid fa-envelope" title="Gmail"></i></a>
        </div>
      </div>
      <div className="about-sec-three">
        <h3>My Expertise</h3>
        <div>
          <i className="fa-solid fa-brush"></i>
          <div>
            <h5>UX Design</h5>
            <p>Lorem ipsum dolor sit consectetur.</p>
          </div>
        </div>
        <div>
          <i className="fa-brands fa-html5"></i>
          <div>
            <h5>Web Development</h5>
            <p>Lorem ipsum dolor sit consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
