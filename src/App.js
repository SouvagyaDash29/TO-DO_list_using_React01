import "./App.css";
import Header from "./Components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [form, setForm] = useState({});
  const [data, setdata] = useState([]);

  const addData = () => {
    setdata([...data, form]);
    setForm({});        //setForm(form);
  };
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setdata([...arr]);
  };

  return (
    <div className="App">
      <Header />
      {/* form       */}
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}
            onChange={(event) => setForm({...form, name:event.target.value})}
            id="standard-basic"
            label="name"
            variant="standard"
          />
          <TextField
            value={form.email}
            onChange={(event) => setForm({...form, email: event.target.value})}
            id="standard-basic"
            label="E-mail"
            variant="standard"
          />
          <Button
            onClick={addData}
            style={{ color: "white", backgroundColor: "#c23616" }}
            variant="outlined"
            color="error"
          >
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* data  */}
      <div className="data">
        <div className="data_value">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((Element, index) => {
          return (
            <div key={index} className="data_value">
              <h4>{Element.name}</h4>
              <h4>{Element.email}</h4>
              <Button
                onClick={() => removeItem(index)}
                variant="contained"
                color="error"
              >
                <DeleteIcon />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
