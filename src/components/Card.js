import React from 'react';

const Card = (props) => {
    const { username, address, email, id } = props;
    return (
        <div className='tc bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-5 br--top'>
            
            <div className='bg-light-blue  br2'>
                <img style={{ width: '150px', height: '150px' }}
                    className='br-100 h4 w4 ba b--black-05 pa2 ma2 ' alt='robots' src={`https://robohash.org/${id}`} />
            </div>
                 
            <div className=' pa2 br2 '>
                <h6 className="ttu f4 b">{username}</h6>
                <p>{email}</p>
                <hr className="mw3 bb bw1 b--black-10"></hr>
                <p className='ttu f5 fw4 mt0 black-60'>City: {address} </p>
            </div>

        </div>
    );
}

export default Card;