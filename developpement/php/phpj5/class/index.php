<?php

class animal
{
    public $poil;

    function __construct($poil)
    {
      $this->poil = $poil;
    }

    function getPoil()
    {
      var_dump($this->poil);
    }
}


class chien extends animal
{

}

class chat extends animal
{

}


$chat1 = new chat('roux');
var_dump($chat1);
$chien1 = new chien('sale');
var_dump($chien1);

 ?>
