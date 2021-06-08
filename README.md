# Рик и Морти

## Описание работы 
Проект является тестовым заданием для Росэлторг. Введя в поисковую строку имя персонажа из мультфильма «Рик и Морти», пользователь получает все карточки, где есть совпадение с введенной строкой. Проект состоит из трех страниц: главной страницы, страницы «Эпизоды» и страницы «Локации». На всех карточках присутствует кнопка «Подробнее», которая позволяет получить более подробную информацию об элементе.

![rick](https://github.com/eugened503/rick-and-morty-react/blob/master/src/images/rick.gif?raw=true)

## Используемые технологии
+ React.js
+ Material-UI
+ React Query
+ Formik

## Особенности работы
+ Проект взаимодействет с https://rickandmortyapi.com/api
+ Запрос пользователя и состояние панели навигации сохраняются с помощью localStorage
+ Использован динамический роутер, который позволяет создавать неограниченное количество страниц для персонажей и эпизодов

## Развертывание проекта
- Скопируйте репозиторий
    - `https://github.com/eugened503/rick-and-morty-react.git`
- Установите пакеты yarn
     - `yarn install`
- Запустите версию для разработки (ее можно увидеть на локальном сервере)
    - `yarn start`
- Запустите сборку
     - `yarn build`

## Ссылка на развернутый проект 
[Нажмите, чтобы увидеть проект ](https://rick-and-morty-react-theta.vercel.app)