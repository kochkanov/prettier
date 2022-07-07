import "./App.css";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const arrSelect = [
  {
    name: "holidays",
  },
  {
    name: "my day",
  },
  {
    name: "my day",
  },
];

function App() {
  const [newData, setnewData] = useState(arrSelect);

  const handleChange = () => {};

  
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={newData}
        label="Age"
        onChange={handleChange}
      >
        {newData.map((el) => (
          <MenuItem value={el.value}>{el.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}




export default App;
