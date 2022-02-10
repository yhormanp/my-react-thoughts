import React from 'react'
import ReactDOM from 'react-dom'

function PortalsDemoB() {
    return ReactDOM.createPortal (
        <div>
            <h2>Portals Demo B</h2>
        </div>
        , document.getElementById('portal-root')
    )
}

export default PortalsDemoB
