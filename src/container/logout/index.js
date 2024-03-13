import {
  saveSession,
  getTokenSession,
  getSession,
} from '../../script/session'

document.addEventListener('DOMContentLoaded', () => {
  saveSession(null)

  location.assign('/')
})
