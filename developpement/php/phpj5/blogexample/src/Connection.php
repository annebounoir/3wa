<?php

namespace Blog;


class Connection
{
    public static function connect()
    {
        try {
            $pdo = new \PDO("mysql:host=localhost;dbname=todolist",'root','troiswa');

            $pdo->exec('set NAMES utf8');

            return $pdo;

        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }
}
