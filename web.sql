/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50547
Source Host           : localhost:3306
Source Database       : web

Target Server Type    : MYSQL
Target Server Version : 50547
File Encoding         : 65001

Date: 2017-03-26 16:52:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for about
-- ----------------------------
DROP TABLE IF EXISTS `about`;
CREATE TABLE `about` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tid` int(10) unsigned zerofill NOT NULL COMMENT '1webset,2footer,3about,4contact',
  `title` varchar(255) DEFAULT NULL,
  `breif` varchar(255) DEFAULT NULL,
  `content` text,
  `sort` int(10) unsigned zerofill DEFAULT NULL,
  `state` int(10) unsigned zerofill DEFAULT NULL,
  `addtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of about
-- ----------------------------
INSERT INTO `about` VALUES ('1', '0000000002', null, null, '<img src=\"/file/image/20161102/20161102183539_24867.jpg\" alt=\"\" />', null, null, null);

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `power` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `logintime` datetime DEFAULT NULL,
  `lasttime` datetime DEFAULT NULL,
  `regtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of admins
-- ----------------------------

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `name` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `qq` varchar(255) DEFAULT NULL,
  `state` int(10) unsigned zerofill DEFAULT NULL,
  `addtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of message
-- ----------------------------

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tid` int(10) unsigned zerofill NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `breif` varchar(255) DEFAULT NULL,
  `content` text,
  `sort` int(10) unsigned zerofill DEFAULT NULL,
  `state` int(10) unsigned zerofill DEFAULT NULL,
  `times` datetime DEFAULT NULL,
  `addtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('1', '0000000000', '新闻', null, '简介', '内容', '0000000000', '0000000000', null, null);

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tid` int(10) unsigned zerofill NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `breif` varchar(255) DEFAULT NULL,
  `content` text,
  `sort` int(10) unsigned zerofill DEFAULT NULL,
  `state` int(10) unsigned zerofill DEFAULT NULL,
  `times` datetime DEFAULT NULL,
  `addtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of product
-- ----------------------------

-- ----------------------------
-- Table structure for seo
-- ----------------------------
DROP TABLE IF EXISTS `seo`;
CREATE TABLE `seo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tid` int(10) unsigned zerofill NOT NULL COMMENT '1webset,2footer,3about,4contact',
  `title` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `keys` text,
  `state` int(10) unsigned zerofill DEFAULT '0000000001',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of seo
-- ----------------------------
INSERT INTO `seo` VALUES ('35', '0000000003', '4', null, null, '0000000001');
INSERT INTO `seo` VALUES ('45', '0000000001', '14', '14', '14', '0000000001');
INSERT INTO `seo` VALUES ('32', '0000000000', '修改', '修改描述', '修改关键词', '0000000001');
INSERT INTO `seo` VALUES ('36', '0000000004', '5', '5', '5', '0000000001');
INSERT INTO `seo` VALUES ('37', '0000000005', '6', '6', '6', '0000000001');
INSERT INTO `seo` VALUES ('38', '0000000000', '7', '7', '7', '0000000001');
INSERT INTO `seo` VALUES ('40', '0000000002', '9', '9', '9', '0000000001');
INSERT INTO `seo` VALUES ('41', '0000000003', '10', '10', '10', '0000000001');
INSERT INTO `seo` VALUES ('42', '0000000004', '11', '11', '11', '0000000001');
INSERT INTO `seo` VALUES ('43', '0000000005', '12', '12', '12', '0000000001');
INSERT INTO `seo` VALUES ('46', '0000000000', '首页', '首页', '首页', '0000000000');
INSERT INTO `seo` VALUES ('44', '0000000001', '13', '13', '13', '0000000001');
