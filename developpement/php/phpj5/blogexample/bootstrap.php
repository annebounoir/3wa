<?php

namespace Blog;

include'./src/Connection.php';
include'./src/QueryBuilder.php';
include'./src/Model.php';
include'./src/Post.php';
include'./src/Comment.php';

$pdo = Connection::connect();
$queryBuilder = new QueryBuilder($pdo);
$post = new Post($queryBuilder);
$tasks = $post->selectAll('tasks');
$comment = new Comment($queryBuilder);
$comment->selectAll('comments');

$tasks->execute();

$tasks = $tasks->fetchAll();

var_dump($tasks);