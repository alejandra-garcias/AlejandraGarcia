import Button from "../components/Atoms/Button/Button";
import WavyLine from "/src/components/Atoms/WavyLine/WavyLine";

function Contact() {
  return (
    <>
      <div className="contact">
        <div>
          <h1 className="display">
            Get in{" "}
            <span className="relative">
              touch<WavyLine></WavyLine>
            </span>{" "}
            !
          </h1>
          <p className="big">
            If you like my work or you wish to discuss further what how we can
            help each other, please feel free to contact me or explore my
            channels. <br />
            Thank you!
          </p>
        </div>
        <div className="flex--row extragap wrap">
          <div className="flex--column">
            <h2 className="h6">Send an Email:</h2>
            <p>
              <a
                href="mailto:algasa-97@hotmail.com"
                target="_blank"
                rel="noreferrer"
              >
                algasa-97@hotmail.com
              </a>
            </p>
          </div>
          <div className="flex--column">
              <h2 className="h6">Call/text me:</h2>
              <p><a href="tel:+34644742998">+34 644 74 29 98</a></p>
            </div> 
        </div>
        <div className="flex--column">
          <h2 className="h6">Other ways to contact me:</h2>
          <div className="flex--row">
            <Button
              href="https://www.linkedin.com/in/alejandra-garcia-sanchez-2513a212a/"
              content="LinkedIn"
            />
            <Button

              href="https://github.com/alejandra-garcias"
              content="GitHub"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
