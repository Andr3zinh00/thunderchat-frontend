export function calculateAge(birthDate) {
  birthDate = new Date(birthDate);

  let otherDate = new Date();
  let years = (otherDate.getFullYear() - birthDate.getFullYear());

  if (otherDate.getMonth() < birthDate.getMonth() ||
    (otherDate.getMonth() === birthDate.getMonth() &&
      otherDate.getDate() < birthDate.getDate())) {
    years--;
  }

  return years;
}

export const onChange = (value, setState) => {
  setState(value);
}


export const getReduxState = (accessString) => JSON.parse(localStorage.getItem(accessString));


export const getAuth = () => {
  const state = getReduxState('u');
  console.log(state)
  const Authorization = "Bearer " + state?.token || "12312312pokspadkopaskopas";
  return { headers: { Authorization: Authorization, 'Content-Type': 'application/json' } };
}