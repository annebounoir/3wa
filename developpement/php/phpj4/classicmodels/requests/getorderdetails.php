<?php
include('database/connexion.php');
include('helper/helper_functions.php');

$orderNumber = clean($_GET['order']);

$query1 = $connection->prepare('SELECT products.productName, orders.orderNumber, orders.orderDate, orders.shippedDate, orders.status, orders.customerNumber, customers.customerName, customers.contactFirstName, customers.contactLastName, customers.addressLine1, customers.addressLine2, customers.city, orderdetails.productCode, orderdetails.quantityOrdered, orderdetails.priceEach, orderdetails.priceEach*orderdetails.quantityOrdered as totalHT
FROM orders JOIN customers ON orders.customerNumber = customers.customerNumber JOIN orderdetails ON orders.orderNumber = orderdetails.orderNumber JOIN products ON orderdetails.productCode = products.productCode
WHERE orders.orderNumber = :orderNumber');

$query1->bindParam(':orderNumber', $orderNumber);
$query1->execute();
$order = $query1->fetch(PDO::FETCH_ASSOC);

$tva = 20;

$montantHT = $order['totalHT'];
$montantTVA = round(($tva/100) * $order['totalHT'], 2);
$montantTTC = round($montantHT + $montantTVA, 2);


$connection = null;
