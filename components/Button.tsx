export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        margin: "8px",
        backgroundColor: "#0070f3",
        color: "white",
        padding: "8px 16px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }}
    >
      {label}
    </button>
  );
}
