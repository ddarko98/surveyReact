import { useNavigate } from 'react-router-dom';

export default function EnteredDetails({ data, questionData }) {
    const navigate = useNavigate();

    const submit = () => {
        navigate('/thanks');
    };

    return (
        <div className=''>
            <div className=''>
                <div className=''>
                    <div className=''>
                        <div className=''>
                            <h4>Entered Details</h4>
                            <p>
                                <b>Name:</b> {data.name}
                            </p>
                            <p>
                                <b>Email:</b> {data.email}
                            </p>
                            <p>
                                <b>Contact:</b> {data.contact}
                            </p>

                            <h4>Response</h4>
                            <p>
                                <b>Profession:</b> {questionData.profession}
                            </p>
                            <p>
                                <b>Interest:</b> {questionData.interest}
                            </p>
                            <p>
                                <b>Reference:</b> {questionData.reference}
                            </p>

                            <button type='button' onClick={submit} className=''>
                                Submit
                            </button>

                            <center>
                                <span className=''>1</span>
                                <span className=''>2</span>
                                <span className=''>
                                    <b>3</b>
                                </span>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
