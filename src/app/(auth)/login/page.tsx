'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeClosed } from 'lucide-react'
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Alert,
  Stack
} from '@mui/material'

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
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            width: '100%',
            maxWidth: 400,
            p: 4,
            boxShadow: 3,
            borderRadius: 2,
            bgcolor: 'background.paper'
          }}
        >
          <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
            Iniciar Sesión
          </Typography>

          <Stack spacing={3}>
            <TextField
              label="Usuario"
              variant="outlined"
              fullWidth
              required
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <TextField
              label="Contraseña"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Link href="/login/reset" passHref>
              <Typography
                variant="body2"
                color="primary"
                align="right"
                sx={{ textDecoration: 'underline', cursor: 'pointer' }}
              >
                ¿Olvidaste tu contraseña?
              </Typography>
            </Link>
            {error && <Alert severity="error">{error}</Alert>}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                py: 1.5,
                fontWeight: 'bold',
                textTransform: 'none',
                boxShadow: 'none',
                ':hover': { boxShadow: 2 }
              }}
            >
              Iniciar Sesión
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}

export default LoginPage
