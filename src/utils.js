export const getImageURL = (path) => {

  const url = new URL(`/assets/${path}`, import.meta.url).href;
  console.log(path);
  return url;
}
