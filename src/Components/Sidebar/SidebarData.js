import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const SidebarData = [
    {
        title: "Home",
        icon:  <AccountCircleIcon />,
        link:   "/home"
    },
    {
        title: "Edit",
        icon:  <EditIcon />,
        link:   "/edit"
    },
    {
        title: "DarkMode",
        icon:  <DarkModeIcon />,
        link:   "/darkmode"
    }
]