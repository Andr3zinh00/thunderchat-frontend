export function calculateAge (birthDate) {
  birthDate = new Date(birthDate);

  let otherDate = new Date();
  let years = (otherDate.getFullYear() - birthDate.getFullYear());

  if (otherDate.getMonth() < birthDate.getMonth() || 
      (otherDate.getMonth() === birthDate.getMonth() && otherDate.getDate() < birthDate.getDate())) {
      years--;
  }

  return years;
}