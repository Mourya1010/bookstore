// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import router from './routers/router.jsx'
// import  'sweetalert2/dist/sweetalert2.js'

// import { Provider } from 'react-redux'
// import { store } from './redux/store.js'

// createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <RouterProvider router={router} />
//   </Provider>,
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './routers/router.jsx';
import 'sweetalert2/dist/sweetalert2.js';

import { Provider } from 'react-redux';
import { store } from './redux/store.js';

import { AuthProvide } from './context/AuthContext'; // ✅ Import your AuthProvide

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvide> {/* ✅ Wrap everything inside AuthProvide */}
        <RouterProvider router={router} />
      </AuthProvide>
    </Provider>
  </StrictMode>
);
