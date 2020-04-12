import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i, city) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            username={robots[i].username}
                            email={robots[i].email}
                            address={robots[i].address.city}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;