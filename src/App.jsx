import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://simpleproject-216h.onrender.com/api/message/")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Message is being sent from django backend, which is deployed in render: {message}</h2>
    </div>
  );
}

export default App;