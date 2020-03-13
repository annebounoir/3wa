<?php

namespace Blog;

use Blog\Model;

class Post extends Model
{
    public $title;
    public $body;
    public $description;
    public $created_at;
    public $author_id;
}