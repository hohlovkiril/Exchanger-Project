import React, { useState, useContext, createContext } from 'react';
import { stateToHTML } from 'draft-js-export-html';
import { AtomicBlockUtils, CompositeDecorator, DraftEntityMutability, EditorState, RichUtils } from "draft-js";
import { BlockType, EntityType, InlineStyle } from './TextEditor/config';
import { default as LinkDecorator } from './TextEditor/Link';
import { default as ImageDecorator } from './TextEditor/Image';

interface IContext {
  state: EditorState;
  setEntityData: (entityKey: any, data: any) => void;

  linkSelected: boolean;
  addLink: (url: string) => void;
  delLink: () => void;

  addImage: (url: string) => void;

  currentBlockType: BlockType;
  toggleBlockType: (blockType: BlockType) => void;
  toggleInlineStyle: (inlineStyle: InlineStyle) => void;
  hasInlineStyle: (inlineStyle: InlineStyle) => boolean;
  onChange: (state: EditorState) => void;
  onGetPlainText: () => string;
}

interface IProvider {
  children: React.ReactNode;
}

const decorator = new CompositeDecorator([LinkDecorator, ImageDecorator]);

export const EditorApiContext = createContext<IContext | undefined>(undefined);

export const EditorApiProvider: React.FC<IProvider> = ({
  children
}) => {
  const [state, setState] = useState<EditorState>(() => EditorState.createEmpty(decorator));
  const [linkSelected, setLinkSelected] = useState<boolean>(false);

  const setEntityData = (entityKey: any, data: any) => {
    setState((currentState) => {
      /* Получаем текущий контент */
      const content = currentState.getCurrentContent();
      /* Объединяем текущие данные Entity с новыми */
      const contentStateUpdated = content.mergeEntityData(
        entityKey,
        data,
      )
      /* Обновляем состояние редактора с указанием типа изменения */
      return EditorState.push(currentState, contentStateUpdated, 'apply-entity');
    })
  }

  const addEntity = (entityType: EntityType, data: Record<string, string>, mutability: DraftEntityMutability) => {
    setState((currentState) => {
      /* Получаем текущий контент */
      const contentState = currentState.getCurrentContent();
      /* Создаем Entity с данными */
      const contentStateWithEntity = contentState.createEntity(entityType, mutability, data);
      /* Получаем уникальный ключ Entity */
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      /* Обьединяем текущее состояние с новым */
      const newState = EditorState.set(currentState, { currentContent: contentStateWithEntity });
      /* Вставляем ссылку в указанное место */
      return RichUtils.toggleLink(newState, newState.getSelection(), entityKey);
    })
  }

  const addLink = (url: string) => {
		addEntity(EntityType.link, { url }, 'MUTABLE')
  }

  const delLink = () => {
    setState((currentState) => {
      return RichUtils.toggleLink(currentState, currentState.getSelection(), null);
    })
  }

  const addImage = (url: string)=> {
    const contentState = state.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'image',
      'IMMUTABLE',
      { src: url },
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(
      state,
      { currentContent: contentStateWithEntity },
    );
    const newState = AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
    setState(newState);
  }

  const delImage = () => {

  }

  const currentBlockType = React.useMemo(() => {
    /* Шаг 1 */
    const selection = state.getSelection();
    /* Шаг 2 */
    const content = state.getCurrentContent();
    /* Шаг 3 */
    const block = content.getBlockForKey(selection.getStartKey());
    /* Шаг 4 */
    return block.getType() as BlockType;
  }, [state]);

  const toggleBlockType = (blockType: BlockType) => {
    setState((currentState) => RichUtils.toggleBlockType(currentState, blockType))
  }

  const toggleInlineStyle = (inlineStyle: InlineStyle) => {
    setState((currentState) => RichUtils.toggleInlineStyle(currentState, inlineStyle))
  }


  const hasInlineStyle = (inlineStyle: InlineStyle) => {
    /* Получаем иммутабельный Set с ключами стилей */
    const currentStyle = state.getCurrentInlineStyle();
    /* Проверяем содержится ли там переданный стиль */
    return currentStyle.has(inlineStyle);
  }

  const handleGetPlainText = () => {
    const contentState = state.getCurrentContent();
    const options = {
      blockRenderers: {
        'header-one': (block: any) => {
          const listItems = block.getText().split('\n').map((item: any) => `<h1>${item}</h1>`).join('');
          return listItems;
        },
        'header-two': (block: any) => {
          const listItems = block.getText().split('\n').map((item: any) => `<h2>${item}</h2>`).join('');
          return listItems;
        },
        'header-three': (block: any) => {
          const listItems = block.getText().split('\n').map((item: any) => `<h3>${item}</h3>`).join('');
          return listItems;
        },
        'header-four': (block: any) => {
          const listItems = block.getText().split('\n').map((item: any) => `<h4>${item}</h4>`).join('');
          return listItems;
        },
        'header-five': (block: any) => {
          const listItems = block.getText().split('\n').map((item: any) => `<h5>${item}</h5>`).join('');
          return listItems;
        },
        'header-six': (block: any) => {
          const listItems = block.getText().split('\n').map((item: any) => `<h6>${item}</h6>`).join('');
          return listItems;
        },
        'unordered-list-item': (block: any) => {
          const listItems = block.getText().split('\n').map((item: any) => `<li>${item}</li>`).join('');
          return listItems;
        },
        'ordered-list-item': (block: any) => {
          const listItems = block.getText().split('\n').map((item: any) => `<li>${item}</li>`).join('');
          return listItems;
        }
      }
    };
    
    return stateToHTML(contentState, options);
  }

  const handleCheckLinkSelection = (state: EditorState) => {
    const selection = state.getSelection();
    const start = selection.getStartOffset();
    const end = selection.getEndOffset();
    const blockKey = selection.getAnchorKey();

    for (let i = start; i < end; i++) {
      const entityKey = state.getCurrentContent().getBlockForKey(blockKey).getEntityAt(i);
      if (entityKey) {
        const entity = state.getCurrentContent().getEntity(entityKey);
        if (entity.getType() === 'link') {
          return true; // Если сущность - это ссылка
        }
      }
    }

    return false
  }

  const handleOnChangeState = (state: EditorState) => {
    setState(state);
    setLinkSelected(handleCheckLinkSelection(state));
  }

  return (
    <EditorApiContext.Provider
      value={{
        state,
        setEntityData,
        linkSelected,
        addLink,
        delLink,
        addImage,
        currentBlockType,
        toggleBlockType,
        toggleInlineStyle,
        hasInlineStyle,
        onChange: handleOnChangeState,
        onGetPlainText: handleGetPlainText
      }}
    >
      {children}
    </EditorApiContext.Provider>
  )
}

export const useEditorApi = () => {
  const context = useContext(EditorApiContext);

  if (!context) {
    throw new Error('useEditorApi must be wrapped in EditorApiProvider');
  }

  return context;
}