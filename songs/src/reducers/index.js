import {combineReducers} from 'redux';
const songsReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4.05'},
        {title: 'Macarena', duration: '3.05'},
        {title: 'All star', duration: '4.55'},
        {title: 'I want that way', duration: '1.45'},
    ]
};

const selectedSongReducer = (selectedSongs = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSongs;
};

export default combineReducers({
    songs: songsReducer,
    selectedsong: selectedSongReducer
});