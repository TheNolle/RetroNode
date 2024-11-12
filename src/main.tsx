import React from 'react'
import ReactDOM from 'react-dom/client'

import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/ReactToastify.min.css'
import './styles/main.scss'

const container = document.getElementById('root')
if (!container) throw new Error('Root element not found')
const root = ReactDOM.createRoot(container)
root.render(
	<HashRouter>
		<App />
		<ToastContainer position='bottom-right' autoClose={2500} limit={3} newestOnTop theme='dark' />
	</HashRouter>
)
void React
