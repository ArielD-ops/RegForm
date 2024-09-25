-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-09-2024 a las 00:42:14
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `form`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formulario`
--

CREATE TABLE `formulario` (

  `usuario` varchar(25) NOT NULL,
  `password` varchar(25) DEFAULT NULL,
  `nombre` varchar(65) DEFAULT NULL,
  `apellido` varchar(65) DEFAULT NULL,
  `dni` int(15) DEFAULT NULL,
  `fecha_nacimiento` datetime DEFAULT NULL,
  `genero` char(15) DEFAULT NULL,
  `pais` varchar(25) DEFAULT NULL,
  `provincia` varchar(25) DEFAULT NULL,
  `localidad` int(25) DEFAULT NULL,
  `telefono` float DEFAULT NULL,
  `estado_civil` varchar(15) DEFAULT NULL,
  `licencia_de_conducir` tinyint(1) DEFAULT NULL,
  `situacion_laboral` varchar(25) DEFAULT NULL,
  `otro` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `formulario`
--
ALTER TABLE `formulario`
  ADD PRIMARY KEY (`usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
