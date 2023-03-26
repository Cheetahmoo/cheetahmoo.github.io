function create_panel_html(img_src, title, disc) {
    const panel = document.createElement('div');
    panel.className = 'fullscreen-panel';
    panel.innerHTML = `
      <div class="colms-2">
        <button id="close" type="button" onclick="close_panel()">&#10006;</button>
        <div style="align-self: center;">
          <img class="shadow-l" src="${img_src}" />
        </div>
        <section>
          <h2>${title}</h2>
          <hr />
          <p>${disc}</p>
        </section>
      </div>`;
    return panel;
}

function scroll_to_element(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView(true);
}

function close_panel() {
    $('.fullscreen-panel').attr('style', '');
    document.body.style = '';
}

document.addEventListener('keydown', (event) => {
    const code = event.code;
    if (code === 'Escape') {
        close_panel();
    }
}, false);

$(function () {
    //Add functionality to display panel on click
    $('div.card').on('click', function (e) {
        e.preventDefault();
        document.body.style.overflow = 'hidden';
        const card = $(this);
        const img_src = card.find('img').attr('src');
        const title = card.find('h4').text();
        //Combined the both the
        const disc = card.find('.card-desc').html();
        const panel = $('.fullscreen-panel');
        panel.find('.fullscreen-title').text(title);
        panel.find('.fullscreen-description').html(disc);
        panel.find('.fullscreen-img').attr('src', img_src);
        panel.attr('style', 'visibility: visible; opacity: 1;');
    });
});
