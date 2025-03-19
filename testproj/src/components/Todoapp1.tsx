import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export function TodoApp() {
  return (
    <>
      <div style={{ flex: 1 }}>
        <Grid container spacing={2} style={{ margin: 10 }}>
          <Grid size={8}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            
          </Grid>
          <Grid size={2}>
            <input style={{ marginTop: 17 }} type="date"></input>
          </Grid>
          <Grid size={1}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default TodoApp;