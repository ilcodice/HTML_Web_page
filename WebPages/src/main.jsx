import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { mystore } from './store/index.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <Provider store={mystore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
