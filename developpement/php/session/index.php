<?php
// mot de passe chiffré
$passwordChiffrer = password_hash('monmotdepasse', PASSWORD_DEFAULT);
var_dump($passwordChiffrer);
$test = password_verify('monmotdepasse', $passwordChiffrer);
var_dump($test);

// SESSIONS
session_start();
$_SESSION['id'] = hash('sha256', session_id());
$_SESSION['user'] = 'userName';
//var_dump($_SESSION);

// infos :
// sha256 = une methode de chiffrement

class Product
{
  public $name;
  public $description;
  public $price;

  public function __construct($name, $description, $price)
  {
    $this->name = $name;
    $this->description = $description;
    $this->price = $price;
  }

}

class Cart
{
    public $owner;
    public $products;
    public $total;

    public function __construct($user)
    {
      $this->owner = $user;
      $_SESSION['cart'] = $this;
    }

    public function add($product)
    {
      $this->products[$product->name] = $product;
    }

    protected function total()
    {
      $this->total = 0;

      foreach ($this->products as $product) {
        $this->total += $product->price;
      }
      return $_SESSION['cart']->total = $this->total;
    }

    function getTotal()
    {
      return money_format('%i€', $this->total() /100);
    }


}

$cart = new Cart($_SESSION['user']);
$product = new Product('shoes', 'Super Shoes', 5500);
$product2 = new Product('bag', 'Super bag', 500);
$cart->add($product);
$cart->add($product2);


var_dump($cart->getTotal());



// effacer la session - detruire la session
unset($cart);
session_unset();
session_destroy();

var_dump($_SESSION['cart']);
