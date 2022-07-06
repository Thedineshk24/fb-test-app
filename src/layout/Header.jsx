import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Facebook } from '@mui/icons-material';
import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import faceBookUser from '../sample/facebook';


const settings = ['Profile', 'Account', 'Messenger', 'Settings', 'Logout'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Facebook sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, height: 50, width: 50 }} />
                    <Autocomplete
                        selectOnFocus
                        clearOnBlur
                        handleHomeEndKeys
                        id="free-solo-with-text-demo"
                        options={[]}
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, mb: 3, height: 30, width: 200 }}
                        freeSolo
                        renderInput={(params) => (
                            <TextField
                            {...params} InputProps={{
                                endAdornment: (
                                    <InputAdornment position='start'>
                                        <IconButton>
                                            <SearchOutlinedIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }} label="Search Facebook" />
                        )}
                    />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Autocomplete
                                selectOnFocus
                                clearOnBlur
                                handleHomeEndKeys
                                id="free-solo-with-text-demo"
                                options={[]}
                                sx={{ display: { md: 'flex' }, mr: 1, mb: 3, height: 30, width: 200 }}
                                freeSolo
                                renderInput={(params) => (
                                    <TextField {...params} label="Search Facebook" />
                                )}
                            />
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Tooltip title="Home">
                                    <HomeOutlinedIcon />
                                </Tooltip>
                                <Tooltip title="Watch">
                                    <SmartDisplayOutlinedIcon />
                                </Tooltip>
                                <Tooltip title="Marketplace">
                                    <StorefrontOutlinedIcon />
                                </Tooltip>
                                <Tooltip title="Groups">
                                    <GroupsOutlinedIcon />
                                </Tooltip>
                                <Tooltip title="Games">
                                    <SportsEsportsOutlinedIcon />
                                </Tooltip>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Facebook sx={{ display: { md: 'flex' }, mr: 1, height: 50, width: 50 }} />

                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "start" } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Tooltip title="Home" sx={{ mr: 5 }}>
                                <HomeOutlinedIcon />
                            </Tooltip>
                            <Tooltip title="Watch" sx={{ mr: 5 }}>
                                <SmartDisplayOutlinedIcon />
                            </Tooltip>
                            <Tooltip title="Marketplace" sx={{ mr: 5 }}>
                                <StorefrontOutlinedIcon />
                            </Tooltip>
                            <Tooltip title="Groups" sx={{ mr: 5 }}>
                                <GroupsOutlinedIcon />
                            </Tooltip>
                            <Tooltip title="Games" sx={{ mr: 5 }}>
                                <SportsEsportsOutlinedIcon />
                            </Tooltip>
                        </Button>
                    </Box>

                    {/* TODO: */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: "end" } }}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Tooltip title="menu" sx={{ mr: 5 }}>
                                <MenuOutlinedIcon />
                            </Tooltip>
                            <Tooltip title="Messenger" sx={{ mr: 5 }}>
                                <ChatBubbleOutlineOutlinedIcon />
                            </Tooltip>
                            <Tooltip title="Notifications" sx={{ mr: 5 }}>
                                <NotificationsOutlinedIcon />
                            </Tooltip>
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={faceBookUser.user.name} src={faceBookUser.user.profile_picture} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
