// const loginPage = document.querySelector("#root").cloneNode(true);
const loginPage = `
<div class="col-6 col-lg-4 card">

  <form class="d-flex justify-content-center align-items-center flex-column p-2"
  style="height: 100%; width: 100%;"
  onsubmit="event.preventDefault()"
  action="#"
  id="my-form-login"
  >
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" required>
    </div>
    <div class="mb-3 flex-grow-0">
      <button type="submit" class="btn btn-primary" id="my-button-login" disabled>Login</button>
    </div>
  </form>

</div>
`



const writeFormLogin = () => {
  // document.querySelector("#root").replaceWith(loginPage);
  document.querySelector("#root").classList.add("flex-grow-1")
  document.querySelector("#root").innerHTML = loginPage;


  document.getElementById("my-button-login")
    .addEventListener("click", onClickLogin);
  document.getElementById("exampleInputEmail1")
    .addEventListener("input", () => {
      document.getElementById("my-button-login").removeAttribute("disabled");
      checkEmail()
    });
}

const writeWelcomeMessage = () => {
  const user = getUserLogged();
  const message = (!!user && user.counter >= 2) ? "Bentornat*" : "Benvenut*"
  document.querySelector("#root").classList.remove("flex-grow-1")

  document.getElementById("root").innerHTML = `
    <header class="bg-black p-4">
      <div
      class="container-fluid d-flex flex-row justify-content-end"
      id="navbar"
      >
        <button class="btn btn-outline-primary border-2" type="submit" id="my-button-logout">
        Logout
        </button>
      </div>
      </header>
    <h1>${message} ${getEmailLogged()}</h1>
  `

  document.getElementById("my-button-logout")
    .addEventListener("click", onClickLogout)
}

const writeCountAndAccess = () => {
  const user = getUserLogged();

  if (!!user && user.counter >= 2) {
    const lastAccessDate = new Date(user.lastAccess);

    const buttonLogout = document.getElementById("my-button-logout");
    const countAndAccess = document.createElement("div");
    countAndAccess.innerHTML = `
      <div class="rounded-circle text-white btn btn-primary disabled">${user.counter}</div>
      <div class="bg-white p-2 rounded-2">${lastAccessDate.toLocaleString()}</div>
    `;
    countAndAccess.classList = ["container-fluid d-flex flex-row justify-content-start align-items-center"];
    countAndAccess.id = "statusLogin";

    document.getElementById("navbar").insertBefore(countAndAccess, buttonLogout);
  }
}

const saveEmailLogged = () => {
  const email = document.getElementById("exampleInputEmail1").value.trim();
  localStorage.setItem("email", email);
}

const removeEmailLogged = () => {
  localStorage.removeItem("email");
}

const onClickLogin = () => {
  if (checkEmail()) {
    saveEmailLogged();
    writeWelcomeMessage();

    saveUserToStorage();
    writeCountAndAccess();
  }

}

const onClickLogout = () => {
  writeFormLogin();
  removeEmailLogged();
}

const getEmailLogged = () => {
  return localStorage.getItem("email");
}

const saveUserToStorage = () => {
  const prevUsers = JSON.parse(localStorage.getItem("users")) || [];

  const email = getEmailLogged();
  const userIndex = prevUsers.findIndex((user_) => user_.email === email);

  if (userIndex === -1) {
    // In case it was not found, new user
    const newUsers = [...prevUsers, {
      email: getEmailLogged(),
      counter: 1,
      lastAccess: new Date()
    }];

    localStorage.setItem(
      "users",
      JSON.stringify(newUsers)
    )
  } else {
    // In case of found, update that specific user
    const newUsers = prevUsers.map((user_) =>
      user_.email === email
        ? { ...user_, counter: user_.counter + 1, lastAccess: new Date() }
        : { ...user_ }
    )

    localStorage.setItem(
      "users",
      JSON.stringify(newUsers)
    )
  }
}

const getUserLogged = () => {
  const email = getEmailLogged();
  const allUsers = JSON.parse(localStorage.getItem("users")) || [];
  const user = allUsers.find((user_) => user_.email === email);

  return user;
}

const checkEmail = () => {
  const regexEmail = /^[a-zA-Z0-9.-|(\+)]+@(\w+)(\.(\w{2,})){1,2}$/;
  const emailInput = document.getElementById("exampleInputEmail1");

  const isValid = regexEmail.test(emailInput.value);

  if (isValid) {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid")
    return true;
  }
  else {
    emailInput.classList.add("is-invalid");
    return false;
  }
}

window.onload = () => {
  const user = getUserLogged();
  const isLogged = !!user;
  if (isLogged) {
    writeWelcomeMessage();

    writeCountAndAccess();
  }
  else { writeFormLogin(); }
}

