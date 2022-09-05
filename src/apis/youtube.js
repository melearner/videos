import axios from "axios";
const KEY = "AIzaSyAUM3tVzJ8ouvP8htGAALcrUMdlmgz3TU4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
