document.addEventListener('DOMContentLoaded', function() {
    const yearButtons = document.querySelectorAll('.year-btn');
    const yearContents = document.querySelectorAll('.year-content');

    // Добавляем задержку для кнопок
    yearButtons.forEach((button, index) => {
        button.style.animationDelay = `${0.2 + index * 0.1}s`;
    });

    function showContent(year) {
        // Скрываем все блоки
        yearContents.forEach(content => {
            content.classList.remove('active');
        });

        // Показываем выбранный блок
        const selectedContent = document.getElementById(`content-${year}`);
        if (selectedContent) {
            selectedContent.classList.add('active');
            
            // Обновляем анимацию для story-block
            const storyBlocks = selectedContent.querySelectorAll('.story-block');
            storyBlocks.forEach((block, index) => {
                block.style.animationDelay = `${0.2 + index * 0.1}s`;
            });
        }

        // Обновляем активную кнопку
        yearButtons.forEach(btn => {
            btn.classList.remove('active');
            if(btn.dataset.year === year) {
                btn.classList.add('active');
            }
        });
    }

    yearButtons.forEach(button => {
        button.addEventListener('click', () => {
            showContent(button.dataset.year);
        });
    });

    // Показываем первый год при загрузке
    showContent('1990');
});

function initializeFinalAnalysis() {
    const listItems = document.querySelectorAll('.final-analysis li');
    listItems.forEach((item, index) => {
        item.style.setProperty('--li-index', index);
    });
}

function createLights() {
    const container = document.createElement('div');
    container.className = 'lights-container';
    document.body.appendChild(container);

    function addLight() {
        const light = document.createElement('div');
        light.className = 'light';
        
        // Случайное положение по горизонтали
        light.style.left = Math.random() * 100 + '%';
        
        // Случайная продолжительность анимации
        light.style.animationDuration = 3 + Math.random() * 2 + 's';
        
        // Случайный размер
        const size = 4 + Math.random() * 4;
        light.style.width = size + 'px';
        light.style.height = size + 'px';
        
        // Случайная задержка старта
        light.style.animationDelay = Math.random() * 2 + 's';

        container.appendChild(light);

        // Удаляем огонек после завершения анимации
        light.addEventListener('animationend', () => {
            light.remove();
        });
    }

    // Создаем больше огоньков
    for(let i = 0; i < 20; i++) {
        setTimeout(addLight, Math.random() * 2000);
    }

    // Продолжаем добавлять новые огоньки
    setInterval(addLight, 300);
}

// Запускаем создание огоньков после загрузки страницы
document.addEventListener('DOMContentLoaded', createLights); 