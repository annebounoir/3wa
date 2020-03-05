<?php

function clean($data) {
  $data = trim($data);
  $data = htmlentities($data);
  $data = htmlspecialchars($data);
  return $data;
}
