import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { AuthProvide } from './maincontext/MainContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
           <AuthProvide>
           <App/>
           </AuthProvide>
               
      </>);


