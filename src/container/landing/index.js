import React from 'react';
import Calculate from '../../logic/calculate';

class Landing extends React.Component{
render(){
    return(
    <div>
        <button onClick={() => Calculate([2, 0 ,3, 0, 0, 0], 6)}>
            Calculate
        </button>
    </div>);
}
}

export default Landing;