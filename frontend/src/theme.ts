'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#18181B', // Zinc-900 for primary actions
      light: '#27272A', // Zinc-800
      dark: '#09090B', // Zinc-950
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#6B7280', // Gray-500
      light: '#9CA3AF', // Gray-400
      dark: '#4B5563', // Gray-600
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#EF4444', // Red-500
      light: '#FEE2E2', // Red-100
      dark: '#B91C1C', // Red-700
    },
    warning: {
      main: '#F59E0B', // Amber-500
      light: '#FEF3C7', // Amber-100
      dark: '#B45309', // Amber-700
    },
    info: {
      main: '#3B82F6', // Blue-500
      light: '#DBEAFE', // Blue-100
      dark: '#1D4ED8', // Blue-700
    },
    success: {
      main: '#10B981', // Emerald-500
      light: '#D1FAE5', // Emerald-100
      dark: '#047857', // Emerald-700
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8FAFC', // Slate-50
    },
    text: {
      primary: '#18181B', // Zinc-900
      secondary: '#71717A', // Zinc-500
      disabled: '#A1A1AA', // Zinc-400
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
    h1: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 6,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          // fontSize: '0.875rem',
          // fontWeight: 500,
          // padding: '0.5rem 1rem',
          // borderRadius: '0.375rem',
          // transition: 'all 150ms ease',
          // '&:hover': {
          //   transform: 'translateY(-1px)',
          //   opacity: 0.9,
          // },
        },
        // contained: {
        //   '&:hover': {
        //     boxShadow: '0 2px 4px 0 rgb(0 0 0 / 0.1)',
        //   },
        // },
        // outlined: {
        //   borderWidth: '1px',
        //   '&:hover': {
        //     borderWidth: '1px',
        //     background: 'rgba(0, 0, 0, 0.04)',
        //   },
        // },
        // text: {
        //   '&:hover': {
        //     background: 'rgba(0, 0, 0, 0.04)',
        //   },
        // },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '0.375rem',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#71717A',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: '1px',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          border: '1px solid #E4E4E7', // Zinc-200
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: '0.5rem',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '0.75rem',
          boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
        },
        switchBase: {
          padding: 1,
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 1,
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          opacity: 1,
        },
      },
    },
  },
});

export default theme;
