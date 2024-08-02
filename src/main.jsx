import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import { MainPage } from './components/MainPage/MainPage';
import { ManagePatients } from './components/ManagePatients/ManagePatients';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ManagePatients/>
  </React.StrictMode>,
)
