import React, { useRef, useState, useEffect, useCallback } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const gradRef = useRef(null);

  const [done, setDone] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   ? Directionally aware func
  const handleMove = useCallback((e) => {
    const grad = gradRef.current;
    const btn = buttonRef.current;
    if (grad) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      grad.style.left = `${x - grad.offsetWidth / 2}px`;
      grad.style.top = `${y - grad.offsetHeight / 2}px`;
    }
  }, []);

  // & useEffect
  useEffect(() => {
    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [handleMove]);

  //   & on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_75jf4jp",
        "template_5f99jem",
        formRef.current,
        "f4mH3ii4UC4w8vsjz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='contact-wrapper' id='to-contact'>
      <div className='spacer'></div>
      <div className='contact-content'>
        <div className='subheader'>Contact</div>
        {/* BEGIN GRID */}
        <div className='contact-grid raleway'>
          <div className='contact-left'>
            <div className='contact-leaf-bg'></div>
            <div className='contact-left-copy'>
              <p>
                <strong>Questions? Interested in more?</strong>
              </p>
              <p>
                Fill out your information in the form, or use the following-
              </p>
            </div>
            <div className='contact-icons'>
              <div className='contact-icon-0'>
                <a href='https://github.com/hollyefig' target='_blank'>
                  .
                </a>
                <svg
                  width='56'
                  height='55'
                  viewBox='0 0 56 55'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M28 5.46436C15.9294 5.46436 6.14288 15.2509 6.14288 27.3215C6.14288 37.5634 13.1955 46.1332 22.7033 48.5047C22.6013 48.2096 22.5357 47.8672 22.5357 47.4428V43.7071C21.6487 43.7071 20.1624 43.7071 19.789 43.7071C18.2936 43.7071 16.964 43.0641 16.3192 41.8692C15.6034 40.5414 15.4795 38.5105 13.7055 37.2683C13.1791 36.8548 13.5798 36.3831 14.1863 36.4468C15.3065 36.7638 16.2354 37.5324 17.1097 38.6726C17.9803 39.8147 18.3902 40.0733 20.0167 40.0733C20.8054 40.0733 21.9857 40.0278 23.0967 39.8529C23.6942 38.3357 24.7269 36.9386 25.9892 36.2793C18.7107 35.5307 15.2373 31.9097 15.2373 26.9936C15.2373 24.8771 16.1389 22.8299 17.6707 21.105C17.168 19.3928 16.536 15.9011 17.8638 14.5715C21.1387 14.5715 23.1186 16.6953 23.594 17.269C25.226 16.7099 27.0183 16.3929 28.9016 16.3929C30.7886 16.3929 32.5882 16.7099 34.2238 17.2727C34.6938 16.7026 36.6755 14.5715 39.9577 14.5715C41.291 15.903 40.6517 19.4092 40.1435 21.1177C41.6662 22.839 42.5624 24.8808 42.5624 26.9936C42.5624 31.906 39.0943 35.5252 31.8268 36.2775C33.8268 37.3211 35.2857 40.2536 35.2857 42.463V47.4428C35.2857 47.6322 35.2438 47.7688 35.222 47.931C43.739 44.9456 49.8572 36.8585 49.8572 27.3215C49.8572 15.2509 40.0706 5.46436 28 5.46436Z'
                    fill='#E63946'
                  />
                </svg>
                <span>GitHub</span>
              </div>

              <div className='contact-icon-1'>
                <a
                  href='https://www.linkedin.com/in/holly-figenshu-58165166'
                  target='_blank'
                >
                  .
                </a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='54'
                  height='54'
                  viewBox='0 0 54 54'
                  fill='none'
                >
                  <path
                    d='M27 5.50049C15.1258 5.50049 5.5 15.1263 5.5 27.0004C5.5 38.8746 15.1258 48.5004 27 48.5004C38.8741 48.5004 48.5 38.8746 48.5 27.0004C48.4999 15.1263 38.874 5.50049 27 5.50049ZM21.2637 37.3947H16.5432V22.144H21.2637V37.3947ZM18.881 20.1468C17.3393 20.1468 16.0895 18.8868 16.0895 17.3328C16.0895 15.7786 17.3395 14.5187 18.881 14.5187C20.4225 14.5187 21.6723 15.7786 21.6723 17.3328C21.6724 18.8869 20.4226 20.1468 18.881 20.1468ZM38.9539 37.3947H34.2563V29.3893C34.2563 27.1937 33.4223 25.9681 31.6861 25.9681C29.7966 25.9681 28.8095 27.2446 28.8095 29.3893V37.3947H24.282V22.144H28.8095V24.198C28.8095 24.198 30.1714 21.6788 33.4052 21.6788C36.639 21.6788 38.954 23.6534 38.954 27.7382L38.9539 37.3947Z'
                    fill='#E63946'
                  />
                </svg>
                <span>LinkedIn</span>
              </div>
              <div className='contact-icon-2'>
                <a href='mailto:hollyefig@gmail.com' target='_blank'>
                  .
                </a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='56'
                  height='55'
                  viewBox='0 0 56 55'
                  fill='none'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M28 48.5C39.8741 48.5 49.5 38.8741 49.5 27C49.5 15.1259 39.8741 5.5 28 5.5C16.1259 5.5 6.5 15.1259 6.5 27C6.5 38.8741 16.1259 48.5 28 48.5ZM18.0709 14.8402C16.48 14.8402 15.0231 15.4141 13.896 16.3661C13.8201 16.4121 13.7486 16.4678 13.6831 16.5333C13.6461 16.5703 13.6123 16.6092 13.5815 16.6497C12.358 17.8274 11.5968 19.482 11.5968 21.3143V32.5331C11.5968 36.1086 14.4954 39.0072 18.0709 39.0072H37.8348C41.4103 39.0072 44.3089 36.1086 44.3089 32.5331V21.3144C44.3089 17.7388 41.4103 14.8402 37.8348 14.8402H18.0709ZM13.8505 21.3143C13.8505 20.4562 14.1067 19.6579 14.5466 18.9917L14.5826 19.0277C17.0525 21.5027 19.273 23.7279 21.2851 25.3772C23.4866 27.1817 25.6717 28.5015 27.8742 28.5222V28.5224L27.9004 28.5223L27.9266 28.5224V28.5222C30.1292 28.5015 32.3143 27.1817 34.5158 25.3772C36.5278 23.728 38.7484 21.5027 41.2183 19.0277L41.3168 18.9289C41.7826 19.6075 42.0552 20.4291 42.0552 21.3144V32.5331C42.0552 34.8639 40.1656 36.7535 37.8348 36.7535H18.0709C15.7401 36.7535 13.8505 34.8639 13.8505 32.5331V21.3143ZM22.7138 23.6342C24.8781 25.4082 26.5347 26.2578 27.9004 26.2686C29.2662 26.2578 30.9228 25.4082 33.0871 23.6342C34.9937 22.0713 37.1134 19.9499 39.5855 17.4731C39.0522 17.2296 38.4593 17.094 37.8348 17.094H18.0709C17.4183 17.094 16.8003 17.2421 16.2487 17.5066C18.7066 19.969 20.8157 22.0784 22.7138 23.6342Z'
                    fill='#E63946'
                  />
                </svg>
                <span>Email</span>
              </div>
            </div>
          </div>
          <div className='contact-right'>
            {/* BEGIN FORM */}
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className='contact-inputs'>
                <div className='name-border'>
                  <input
                    type='text'
                    name='name'
                    value={name}
                    placeholder='Name'
                    id='name'
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className='email-border'>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    placeholder='Email'
                    id='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className='subject-border'>
                  <input
                    type='text'
                    name='subject'
                    value={subject}
                    placeholder='Subject'
                    id='subject'
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className='msg-border'>
                  <textarea
                    name='message'
                    placeholder='Message'
                    id='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <div className='contact-submit'>
                  <button
                    ref={buttonRef}
                    className={`contactSubmit ${
                      name === "" ||
                      email === "" ||
                      subject === "" ||
                      message === ""
                        ? "submit-disabled"
                        : null
                    }`}
                    disabled={
                      name === "" ||
                      email === "" ||
                      subject === "" ||
                      message === ""
                        ? true
                        : false
                    }
                  >
                    <div className='submit-gradient' ref={gradRef}></div>
                    <span>Submit</span>
                  </button>
                  <div className='form-message'>
                    {done && "Your message has been sent. Thank you!"}
                  </div>
                </div>
              </div>
              {/* END FORM */}
            </form>
          </div>
          {/* END GRID */}
        </div>
      </div>
    </div>
  );
}
