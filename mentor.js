document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.tab-btn');
    const cards = {
        intro: document.querySelector('.card-intro'),
        review: document.querySelector('.card-review'),
        interview: document.querySelector('.card-interview')
    };

    let current = 'intro'; // 初始默认卡片

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const target = button.dataset.tab;

            if (target === current) return;

            // 移除当前卡片的 active
            cards[current].classList.remove('active');

            // 添加新卡片
            cards[target].classList.add('active');

            current = target;
        });
    });
});
