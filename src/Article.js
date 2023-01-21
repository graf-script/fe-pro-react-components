const Article = () => {
    return (
        <ul className="list">
            {Object.values(articles).map(({ headText, mainText }) => {
                return (
                    <li key={headText} className="list__item">
                        <h2 key={headText}>{headText}</h2>
                        <p key={mainText}>{mainText}</p>
                    </li>
                );
            })}
        </ul>
    );
}

const articles = {
    article1: {
        headText: '15 полезных однострочных выражений JavaScript',
        mainText: 'Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners',
    },
    article2: {
        headText: 'Полиморфизм простыми словами',
        mainText: 'Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё\n',
    },
    article3: {
        headText: 'Начало работы с Node.js',
        mainText: 'Node Hero: Глава 1',
    },
    article4: {
        headText: 'Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)',
        mainText: 'Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron).',
    },
    article5: {
        headText: '8 практичных хитростей веб-разработчика применить немедленно!',
        mainText: 'HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately\n',
    },
    article6: {
        headText: 'Насколько JavaScript сильный?',
        mainText: 'Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?',
    },
    article7: {
        headText: 'Изучите CSS-переменные за 5 минут',
        mainText: 'Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes.',
    },
    article8: {
        headText: 'Создание MEVN-приложения (Часть 1/2)',
        mainText: 'Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)\n',
    },
    article9: {
        headText: 'Реактивность Vue.js',
        mainText: 'Реактивность фреймворка Vue.js и использование метода Vue.set'
    },
    article10: {
        headText: 'Микроптимизации производительности и JavaScript',
        mainText: 'Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…',
    },
    article11: {
        headText: 'Девшахта-подкаст',
        mainText: '#108: Производительность кода — это важнейший критерий качества?',
    },
    article12: {
        headText: 'Одна из самых красивых идей в информатике: Y-Combinator',
        mainText: 'Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript”',
    },
};