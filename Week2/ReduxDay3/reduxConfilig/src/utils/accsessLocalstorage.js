export const saveData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const loadData = (key) => {
  let value = localStorage.getItem(key);
  let data = JSON.parse(value);
  return data;
};
