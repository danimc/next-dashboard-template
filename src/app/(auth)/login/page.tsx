'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function LoginPage() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await signIn('credentials', {
      redirect: false,
      user,
      password
    })

    if (result?.error) {
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.')
    } else {
      router.push('/home') // Redirigir al Home después de autenticarse
    }
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="space-y-8 bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        <h2 className="font-bold text-2xl text-center text-gray-800">Iniciar Sesión</h2>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700 text-sm">
              Correo Electrónico
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="border-gray-300 mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-indigo-500 w-full focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium text-gray-700 text-sm">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-gray-300 mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-indigo-500 w-full focus:outline-none"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 mt-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full font-semibold text-white focus:outline-none"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600 text-sm">
          ¿Olvidaste tu contraseña?{' '}
          <a href="#" className="text-indigo-600 hover:underline">
            Recuperar acceso
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
