import React from 'react'
import { ButtonBase, useTheme } from '@mui/material'

interface Props {
  onClick?: () => void
  primary?: boolean
  children: React.ReactNode
  width?: string | number
  height?: string | number
  fontSize?: string
  disabled?: boolean
  style?: React.CSSProperties
}

export default function SecondaryButton(props: Props) {
  const { onClick, disabled, style, width, fontSize, height, children } = props
  const theme = useTheme()

  return (
    <ButtonBase
      onClick={onClick}
      disabled={disabled}
      sx={{
        ...style,
        width: width || '100%',
        fontSize: fontSize || 16,
        height: height || 60,
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.secondary.main}`,
        backgroundColor: theme.palette.secondary.main,
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
          borderColor: theme.palette.secondary.dark
        },
        '&:disabled': {
          opacity: theme.palette.action.disabledOpacity,
          backgroundColor: theme.palette.secondary.light,
          borderColor: theme.palette.secondary.light
        }
      }}
    >
      {children}
    </ButtonBase>
  )
}
