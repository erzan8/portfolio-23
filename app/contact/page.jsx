import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="h-full">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="h2 text-center mb-12">
            Me <span className="text-accent">contacter</span>.
          </h2>
          <form
            className="flex-1 flex flex-col gap-6 w-full max-w-[700px] mx-auto"
            method="POST"
            data-netlify="true"
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Nom" className="input" required />
              <input
                type="email"
                placeholder="Email"
                className="input"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input"
              required
            />
            <textarea
              placeholder="Message"
              className="textarea"
              required
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
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
