<?php include('requests/getorderdetails.php'); ?>
<table>
  <thead>
    <th colspan="2">N° Commande <?= $orderNumber; ?></th>
  </thead>
  <tbody>
    <tr>
      <th class="secondary">Date de commande</th>
      <td> <?= $order['orderDate']; ?> </td>
    </tr>
    <tr>
      <th class="secondary">Date de livraison</th>
      <td> <?= $order['shippedDate']; ?> </td>
    </tr>
    <tr>
      <th class="secondary">Status</th>
      <td> <?= $order['status']; ?> </td>
    </tr>
    <tr>
      <th class="secondary">N° Client</th>
      <td> <?= $order['customerNumber']; ?> </td>
    </tr>
    <tr>
      <th class="secondary">Client</th>
      <td><?= $order['customerName']; ?></td>
    </tr>
    <tr>
      <th class="secondary">Contact</th>
      <td>
        <?= $order['contactLastName'];?>
        <?= $order['contactFirstName'];?>
      </td>
      </tr>
    <tr>
      <th class="secondary">adresse</th>
      <td>
        <?= $order['addressLine1']; ?>
        <?= $order['addressLine2']; ?>
        <?= $order['city'];?>
      </td>
    </tr>
    <tr>
      <th class="secondary">Produit</th>
      <td>
        <?= $order['productCode']; ?>
        <?= $order['productName']; ?>
      </td>
    </tr>
    <tr>
      <th class="secondary">Qté</th>
      <td><?= $order['quantityOrdered']; ?></td>
    </tr>
    <tr>
      <th class="secondary">prix unitaire</th>
      <td><?= $order['priceEach']; ?></td>
    </tr>
    <tr>
      <th class="secondary">Total HT</th>
      <td><?= $order['totalHT']; ?></td>
    </tr>
    <tr>
      <th class="secondary">TVA</th>
      <td><?= $montantTVA; ?></td>
    </tr>
    <tr>
      <th class="secondary">Total TTC</th>
      <td><?= $montantTTC; ?></td>
    </tr>
  </tbody>
</table>


<!--
Numéro de la commande
Date de commande
Date de livraison
Statut de la commande

Page Détails d'une commande

Le client souhaite que lorsqu'il clique sur une commande dans la liste des commande, il arrive sur une seconde page qui présente le détail de la commande cliquée :


Récapitulatif des produits commandés (nom du produit, quantité commandé, prix unitaire, sous-total)

Total de la commande HT, montant de la TVA, total de la commande TTC




-->
