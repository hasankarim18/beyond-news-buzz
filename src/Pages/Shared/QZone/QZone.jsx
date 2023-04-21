import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'


const QZone = () => {
    return (
        <div className="bg-secondary mt-3 mb-3" >
            <h2 className="text-center text-white">Q-Zone</h2>
            <div className="py-2">
                <img className="img-fluid" src={qzone1} alt="" />
                <img className="img-fluid" src={qzone2} alt="" />
                <img className="img-fluid" src={qzone3} alt="" />
            </div>

        </div>
    );
};

export default QZone;