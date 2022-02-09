import React from "react";
import BatchUpdateA from "./BatchUpdateA";
import BatchUpdateB from "./BatchUpdateB";

function ReactBatchContainer() {
  return (
    <div>
      <h2>React Batch Updating</h2>
      <p>
        By default, with syncrhonous methods, react will update in batch all the
        state setters declared in a function, but sometimes you will find a
        situation where there is an asynchronous method that will have to update
        two or three setters causing several re-renderings to the page.
      </p>
      <p>
        In the example A. you will find every time the button is click and the 3
        states are updated, each setter will re-render the component
      </p>
      <p>
        Meanwhile in the Example B, you will find every time the button is click
        and the 3 states are updated, all the 3 state setters are updated in
        batch using unstable_batchedUpdates
      </p>
      <p>
        In React 16 or 17 if you do a state setter within promise they are
        actually done piecemeal, so setName gets runs, the component is re
        rendered and after that it goes with setRoles and the same happens with
        setRolesList To avoid several re-renders, you need to use
        unstable_batchedUpdates in the async method that will contain the groups
        of state setters. Another solution is to manage a single state with all
        the three properties that you require for this example
      </p>
      Example A<BatchUpdateA></BatchUpdateA>
      <br></br>
      Example B<BatchUpdateB></BatchUpdateB>
    </div>
  );
}

export default ReactBatchContainer;
