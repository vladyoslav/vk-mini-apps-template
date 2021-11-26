# VK Mini Apps template
 TypeScript шаблон для фронтенда мини-приложений

## Использует
* TypeScript
* React
* Библиотеку компонентов VKUI
* Роутер [@cteamdev/router](https://github.com/cteamdev/router)
* [@mntm/precoil](https://github.com/maxi-team/precoil) в качестве стейт-менеджера
* Инструмент для сборки Vite
* Линтер ESLint

Есть ветка с роутером [@unexp/router](https://github.com/land47/router)

## Установка
[Создайте репозиторий, используя этот шаблон](https://github.com/vladyoslav/vk-mini-apps-template/generate)

Установите зависимости с помощью `yarn` (рекомендованный способ):
```shell
yarn
```

Или `npm`:
```shell
npm i
```

## Запуск
```shell
yarn start
```
или
```shell
npm start
```

## Деплой
Замените `app_id` в `vk-hosting-config.json` на айди своего приложения ВКонтакте

Задеплойте приложение на хостинг статики ВКонтакте с помощью:
```shell
yarn run deploy
```
или
```shell
npm run deploy
```
После этого приложение будет доступно по ссылке вида https://prod-app...

Готово!

## Пример
>https://vk.com/app7974220
