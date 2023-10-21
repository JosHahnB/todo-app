import { Box, TextField, Button } from "@mui/material";

const TodoForm = ({ handleChange, handleSubmit, defaultValues }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <form onSubmit={handleSubmit}>
        <h2>Add To Do Item</h2>

        <TextField
          onChange={handleChange}
          name="text"
          type="text"
          placeholder="Item Details"
          size="small"
          variant="outlined"
          margin="dense"
          label="To Do Item"
        />

        <TextField
          onChange={handleChange}
          name="assignee"
          type="text"
          placeholder="Assignee Name"
          size="small"
          variant="outlined"
          margin="dense"
          label="Assigned To"
        />

        <TextField
          onChange={handleChange}
          defaultValue={defaultValues.difficulty}
          type="range"
          min={1}
          max={5}
          name="difficulty"
          size="small"
          variant="outlined"
          margin="dense"
          label="Difficulty"
        />

        <Button type="submit" size="small" variant="contained" margin="dense">
          Add Item
        </Button>
      </form>
    </Box>
  );
};

export default TodoForm;