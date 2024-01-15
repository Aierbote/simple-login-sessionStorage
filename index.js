// const loginPage = document.querySelector("#root").cloneNode(true);
const loginPage = `
<div class="col-6 col-lg-4 card">

  <form class="d-flex justify-content-center align-items-center flex-column p-2"
  style="height: 100%; width: 100%;"
  preventDefault
  action="#"
  >
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1">
    </div>
    <div class="mb-3 flex-grow-0">
      <button type="submit" class="btn btn-primary" id="my-button-login" >Login</button>
    </div>
  </form>

</div>
`



const writeFormLogin = () => {
  // document.querySelector("#root").replaceWith(loginPage);
  document.querySelector("#root").innerHTML = loginPage;


  document.getElementById("my-button-login")
    .addEventListener("click", onClickLogin);
}

const writeWelcomeMessage = () => {
  // if user.counter >= 2
  const message = (false) ? "Bentornat*" : "Benvenut*"

  document.getElementById("root").innerHTML = `
  <header class="bg-black p-4">
    <div class="container-fluid d-flex flex-row justify-content-end">
      <button class="btn btn-outline-primary" type="submit" id="my-button-logout">Logut</button>
    </div>
  </header>
  <h1>${message}</h1>
  `

  document.getElementById("my-button-logout")
    .addEventListener("click", onClickLogout)
}


const onClickLogin = () => {
  // saveEmailLogged();
  writeWelcomeMessage();

  // saveUserToStorage();
}

const onClickLogout = () => {
  writeFormLogin();
  //    deleteEmailLogged();
}


window.onload = () => {
  // document.getElementById("my-button-login")
  //   .addEventListener("click", onClickLogin);
  writeFormLogin();

}

