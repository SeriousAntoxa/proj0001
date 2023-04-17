## Создайте калькулятор расчета каркаса с покрытием листов:

Требуется разделить страницу на две части (вертикально или горизонтально, как удобно). 
В одной части ввод данных, во второй - результат/корзина<sup><a href="#added">d2</a></sup>.<br>
Внешний вид достаточный для проверки задания.

Ресурсы:<br>
Файл [data.json](https://github.com/Vistegra/test-calc-js/blob/master/data/data.json), далее "БД" - содержит данные из каталога.<br>
Файл [config.json](https://github.com/Vistegra/test-calc-js/blob/master/data/config.json), далее "Конфиг" - содержит данные конфигурации.

### Часть 1- Вводные данные<sup><a href="#added">d1</a></sup>:
- секция выбора материала: листы покрытия из БД<sup><a href="#added">1</a></sup>
- секция выбора трубы: трубы (тип pipe) из БД
- ширина - вводит пользователь, устанавливать ограничения из конфига (тип size)<sup><a href="#added">2</a></sup>
- длина - вводит пользователь, устанавливать ограничения из конфига (тип size)<sup><a href="#added">2</a></sup>
- выбор прочности<sup><a href="#added">3</a></sup>: легкая/стандартная/усиленная, из конфига (тип frame).

### Расчет
- Найти количество листов от площади изделия, все листы имеют длину 1 метр и ширину в метрах указанную в поле width в БД
- Найти количество трубы в метрах погонных. 
В каркасе применяется труба одного сечения т.е. все элементы каркаса сделаны из трубы одного и того же размера.
Расстояние между параллельными трубами должно быть одинаковым, но не превышать максимального расстояния в метрах (поле step, тип frame из конфига), при этом нужно учитывать ширину самой трубы в мм (поле "width" из БД). Ячейка, которая получается при пересечении труб, может быть, как прямоугольной, так и квадратной.
- Найти количество саморезов, с учетом количества на квадртный метр (поле value из Конфига) и материала выбранного листа из БД.

<img src="https://github.com/Vistegra/test-calc-js/blob/master/frame.jpg" alt="frame" style="height: 150px;"/>
- L и W - длина и ширина каркаса<br>
- Lc и Wc - длина и ширина ячейки<br>


"Строим" что-то подобное:<br>
<img src="https://github.com/Vistegra/test-calc-js/blob/master/photo.jpg" alt="photo" style="height: 150px;"/>

### Часть 2- Результат<sup><a href="#added">d1</a></sup> (Корзина<sup><a href="#added">d2</a></sup>, не обязательно):
Вывести площадь изделия, например: 12 м2 
Вывести расчетный размер ячейки, например: 0.96х0.96м

Вывести таблицей кол-во материалов, например:

Наименование| ед.|кол-во|сумма
--- | --- | --- | ---
Лист-12 0.5 ширина 0.5м | м2 | 10 | 220
Труба 20х20 | мп | 50 | 900
Саморез | шт | 60 | 66

Итого: 1186

### Будем смотреть:

- Аккуратность стиля кода и самого кода, файлов.
- Техническую часть верстки (БЭМ, SMACSS и т.д.). Можно использовать библиотеки (Bootstrap, Tailwind и т.д.)
- Стиль программирования (процедурный, функциональный, ООП(желательно))
- Архитектура (где и как хранятся данные, организация файлов, переменных, функций и т.д.)
- Отказоустойчивость (буквы вместо цифр, NaN, ошибки в консоли и т.п.)
- Оптимизация (спорные моменты будем тестировать, например [тут](https://jsben.ch/))

### Будет плюсом:

- Использование фрэймворка (react/vue/alpine/...).
- Использование webpack.
- Паттерн проектирование (MVVM/MCV/...).
- Любая анимация.
<hr>

<a name="added"></a>
#### Не обязательно, будет плюсом:
- 1 - Выбор материалов с сортировкой (например, по цене/ширине) и/или фильтрацией по материалу
- 2 - Пользователь не может ввести значения вне ограничений.
- 3 - При добавлении в конфигурацию элемента с полем {"type": "frame"}, новый тип прочности должен добавиться.
- d1 - Любые прочие доработки обязательно будут учтены.
- d2 - Реализовать корзину изделий. Изделия между собой не связаны. Возле таблицы результата изделия добавить кнопку "добавить в корзину", при нажатии на которую, собираем в финальную таблицу рассчитанные изделия.

<hr>

Результат демонстрировать через **Github**<br>
[Не стесняйтесь задавать нам вопросы.](https://t.me/trydim85)

#### PS Тестовое задание приближено к ежедневным задачам
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
