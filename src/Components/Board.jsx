import React, { useState } from "react";
import Column from "./Column";
import { useEffect } from "react";
import "./Board.css";
function Board({ group, order }) {
  const [ticketsdata, setticketsdata] = useState({});
  const [users, setusers] = useState([]);
  const getData = async () => {
    await fetch("https://api.quicksell.co/v1/internal/frontend-assignment", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        let tickets = myJson.tickets;
        const groupedData = tickets.reduce((groups, item) => {
          const grp = item[group];
          if (!groups[grp]) {
            groups[grp] = [];
          }
          groups[grp].push(item);
          return groups;
        }, []);
        tickets = [];
        for (let groupData in groupedData) {
          tickets.push(
            [...groupedData[groupData]].sort((a, b) =>
              a.order > b.order ? 1 : -1
            )
          );
        }
        setticketsdata(tickets);
        setusers(myJson.users);
        tickets = [];
      });
  };

  useEffect(() => {
    getData();
  }, [group, order]);
  return (
    <>
      <div className="board">
        {Object.keys(ticketsdata).map((key, index) => {
          return (
            <Column
              dataset={ticketsdata[key]}
              group={group}
              order={order}
              users={users}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default Board;
