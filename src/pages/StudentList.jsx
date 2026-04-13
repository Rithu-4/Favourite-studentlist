// ================= pages/StudentList.jsx =================
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const students = [
  { id: 1, name: "Riya", roll: "101" },
  { id: 2, name: "Arjun", roll: "102" },
  { id: 3, name: "Meena", roll: "103" },
  { id: 4, name: "Karthik", roll: "104" },
];

export default function StudentList() {
  const { addToFavourites } = useContext(StudentContext);

  return (
    <div className="card">
      <h2>Student List</h2>
      {students.map((s) => (
        <div key={s.id} className="card">
          <p>{s.name}</p>
          <p>{s.roll}</p>
          <button onClick={() => addToFavourites(s)}>Add to Favourite</button>
        </div>
      ))}
    </div>
  );
}