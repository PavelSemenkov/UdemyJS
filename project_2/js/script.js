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

    function modalOpen() {
        buttonsCallUs.forEach((btn) => {
            btn.addEventListener('click', () => {
                modalCallUs.style.display !== 'block' ? modalCallUs.style.display = 'block' : modalCallUs.style.display = 'none';
                document.body.style.overflow = 'hidden';
            })
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

    modalOpen();
    modalClose();
});