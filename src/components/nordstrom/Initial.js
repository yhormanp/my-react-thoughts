import React, {useState} from 'react'

function Initial() {
    const [usrName, setUsrName] = useState(null);
    const [pwd, setPwd] = useState(null)

    const validation =()=> {
        console.log('info to be logged', {usrName, pwd})
    }

    const limitPassword = (e) => {
            setPwd(e.currentTarget.value)
    }
    return (
        <div>
            <input type="text" placeholder="username" onChange={(e)=>  setUsrName(e.currentTarget.value)}></input>
            <input type="password" size="20" maxLength="6" onChange={(e)=>  limitPassword(e)}></input>

            <button onClick={() => validation()}> Log in</button>
        </div>
    )
}

export default Initial
