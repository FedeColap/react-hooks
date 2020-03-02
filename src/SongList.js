import React, { useState} from 'react';
import AddSongForm from './AddSongForm'

function SongList() {

    function generateRandom() {
        return Math.floor(Math.random() * Math.floor(100));
    }
    const [songs, setSongs] = useState([
        {title: "Acido Acida", id: 1},
        {title: "Se telefonando", id: 2},
        {title: "Ragazza acidella", id: 3},
    ]);

    //const here is necessary, otherwise it says not defined
    const addSong = (title) => {
       setSongs([
            ...songs, {title: title, id: generateRandom() }
       ]) 
    }
    return(
        <div className = "song-list">
            <ul>
                {songs.map(song => {
                   return <li className="li" key = {song.id}>{song.title}</li>
                })}
            </ul>
            <AddSongForm addSong={addSong}/>
        </div>
    )
}

export default SongList;
