'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function resetPage() {
  const [user, setUser] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await signIn('credentials', {
      redirect: false,
      user
    })

    if (result?.error) {
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.')
    } else {
      router.push('/home') // Redirigir al Home después de autenticarse
    }
  }

  return (
    <div className=" space-y-8 bg-white shadow-lg p-8 rounded-lg w-[400px] max-w-md ">
      <h2 className="font-bold text-2xl text-center text-gray-800">Ingresa tu nombre de usuario</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="user" className="block font-medium text-gray-700 text-sm">
            Usuario
          </label>
          <input
            type="text"
            id="user"
            name="user"
            required
            placeholder="Tu nombre de usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="border-gray-300 mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-indigo-500 w-full focus:outline-none text-black"
          />
        </div>
        {error && <p className="text-red-500 text-sm ">{error}</p>}
        <div className="flex gap-x-2 mt-4">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 py-2 rounded-md  w-full font-semibold text-white"
          >
            <Link href={'/login'}>cancelar</Link>
          </button>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700  py-2 rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full font-semibold text-white focus:outline-none"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  )
}

export default resetPage
