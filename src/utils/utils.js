export function calculateAge(birthDate) {
  
  if(birthDate === null){
    return "Data de nascimento não cadastrada!";
  }
  console.log(birthDate)

  birthDate = new Date(birthDate);
  console.log(birthDate,"aaaaa")
  let otherDate = new Date();
  let years = (otherDate.getFullYear() - birthDate.getFullYear());

  if (otherDate.getMonth() < birthDate.getMonth() ||
    (otherDate.getMonth() === birthDate.getMonth() &&
      otherDate.getDate() < birthDate.getDate())) {
    years--;
  }
  console.log(years)
  return years;
}

export const onChange = (value, setState) => {
  setState(value);
}

export const getReduxState = (accessString) => JSON.parse(localStorage.getItem(accessString));

export const cleanLocal = (accessString) => JSON.parse(localStorage.clear(accessString));

export const getAuth = () => {
  const state = getReduxState('u');
  const Authorization = "Bearer " + state?.token;
  return { headers: { Authorization: Authorization, 'Content-Type': 'application/json' } };
}