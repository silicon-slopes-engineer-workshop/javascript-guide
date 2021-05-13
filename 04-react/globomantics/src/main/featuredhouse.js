import React from 'react';
import House from '../house';

const FeaturedHouse = (props) => {
    if (props.house) return (
        <div>
            <div classNam="row featuredHouse">
                <h3 className="col-md-12 text-center">
                    Featured House
                </h3>
            </div>
        </div>
    )
    return (<div>No featured house at this time</div>);
}
 
export default FeaturedHouse;