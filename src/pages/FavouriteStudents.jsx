import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

export default function FavouriteStudents() {
  const { favourites, removeFromFavourites } = useContext(StudentContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Favourite Students</h2>

      {favourites.length === 0 ? (
        <p>No favourite students added yet</p>
      ) : (
        favourites.map((s) => (
          <div key={s.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <p>{s.name}</p>
            <p>{s.roll}</p>
            <button onClick={() => removeFromFavourites(s.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}