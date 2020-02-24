<?php

  $result = $_SERVER;
  var_dump($_SERVER);

  function clean($data) {
    $data = trim($data);
    $data = empty($data);
    $data = isset($data);
    return $data;
  }

  if ($serverName = clean($result['SERVER_NAME'])) {
    echo 'ok';
  }
  if ($serverAddr = clean($result['SERVER_ADDR'])) {
    echo 'ok';
  }
  if ($host = clean($result['HTTP_HOST'])) {
    echo 'ok';
  }

$date = date("d D Y h:i A");


$string = $date . " " . $serverName . " " . $serverAddr . " " . $host . "\n";
file_put_contents ('INFO', $string, FILE_APPEND);


 ?>
