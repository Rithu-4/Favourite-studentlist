import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (name) {
      alert("Account created! Please login");
      navigate("/login");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Signup</h2>
      <input
        placeholder="Create username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
