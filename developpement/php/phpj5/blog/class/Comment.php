<?php

namespace Blog;


class Comment extends Model
{
  public $id;
  public $commentaire;
  public $user_id;
  public $post_id;
}
