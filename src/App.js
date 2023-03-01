import "./App.css";
import youtube from "./api/youtube";
import { Grid } from "@mui/material";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onSubmit={handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              {/* {VideoDetail} */}
            </Grid>
            <Grid item xs={4}>
              {/* {VideoList} */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
  async function handleSubmit(searchItem) {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAB3yO1E0WpPBPxU6iS84gXOX7Os7m1FXQ",
        q: searchItem,
      },
    });
    console.log(response.data.items);
  }
}

export default App;
