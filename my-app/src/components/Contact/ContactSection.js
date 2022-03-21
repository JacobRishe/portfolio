import React, {useState} from 'react';
import './Contact.css'

export default function ContactSection() {

  const [state, setState] = useState({ clicked: false});

  const handleClick = () => {
      setState({clicked: !state.clicked})
  }

  return (
    <>
      <div class="container" id="contact">
        <form action="https://formspree.io/f/xwkwbazq" method="POST" id="my-form">
          <label id="description" class="description">Contact Me</label>
          <div class="form-group">
            {/* <label id="name-label" for="name">Name</label> */}
            <input type="text" name="name" id="name" class="form-control" placeholder="Enter your Name" required />
          </div>
          <div class="form-group">
            {/* <label id="name-label" for="name">Company</label> */}
            <input type="text" name="name" id="name" class="form-control" placeholder="Enter your Company" required />
          </div>
          <div class="form-group">
            {/* <label id="email-label" for="email">Email</label> */}
            <input type="email2" name="email" id="email" class="form-control" placeholder="Enter your Email" required />
          </div>
          <div class="form-group">
            {/* <label id="number-label" for="number">Phone</label> */}
            <input type="Age" name="Age" id="Age" class="form-control" placeholder="Enter your Phone" />
          </div>
          <div class="form-group">
            {/* <p>Any additional comments?</p> */}
            <textarea id="comments" class="input-textarea" name="comment" placeholder="Enter your comment here..."></textarea>
          </div>
            <button class="submit-button" type="submit" onClick={() => handleClick()}>Submit</button>
        </form>
      </div>
        <div className={ state.clicked ? 'successMessage active' : 'successMessage' }>Success! I wll be in touch shortly!</div>
    </>

  )
}




