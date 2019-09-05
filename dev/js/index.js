//=include ./network_layer/server.js
//=include ./utils/loader.js
//=include ./elemBlocks.js

const container = document.querySelector('.container');
const countElement = document.querySelector('.info__count');

const server = new Server();
const loader = new Loader(container);

async function init(obj) {
  const albums = await getAlbums(obj.count);
  addToContainer(albums);
  setCountElements(albums);
  loader.stop();
}

async function getAlbums(value) {
  const albums = await server.getAlbums(value);
  const allAlbums = albums.map(album => {
    return createBlock(album);
  });

  return allAlbums;
}

const createBlock = album => {
  const block = elemBlocks.main();
  const _img = elemBlocks.img(block.render(), album.url);
  const blockInfo = elemBlocks.info(block.render());
  const blockTitle = elemBlocks.text(blockInfo.render(), album.title);
  const blockText = elemBlocks.text(blockInfo.render(), 'albumId:');
  const _blockId = elemBlocks.id(blockText.render(), album.albumId);

  blockTitle.addClass('block__title');
  blockText.addClass('block__text');
  blockText.addClass('block__text_dark');

  return block.render();
};

const addToContainer = arr => {
  container.append(...arr);
};

const setCountElements = elements => {
  countElement.innerHTML = elements.length;
};

// Запуск
loader.start();
init({
  count: 20,
});
