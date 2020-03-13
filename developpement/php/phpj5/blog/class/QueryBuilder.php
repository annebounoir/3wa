<?php

namespace Blog;


class QueryBuilder
{
  protected $pdo;

  public function __construct(\PDO $pdo)
  {
    $this->pdo = $pdo;
  }

  public function selectAll($table)
  {
    return $this->pdo->prepare('select * FROM ' . $table);
  }

}
