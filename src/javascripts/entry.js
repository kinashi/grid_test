function appendCell(target, w, h) {
  const cell = document.createElement('span');

  cell.classList.add('grid__cell');
  if (h !== null) cell.style.width = `${w}px`;
  if (h !== null) cell.style.height = `${h}px`;

  target.appendChild(cell);
}

function setSpGrid(grid) {
  for(let i = 0; i < 4; i++) {
    let el = null;
    let w = null;
    let h = null;

    if (i === 2) {
      el = document.getElementById('main');
      h = el.getBoundingClientRect().height;
    }
    appendCell(grid, w, h);
  }
}

function setTabletGrid(grid) {
  for(let i = 0; i < 10; i++) {
    let el = null;
    let w = null;
    let h = null;

    switch (i) {
      case 2:
        el = document.getElementById('nav');
        w = el.getBoundingClientRect().width;
        h = el.getBoundingClientRect().height;
        break;

      case 4:
        el = document.getElementById('aside');
        w = el.getBoundingClientRect().width;
        h = el.getBoundingClientRect().height / 2;
        break;

      case 6:
        el = document.getElementById('aside');
        w = el.getBoundingClientRect().width;
        h = el.getBoundingClientRect().height / 2;
        break;

      case 8:
        el = document.getElementById('footer');
        h = el.getBoundingClientRect().height;
        break;
      default:
        break;
    }
    appendCell(grid, w, h);
  }
}

function setPcGrid(grid) {
  for(let i = 0; i < 20; i++) {
    let el = null;
    let w = null;
    let h = null;

    switch (i) {
      case 5:
        el = document.getElementById('nav');
        h = el.getBoundingClientRect().height;
        break;

      case 9:
        el = document.getElementById('aside');
        h = el.getBoundingClientRect().height / 2;
        break;

      case 13:
        el = document.getElementById('aside');
        h = el.getBoundingClientRect().height / 2;
        break;

      case 17:
        el = document.getElementById('footer');
        h = el.getBoundingClientRect().height;
        break;
      default:
        break;
    }
    appendCell(grid, w, h);
  }
}

function hideAndClear(target) {
  target.textContent = null;
  target.style.display = 'block';

  window.setTimeout(() => {
    target.style.opacity = '';
    target.style.display = 'none';
  }, 0);

}

window.onload = () => {
  // グリッド表示用コンテナ
  const grid = document.createElement('div');
  grid.classList.add('grid');
  grid.style.display = 'none';
  document.body.appendChild(grid);

  window.addEventListener('resize', e => hideAndClear(grid));

  window.addEventListener('keydown', e => {

    if (e.key === 'g') {
      const winW = window.innerWidth;

      if (winW < 768) {
        setSpGrid(grid);
      } else if (winW < 980) {
        setTabletGrid(grid);
      } else {
        setPcGrid(grid);
      }

      // 表示
      grid.style.display = '';
    }

    // 非表示
    if (e.keyCode === 27) hideAndClear(grid);
  });
};
