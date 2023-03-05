'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    const hideTabContent = () => {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    const showTabContent = (i = 0) => {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer

    const deadline = '2023-03-20';

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(total / (1000 * 60 * 60 * 24)),
            hours = Math.floor((total / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((total / (1000 * 60)) % 60),
            seconds = Math.floor((total / 1000) % 60);
        return {
            'total': total,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const timerOnPage = getTimeRemaining(endtime);
            days.innerHTML = getZero(timerOnPage.days);
            hours.innerHTML = getZero(timerOnPage.hours);
            minutes.innerHTML = getZero(timerOnPage.minutes);
            seconds.innerHTML = getZero(timerOnPage.seconds);
            if (timerOnPage.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal
    const modalCallUs = document.querySelector('.modal'),
        buttonsCallUs = document.querySelectorAll('[data-modal]'),
        buttonCloseModalCallUs = document.querySelector('[data-close]');

    // modalTimerId = setTimeout(modalOpen, 5000);

    function modalOpen() {
        modalCallUs.style.display !== 'block' ? modalCallUs.style.display = 'block' : modalCallUs.style.display = 'none';
        document.body.style.overflow = 'hidden';
        clearTimeout(modalTimerId);
    }

    function modalTriggerButton() {
        buttonsCallUs.forEach((btn) => {
            btn.addEventListener('click', modalOpen);
        })
    }

    function close(selector) {
        selector.style.display = 'none';
        document.body.style.overflow = '';
    }

    function modalClose() {
        buttonCloseModalCallUs.addEventListener('click', () => {
            close(modalCallUs);
        });
        modalCallUs.addEventListener('click', (e) => {
            if (e.target === modalCallUs) {
                close(modalCallUs);
            }
        });
        document.addEventListener('keydown', (e) => {
            e.code === 'Escape' ? close(modalCallUs) : null;
        });
    }

    modalTriggerButton();
    modalClose();

    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalOpen();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // Classes
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.transfer = 27;
            this.convertToUAH();
            this.parent = document.querySelector(parentSelector);
        }

        convertToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.classes[0] = 'menu__item';
                element.classList.add(this.classes[0]);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
            element.innerHTML = (`
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
            `);
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих\n' +
        '                    овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой\n' +
        '                    и высоким качеством!',
        9,
        '.menu .container',
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "Постное"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и\n' +
        '                    качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в\n' +
        '                    ресторан! Это абсолютно новый продукт',
        14,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Фитнес"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие\n' +
        '                    продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество\n' +
        '                    белков за счет тофу и импортных вегетарианских стейков.',
        16,
        '.menu .container',
        'menu__item'
    ).render();
});