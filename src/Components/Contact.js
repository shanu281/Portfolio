import React, {useRef} from "react";
import { contact, contsct } from "../data";
import emailjs from '@emailjs/browser';
import { message ,Button} from 'antd';


const Contact = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Your message sent sucessfully',
    });
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
   emailjs.sendForm('service_ghxohep', 'template_rqgohhd', form.current, '2mtQ6rJnePBQNsecQ')
      .then((result) => {
          console.log(result.text);
          success()
      }, (error) => {
          console.log(error.text);
      });
  };
s
    return (
        <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        {/* Section Title  */}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:lg:block before:hidden">
            Contact me
          </h2>
          <p className="subtitle">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
            <br /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur
          </p>
        </div>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/* Info  */}
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, i) => {
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={i}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-3">{item.title}</h4>
                    <p className="mb-1">{item.subtitle}</p>
                    <p className="text-accent font-normal">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Form  */}
          <form ref={form} onSubmit={sendEmail} className="space-y-8 w-full max-w-[780px]">
            <div className="flex gap-8">
               <input className="input" type="text" name="from_name" placeholder="Your Name" />
               <input className="input" type="email" name="from_name" placeholder="Your Email" />
            </div>
               <input className="input" type="texarea" placeholder="Subject" />
               <textarea className="textarea" type="textarea" name="message"  placeholder="Your Message" />
               <button value="Send" className="btn btn-lg bg-accent hover:bg-accent-hover">Send Message</button>
               {contextHolder}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
