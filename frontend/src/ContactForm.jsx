import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/contact.php", {
      method: "POST",
      body: new FormData(e.target),
    });
    const data = await res.json();

    setResponse(data.message);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>{message.length} / 200</p>
      {message.length > 200 && <p>Message is over 200 characters</p>}
      <button type="submit">Send</button>
      <p>{response}</p>
    </form>
  );
}
