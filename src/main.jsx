import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import BlogContextProvider from './Components/BlogContext/BlogContext';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
<BlogContextProvider>
<Router>
   <React.StrictMode>
       <App />
   </React.StrictMode>, 
</Router>

</BlogContextProvider>
)
