import React from 'react';

const ListItems = ({item}) => { 
    if ( item.quote.trim() && item.author.trim() ) return (
        <li className="list-item">
            <blockquote className="blockquote">
                <p className="blockquote--text">{item.quote}</p>
                <cite className="blockquote--cite">{item.author}</cite>
            </blockquote>
        </li>
    )
    return (
        null
    )
}

export default ListItems;







