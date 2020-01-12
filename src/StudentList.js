import React, {useState, useEffect} from 'react';
// import StudentDetail from './StudentDetail';

function StudentList() {
  const [studentList, setStudentList] = useState([]);
  const [student, setStudent] = useState({
    course: '',
    name: '',
    age: '',
    sec: '',
    address: '',
    roll: '',
    image: {value: ''},
  });
  const name = e => {
    setStudent({...student, [e.target.name]: e.target.value});
    console.log(e.target.value);
  };
  const image = e => {
    setStudent({...student, image: URL.createObjectURL(e.target.files[0])});
    console.log(e.target.files[0]);
  };

  const button = e => {
    if (
      student.name === '' ||
      student.age === '' ||
      student.roll === '' ||
      student.address === '' ||
      student.sec === '' ||
      student.image.value === ''
    ) {
      alert('input requird');
    } else {
      setStudentList([...studentList, {...student}]);
      setStudent({
        course: '',
        name: '',
        age: '',
        sec: '',
        address: '',
        roll: '',
        image: {value: ''},
      });
    }

    console.log(studentList);
    e.preventDefault();
  };

  const courses = e => {
    setStudent({...student, course: e.currentTarget.value});
    console.log(e.currentTarget.value);
  };

  const [students, setStudents] = useState({
    isLoaded: false,
    items: [],
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        setStudents({
          isLoaded: true,
          items: json,
        });
      });
  });
  const {items} = students;

  return (
    <div>
      <div className="science">
        <img src="" alt="" />
      </div>

      <div className="amrit">Amrit Campus</div>
      <div>
        Courses:<span>Bachelor</span>
      </div>
      <div className="container">
        <div className="heading">Student Form</div>
        <form className="form">
          <div className="inputField">
            <div className="name">
              <input
                className="inputs"
                name="name"
                type="text"
                value={student.name}
                onChange={name}
                placeholder="Full Name"
              />
              <input
                className="inputs"
                name="roll"
                type="text"
                value={student.roll}
                onChange={name}
                placeholder="Student roll."
              />
            </div>
            <div className="name">
              <input
                className="inputs"
                name="address"
                type="text"
                value={student.address}
                onChange={name}
                placeholder="Address"
              />
              <input
                className="inputs"
                name="age"
                type="text"
                value={student.age}
                onChange={name}
                placeholder="Age"
              />
            </div>
            <div className="name">
              <input
                className="inputs"
                name="sec"
                type="text"
                value={student.sec}
                onChange={name}
                placeholder="Section"
              />
              <select className="inputs" onChange={courses}>
                <option selected disabled>
                  Bachelor Courses
                </option>
                <option name="csit" value="Csit">
                  Csit
                </option>
                <option name="bsc" value="Bsc.Science">
                  Bsc.Science
                </option>
                <option name="edu" value="Education">
                  Education
                </option>
                <option name="phy" value=" Physics">
                  Physics
                </option>
                <option name="math" value="Math">
                  Math
                </option>
              </select>
            </div>
            <div className="select">
              <input
                className="selectFile"
                type="file"
                onChange={image}
                value={student.image.value}
              />
            </div>
          </div>
        </form>
        <div className="boton">
          <input
            type="submit"
            value="Submit"
            onClick={button}
            className="submit"
          />
        </div>
      </div>
      <div>
        <div>
          {items.map(item => (
            <ul className="details">
              <div>
                <li key={item.name}>Name:{item.name}</li>
                <li key={item.name}>address:{item.address.street}</li>
              </div>
            </ul>
          ))}
        </div>

        {studentList.map(item => (
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
      {/* 
      // /
      /
      /
      /
      /
      /
      /
      /
      
      
      */}
      {/* <StudentDetail /> */}
    </div>
  );
}

export default StudentList;
