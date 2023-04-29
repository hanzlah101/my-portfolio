import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Link from "next/link";
import TransitionEffect from "../components/TransitionEffect";
import emailjs from "@emailjs/browser";
import Toast from "../components/Toast";

const Card = ({ icon, title, contact, text, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex flex-col items-center justify-center dark:text-light text-dark py-6 w-80 rounded-lg border border-gray-300 dark:border-gray-600 cursor-pointer hover:shadow-lg shadow-gray-300 dark:shadow-light/10 transition"
    >
      <span className="mb-2">{icon}</span>
      <span className="font-semibold text-lg">{title}</span>
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {contact}
      </span>

      <div
        target="_blank"
        className="group relative flex items-center mt-4 text-gray-600 dark:text-gray-300 cursor-pointer"
      >
        {text}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 absolute -right-[1.7rem] group-hover:-right-[2rem] transition-all ease duration-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </div>
    </Link>
  );
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_avag28j",
        "template_26e67hr",
        form.current,
        "sFHiRuKjwF4aoOb8m"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowToast(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          alert(error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <>
      <Head>
        <title>Hanzlah&apos;s Portfolio | Contact</title>
        <meta
          name="description"
          content="Contact me for any kind of project."
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="w-full md:!p-20 sm:!px-4 h-auto">
          <div>
            <AnimatedText
              text="Get in touch"
              className="lg:!text-6xl md:!text-5xl sm:!text-4xl !text-3xl"
            />
            <span className="flex items-center justify-center text-xl text-gray-500 dark:text-gray-400">
              Contact Me
            </span>
          </div>

          <div className="flex max-w-5xl w-full mx-auto text-dark dark:text-light mt-16 flex-row lg:flex-col gap-y-20">
            <div className="w-1/2 lg:w-full flex items-center flex-col  relative">
              <h2 className="text-2xl font-semibold text-center mx-auto">
                Talk to me
              </h2>

              <div className="flex flex-col gap-y-6 md:mt-12 mt-6">
                <Card
                  title={"Email"}
                  contact={"hanzlahjavaid101@gmail.com"}
                  text={"Write Me"}
                  href={"mailto:hanzlahjavaid101@gmail.com"}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
                      <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z" />
                    </svg>
                  }
                />

                <Card
                  title={"Messenger"}
                  contact={"hanzlahjavaid101@gmail.com"}
                  text={"Write Me"}
                  href={"http://m.me/100092311505914"}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 3c-4.92 0-8.91 3.729-8.91 8.332 0 2.616 1.291 4.952 3.311 6.479V21l3.041-1.687c.811.228 1.668.35 2.559.35 4.92 0 8.91-3.73 8.91-8.331C20.91 6.729 16.92 3 12 3zm.938 11.172-2.305-2.394-4.438 2.454 4.865-5.163 2.305 2.395 4.439-2.455-4.866 5.163z"></path>
                    </svg>
                  }
                />
              </div>
            </div>

            <div className="w-1/2 lg:w-full relative">
              <h2 className="text-2xl font-semibold text-center mx-auto">
                Tell me about your project
              </h2>

              <form
                onSubmit={handleSubmit}
                ref={form}
                className="flex flex-col gap-y-6 w-full mt-12 md:mt-6"
              >
                <div className="relative group">
                  <label htmlFor="name" className="labelStyles">
                    Name
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    className="inputStyles"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="email" className="labelStyles">
                    Email
                  </label>

                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    className="inputStyles"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="relative group">
                  <label htmlFor="message" className="labelStyles">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    type="text"
                    className="inputStyles resize-none min-h-[250px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-dark dark:bg-light dark:text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light rounded-lg text-light w-fit flex items-center gap-2 border-2 border-dark hover:bg-light hover:text-dark transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  {!isLoading && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  )}
                </button>

                {showToast && (
                  <Toast
                    message="Message sent successfully"
                    onClose={() => setShowToast(false)}
                  />
                )}
              </form>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
