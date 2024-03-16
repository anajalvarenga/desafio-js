function transformMenu() {
    const menu = document.querySelector('.btn-group-vertical');
    menu.className = 'btn-group-horizontal';
}

function transformHeader() {
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.classList.add('bg-secondary');
    jumbotron.classList.add('text-white');
    jumbotron.style.textAlign = 'end';

    const btn = document.querySelector('.jumbotron .btn')
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-success');
}

function transformCards() {
    const colCards = document.querySelectorAll('.col-lg-3');
    const newOrder = [1, 3, 2, 0];

    colCards.forEach((colCard, index) => {
        colCard.style.order = newOrder[index];
        if (newOrder[index] === 1) {
            const btn = colCard.querySelector('.card .card-body .btn');
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-success');
        }
    })
}

function transformList() {
    const listGroupItemActive = document.querySelector('.list-group-item.active');
    listGroupItemActive.classList.remove('active');

    const listGroup = document.querySelector('.list-group');
    listGroup.innerHTML += '<li class="list-group-item active">Quarto item</li>';
    listGroup.innerHTML += '<li class="list-group-item">Quinto item</li>';
}

transformMenu();
transformHeader();
transformCards();
transformList();