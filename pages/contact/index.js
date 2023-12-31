import { BsArrowRight } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="h-full py-32 overflow-y-auto flex md:items-center">
      <div className="container mx-auto text-center xl:text-left flex items-center justify-center h-[max-content]">
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="h2 text-center mb-12">
            Me <span className="text-accent">contacter</span>.
          </h2>
          <form
            name="contact-form"
            className="flex-1 flex flex-col gap-6 w-full max-w-[700px] mx-auto"
            method="POST"
            action="success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                className="input"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input"
                required
              />
            </div>
            <input
              type="text"
              name="objet"
              placeholder="Objet"
              className="input"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textarea"
              required
            ></textarea>
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                J&apos;envoie !
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
