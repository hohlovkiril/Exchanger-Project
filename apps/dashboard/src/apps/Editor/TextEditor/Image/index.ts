import { ContentBlock, ContentState, DraftDecorator } from "draft-js";
import { EntityType } from "../config";
import Image from "./Image";

function findImageEntities(
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState
): void {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();

    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === EntityType.image
    );
  }, callback);
}

const imageDecorator: DraftDecorator = {
  strategy: findImageEntities,
  component: Image,
}

export default imageDecorator;