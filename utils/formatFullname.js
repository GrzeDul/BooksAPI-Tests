module.exports = (fullName) => {
  if (typeof fullName !== 'string') return 'Error';
  const regFnameTest = new RegExp(
    "^([p{L}]{3,20})s([p{L}]([-']?[p{L}]{3,20}){1,3})$"
  );
  if (!regFnameTest.test(fullName)) return 'Error';
  const [firstName, lastName] = fullName.split(' ');
  if (!firstName || !lastName) return false;
  return (
    firstName[0].toUpperCase +
    firstName.slice(1).toLowerCase() +
    lastName[0].toUpperCase +
    lastName.slice(1).toLowerCase()
  );
};
