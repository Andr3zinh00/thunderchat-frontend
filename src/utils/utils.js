export function calculateAge(birthDate) {
  birthDate = new Date(birthDate);

  let otherDate = new Date();
  let years = (otherDate.getFullYear() - birthDate.getFullYear());

  if (otherDate.getMonth() < birthDate.getMonth() ||
    (otherDate.getMonth() === birthDate.getMonth() && otherDate.getDate() < birthDate.getDate())) {
    years--;
  }

  return years;
}

export const onChange = (value, setState) => {
  setState(value);
  console.log(value)
}


export const getReduxState = (accessString) => {

  return JSON.parse(localStorage.getItem(accessString));
}