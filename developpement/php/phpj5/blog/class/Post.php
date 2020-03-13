<?php

namespace Blog;



class Post extends Model
{
  //appeler queryBuilder pour la table posts
  public $title;
  public $body;
  public $description;
  public $created_at;
  public $author_id;

}
