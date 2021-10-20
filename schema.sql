DROP DATABASE IF EXISTS Movies;

CREATE DATABASE MOVIES;

USE MOVIES;

CREATE TABLE movies (
  id int auto_increment not null primary key,
  title varchar(100) not null
);