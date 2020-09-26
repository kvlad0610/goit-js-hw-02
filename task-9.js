function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line

  const loginValid = login.length >= 4 && login.length <= 16;

  return loginValid;
}

function isLoginUnique(allLogins, login) {
  "use strict";

  let loginUnique;
  if (allLogins.includes(login)) {
    loginUnique = false;
  } else {
    loginUnique = true;
  }

  return loginUnique;
}
// Write code under this line

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;

  // Write code under this
  if (isLoginValid(login) === false) {
    return (message = ERROR);
  } else if (isLoginUnique(allLogins, login) === false) {
    return (message = REFUSAL);
  } else {
    allLogins.push(login);
    console.log(allLogins);
    return (message = SUCCESS);
  }
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов' \
