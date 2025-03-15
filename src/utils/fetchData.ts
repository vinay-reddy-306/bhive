export async function fetchData() {
  return await fetch(
    "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/data.json"
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err);
}
