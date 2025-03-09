import { Divider, MenuItem, Stack } from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

// import ColorizeIcon from '@mui/icons-material/Colorize';
import AddLinkIcon from '@mui/icons-material/AddLink';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import ImageIcon from '@mui/icons-material/Image';

import TerminalIcon from '@mui/icons-material/Terminal';
import LogoDevIcon from '@mui/icons-material/LogoDev';

import { useEditorApi } from "../provider"
import { BlockType, InlineStyle } from "../TextEditor/config"
import { Select } from "../../../components/ui/Inputs";
import { ToolPanelContainer } from "./index.style";
import { Tooltip } from "../../../components/ui/DataDisplay";

const BLOCK_TYPES_CODES = Object.values([
  BlockType.default,
  BlockType.h1,
  BlockType.h2,
  BlockType.h3,
  BlockType.h4,
  BlockType.h5,
  BlockType.h6,
  BlockType.blockquote,
  BlockType.code,
]);

export interface IToolPanelProps {

}

export default function ToolPanel() {

  /** Context */

  const {
    linkSelected, addLink, delLink,
    addImage,
    toggleBlockType, currentBlockType, toggleInlineStyle, hasInlineStyle, onGetPlainText
  } = useEditorApi();

  return (
    <ToolPanelContainer>

      <Stack
        direction='row'
        justifyContent='flex-start'
        gap='4px'
      >
        <Tooltip
          title="Block Type"
          placement='top'
        >
          <Select
            className="toolpanel__item__block_type"
            size='small'
            variant='standard'
            value={BLOCK_TYPES_CODES.includes(currentBlockType) ? currentBlockType : BlockType.default}
            onChange={(evt) => {
              evt.preventDefault();
              toggleBlockType(evt.target.value as BlockType)
            }}
          >
            {BLOCK_TYPES_CODES.map((code, key) => (
              <MenuItem key={key} value={code}>{code === 'unstyled' ? 'Normal' : code}</MenuItem>
            ))}
          </Select>
        </Tooltip>

        {/* <Tooltip
          title="Fonts"
          placement="top"
        >
          <Select
            className="toolpanel__item__block_type"
            size="small"
            variant="standard"
            value={hasInlineStyle(InlineStyle.FONT_COURIER_NEW) 
              ? InlineStyle.FONT_COURIER_NEW
              : hasInlineStyle(InlineStyle.FONT_FRANKLIN_GOTHIC_MEDIUM)
              ? InlineStyle.FONT_FRANKLIN_GOTHIC_MEDIUM
              : hasInlineStyle(InlineStyle.FONT_GILL_SANS)
              ? InlineStyle.FONT_GILL_SANS
              : hasInlineStyle(InlineStyle.FONT_LUCIDA_SANS)
              ? InlineStyle.FONT_LUCIDA_SANS
              : undefined
            }
            onChange={(evt) => toggleInlineStyle(evt.target.value as InlineStyle)}
          >
            {FONT_STYLES_CODES.map((code, key) => (
              <MenuItem key={key} value={code}>{code}</MenuItem>
            ))}
          </Select>
        </Tooltip> */}
        
        <Divider orientation='vertical' />

        <Tooltip
          title="Bold"
          placement="top"
        >
          <button
            className={['toolpanel__item', hasInlineStyle(InlineStyle.BOLD) ? 'active' : ''].join(' ')}
            onClick={() => toggleInlineStyle(InlineStyle.BOLD)}
          >
            <FormatBoldIcon />
          </button>
        </Tooltip>

        <Tooltip
          title='Italic'
          placement="top"
        >
          <button
            className={['toolpanel__item', hasInlineStyle(InlineStyle.ITALIC) ? 'active' : ''].join(' ')}
            onClick={() => toggleInlineStyle(InlineStyle.ITALIC)}
          >
            <FormatItalicIcon />
          </button>
        </Tooltip>

        <Tooltip
          title="Underline"
          placement="top"
        >
          <button
            className={['toolpanel__item', hasInlineStyle(InlineStyle.UNDERLINE) ? 'active' : ''].join(' ')}
            onClick={() => toggleInlineStyle(InlineStyle.UNDERLINE)}
          >
            <FormatUnderlinedIcon />
          </button>
        </Tooltip>
        
        <Divider orientation='vertical' />

        <Tooltip
          title="Ordered"
          placement="top"
        >
          <button
            className={['toolpanel__item', currentBlockType === BlockType.orderList ? 'active' : ''].join(' ')}
            onClick={() => toggleBlockType(BlockType.orderList)}
          >
            <FormatListNumberedIcon />
          </button>
        </Tooltip>

        <Tooltip
          title="Unordered"
          placement="top"
        >
          <button
            className={['toolpanel__item', currentBlockType === BlockType.list ? 'active' : ''].join(' ')}
            onClick={() => toggleBlockType(BlockType.list)}
          >
            <FormatListBulletedIcon />
          </button>
        </Tooltip>

        <Divider orientation='vertical' />

      </Stack>

      <Stack
        direction='row'
        justifyContent='flex-start'
        gap='4px'
      >

        <Tooltip
          title="Left align"
          placement="top"
        >
          <button
            className={['toolpanel__item', hasInlineStyle(InlineStyle.ALIGN_LEFT) ? 'active' : ''].join(' ')}
            onClick={() => {
              if (hasInlineStyle(InlineStyle.ALIGN_CENTER)) {
                toggleInlineStyle(InlineStyle.ALIGN_CENTER);
              }

              if (hasInlineStyle(InlineStyle.ALIGN_RIGHT)) {
                toggleInlineStyle(InlineStyle.ALIGN_RIGHT);
              }
              
              toggleInlineStyle(InlineStyle.ALIGN_LEFT);
            }}
          >
            <FormatAlignLeftIcon />
          </button>
        </Tooltip>
        
        <Tooltip
          title="Center align"
          placement="top"
        >
          <button
            className={['toolpanel__item', hasInlineStyle(InlineStyle.ALIGN_CENTER) ? 'active' : ''].join(' ')}
            onClick={() => {
              if (hasInlineStyle(InlineStyle.ALIGN_LEFT)) {
                toggleInlineStyle(InlineStyle.ALIGN_LEFT);
              }

              if (hasInlineStyle(InlineStyle.ALIGN_RIGHT)) {
                toggleInlineStyle(InlineStyle.ALIGN_RIGHT);
              }

              toggleInlineStyle(InlineStyle.ALIGN_CENTER);
            }}
          >
            <FormatAlignCenterIcon />
          </button>
        </Tooltip>
        
        <Tooltip
          title="Right align"
          placement="top"
        >
          <button
            className={['toolpanel__item', hasInlineStyle(InlineStyle.ALIGN_RIGHT) ? 'active' : ''].join(' ')}
            onClick={() => {
              if (hasInlineStyle(InlineStyle.ALIGN_LEFT)) {
                toggleInlineStyle(InlineStyle.ALIGN_LEFT);
              }

              if (hasInlineStyle(InlineStyle.ALIGN_CENTER)) {
                toggleInlineStyle(InlineStyle.ALIGN_CENTER);
              }
              
              toggleInlineStyle(InlineStyle.ALIGN_RIGHT);
            }}
          >
            <FormatAlignRightIcon />
          </button>
        </Tooltip>

        {/* <Divider orientation='vertical' />

        <Tooltip
          title="Color"
          placement="top"
        >
          <button
            className={['toolpanel__item'].join(' ')}
          >
            <ColorizeIcon />
          </button>
        </Tooltip> */}

        <Divider orientation='vertical' />

        <Tooltip
          title="Link"
          placement="top"
        >
          <button
            className={['toolpanel__item'].join(' ')}
            onClick={() => {
              const newUrl = prompt('URL:');

              if (newUrl) {
                addLink(newUrl);
              }
            }}
          >
            <AddLinkIcon />
          </button>
        </Tooltip>

        <Tooltip
          title="Unlink"
          placement="top"
        >
          <button
            className={['toolpanel__item'].join(' ')}
            onClick={delLink}
            disabled={!linkSelected}
          >
            <LinkOffIcon />
          </button>
        </Tooltip>

        <Divider orientation='vertical' />

        <Tooltip
          title="Image"
          placement="top"
        >
          <button
            className={['toolpanel__item'].join(' ')}
            onClick={() => {
              const newUrl = prompt('URL:');

              if (newUrl) {
                addImage(newUrl);
              }
            }}
          >
            <ImageIcon />
          </button>
        </Tooltip>

        {/* <Tooltip
          title="Code"
          placement="top"
        >
          <button
            className={['toolpanel__item'].join(' ')}
          >
            <TerminalIcon />
          </button>
        </Tooltip>

        <button
          className={['toolpanel__item'].join(' ')}
          onClick={() => console.log(onGetPlainText())}
        >
          <LogoDevIcon />
        </button> */}

      </Stack>

    </ToolPanelContainer>
  )
}