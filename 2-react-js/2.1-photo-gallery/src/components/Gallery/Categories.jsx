import React from "react";
export default function Categories({ list }) {
  return (
    <div>
      {list.map((item) => (
        <button key={item.name} type="button" className="btn btn-light">
          {item.name}
        </button>
      ))}
    </div>
  );
}
