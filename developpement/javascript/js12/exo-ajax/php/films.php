<?php

  $films = [
    ['title' => 'Bon Dieu', 'body' => 'amen', 'image' => 'img/bon-dieu.jpg'],
    ['title' => 'Grand Budapest Hotel', 'body' => 'Groum service', 'image' => 'img/budapest-hotel.jpg'],
    ['title' => 'Captain America 2', 'body' => 'Bim bam Boum', 'image' => 'img/captain-america-2.jpg'],
    ['title' => 'Grace', 'body' => 'ce film est gracieux', 'image' => 'img/grace.jpg'],
    ['title' => 'Rio 2', 'body' => 'ils ont pas de bras', 'image' => 'img/rio-2.jpg'],
    ['title' => 'Spiderman', 'body' => 'Spider cochon il marche même au plafond', 'image' => 'img/spiderman.jpg'],
    ['title' => 'Xmen', 'body' => 'les gens horizontalement', 'image' => 'img/xmen.jpg'],
    ['title' => 'Les yeux jaunes des crocodiles', 'body' => 'attention ça mord', 'image' => 'img/yeux-jaunes.jpg'],
  ];

  header("Content-type: application/json; charset=utf-8");
  echo json_encode($films);
