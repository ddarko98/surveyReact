import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BasicInfo({ addBasicData }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            alert('All fields are necessary');
        } else {
            addBasicData(name, email, contact);
            navigate('/questions');
        }
    }

    return (
        <div className="">
            <div className=""> 
                <div className=""> 
                    <div className="">
                        <div className=''>
                            <div className=''>
                                <form onSubmit={submit}>
                                    <label htmlFor="">
                                        <h4>Basic Details</h4>
                                    </label>
                                    <div className=''>
                                        <label htmlFor="">
                                            <b>1.</b> Name
                                        </label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            value={name} 
                                            onChange={(e) => setName(e.target.value)}
                                            className='' 
                                            placeholder='Enter name' 
                                            autoComplete='off'
                                        />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="">
                                            <b>2.</b> Email
                                        </label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            value={email} 
                                            onChange={(e) => setEmail(e.target.value)}
                                            className='' 
                                            placeholder='Enter email' 
                                            autoComplete='off'
                                        />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="">
                                            <b>3.</b> Contact
                                        </label>
                                        <input 
                                            type="tel" 
                                            name="contact" 
                                            value={contact} 
                                            onChange={(e) => setContact(e.target.value)}
                                            className='' 
                                            placeholder='Enter contact' 
                                            autoComplete='off'
                                        />
                                    </div>
                                    <button type='submit' className=''>Next</button>
                                </form>
                                <center>
                                    <span className=""><b>1</b></span>
                                    <span className="">2</span>
                                    <span className="">3</span>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
