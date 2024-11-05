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
      async authorize(credentials) {
        const user = { id: '1', name: 'User', email: 'demo@test.com' }

        if (credentials?.user === 'super' && credentials?.password === 'password') {
          return user
        } else {
          return null
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
      }
      return token
    }
  }
})

export { handler as GET, handler as POST }
