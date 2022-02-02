import {useState} from 'react';

function useCtxDark2() {
    const [dark, setDark] = useState(false);

    return [dark, setDark];
}

export default useCtxDark2;
