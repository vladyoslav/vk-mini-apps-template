import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { Router, RouterProvider } from '@cteamdev/router'
import './bridge'

const router = new Router()
router.start()

ReactDOM.render(
  <RouterProvider value={router}>
    <App />
  </RouterProvider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'development') import('./eruda')
