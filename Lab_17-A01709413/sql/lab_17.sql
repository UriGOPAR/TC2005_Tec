-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2023 at 06:20 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lab_17`
--

-- --------------------------------------------------------

--
-- Table structure for table `peliculas`
--

CREATE TABLE `peliculas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(80) NOT NULL,
  `imagen` varchar(400) DEFAULT NULL,
  `descripcion` varchar(400) DEFAULT NULL,
  `idProductora` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `peliculas`
--

INSERT INTO `peliculas` (`id`, `titulo`, `imagen`, `descripcion`, `idProductora`, `created_at`) VALUES
(1, 'The Lord Of the Rings', 'https://assets-prd.ignimgs.com/2022/05/16/lotrfellowship-1652740286087.jpg', 'Excelente película, ganadora al Oscar en varias nominaciones', 1, '2023-03-15 15:56:23'),
(2, 'Star Wars III', 'http://3.bp.blogspot.com/-ttRQzlgtvas/VnMR6EyvelI/AAAAAAAAL1I/U9qgqCV8PGY/s1600/revenge_of_the_sith.jpg', 'Después de una feroz batalla en la que Obi-Wan (Ewan McGregor) y Anakin (Hayden Christensen) unen fuerzas de la República para ayudar a liberar el Canciller Palpatine (Ian McDiarmid) del malvado Conde Dooku (Christopher Lee) y sus secuaces, Anakin se gana la confianza del Canciller. Palpatine tiene deseos de expandir su imperio', 2, '2023-03-15 15:56:23'),
(3, 'Your Name', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/your-name-poster-1547566631.jpeg?crop=0.8xw:1xh;center,top&resize=1200:*', 'Disfruta de este amor imposible con la mejor animación y con los mejores detalles', 3, '2023-03-15 15:56:23'),
(4, 'Transformers', 'https://lumiere-a.akamaihd.net/v1/images/transformers_el_lado_oscuro_de_la_luna-121329126-large_bd791f0f.jpeg?region=128,0,1024,1024', 'Te gusta la ciencia ficción entonces, esta saga es para tí, una raza de alienígenas trata de conquistar el mundo', 4, '2023-03-15 15:56:23'),
(5, 'Jhon Wick', 'https://es.rollingstone.com/wp-content/uploads/2021/12/John-Wick-4-vera-la-luz-hasta-2023.jpg', 'Un asesino a suledo retirado toma otra vez su empleo por cuestiones personales', 5, '2023-03-15 15:56:23');

-- --------------------------------------------------------

--
-- Table structure for table `productoras`
--

CREATE TABLE `productoras` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Dumping data for table `productoras`
--

INSERT INTO `productoras` (`id`, `nombre`, `created_at`) VALUES
(1, 'New Line Cinema', '2023-03-09 15:54:37'),
(2, 'LucasFilm', '2023-03-09 15:55:14'),
(3, 'CoMix Wave Films', '2023-03-09 15:55:14'),
(4, 'Hasbro', '2023-03-09 15:55:14'),
(5, 'Lion Gate Entertainment', '2023-03-09 15:55:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idProductora` (`idProductora`);

--
-- Indexes for table `productoras`
--
ALTER TABLE `productoras`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `productoras`
--
ALTER TABLE `productoras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `peliculas`
--
ALTER TABLE `peliculas`
  ADD CONSTRAINT `peliculas_ibfk_1` FOREIGN KEY (`idProductora`) REFERENCES `productoras` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
