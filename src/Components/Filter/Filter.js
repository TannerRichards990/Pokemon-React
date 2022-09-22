import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

export default function Filter({ types, type, setType }) {
  return (
    <div className="filter">
      <Select value={type} onChange={(e) => 
        setType(e.target.value)}>
        <MenuItem value="All">All</MenuItem>
        {types.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
