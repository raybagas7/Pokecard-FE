import React from 'react';
import { createRoot } from 'react-dom/client';
import AgasApp from './components/AgasApp';
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<AgasApp />);