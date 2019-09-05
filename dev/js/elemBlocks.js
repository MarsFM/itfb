//=include ./utils/element.js

export const elemBlocks = {
  main() {
    const block = new Element('div');
    block.addClass('block');
    return block;
  },

  img(elem, url) {
    const img = new Element('img');
    img.addClass('block__img');
    img.setAttr('src', url);
    img.setInside(elem);
    return img;
  },

  info(elem) {
    const blockInfo = new Element('div');
    blockInfo.addClass('block__info');
    blockInfo.setInside(elem);
    return blockInfo;
  },

  text(elem, text) {
    const blockText = new Element('p');
    blockText.addText(text);
    blockText.setInside(elem);
    return blockText;
  },

  id(elem, id) {
    const blockId = new Element('span');
    blockId.addClass('block__id');
    blockId.addText(id);
    blockId.setInside(elem);
  },
};
