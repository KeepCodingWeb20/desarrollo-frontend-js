import { loginController } from "./login/login-controller.js";
import { notificationsController } from './notifications/notification-controller.js'

const notificationsContainer = document.querySelector('.notifications-container')
const loginForm = document.querySelector('form')

notificationsController(notificationsContainer)
loginController(loginForm)