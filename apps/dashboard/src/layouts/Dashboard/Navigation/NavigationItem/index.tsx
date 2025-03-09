import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuItem } from "@mui/material";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { NavigationHeaderType, NavigationItemType, NavigationLinkType } from "../../../../common/types"
import { NavigationButtonContainer, NavigationLinkContainer, NavigationMenuContainer, NavigationPopUpMenuContainer } from "./index.style";
import {
  Chip,
  Tooltip,
  ListItem, ListItemButton, ListItemIcon, ListItemText,
  Typography,
  Divider,
} from '../../../../components/ui/DataDisplay'
import {
  Box
} from '../../../../components/ui/Surfaces'

interface IHeaderProps {
  item: NavigationHeaderType;
}

interface ILinkProps {
  open: boolean;
  item: NavigationLinkType;
}

interface IMenuProps {
  open: boolean;
  item: NavigationLinkType;
}

interface IPopUpLinkProps {
  item: NavigationLinkType;
  onClose: () => void;
}

interface IPopUpMenuProps {
  parentAnchorEl: HTMLElement | null;
  items: NavigationLinkType[];
  onClose: () => void;
}

interface IItemProps {
  open: boolean;
  item: NavigationItemType;
}

interface IMobileLinkProps {
  item: NavigationLinkType;
  onClose: () => void;
}

interface IMobileItemProps {
  item: NavigationItemType;
  onClose: () => void;
}

export const NavigationSeparator: React.FC = () => {
  return (
    <div
      className="navigation__separator"
    />
  )
}

export const NavigationHeader: React.FC<IHeaderProps> = ({
  item
}) => {
  return (
    <>
      <Chip
        // label={item.getLocale ? item.getLocale('ru') : item.defaultTitle}
        label={item.label}
        variant='outlined'
        size='small'
        sx={{
          width: 'fit-content'
        }}
      />
    </>
  )
}

export const NavigationLink: React.FC<ILinkProps> = ({
  open,
  item,
}) => {
  /** Context */

  const { pathname } = useLocation();

  /** Vars */

  const isActive = pathname === '/' && item.url === pathname
    ? true
    : item.url !== '/' && pathname.startsWith(item.url)
    ? true : undefined;

  return (
    <>
      <Tooltip
        title={item.title}
        placement='right'
      >
        <NavigationLinkContainer
          to={item.url}
        >
          <NavigationButtonContainer
            open={open}
            variant={open ? 'text' : 'contained'}
            isActive={isActive}
            withIcon={item.icon ? true: undefined}
          >
            {item.icon}
            <span>
              {item.title}
            </span>
          </NavigationButtonContainer>
        </NavigationLinkContainer>
      </Tooltip>
    </>
  )
}

export const NavigationMenu: React.FC<IMenuProps> = ({
  open,
  item,
}) => {
  /** Context */

  const { pathname } = useLocation();

  /** States */
  
  const [anchorEl, setAnchor] = useState<HTMLElement | null>(null);

  /** Vars */

  const isActive = pathname === '/'
    ? undefined
    : pathname.startsWith(item.url) ? true : undefined;

  /** Handlers */

  const handleOpenMenu = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(evt.currentTarget);
  }

  const handleCloseMenu = () => {
    setAnchor(null);
  }

  return (
    <>
      <Tooltip
        title={item.title}
        placement="right"
      >
        {open ? (
          <NavigationLinkContainer
            to={item.url}
          >
            <NavigationButtonContainer
              variant={open ? 'text' : 'contained'}
              open={open}
              isActive={isActive}
              withIcon={item.icon ? true: undefined}
              endIcon={open && isActive
                ? <KeyboardArrowUpIcon />
                : open && !isActive
                ? <KeyboardArrowDownIcon />
                : undefined
              }
            >
              {item.icon}
              <span>
                {item.title}
              </span>
            </NavigationButtonContainer>
          </NavigationLinkContainer>
        ) : (
          <NavigationButtonContainer
            variant={open ? 'text' : 'contained'}
            open={open}
            isActive={isActive}
            withIcon={item.icon ? true: undefined}
            endIcon={<KeyboardArrowRightIcon />}
            onClick={(evt) => handleOpenMenu(evt)}
          >
            {item.icon}
            {item.title}
          </NavigationButtonContainer>
        )}
      </Tooltip>

      {!open && item.children && (
        <NavigationPopUpMenu
          parentAnchorEl={anchorEl}
          items={[
            {
              kind: 'link',
              title: item.title,
              url: item.url,
              icon: item.icon,
            },
            ...item.children
          ]}
          onClose={handleCloseMenu}
        />
      )}

      {open && isActive && item.children && (
        <NavigationMenuContainer
          open={open}
          isActive={isActive}
        >
          {item.children && item.children.map((nav, key) => (
            <React.Fragment key={key}>
              <NavigationItem
                open={open}
                item={nav}
              />
            </React.Fragment>
          ))}
        </NavigationMenuContainer>
      )} 
    </>
  )
}

export const NavigationList: React.FC<ILinkProps> = ({
  open,
  item
}) => {
  /** Context */

  const { pathname } = useLocation();

  /** States */

  const [anchorEl, setAnchor] = useState<HTMLElement | null>(null);
  const [collapsed, setCollapse] = useState<boolean>(
    pathname.startsWith(item.url)
    ? false : true
  );

  /** Handlers */

  const handleOpenMenu = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(evt.currentTarget);
  }

  const handleCloseMenu = () => {
    setAnchor(null);
  }

  /** Effects */

  useEffect(() => {
    if (!pathname.includes(item.url)) {
      setCollapse(true);
    }
  }, [pathname, item.url])

  return (
    <>
      <Tooltip
        title={item.title}
        placement="right"
      >
        <NavigationButtonContainer
          variant={open ? 'text' : 'contained'}
          open={open}
          withIcon={item.icon ? true: undefined}
          endIcon={!open
            ? <KeyboardArrowRightIcon />
            : open && collapsed
            ? <KeyboardArrowDownIcon />
            : open && !collapsed
            ? <KeyboardArrowUpIcon />
            : undefined
          }
          onClick={(evt) => open ? setCollapse(!collapsed) : handleOpenMenu(evt)}
        >
          {item.icon}
          <span>
            {item.title}
          </span>
        </NavigationButtonContainer>
      </Tooltip>

      {!open && item.children && anchorEl && (
        <NavigationPopUpMenu
          parentAnchorEl={anchorEl}
          items={item.children}
          onClose={handleCloseMenu}
        />
      )}

      {open && !collapsed && (
        <NavigationMenuContainer
          open={open}
        >
          {item.children && item.children.map((nav, key) => (
            <React.Fragment key={key}>
              <NavigationItem
                open={open}
                item={nav}
              />
            </React.Fragment>
          ))}
        </NavigationMenuContainer>
      )}
    </>
  )
}

const NavigationPopUpLink: React.FC<IPopUpLinkProps> = ({
  item,
  onClose,
}) => {
  /** Context */

  const navigate = useNavigate();

  /** States */

  const [anchorEl, setAnchor] = useState<HTMLElement | null>(null);

  /** Handlers */

  const handleOpenMenu = (evt: React.MouseEvent<HTMLLIElement>) => {
    setAnchor(evt.currentTarget);
  }

  const handleCloseMenu = () => {
    setAnchor(null);
    onClose();
  }

  return (
    <>
      <MenuItem
        onClick={(evt) => {
          if (item.children && item.children.length > 0) {
            handleOpenMenu(evt);
          } else {
            onClose();
            navigate(item.url);
          }
        }}
      >
        {item.icon && (
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
        )}

        <ListItemText
          sx={{ 
            '& span': {
              fontSize: 'clamp(10px, 2vw, 14px)'
            }
          }}
        >
          {item.title}
        </ListItemText>

        {item.children && item.children.length > 0 && (
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <KeyboardArrowRightIcon />
          </ListItemIcon>
        )}

      </MenuItem>

      {item.children && anchorEl && (
        <NavigationPopUpMenu
          parentAnchorEl={anchorEl}
          items={item.children}
          onClose={handleCloseMenu}
        />
      )}
    </>
  )
}

const NavigationPopUpMenu: React.FC<IPopUpMenuProps> = ({
  parentAnchorEl,
  items,
  onClose
}) => {
  return (
    <>
      <NavigationPopUpMenuContainer
        anchorEl={parentAnchorEl}
        open={Boolean(parentAnchorEl)}
        onClose={onClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {items.map((nav, key) => (
          <NavigationPopUpLink
            key={key}
            item={nav}
            onClose={onClose}
          />
        ))}
      </NavigationPopUpMenuContainer>
    </>
  )
}

export const NavigationItem: React.FC<IItemProps> = ({
  open,
  item,
}) => {
  if (item.kind === 'header' && open === true) {
    return (
      <NavigationHeader
        item={item}
      />
    )
  } else if (item.kind === 'separator' && open === true) {
    return (
      <NavigationSeparator />
    )
  } else if (item.kind === 'link' && item.children) {
    if (item.menuUrlEnabled) {
      return (
        <NavigationMenu
          open={open}
          item={item}
        />
      )
    } else {
      return (
        <NavigationList
          open={open}
          item={item}
        />
      );
    }
  } else if (item.kind === 'link' && !item.children) {
    return (
      <NavigationLink
        open={open}
        item={item}
      />
    )
  } else {
    return null;
  }
}

export const MobileNavitionLink: React.FC<IMobileLinkProps> = ({
  item,
  onClose,
}) => {

  /** Context */

  const navigate = useNavigate();

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => {
          onClose();
          navigate(item.url);
        }}
      >
        {item.icon && (
          <ListItemIcon sx={{
            minWidth: 'fit-content',
            marginRight: '1em',
            '& svg': {
              fontSize: '22px' 
            }
          }}>
            {item.icon}
          </ListItemIcon>
        )}
        <ListItemText
          primary={item.title}
          sx={{
            '& span': {
              fontSize: '14px'
            }
          }}
        />
      </ListItemButton>
    </ListItem>
  )
}

export const MobileNavigationList: React.FC<IMobileLinkProps> = ({
  item,
  onClose,
}) => {

  /** Context */

  const navigate = useNavigate();

  /** States */

  const [collapsed, setCollapse] = useState<boolean>(true);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            if (item.menuUrlEnabled) {
              setCollapse(!collapsed);
              navigate(item.url);
            } else {
              setCollapse(!collapsed);
            }
          }}
        >
          {item.icon && (
            <ListItemIcon sx={{
              minWidth: 'fit-content',
              marginRight: '1em',
              '& svg': {
                fontSize: '22px' 
              }
            }}>
              {item.icon}
            </ListItemIcon>
          )}
          <ListItemText
            primary={item.title}
            sx={{
              '& span': {
                fontSize: '14px'
              }
            }}
          />
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            {collapsed ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUpIcon />
            )}
          </ListItemIcon>
        </ListItemButton>
      </ListItem>

      {!collapsed && (
        <>
          {item.children?.map((nav, key) => (
            <MobileNavigationItem
              key={key}
              item={nav}
              onClose={onClose}
            />
          ))}

          <Divider sx={{ opacity: 0, marginTop: '.5em', marginBottom: '.5em' }} />
        </>
      )}
    </>
  )
}

export const MobileNavigationItem: React.FC<IMobileItemProps> = ({
  item,
  onClose,
}) => {
  if (item.kind === 'header') {
    return (
      <Box>
        <Typography
          variant='caption'
          sx={{
            padding: '1em',
            fontSize: '12px',
            color: 'rgb(140, 140, 140)'
          }}
        >
          {/* {item.getLocale ? item.getLocale('ru') : item.defaultTitle} */}
          {item.label}
        </Typography>
      </Box>
    )
  } else if (item.kind === 'separator') {
    return (
      <Divider sx={{ opacity: 0, marginTop: '.5em', marginBottom: '.5em' }} />
    )
  } else {
    if (item.children) {
      return (
        <MobileNavigationList
          item={item}
          onClose={onClose}
        />
      )
    } else {
      return (
        <MobileNavitionLink
          item={item}
          onClose={onClose}
        />
      )
    }
  }
}