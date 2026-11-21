const gallery = document.querySelector('.gallery');
const character = document.getElementById('character');
const bubbleContainer = document.querySelector('.bubble-container');
const bubble = bubbleContainer.querySelector('.bubble');
const projectPanel = document.querySelector('.project-panel');
const aboutPanel = document.querySelector('.character-panel');

function showPanel(panel, title, content) {
    bubbleContainer.classList.remove('is-visible');
    panel.querySelector('.panel-title').textContent = title;
    panel.querySelector('.panel-content').innerHTML = content;
    panel.showModal();
    panel.querySelector('.panel-scroll').scrollTop = 0;
}

function setBubble(trigger, text) {
    trigger.addEventListener('pointerenter', (event) => {
        if (event.pointerType === 'touch' || document.querySelector('dialog[open]')) {
            return;
        }
        bubble.textContent = text;
        bubbleContainer.classList.add('is-visible');
    });
    trigger.addEventListener('pointerleave', () => bubbleContainer.classList.remove('is-visible'));
}

for (const project of portfolio.projects) {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'item';
    item.id = project.id;
    item.setAttribute('aria-haspopup', 'dialog');

    const cover = document.createElement('img');
    cover.src = `assets/${project.cover}`;
    cover.alt = '';
    cover.decoding = 'async';

    const title = document.createElement('span');
    title.className = 'item-title';
    title.lang = 'en';
    title.textContent = project.title;

    item.append(cover, title);
    item.addEventListener('click', () => showPanel(projectPanel, project.title, project.content));
    setBubble(item, project.title);
    gallery.append(item);
}

setBubble(character, '关于我');
character.addEventListener('click', () => {
    showPanel(aboutPanel, '关于我', portfolio.about);
});
document.getElementById('showreel').addEventListener('click', () => {
    showPanel(projectPanel, '作品集锦', portfolio.showreel);
});

for (const panel of [projectPanel, aboutPanel]) {
    panel.querySelector('.panel-close').addEventListener('click', () => panel.close());
    panel.addEventListener('click', (event) => {
        if (event.target === panel) {
            panel.close();
        }
    });
    panel.addEventListener('close', () => {
        if (!panel.open) {
            panel.querySelector('.panel-content').replaceChildren();
        }
    });
}
