const baseURL = `http://localhost:3000/api/`;
// post endpoint
//api/posts

export default async function getPosts(id) {
  const res = await fetch(`${baseURL}posts/`);
  const data = await res.json();
  if (id) {
    return data.find((value) => value.id === id);
  }
  return data;
}
