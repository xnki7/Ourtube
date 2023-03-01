import React from "react";
import { useState } from "react";
import { Paper, TextField } from "@mui/material";

function SearchBar({onSubmit}) {
  const { searchTerm, setSearchTerm } = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const onKeyPress = (event) =>{
    if (event.key === "Enter"){
        onSubmit(searchTerm);
    }
  }
  return (
    <div className="SearchBar">
      <Paper elevation={6} styling={{ padding: "25px" }}>
        <TextField
          fullWidth
          label="Search..."
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={onKeyPress}
        />
      </Paper>
    </div>
  );
}

export default SearchBar;
