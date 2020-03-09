<?php


  $contact = [
                'prenom' => 'prenom',
                'nom' => 'nom',
                'email' => 'email@example.fr',
                'adresse' => 'ceci est mon adresse',
  ];

  header("Content-type: application/json; charset=utf-8");
  echo json_encode($contact);
