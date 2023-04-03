import React from 'react'
import { HiOutlineShoppingBag} from "react-icons/hi"
import { CiUser } from "react-icons/ci"
import { AiOutlineSearch, AiOutlineRight } from "react-icons/ai"
import { HiAdjustmentsHorizontal } from "react-icons/hi2"
import Link from 'next/link'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CloseIcon from '@mui/icons-material/Close';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useSession } from 'next-auth/react'
import Avatar from '@mui/material/Avatar'

const drawerWidth = 240;

function stringAvatar(name) {
  return {
    children: `${name[0]}`.toUpperCase(),
  };
}

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {data: session, status} = useSession();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon/>
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {['HOME', 'SHOP', 'PAGES', 'BLOG','PORTFOLIO', 'WOMEN', 'MEN', 'BUY THEME!'].map((text) => (
          <ListItem key={text} disablePadding>
                <ListItemButton>
            {/* <ListItemButton onClick={  text === "HOME" ? "/" : `/${text.toLocaleLowerCase()}`}  > */}
                <ListItemText primary={text}/>
              <ListItemIcon>  
                <ArrowRightIcon/>
              </ListItemIcon> 
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {session ? 
        <List>
        {[`${session.user.email}`, 'View Cart', 'Wishlist', 'Compare'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <PersonIcon /> : 
                index === 1 ?  <ShoppingBagIcon /> :
                index === 2 ?  <FavoriteIcon /> :<CompareArrowsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> : 
      <List>
        {['Login', 'Signup', 'View Cart', 'Wishlist', 'Compare'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <LockIcon /> : 
                 index === 1 ?  <PersonIcon /> :
                 index === 2 ?  <ShoppingBagIcon /> :
                 index === 3 ? <FavoriteIcon /> :
                 <CompareArrowsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  
  

  return (
    <div className='bg-white fixed z-10 w-[100%]'>
      <div className='flex justify-between items-center h-[50px] lg:mx-[75px]'>
      <div className='lg:hidden'>
        <div className="cursor-pointer">
          <IconButton
            color="inherit"
            sx={{marginLeft:"1rem"}}
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Box
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        </Box>
        </div>
        </div>
        <Link href="/" className='cursor-pointer'>
          <img src='https://cdn.shopify.com/s/files/1/0130/5041/3114/files/Logo_95x.png?v=1614293854' alt='Logo'/>  
        </Link>
        
        <ul className='hidden lg:flex justify-center items-center gap-6 text-[14px] cursor-pointer text-[#191919]'>
          <li>
            <Link href='/'>
              HOME
            </Link>
          </li>
          <li className='group relative'>
            SHOP
            <ul className='absolute hidden group-hover:grid grid-cols-2 place-items-center duration-200 ease-in-out top-[1rem] left-0 w-[300px] h-[100vh] bg-white'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
          </li>
          <li className='group relative'>PAGES
          <ul className='absolute hidden group-hover:flex flex-col gap-10 justify-start items-center pt-[50px] duration-200 ease-in-out top-[1rem] left-0 w-[300px] h-[100vh] bg-white'>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
          </li>
          <li>BLOG</li>
          <li>PORTFOLIO</li>
          <li>WOMEN</li>
          <li>MEN</li>
          <li>BUY THEME!</li>
        </ul>
        {session ? <Avatar {...stringAvatar(session.user.email)} className="mr-2" /> : 
          <ul className='flex justify-center lg:justify-end items-center gap-1   lg:gap-5 text-[1.2rem] font-extralight text-[#777777] cursor-pointer'>
            <li><AiOutlineSearch/></li>
            <li><HiOutlineShoppingBag/></li>
            <li><Link href="/signup" ><CiUser/></Link></li>
            <li><HiAdjustmentsHorizontal/></li>
          </ul>
        }
      </div>
    </div>
  )
}

export default Header