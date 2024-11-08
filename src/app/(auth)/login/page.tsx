'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeClosed } from 'lucide-react'

function LoginPage() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
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
    <div className="space-y-4 bg-white shadow-lg p-8 rounded-lg w-[400px] max-w-md ">
      <h2 className="font-bold text-2xl text-center text-gray-800">Iniciar Sesión</h2>
      <form className="space-y-4" onSubmit={handleLogin}>
        <div>
          <label htmlFor="user" className="block font-medium text-gray-700 text-sm">
            Usuario
          </label>
          <input
            type="text"
            id="user"
            name="user"
            placeholder="Tu nombre de usuario"
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="border-gray-300 mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-indigo-500 w-full focus:outline-none text-black"
          />
        </div>
        <div className="relative">
          <label htmlFor="password" className="block font-medium text-gray-700 text-sm">
            Contraseña
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-gray-300 mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-indigo-500 w-full focus:outline-none text-black"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <Eye size={24} /> : <EyeClosed size={24} />}
          </button>
          <Link href={'/login/reset'}>
            <p className="hover:underline text-[14px] text-black">¿Olvidaste tu contraseña?</p>
          </Link>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 mt-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full font-semibold text-white focus:outline-none"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}

export default LoginPage
