import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>Are you sure ?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Sam" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Martin" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  );
};

// to show inside index.html
ReactDom.render(<App />, document.querySelector("#root"));
