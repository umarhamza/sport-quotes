import React from 'react';
import ListItems from './ListItems';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


const List = props => {
    const {items} = props;
    const listContents = items.length ? (
        items && items.map((item, i) => {
            return (
                <ListItems item={item} key={i} />
            )
        })
    ) : (
        <li className="list-item notice">No quotes listed. Please add a quote!</li>
    );

    return (
        <div className="List">
            <SimpleBar style={{ maxHeight: '900px' }}>
                <ul id="quotes" className="list">
                    {
                        listContents                        
                    }
                </ul>       
            </SimpleBar>     
        </div>
    )
}

export default List;







