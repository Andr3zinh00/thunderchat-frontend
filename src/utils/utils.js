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

export const calcAge = (data) => {
  if(data == null){
    return "Data de nascimento não cadastrada!";
  }
  var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),
        split = data.split('/'),
        novadata = split[1] + "/" +split[0]+"/"+split[2],
        data_americana = new Date(novadata),
        vAno = data_americana.getFullYear(),
        vMes = data_americana.getMonth() + 1,
        vDia = data_americana.getDate(),
        ano_aniversario = +vAno,
        mes_aniversario = +vMes,
        dia_aniversario = +vDia,
        quantos_anos = ano_atual - ano_aniversario;
    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }
    return quantos_anos < 0 ? 0 : quantos_anos;
} 

export const getReduxState = (accessString) => JSON.parse(localStorage.getItem(accessString));


export const getAuth = () => {
  const state = getReduxState('u');
  const Authorization = "Bearer " + state?.token;
  return { headers: { Authorization: Authorization, 'Content-Type': 'application/json' } };
}