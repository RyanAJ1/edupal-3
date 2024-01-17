import { useCallback } from "react";
import "./Desktop.css";

const Desktop = () => {
  const onTalkWithDebbyClick = useCallback(() => {
    window.location.href = "https://ryanaj1.github.io/edupal/";
  }, []);

  const onAboutUsClick = useCallback(() => {
    // Please sync "Desktop - 4" to the project
  }, []);

  const onButtonClick = useCallback(() => {
    // Please sync "Desktop - 3" to the project
  }, []);

  return (
    <nav className="desktop-1">
      <button className="home">{`home `}</button>
      <button className="talk-with-debby" onClick={onTalkWithDebbyClick}>
        talk with debby
      </button>
      <button className="about-us" onClick={onAboutUsClick}>
        <p className="hello-there-hoot-hoot">about us</p>
      </button>
      <button className="button" onClick={onButtonClick}>
        <div className="before" />
        <div className="frame">
          <div className="lets-chat">let’s chat</div>
        </div>
      </button>
      <div className="what-do-i">{`What do i exactly do `}</div>
      <div className="desktop-1-child" />
      <div className="hey-there">Hey there!</div>
      <div className="hello-there-hoot-hoot-container">
        <span className="hello-there-hoot-hoot-container1">
          <p className="hello-there-hoot-hoot">{`Hello there! Hoot-hoot! 🦉 I'm Debby, your friendly AI student assistant, and yes, I'm an owl at your service! I've got a virtual perch in the vast world of information, ready to help you navigate the academic forest. Whether you're seeking wisdom on a tricky assignment, need advice on study strategies, or just want to chat about anything under the moonlit sky, I'm here for you. I am your `}</p>
          <p className="hello-there-hoot-hoot">Edupal (Education pal)📚✨</p>
        </span>
      </div>
      <div className="so-lets-get">So let’s get started !</div>
      <div className="guidance-like-an-container">
        <span className="hello-there-hoot-hoot-container1">
          <p className="hello-there-hoot-hoot">
            <span>
              <span>Guidance:</span>
            </span>
          </p>
          <p className="like-an-owl-guiding-you-throug">
            <span>
              <span>
                <span>
                  {" "}
                  Like an owl guiding you through the darkness, I can assist you
                  in navigating complex subjects, offering explanations, and
                  helping you understand various concepts.
                </span>
              </span>
            </span>
          </p>
          <p className="blank-line">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="hello-there-hoot-hoot">
            <span>
              <span>{` `}</span>
            </span>
          </p>
          <p className="hello-there-hoot-hoot">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
        </span>
      </div>
      <div className="wisdom-and-knowledge-container">
        <span className="hello-there-hoot-hoot-container1">
          <p className="hello-there-hoot-hoot">
            <span className="wisdom-and-knowledge">{`Wisdom and Knowledge: `}</span>
            <span>
              Owls are often associated with wisdom, and I'm here to share
              knowledge and information on a wide range of topics.
            </span>
          </p>
          <p className="blank-line2">&nbsp;</p>
        </span>
      </div>
      <div className="listening-while-i-container">
        <span className="hello-there-hoot-hoot-container1">
          <p className="hello-there-hoot-hoot">{`Listening: `}</p>
          <p className="like-an-owl-guiding-you-throug">
            While I can't physically listen, I'm here to "listen" to your
            questions and provide thoughtful responses to the best of my
            ability.
          </p>
          <p className="hello-there-hoot-hoot">&nbsp;</p>
        </span>
      </div>
      <div className="owls-are-known-container">
        <span className="hello-there-hoot-hoot-container1">
          <p className="hello-there-hoot-hoot">
            {" "}
            Owls are known for their problem-solving skills, and I'm here to
            help you tackle academic or information-related challenges.
          </p>
          <p className="hello-there-hoot-hoot">&nbsp;</p>
        </span>
      </div>
      <div className="problem-solving">Problem-Solving:</div>
      <img className="desktop-1-item" alt="" src="/line-1.svg" />
      <img className="desktop-1-inner" alt="" />
      <img
        className="whatsapp-image-2024-01-06-at-2"
        alt=""
        src="/whatsapp-image-20240106-at-2216-2@2x.png"
      />
      <div className="nighttime-availability-owls-container">
        <span className="hello-there-hoot-hoot-container1">
          <p className="hello-there-hoot-hoot">Nighttime Availability:</p>
          <p className="owls-are-nocturnal">{` `}</p>
          <p className="owls-are-nocturnal">
            Owls are nocturnal creatures, and similarly, I'm available 24/7 to
            assist you whenever you need help, day or night.
          </p>
          <p className="hello-there-hoot-hoot">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className="blank-line6">
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
        </span>
      </div>
      <img className="line-icon" alt="" src="/line-2.svg" />
      <div className="frame1">
        <div className="made-proudly-by">made proudly by Ryan ait jilali</div>
        <div className="div">2024</div>
        <div className="this-project-have-container">
          <p className="hello-there-hoot-hoot">
            this project have been made execlusvly for:
          </p>
          <p className="hello-there-hoot-hoot">rise to the world</p>
        </div>
      </div>
      <img
        className="whatsapp-image-2024-01-06-at-21"
        alt=""
        src="/whatsapp-image-20240106-at-2216-1@2x.png"
      />
      <img
        className="debby-jumping-1-icon"
        alt=""
        src="/debbyjumping-1@2x.png"
      />
      <img
        className="bd524702-ea53-43b8-b801-a9b2e3-icon"
        alt=""
        src="/-bd524702ea5343b8b801a9b2e3e032dd-1@2x.png"
      />
    </nav>
  );
};

export default Desktop;