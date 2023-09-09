import React from "react";
import Card from "./Card";
import "./Column.css";
import logo from "../u1.png";
function Column({ dataset, group, order, users }) {
  console.log(dataset, "column", group, order, users);
  const user = users.find((obj) => {
    return obj.id === dataset[0]["userId"];
  });
  let uname = user.name;
  console.log(user.name);
  let priority = dataset[0]["priority"];
  console.log(priority);
  let pr;
  if (priority === 0) pr = "No priority";
  else if (priority === 1) pr = "Low";
  else if (priority === 2) pr = "Medium";
  else if (priority === 3) pr = "High";
  else if (priority === 4) pr = "Urgent";
  return (
    <>
      <div className="colum">
        <div className="colhead">
          <div className="coltitle">
            <div className="icon">
              <img src={logo} alt="" />
            </div>
            <div className="name">
              {group == "status"
                ? dataset[0]["status"]
                : group == "userId"
                ? uname
                : pr}
              <div className="count">{dataset.length}</div>
            </div>
          </div>
          <div className="cardAdd">
            <div className="addIcon">+</div>
            <div className="addIcon2">...</div>
          </div>
        </div>
        {/* {Object.keys(dataset).map((key, index) => {
          return <Card data={dataset[key]} key={index} />;
        })} */}
        {dataset.map((d) => {
          return <Card data={d} key={d.id} />;
        })}
      </div>
    </>
  );
}

export default Column;
