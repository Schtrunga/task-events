export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';

    button.addEventListener('click', () => {
        button.remove();
    });

    document.body.append(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach((itemText) => {
        const li = document.createElement('li');
        li.textContent = itemText;

        li.addEventListener('mouseover', () => {
            li.title = li.textContent;
        });

        ul.append(li);
    });

    document.body.append(ul);
}

export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';

    let isFirstClick = true;

    link.addEventListener('click', (event) => {
        if (isFirstClick) {
            event.preventDefault();
            link.textContent += ` ${link.href}`;
            isFirstClick = false;
        }
    });

    document.body.append(link);
}

export function createList() {
    const ul = document.createElement('ul');
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    function addLiClickListener(li) {
        li.addEventListener('click', () => {
            li.textContent += '!';
        });
    }

    const firstLi = document.createElement('li');
    firstLi.textContent = 'Пункт';
    addLiClickListener(firstLi);
    ul.append(firstLi);

    button.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        addLiClickListener(newLi);
        ul.append(newLi);
    });

    document.body.append(ul);
    document.body.append(button);
}
