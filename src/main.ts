import 'san-webkit/src/styles/main.css'
import App from './App.svelte'
import Dialogs from 'webkit/ui/Dialog/Dialogs.svelte'

const app = new App({
  target: document.getElementById('app') as Element,
})

const ROOT_CTX = app.$$.context

new Dialogs({ target: document.body, context: ROOT_CTX })

export default app
