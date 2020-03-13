<?php

namespace Blog;

class QueryBuilder
{
    public $pdo;

    public function __construct(\PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function selectAll($table)
    {
        return $this->pdo->prepare('SELECT * FROM ' . $table);
    }
}