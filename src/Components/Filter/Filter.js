import React from 'react';

export default function Filter({ types, type, setType }) {
  return (
    <div className="filter">
      <select value={type} onChange={(e) => 
        setType(e.target.value)}>
        <option value="All">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
