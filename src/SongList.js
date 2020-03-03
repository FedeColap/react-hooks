import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        console.log('this runs on the rerender of', songs);
    }, [songs]) // the array here is the second paramenter of the data we wanna monitor and rerender(otherwise it fires at any change of state)
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
