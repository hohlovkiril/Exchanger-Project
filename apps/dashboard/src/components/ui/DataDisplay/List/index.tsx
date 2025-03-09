import { ListItemAvatarProps, ListItemButtonProps, ListItemIconProps, ListItemProps, ListItemTextProps, ListProps } from "@mui/material";
import { MuiList, MuiListItem, MuiListItemAvatar, MuiListItemButton, MuiListItemIcon, MuiListItemText } from "./index.style";

interface IListProps {

}

interface IListItemProps {

}

interface IListItemButtonProps {

}

interface IListItemAvatarProps {

}

interface IListItemIconProps {

}

interface IListItemTextProps {

}

export function List(props: IListProps & ListProps) {
  return (
    <>
      <MuiList
        {...props}
      >
        {props.children}
      </MuiList>
    </>
  )
}

export function ListItem(props: IListItemProps & ListItemProps) {
  return (
    <>
      <MuiListItem
        {...props}
      >
        {props.children}
      </MuiListItem>
    </>
  )
}

export function ListItemButton(props: IListItemButtonProps & ListItemButtonProps) {
  return (
    <>
      <MuiListItemButton
        ref={props.ref}
        {...props}
      >
        {props.children}
      </MuiListItemButton>
    </>
  )
}

export function ListItemAvatar(props: IListItemAvatarProps & ListItemAvatarProps) {
  return (
    <>
      <MuiListItemAvatar
        {...props}
      >
        {props.children}
      </MuiListItemAvatar>
    </>
  )
}

export function ListItemIcon(props: IListItemIconProps & ListItemIconProps) {
  return (
    <>
      <MuiListItemIcon
        {...props}
      >
        {props.children}
      </MuiListItemIcon>
    </>
  )
}

export function ListItemText(props: IListItemTextProps & ListItemTextProps) {
  return (
    <>
      <MuiListItemText
        {...props}
      >
        {props.children}
      </MuiListItemText>
    </>
  )
}