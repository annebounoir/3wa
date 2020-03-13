<?php

namespace Blog;


class Model
{

  public $queryBuilder;

  public function __construct(QueryBuilder $queryBuilder)
  {
      $this->queryBuilder = $queryBuilder;
  }

  public function selectAll($model)
  {
    return $this->queryBuilder->selectAll($model);
  }

}
