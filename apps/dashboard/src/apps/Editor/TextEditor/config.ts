import Immutable from 'immutable';
import { DefaultDraftBlockRenderMap, DraftStyleMap } from 'draft-js';

export enum EntityType {
  link = 'link',
  image = 'image',
}

export enum BlockType {
  h1 = 'header-one',
  h2 = 'header-two',
  h3 = 'header-three',
  h4 = 'header-four',
  h5 = 'header-five',
  h6 = 'header-six',
  blockquote = 'blockquote',
  code = 'code-block',
  list = 'unordered-list-item',
  orderList = 'ordered-list-item',
  cite = 'cite',
  default = 'unstyled',
}

export enum InlineStyle {
  BOLD = 'BOLD',
  ITALIC = 'ITALIC',
  UNDERLINE = 'UNDERLINE',
  ACCENT = 'ACCENT',
  ALIGN_LEFT = "ALIGN_LEFT",
  ALIGN_CENTER = "ALIGN_CENTER",
  ALIGN_RIGHT = "ALIGN_RIGHT",
  FONT_COURIER_NEW = "Courier New",
  FONT_FRANKLIN_GOTHIC_MEDIUM = "Franklin Gothic Medium",
  FONT_GILL_SANS = "Gill Sans",
  FONT_LUCIDA_SANS = "Lucida Sans",
}

const CUSTOM_BLOCK_RENDER_MAP = Immutable.Map({
  [BlockType.cite]: {
    element: 'cite',
  },
});

export const CUSTOM_STYLE_MAP: DraftStyleMap = {
  [InlineStyle.ACCENT]: {
    backgroundColor: '#F7F6F3',
    color: '#A41E68',
  },
  [InlineStyle.ALIGN_LEFT]: {
    display: 'block',
    width: '100%',
    textAlign: 'left',
  },
  [InlineStyle.ALIGN_CENTER]: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
  },
  [InlineStyle.ALIGN_RIGHT]: {
    display: 'block',
    width: '100%',
    textAlign: 'right',
  },
  [InlineStyle.FONT_COURIER_NEW]: {
    fontFamily: "'Courier New', Courier, monospace!important",
  },
  [InlineStyle.FONT_FRANKLIN_GOTHIC_MEDIUM]: {
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif!important",
  },
  [InlineStyle.FONT_GILL_SANS]: {
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif!important",
  },
  [InlineStyle.FONT_LUCIDA_SANS]: {
    fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif!important",
  }
};

export const BLOCK_RENDER_MAP = DefaultDraftBlockRenderMap.merge(CUSTOM_BLOCK_RENDER_MAP);