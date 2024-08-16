import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App); // the root component, other components are nested inside this component
app.mount('#app'); // mount the app to the div with id 'app' in index.html
