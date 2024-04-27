-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 27, 2024 at 11:18 AM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tocd`
--

-- --------------------------------------------------------

--
-- Table structure for table `itemlistings_cart`
--

DROP TABLE IF EXISTS `itemlistings_cart`;
CREATE TABLE IF NOT EXISTS `itemlistings_cart` (
  `cartID` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `userName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pickupdelv` tinyint NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `LastModified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cartID`),
  UNIQUE KEY `cartID_UNIQUE` (`cartID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `itemlistings_cartitem`
--

DROP TABLE IF EXISTS `itemlistings_cartitem`;
CREATE TABLE IF NOT EXISTS `itemlistings_cartitem` (
  `cartitemID` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `cartID` int UNSIGNED NOT NULL,
  `itemID` int UNSIGNED NOT NULL,
  `quantity` int UNSIGNED NOT NULL,
  `lbwanted` float UNSIGNED DEFAULT NULL,
  `last_modifed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`cartitemID`),
  UNIQUE KEY `cartitemID_UNIQUE` (`cartitemID`),
  KEY `cartitemmain_idx` (`itemID`),
  KEY `cartitemcart_idx` (`cartID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `itemlistings_category`
--

DROP TABLE IF EXISTS `itemlistings_category`;
CREATE TABLE IF NOT EXISTS `itemlistings_category` (
  `categoryID` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(70) NOT NULL,
  PRIMARY KEY (`categoryID`),
  UNIQUE KEY `categoryID_UNIQUE` (`categoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `itemlistings_category`
--

INSERT INTO `itemlistings_category` (`categoryID`, `categoryName`) VALUES
(1, 'Snacks'),
(2, 'Ground Provision'),
(3, 'Can Foods'),
(4, 'Misc'),
(5, 'Seasoning'),
(6, 'Meat'),
(7, 'Juice/Tea');

-- --------------------------------------------------------

--
-- Table structure for table `itemlistings_main`
--

DROP TABLE IF EXISTS `itemlistings_main`;
CREATE TABLE IF NOT EXISTS `itemlistings_main` (
  `itemID` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `itemName` varchar(75) NOT NULL,
  `Distributer` varchar(75) NOT NULL,
  `imagepath` varchar(200) DEFAULT NULL,
  `categoryID` int UNSIGNED NOT NULL DEFAULT '4',
  `price` float NOT NULL,
  `manufacture` varchar(75) DEFAULT NULL,
  `lastModifed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`itemID`),
  UNIQUE KEY `itemID_UNIQUE` (`itemID`),
  KEY `categoryID_idx` (`categoryID`),
  KEY `categorymain_idx` (`categoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `itemlistings_main`
--

INSERT INTO `itemlistings_main` (`itemID`, `itemName`, `Distributer`, `imagepath`, `categoryID`, `price`, `manufacture`, `lastModifed`) VALUES
(1, 'Cream crackers', 'Distributer', '../images/Cream_Crackers.jpg', 1, 3.99, 'Excelsior', '2024-04-27 11:11:10'),
(2, 'Water crackers', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(3, 'Big foot', 'Distributer', '../images/Big Foot.webp', 1, 3.99, 'Excelsior', '2024-04-27 11:11:24'),
(4, 'Exotica', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(5, 'Tortillaz', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(6, 'Soldanza', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(7, 'Fun C', 'Distributer', '../images/Fun C.jpg', 1, 3.99, 'Excelsior', '2024-04-27 11:11:46'),
(8, 'Shirley', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(9, 'Snackers', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(10, 'Cheese Krunchies', 'Distributer', '../images/Cheese Krunchies.jpg', 1, 3.99, 'Excelsior', '2024-04-27 11:17:20'),
(11, 'chocolate chips', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(12, 'Chick N chips', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(13, 'Peanuts (Variety)', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(14, 'Sweet Tea', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(15, 'Wheat biscuits', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(16, 'Double Cheese', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(17, 'Coconut cookies', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(18, 'Cream crackers', 'Distributer', NULL, 1, 3.99, 'National', '2024-04-27 06:39:41'),
(19, 'Ovaltine', 'Distributer', NULL, 1, 3.99, 'None', '2024-04-27 06:39:41'),
(20, 'Rough tops', 'Distributer', NULL, 1, 3.99, 'None', '2024-04-27 06:39:41'),
(21, 'Evaporated milk', 'Distributer', NULL, 1, 3.99, 'Nestle', '2024-04-27 06:39:41'),
(22, 'Round spice bun', 'Distributer', NULL, 1, 3.99, 'National', '2024-04-27 06:39:41'),
(23, '12 oz loaf spice bun', 'Distributer', NULL, 1, 3.99, 'National', '2024-04-27 06:39:41'),
(24, 'Duplex sandwich cookies', 'Distributer', NULL, 1, 3.99, 'National', '2024-04-27 06:39:41'),
(25, 'Peanut butter Sandwich cookies', 'Distributer', NULL, 1, 3.99, 'National', '2024-04-27 06:39:41'),
(26, 'Strawberry sandwich cookies', 'Distributer', NULL, 1, 3.99, 'National', '2024-04-27 06:39:41'),
(27, 'Tea biscuit', 'Distributer', NULL, 1, 3.99, 'National', '2024-04-27 06:39:41'),
(28, 'Ginger tea biscuit', 'Distributer', NULL, 1, 3.99, 'National', '2024-04-27 06:39:41'),
(29, 'Cheese curls', 'Distributer', NULL, 1, 3.99, 'National', '2024-04-27 06:39:41'),
(30, 'Zesty cheese popcorn', 'Distributer', NULL, 1, 3.99, 'National', '2024-04-27 06:39:41'),
(31, 'Tigers', 'Distributer', NULL, 1, 3.99, 'None', '2024-04-27 06:39:41'),
(32, 'Sugar balls', 'Distributer', NULL, 1, 3.99, 'None', '2024-04-27 06:39:41'),
(33, 'Yolo', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(34, 'Jumbies', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(35, 'Tea time', 'Distributer', NULL, 1, 3.99, 'Excelsior', '2024-04-27 06:39:41'),
(36, 'Yellow Yam', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(37, 'Yellow Yam', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(38, 'White yam', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(39, 'Cho Cho', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(40, 'Dasheen', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(41, 'Green Banana', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(42, 'Green plantain', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(43, 'Riple plantain', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(44, 'Sweet Potato', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(45, 'Irish Potato', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(46, 'Bread Fruit', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(47, 'Pumpkin', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(48, 'Escellion', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(49, 'Thyme', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(50, 'Onion', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(51, 'Scotch Bonnet Pepper', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(52, 'Sweet Pepper', 'Distributer', NULL, 2, 3.99, 'None', '2024-04-27 06:39:41'),
(53, 'Baked beans', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(54, 'Sausages', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(55, 'Tin Mackerel in hot tomato sauce', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(56, 'Coconut Milk', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(57, 'Chick peas', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(58, 'Butter bean', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(59, 'Tuna', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(60, 'Corned beef', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(61, 'Green peas', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(62, 'Tin Mackerel in tomato sauce', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(63, 'Mixed Vegetables', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(64, 'Red kidney peas', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(65, 'Sardines in vegetable oil', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(66, 'sardines with peppers in vegetable oil', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(67, 'whole kernel sweet corn', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(68, 'Broad bean', 'Distributer', NULL, 3, 3.99, 'Grace', '2024-04-27 06:39:41'),
(69, 'Instant porridge cornmeal', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(70, 'Instant porridge banana', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(71, 'Chicken flavour soup mix', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(72, 'Chicken frankfurters', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(73, 'Cock flavoured soup mix', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(74, 'Coconut milk powder', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(75, 'Browning', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(76, 'Instant porridge oats', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(77, 'Vinegar', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(78, 'Fish and meat sauce', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(79, 'Fish tea soup mix', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(80, 'Bammy', 'Distributer', NULL, 4, 3.99, 'None', '2024-04-27 06:39:41'),
(81, 'Hot pepper sauce', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(82, 'Tomato Ketchup', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(83, 'Kola champagne syrup', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(84, 'Long grain white rice', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(85, 'Parboiled rice', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(86, 'Coconut oil', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(87, 'Pumpkin flavour soup mix', 'Distributer', NULL, 4, 3.99, 'Grace', '2024-04-27 06:39:41'),
(88, 'Original bbq sauce', 'Distributer', NULL, 4, 3.99, 'Kraft', '2024-04-27 06:39:41'),
(89, 'Sweet and spicy bbq sauce', 'Distributer', NULL, 4, 3.99, 'Kraft', '2024-04-27 06:39:41'),
(90, 'sweet brown sugar bbq sauce', 'Distributer', NULL, 4, 3.99, 'Kraft', '2024-04-27 06:39:41'),
(91, 'Mayo', 'Distributer', NULL, 4, 3.99, 'Kraft', '2024-04-27 06:39:41'),
(92, 'Indian Girl corn meal', 'Distributer', NULL, 4, 3.99, 'None', '2024-04-27 06:39:41'),
(93, 'Scotch bonnet pepper sauce', 'Distributer', NULL, 5, 3.99, 'Grace', '2024-04-27 06:39:41'),
(94, 'Scotch bonnet pepper sauce', 'Distributer', NULL, 5, 3.99, 'Grace', '2024-04-27 06:39:41'),
(95, 'Scotch bonnet pepper sauce', 'Distributer', NULL, 5, 3.99, 'Grace', '2024-04-27 06:39:41'),
(96, 'All Purpose seasoning', 'Distributer', NULL, 5, 3.99, 'Grace', '2024-04-27 06:39:41'),
(97, 'Chicken Seasoning', 'Distributer', NULL, 5, 3.99, 'Grace', '2024-04-27 06:39:41'),
(98, 'Fish Seasoning', 'Distributer', NULL, 5, 3.99, 'Grace', '2024-04-27 06:39:41'),
(99, 'Garlic powder', 'Distributer', NULL, 5, 3.99, 'Grace', '2024-04-27 06:39:41'),
(100, 'Onion Powder', 'Distributer', NULL, 5, 3.99, 'Grace', '2024-04-27 06:39:41'),
(101, 'Ginger, garlic and pimento se.', 'Distributer', NULL, 5, 3.99, 'Grace', '2024-04-27 06:39:41'),
(102, 'Jerk seasoning', 'Distributer', NULL, 5, 3.99, 'Grace', '2024-04-27 06:39:41'),
(103, 'Oxtail seasoning', 'Distributer', NULL, 5, 3.99, 'Grace', '2024-04-27 06:39:41'),
(104, 'Jamaican jerk seasoning sauce hot and spicy', 'Distributer', NULL, 5, 3.99, 'Grace', '2024-04-27 06:39:41'),
(105, 'Jamaican jerk seasoning sauce mild', 'Distributer', NULL, 5, 3.99, 'Grace', '2024-04-27 06:39:41'),
(106, 'Jamaican jerk bbq sauce', 'Distributer', NULL, 5, 3.99, 'Grace', '2024-04-27 06:39:41'),
(107, 'Jerk seasoning', 'Distributer', NULL, 5, 3.99, 'maggie', '2024-04-27 06:39:41'),
(108, 'Chicken Seasoning', 'Distributer', NULL, 5, 3.99, 'Maggie', '2024-04-27 06:39:41'),
(109, 'All Purpose seasoning', 'Distributer', NULL, 5, 3.99, 'Maggie', '2024-04-27 06:39:41'),
(110, 'Beta pac Curry', 'Distributer', NULL, 5, 3.99, 'None', '2024-04-27 06:39:41'),
(111, 'Maggie cubes', 'Distributer', NULL, 5, 3.99, 'maggie', '2024-04-27 06:39:41'),
(112, 'Aloe Vera Drink', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(113, 'Carrot drink (tin)', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(114, 'Cherry Syrup', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(115, 'Grace fresh start berry', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(116, 'Grace fresh start citrus punch', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(117, 'Grace fresh start fruit punch', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(118, 'Grace fresh start grape', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(119, 'Grace fresh start lemonade', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(120, 'Grace fresh start pineapple kiwi', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(121, 'Grace fresh start orange', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(122, 'Grace fresh start mango', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(123, 'Grace fresh start peach mania', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(124, 'Grace fresh start mango carrot', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(125, 'Grace fresh start strawberry passion', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(126, 'Fruit punch syrup', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(127, 'Ginger lemon tea', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(128, 'Ginger mint tea', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(129, 'Ginger tea', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(130, 'Pineapple cherry drink (tin)', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(131, 'Pineapple juice (tin)', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(132, 'Fruit punch juice (tin)', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(133, 'Pineapple orange syrup', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(134, 'Tropical rhythm Guava carrot', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(135, 'Tropical rhythm island mango', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(136, 'Tropical rhythm fruit punch', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(137, 'Tropical rhythm june plum', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(138, 'Tropical rhythm lychee paradise', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(139, 'Tropical rhythm mango carrot', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(140, 'Tropical rhythm pineapple and ginger', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(141, 'Tropical rhythm reggae medley', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(142, 'Tropical rhythm sorrel and ginger', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(143, 'Roma instant cocoa mix ht chocolate', 'Distributer', NULL, 7, 3.99, 'Grace', '2024-04-27 06:39:41'),
(144, 'Big Bamboo Jamaican Irish moss drink', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(145, 'Chubby', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(146, 'Ginger beer', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(147, 'Pepsi', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(148, 'Ting', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(149, 'Bigga', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(150, 'Apple J', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(151, 'Pear J', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(152, 'Vita malt', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(153, 'Boom', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(154, 'Dried Sorrel', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(155, 'Natural irish moss', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(156, 'Milo', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(157, 'Mint', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(158, 'Cerasee', 'Distributer', NULL, 7, 3.99, 'None', '2024-04-27 06:39:41'),
(159, "Pig\'s tail", 'Distributer', NULL, 6, 3.99, 'None', '2024-04-27 06:39:41'),
(160, 'oxtail', 'Distributer', NULL, 6, 3.99, 'None', '2024-04-27 06:39:41'),
(161, 'cow foot', 'Distributer', NULL, 6, 3.99, 'None', '2024-04-27 06:39:41'),
(162, 'chicken foot', 'Distributer', NULL, 6, 3.99, 'None', '2024-04-27 06:39:41'),
(163, 'Mutton', 'Distributer', NULL, 6, 3.99, 'None', '2024-04-27 06:39:41'),
(164, 'Beef', 'Distributer', NULL, 6, 3.99, 'None', '2024-04-27 06:39:41'),
(165, 'Pork', 'Distributer', NULL, 6, 3.99, 'None', '2024-04-27 06:39:41'),
(166, 'Corn pork', 'Distributer', NULL, 6, 3.99, 'None', '2024-04-27 06:39:41'),
(167, 'Salfish', 'Distributer', NULL, 6, 3.99, 'None', '2024-04-27 06:39:41'),
(168, 'Salt Mackerl', 'Distributer', NULL, 6, 3.99, 'None', '2024-04-27 06:39:41');

-- --------------------------------------------------------

--
-- Table structure for table `menulistings_category`
--

DROP TABLE IF EXISTS `menulistings_category`;
CREATE TABLE IF NOT EXISTS `menulistings_category` (
  `categoryID` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(70) NOT NULL,
  PRIMARY KEY (`categoryID`),
  UNIQUE KEY `categoryID_UNIQUE` (`categoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `menulistings_category`
--

INSERT INTO `menulistings_category` (`categoryID`, `categoryName`) VALUES
(1, 'Breakfast'),
(2, 'Lunch'),
(3, 'Dinner'),
(4, 'Dessert');

-- --------------------------------------------------------

--
-- Table structure for table `menulistings_main`
--

DROP TABLE IF EXISTS `menulistings_main`;
CREATE TABLE IF NOT EXISTS `menulistings_main` (
  `menuID` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `menuName` varchar(75) NOT NULL,
  `imagepath` varchar(200) DEFAULT NULL,
  `categoryID` int UNSIGNED NOT NULL DEFAULT '1',
  `price` float NOT NULL,
  `dietTags` varchar(10) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `longDescription` varchar(1000) DEFAULT NULL,
  `lastModifed` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`menuID`),
  UNIQUE KEY `menuID_UNIQUE` (`menuID`),
  KEY `categoryID_idx` (`categoryID`),
  KEY `categorymain_idx` (`categoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `menulistings_main`
--

INSERT INTO `menulistings_main` (`menuID`, `menuName`, `imagepath`, `categoryID`, `price`, `dietTags`, `description`, `longDescription`, `lastModifed`) VALUES
(1, 'Cheese Omelets', '../images/Cheese_Omelette.jpg', 1, 16.5, 'DGxxxx', 'Omelete filled with Chedder Cheese, served with home fries & toast', NULL, '2024-04-27 11:05:04'),
(2, 'Western Omelete', '../images/Western_Omelette.jpg', 1, 16.95, 'DGxxxx', 'Omelete filled with ham, onion, & pepper, served with home fries & toast', NULL, '2024-04-27 11:05:30'),
(3, 'Steamed Callaloo', '../images/Steamed_Callaloo.jpg', 2, 19.99, 'xGxxVx', 'Steamed with onion, pepper & other spices, served with boiled provisions or fried dumplings', NULL, '2024-04-27 11:05:45'),
(4, 'Jerked Chicken', '../images/Jerked_Chicken.jpg', 2, 23.99, 'xxxxxS', 'Your choice of white or dark meat', NULL, '2024-04-27 11:05:59'),
(5, 'Rasta Pasta', '../images/Rasta_Pasta.jpg', 2, 15.49, 'xGxxxx', 'Penne Pasta, broccoli, cauliflower, bell pepper and onion, sauteed in olive oil or creamy pink sauce', NULL, '2024-04-27 11:06:13'),
(6, 'Brown Stewed Snapper', '../images/Brown_Stewed_Snapper.jpg', 3, 31.5, 'xxxxxx', 'Fresh snapper fried then simmered with herbs and spices in its own gravy', NULL, '2024-04-27 11:06:27'),
(7, 'Escovitched Fish', '../images/Escovitch_Fish.jpg', 3, 31.5, 'xxxxxS', 'Crispy snapper topped with onion, pepper, carrot, and vinegar', NULL, '2024-04-27 11:06:40');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `itemlistings_cartitem`
--
ALTER TABLE `itemlistings_cartitem`
  ADD CONSTRAINT `cartitemcart` FOREIGN KEY (`cartID`) REFERENCES `itemlistings_cart` (`cartID`),
  ADD CONSTRAINT `cartitemmain` FOREIGN KEY (`itemID`) REFERENCES `itemlistings_main` (`itemID`);

--
-- Constraints for table `itemlistings_main`
--
ALTER TABLE `itemlistings_main`
  ADD CONSTRAINT `categorymain` FOREIGN KEY (`categoryID`) REFERENCES `itemlistings_category` (`categoryID`);

--
-- Constraints for table `menulistings_main`
--
ALTER TABLE `menulistings_main`
  ADD CONSTRAINT `categorymainmenu` FOREIGN KEY (`categoryID`) REFERENCES `menulistings_category` (`categoryID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
