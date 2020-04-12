import React from 'react'


const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2 tc '>

            <input style={{ width: '250px', height: '40px' }}
                className='pa3 ma2 br4 ba b--green'
                type='search'
                placeholder='Search robot-usernames 🔍'
                onChange={searchChange}
            />

        </div>

    );
}
export default SearchBox;