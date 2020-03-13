<?php

namespace Blog;

include('config/dbconfig.php');
include'database/Connexion.php';
include'class/QueryBuilder.php';
include'class/Model.php';
include'class/Post.php';
include'class/Comment.php';

$pdo = DB\Connexion::connect($config);
$queryBuilder = new QueryBuilder($pdo);
$post = new Post($queryBuilder);
$posts = $post->selectAll('posts');
$comment = new Comment($queryBuilder);
$comments = $comment->selectAll('comments');

$posts->execute();
$comments->execute();

$posts = $posts->fetchAll();
$comments = $comments->fetchAll();

var_dump($posts);
