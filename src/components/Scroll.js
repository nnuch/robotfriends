import React from 'react';


//props
//state
//children =  Scroll can use children

const Scroll = (props) => {
    return (
        <div className='pa3 ba br2 b--black-20 center b--dashed '
            style={{
                overflowY: 'scroll',
                height: '60vh',
                backgroundColor: '#d7e6d1',
            }}>
            {props.children}
        </div>
    )

};

export default Scroll;