/* Shared helpers for Bonfire Tools prototype */
window.BT = {
  toast(msg, kind = '') {
    let t = document.querySelector('.toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.className = 'toast show ' + kind;
    clearTimeout(this._t);
    this._t = setTimeout(() => t.classList.remove('show'), 2200);
  },

  // Make a draggable element
  draggable(el, onDrop) {
    el.draggable = true;
    el.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', el.dataset.payload || el.textContent.trim());
      e.dataTransfer.effectAllowed = 'copy';
      el.style.opacity = '.5';
    });
    el.addEventListener('dragend', () => { el.style.opacity = '1'; });
  },

  // Make a drop target
  dropTarget(el, onDrop) {
    el.addEventListener('dragover', e => {
      e.preventDefault();
      el.classList.add('drag-over');
    });
    el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
    el.addEventListener('drop', e => {
      e.preventDefault();
      el.classList.remove('drag-over');
      const data = e.dataTransfer.getData('text/plain');
      onDrop && onDrop(data, el, e);
    });
  },

  // Free-form drag (for story nodes, etc.)
  freeDrag(handle, onMove) {
    let startX, startY, origX, origY, dragging = false;
    handle.style.cursor = 'move';
    handle.addEventListener('mousedown', e => {
      dragging = true;
      startX = e.clientX; startY = e.clientY;
      origX = handle.offsetLeft; origY = handle.offsetTop;
      e.preventDefault();
    });
    document.addEventListener('mousemove', e => {
      if (!dragging) return;
      handle.style.left = (origX + e.clientX - startX) + 'px';
      handle.style.top  = (origY + e.clientY - startY) + 'px';
      onMove && onMove(handle);
    });
    document.addEventListener('mouseup', () => dragging = false);
  }
};