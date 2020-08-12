import React from 'react';

function StudentList(props) {
  return (
    <div>
      <div>
        <div>
          {props.items.map((item) => (
            <ul className="details">
              <div>
                <li key={item.name}>Name:{item.name}</li>
                <li key={item.name}>address:{item.address.street}</li>
              </div>
            </ul>
          ))}
        </div>

        {props.studentList.map((item) => (
          <div>
            <div>{item.course}</div>
            <ul className="detail">
              <div>
                <img className="image" src={item.image} alt=""></img>
              </div>
              <div>
                <li>Name: {item.name}</li>
                <li>Roll: {item.roll}</li>
                <li>Address: {item.address}</li>
                <li>Age: {item.age}</li>
                <li>Sec: {item.sec}</li>
              </div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;
