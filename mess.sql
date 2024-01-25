-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Мар 12 2023 г., 13:14
-- Версия сервера: 10.4.27-MariaDB
-- Версия PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `mess`
--

-- --------------------------------------------------------

--
-- Структура таблицы `friends`
--

CREATE TABLE `friends` (
  `friendGo` varchar(11) NOT NULL,
  `friendTo` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `friends`
--

INSERT INTO `friends` (`friendGo`, `friendTo`) VALUES
('666666666', '076467191'),
('666666666', '41995725'),
('5146682247', '666666666'),
('957421', '666666666'),
('666666666', '98494984'),
('1379484521', '666666666'),
('666666666', '151510');

-- --------------------------------------------------------

--
-- Структура таблицы `friends_application`
--

CREATE TABLE `friends_application` (
  `friendGo` varchar(11) NOT NULL,
  `friendTo` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `friends_application`
--

INSERT INTO `friends_application` (`friendGo`, `friendTo`) VALUES
('151510', '5146682247'),
('151510', '917215182');

-- --------------------------------------------------------

--
-- Структура таблицы `messenge`
--

CREATE TABLE `messenge` (
  `messGo` varchar(11) NOT NULL,
  `messTo` varchar(11) NOT NULL,
  `messMess` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `token`
--

CREATE TABLE `token` (
  `id` varchar(11) NOT NULL,
  `token` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `token`
--

INSERT INTO `token` (`id`, `token`) VALUES
('666666666', '893970736109781471'),
('666666666', '860263778359900444'),
('666666666', '569621831519945770'),
('151510', '827700964804542267'),
('151510', '276773934152300183');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` varchar(11) NOT NULL,
  `email` varchar(315) NOT NULL,
  `pass` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `avatar` varchar(128) NOT NULL DEFAULT 'media/image/user/mess.png',
  `status` varchar(299) NOT NULL,
  `gender` char(5) NOT NULL DEFAULT '100px',
  `dateBirth` date NOT NULL DEFAULT current_timestamp(),
  `familyStatus` tinyint(1) NOT NULL DEFAULT 0,
  `city` varchar(20) NOT NULL DEFAULT 'Город'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `email`, `pass`, `name`, `surname`, `avatar`, `status`, `gender`, `dateBirth`, `familyStatus`, `city`) VALUES
('076467191', 'google.com', '19', 'Богдан', 'Иванов', 'media/image/user/mess.png', '', '100px', '2023-02-28', 0, 'Город'),
('1379484521', 'google.com', '19', 'Валентин', 'Иванов', 'media/image/user/mess.png', '', '100px', '2023-02-28', 0, 'Город'),
('14194127', 'google.com', '19', 'Вальдемар', 'Иванов', 'media/image/user/mess.png', '', '100px', '2023-02-28', 0, 'Город'),
('151510', '15@google.com', '165142201', 'Нанус ', 'Иванов', 'media/image/user/151510--16778437665656015733145308719753.jpg', '', '100px', '2023-02-28', 4, 'Город'),
('32419877', 'google.com', '19', 'Варсонофий', 'Иванов', 'media/image/user/mess.png', '', '100px', '2023-02-28', 0, 'Город'),
('325252', 'google.com', '19', 'Варнава', 'Иванов', 'media/image/user/mess.png', '', '100px', '2023-02-28', 0, 'Город'),
('41995725', 'google.com', '19', 'Вангьял', 'Иванов', 'media/image/user/mess.png', '', '100px', '2023-02-28', 0, 'Город'),
('4645', 'emasnd', '8447', 'Иван', 'Ускол', 'media/image/user/mess.png', '', '100px', '2023-02-26', 0, 'Город'),
('5146682247', 'google.com', '75784', 'Ваня', 'Петров', 'media/image/user/mess.png', '', '100px', '2023-02-26', 0, 'Москва'),
('51651619', 'google.com', '19', 'Валерьян', 'Иванов', 'media/image/user/mess.png', '', '100px', '2023-02-28', 0, 'Город'),
('5271496191', 'google.com', '19', 'Болеслав', 'Иванов', 'media/image/user/mess.png', '', '100px', '2023-02-28', 0, 'Город'),
('6274917415', 'google.com', '19', 'Болот', 'Иванов', 'media/image/user/mess.png', '', '100px', '2023-02-28', 0, 'Город'),
('666666666', 'eldar@gmail.com', '165142201', 'Eldar-rik', 'Alli-ev', 'media/image/user/666666666--IMG_20230225_001410.jpg', 'Hello word\n\n[x_x]\n', '0px', '1999-03-11', 3, 'Almaty Kaz'),
('917215182', 'google.com', '19', 'Борис', 'Иванов', 'media/image/user/mess.png', '', '100px', '2023-02-28', 0, 'Город'),
('957421', 'google.com', '19', 'Варлам', 'Иванов', 'media/image/user/mess.png', '', '100px', '2023-02-28', 0, 'Город'),
('9717921521', 'google.com', '19', 'Бонавентура', 'Иванов', 'media/image/user/mess.png', '', '100px', '2023-02-28', 0, 'Город'),
('98494984', 'google.com', '19', 'Валерий', 'Иванов', 'media/image/user/mess.png', '', '100px', '2023-02-28', 0, 'Город'),
('9917725111', 'google.com', '19', 'Билял', 'Иванов', 'media/image/user/mess.png', '', '100px', '2023-02-28', 0, 'Город');

-- --------------------------------------------------------

--
-- Структура таблицы `user_registration_code`
--

CREATE TABLE `user_registration_code` (
  `email` varchar(315) NOT NULL,
  `code` varchar(6) NOT NULL,
  `email_checked` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
