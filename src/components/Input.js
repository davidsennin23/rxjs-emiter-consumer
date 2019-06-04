import React from 'react';

const Input = ({onValueChange}) => (
    <form>
        <input onChange={e => onValueChange(e.target.value)}/>
        <button>Action</button>
    </form>
);

export default Input;