import './App.css'
import PropTypes from "prop-types";

function StudentCard({name, regno, grade}){
  return(
    <div className="student-card">
      <h2><strong>Name:</strong> {name}</h2>
      <h2><strong>Reg No:</strong> {regno}</h2>
      <h2><strong>Grade:</strong> {grade}</h2>
    </div>
  );
}

StudentCard.propTypes = {
  name : PropTypes.string.isRequired,
  regno : PropTypes.number.isRequired,
  grade : PropTypes.number.isRequired,
};

function App(){
  return (
    <>
      <div>
        <h2>Student Identity Card</h2>
        <StudentCard
          name="Sabitha"
          regno="212222040137"
          grade="9.2"
        />
      </div>
      <footer className="footer">
        <p>By Sabitha</p>
        <p>Reg No: 212222040137</p>
      </footer>
    </>
  )
}

export default App
