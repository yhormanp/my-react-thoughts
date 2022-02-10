import React, { useState } from "react";
import PortalsDemoA from "./PortalsDemoA";
import PortalsDemoB from "./PortalsDemoB";
import PortalsModalA from "./PortalsModalA";
import PortalsModalB from "./PortalsModalB";

function PortalExampleContainer() {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);
  const handleCloseModalA = () => setShowModalA(!showModalA);
  const handleCloseModalB = () => setShowModalB(!showModalB);
  return (
    <div>
      <div>
        Portal added to the root node
        <PortalsDemoA></PortalsDemoA>
      </div>
      <div>
        Portal Added to the node portal-root
        <PortalsDemoB></PortalsDemoB>
      </div>

      <div
        style={{
          height: "100%",
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: 400,
            position: "relative",
          }}
        >
          <div>
            <button onClick={() => handleCloseModalA()}>show modal A</button>
          </div>
          <div>
            <button onClick={() => handleCloseModalB()}>show modal B</button>
          </div>
          {showModalA && (
            <div>
              Showing a modal WITHOUT using portals
              <PortalsModalA onClose={handleCloseModalA}>
                This is the secret modal message A!
              </PortalsModalA>
            </div>
          )}

          {showModalB && (
            <div>
              Showing a modal using portals
              <PortalsModalB onClose={handleCloseModalB}>
                This is the secret modal message B!
              </PortalsModalB>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortalExampleContainer;
