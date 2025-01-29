'use client'

import React, { useState } from 'react'
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery
} from '@mui/material'
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Logout as LogoutIcon
} from '@mui/icons-material'

const drawerWidth = 240
const minimizedDrawerWidth = 72

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)

  const handleMenuClose = () => setAnchorEl(null)

  const isMenuOpen = Boolean(anchorEl)

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          {sidebarOpen ? 'Mi Dashboard' : ''}
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {[
          { text: 'Inicio', icon: <HomeIcon /> },
          { text: 'Perfil', icon: <PersonIcon /> },
          { text: 'Configuración', icon: <SettingsIcon /> }
        ].map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {sidebarOpen && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: 'primary.main'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={isMobile ? handleDrawerToggle : handleSidebarToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Box>
            <Tooltip title="Opciones de usuario">
              <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                <Avatar alt="Usuario" src="/static/images/avatar/1.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <PersonIcon sx={{ mr: 1 }} /> Perfil
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <SettingsIcon sx={{ mr: 1 }} /> Configuración
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <LogoutIcon sx={{ mr: 1 }} /> Cerrar sesión
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Mejora el rendimiento en móviles
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: sidebarOpen ? drawerWidth : minimizedDrawerWidth,
            boxSizing: 'border-box',
            overflowX: 'hidden',
            transition: 'width 0.3s'
          }
        }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // Espacio para el Navbar
          overflowX: 'hidden',
          overflowY: 'auto',
          height: '100vh',
          bgcolor: 'background.default'
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default DashboardLayout
