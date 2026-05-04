import { loginUser } from "./login-model.js";

export const loginController = (loginForm) => {

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const loginData = new FormData(loginForm);
    const email = loginData.get('email')
    const password = loginData.get('password')
  
    try {
      const token = await loginUser(email, password)
      localStorage.setItem('token', token)
      window.location = '/'
    } catch (error) {
      // disparar evento y mostrar notificacion
    }
  })
}