import React, { useState } from 'react';

function AddSongForm(props) {
    const[title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSong(title);
        //this doesn't clean up, why? *see next comment, now it works
        setTitle('');
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <label>Enter your song here</label>
            {/* in order for the setTitle('') = cleanup to work, I have to "sync" putting value={title} */}
            <input className="input" type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <button className="button">Add</button>
        </form>
    )
}

export default AddSongForm;