import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, 'contact-one'), {
        name,
        email,
        message,
      });
      setName('');
      setEmail('');
      setMessage('');
      toast.success('Message Sent');
      setDisableBtn(false);
    } catch (error) {
      toast.error('Error');
      console.log(error);
      setDisableBtn(false);
    }
  };
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>Name</label>
            <input
              type="text"
              required
              placeholder="abc"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="abc@xyz.com" value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" disabled={disableBtn}>Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
