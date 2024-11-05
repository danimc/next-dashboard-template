import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        user: { label: 'User', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        if (credentials?.user === 'super' && credentials?.password === 'password') {
          return { id: '1', name: 'Super', email: 'test@test.com' }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login' // Redirige al login si no está autenticado
  },
  session: {
    strategy: 'jwt'
  }
})

export { handler as GET, handler as POST }
