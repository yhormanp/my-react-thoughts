import React from 'react'
import useMarkedDays from './customHooks/useMarkedDays';

function Testingcomp() {

    const [markedDays, addDateAndMood] = useMarkedDays();
    console.log('in testing, markedDays', markedDays)
    return (
        <div>
            hello from markedDays
        </div>
    )
}

export default Testingcomp
