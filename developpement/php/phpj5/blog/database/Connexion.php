<?php

namespace Blog\DB;


class Connexion
{

  public static function connect($config)
  {
    try {
        $pdo =  new \PDO(
            'mysql:host='. $config['host'] .';dbname=' . $config['dbname'],
            $config['dbuser'],
            $config['dbpassword'],
            [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION]
        );

        $pdo->exec('set NAMES utf8');
        return $pdo;
    } catch (\PDOException $e) {
        die($e->getMessage());
    }

  }
}
