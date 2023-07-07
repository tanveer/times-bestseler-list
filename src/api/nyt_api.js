import axios from "axios";

const client = axios.create({
  baseURL: "https://api.nytimes.com/svc/books/v3/lists/",
});

export async function _getTopFiveBooks() {
  const endpoint = `overview.json?api-key=${process.env.REACT_APP_API_KEY}`;
  const res = await client.get(endpoint);
  const lists = res.data.results.lists;
  console.log(lists);
  if (res.status === 200) {
    console.log("Success!!", res.data);
    return lists;
  }
  console.log("Not able to fetch data from api");
  return null;
}

export async function _getList(list_name) {
  const baseURL = "https://api.nytimes.com/svc/books/v3/lists.json?";
  const endpoint = `list=${list_name}&api-key=${process.env.REACT_APP_API_KEY}`;
  console.log(baseURL + endpoint);
  const response = await axios.get(baseURL + endpoint);
  const results = await response.data.results;
  return results;
}
