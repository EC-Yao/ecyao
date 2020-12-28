import "./App.css";
import "./button.css";
import githubIcon from "./resources/github.png";
import devpostIcon from "./resources/devpost.png";
import resume from "./resources/ECYao.pdf";

function App() {
  return (
    <div>
      <div
        id="top"
        className="section backgroundBonjour parallax"
        style={{ padding: "250px 0" }}
      >
        <div className="center backgroundDark">
          <p className="pHeaderGold">Hi there,</p>
          <p className="pHeaderGold">I'm Eddy Yao</p>
        </div>
        <div class="sidenav">
          <a href="#top">To Top</a>
          <a href="#background">Background</a>
          <a href="#projects">Projects</a>
          <a href="#contacts">Contacts</a>
        </div>
      </div>
      <div className="goldBar"></div>
      <div
        id="background"
        className="section parallax backgroundDark"
        style={{ height: "1000px", padding: "50px 0" }}
      >
        <p className="pHeaderGold"> A bit about me</p>
        <div
          className="goldBar"
          style={{ height: "5px", width: "25%", display: "inline-block" }}
        ></div>
        <div className="flex-container">
          <div className="sideImage uwImage"></div>
          <div className>
            <p className="storyHeader">
              Computer Science Student | University of Waterloo
            </p>
            <p className="storyText" style={{ "font-weight": "bold" }}>
              Fall 2018 to Present
            </p>
            <p className="storyText" style={{ "padding-top": "20px" }}>
              I'm currently studying Computer Science at the University of
              Waterloo; amid the geeky culture and world-class memes we have
              over here, I've thoroughly enjoyed my university experience.
              <br></br>
              <br></br>
              Understandably, academics can be immensely stressful; fortunately,
              I never really found myself struggling with coursework. I've
              always found difficult courses to be new opportunities challenge
              myself, which, although frustrating at times, are often worth the
              reward.
              <br></br>
              <br></br>
              Having enjoyed challenges of all kinds, exploring advanced course
              options was a no-brainer. In doing so, I've found myself a little
              deep down the rabbithole of pure maths and Comp. Sci. theory. In
              retrospect, most of this stuff might not be useful at all for my
              life outside graduate academia (looking at you category theory),
              but hey, it's interesting, it's challenging, it's engaging; that's
              good enough for me.
              <br></br>
              <br></br>
              Recently, through my personal readings, I've taken great interest
              in computational theory, quantum computing, and neural networks;
              and I hope to study these topics further through the university.
            </p>
          </div>
        </div>
        <div className="flex-container">
          <div className="sideImage googleImage"></div>
          <div className>
            <p className="storyHeader">Google Intern | Sunnyvale, CA</p>
            <p className="storyText" style={{ "font-weight": "bold" }}>
              Winter 2020
            </p>
            <p className="storyText" style={{ "padding-top": "20px" }}>
              Working at Google was like a dream come true. It's no surprise
              that when I first started programming, one of my long-term goals
              was to join in on the FANG hype; after listening to a friend
              ramble for two hours about their Silicon Valley high jinks, my
              mind was all the more set.
              <br></br>
              <br></br>
              Under the Google Cloud Platform (GCP), I worked on automating
              development pipelines and created a parser to modify and generate
              customizable configurations for deployment services. Between code
              reviews for my assigned project, I also worked on backlogged
              tickets from my team, better integrating myself into the product
              pipeline.
              <br></br>
              <br></br>
              Four months was not nearly enough time (there were a million
              different things to learn), but my experience was incredible
              nonetheless. Although I'd go back in a heartbeat, my time with
              Google really helped me get over the "Cali or Bust" attitude
              notoriously prevalent in undergrad students. At the end of the
              day, I was still me, writing the same code.
              <br></br>
              <br></br>
              Still though, once you get used to having brand-name cereal
              on-demand 24/7, you really can't go back. I probably gave the
              workers re-stocking the kitchens nightmares.
            </p>
          </div>
        </div>
        <div style={{ padding: "100px 0" }}></div>
      </div>
      <div className="goldBar"></div>
      <div
        id="projects"
        className="section parallax backgroundGradient"
        style={{ height: "1000px", paddingTop: "50px", paddingBottom: "2px" }}
      >
        <p className="pHeaderGold" style={{ color: "black" }}>
          Projects
        </p>
        <div
          className="goldBar"
          style={{
            height: "5px",
            width: "25%",
            display: "inline-block",
            "background-color": "black",
          }}
        ></div>
        <p
          className="pHeaderGold"
          style={{
            "font-size": "20px",
            "padding-top": "20px",
            color: "black",
          }}
        >
          Some of the stuff I've made
        </p>
        <div class="buttons">
          <div class="container">
            <a
              href="https://devpost.com/software/nlpy-a1b9rt"
              class="btn effect04"
              target="_blank"
              rel="noreferrer"
              data-sm-link-text="write code by talking"
            >
              <span>Natural Language Compiler</span>
            </a>
            <a
              href="https://devpost.com/software/deepfinalyst"
              class="btn effect04"
              target="_blank"
              rel="noreferrer"
              data-sm-link-text="perform advanced market analysis and financial modelling"
            >
              <span>Neural Network Empowered Market Predictor</span>
            </a>
          </div>
          <div class="container" style={{ paddingTop: 0 }}>
            <a
              href="https://devpost.com/software/cookme-3pe9zl"
              class="btn effect04"
              target="_blank"
              rel="noreferrer"
              data-sm-link-text="explore your inner foodie"
            >
              <span>CookMe! Web App</span>
            </a>
            <a
              href="#top"
              class="btn effect04"
              data-sm-link-text="that i cobbled together"
            >
              <span>graphic website</span>
            </a>
          </div>
          <div class="container" style={{ paddingTop: 0 }}>
            <a
              href="https://github.com/EC-Yao"
              class="btn effect04"
              target="_blank"
              rel="noreferrer"
              data-sm-link-text="check out my github repos"
            >
              <span>
                <img
                  src={githubIcon}
                  alt="github-icon"
                  width="100"
                  height="100"
                ></img>
              </span>
            </a>
            <a
              href="https://devpost.com/ecyao/"
              class="btn effect04"
              target="_blank"
              rel="noreferrer"
              data-sm-link-text="check out my devpost portfolio"
            >
              <span>
                <img
                  src={devpostIcon}
                  alt="devpost-icon"
                  width="100"
                  height="100"
                ></img>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="goldBar"></div>
      <div
        id="contacts"
        className="section parallax backgroundDark"
        style={{padding: "50px 0" }}
      >
        <p className="pHeaderGold">Contact Me</p>
        <div
          className="goldBar"
          style={{ height: "5px", width: "25%", display: "inline-block" }}
        ></div>
        <p
          className="pHeaderGold"
          style={{
            "font-size": "20px",
            "padding-top": "20px",
          }}
        >
          Send me an email at eddy2yao2@gmail.com or find me on &nbsp;
          <a
            href="https://www.linkedin.com/in/eddy-yao/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "hotpink"}}
          >
            LinkedIn
          </a>
          . I'm always open to discuss new opportunities.
        </p>
        <div class="buttons">
          <div class="container">
            <a
              href={resume}
              class="btn effect2"
              target="_blank"
              rel="noreferrer"
              data-sm-link-text="Download"
              download
            >
              <span>Résumé / CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
