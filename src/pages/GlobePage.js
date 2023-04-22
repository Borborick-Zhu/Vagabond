import Globe from 'react-globe.gl';
import { useEffect } from 'react';

import { handleGetGPTResponse } from '../script/fbAPI';

const GlobePage = () => {
    useEffect(() => {
        const callFunc = async () => {
            // handleGetGPTResponse();
        }

        callFunc();
    }, [])
    return (
        <div>
            {/* <Globe /> */}
        </div>
    )
}

export default GlobePage;