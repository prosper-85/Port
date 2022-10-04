import { useState, useRef } from "react";
import "./contact.scss";
import { Alart } from "../alart/Alart";
import emailjs from "emailjs-com";


export default function Contact() {
  let formRef = useRef( '' );
  const [ alart, setAlart ] = useState( { show: false, msg: " ", type: " " } );
  const [ error, setError ] = useState( false );

  const showAlart = ( show = false, type = "", msg = "" ) => {
    setAlart( { show, type, msg } );
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();
    const name = e.target[ 0 ].value;
    const email = e.target[ 1 ].value;
    const message = e.target[ 2 ].value;
    console.log( name, email, message );

    if ( !name || !email || !message ) {
      showAlart( true, "danger", "invalid input" );
      setError( true );
    } else {

      emailjs
        .sendForm(
          "service_vxs1ock",
          "template_hr6uw3d",
          formRef.current,
          "Awuubplj08r-k4_lb"
        )
        .then(
          ( result ) => {
            console.log( result.text );
            showAlart( true, "success", "Thanks! We will get back to you shortly" );
            formRef.current.reset();
          },
          ( error ) => {
            if ( error ) {
              showAlart( true, "danger", "Oops! Your connection was interrupted" );
            }
          }
        );
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={ formRef } onSubmit={ handleSubmit }>
          { alart.show && <Alart { ...alart } formRef={ formRef } removeAlart={ showAlart } /> }
          <div>
            <label>Name :</label>
            <input type="text" placeholder="Name" name="user_name" pattern="^[A-Za-z0-9]{3,16}$"
              className={ `${ error ? "input error" : "input" }` } />
          </div>
          <div>
            <label>Email :</label>
            <input type="text" placeholder="Email" name="user_email" className={ `${ error ? "input error" : "input" }` } />
          </div>
          <div className="msg">
            <label>Message :</label>
            <textarea rows="4" placeholder="Message" name="message" className={ `${ error ? "textarea error" : "textarea" }` } />
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
