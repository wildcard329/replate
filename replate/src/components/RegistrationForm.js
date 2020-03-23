import React, {useState} from 'react';
import {connect} from 'react-redux';
import { requestJoin } from './actions';

export const SmurfForm = props => {
    const [request, setRequest] = useState({
        username: '',
        email: '',
        password: ''
    })
    const handleChanges = e => {
        setRequest({...request, [e.target.name]: e.target.value});
    };
    const submitForm = e => {
        e.preventDefault();
        props.requestJoin(request);
        setRequest('');
    }
    return (
        <form onSubmit={submitForm}>
        <div>
            <label htmlFor="username">username</label>
            <input id="username"
            type="text"
            name="username"
            onChange = {handleChanges}
            value={request.username} />
        </div>
        <div>
            <label htmlFor="email">email</label>
            <input
            id="email"
            type="email"
            name="email"
            onChange={handleChanges}
            value={request.email} />
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input
            id="password"
            type="text"
            name="password"
            onChange={handleChanges}
            value={request.password} />
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
    </form>
    )
}

export default connect(null, { requestJoin })(SmurfForm);