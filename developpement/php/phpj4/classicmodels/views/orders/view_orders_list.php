<?php include('requests/getorders.php'); ?>

<table>
  <thead>
    <th>Numéro de commande</th>
    <th>Date de commande</th>
    <th>Date de livraison</th>
    <th>Statut de la commande</th>
    <th>Numéro client</th>
    <th>Détails</th>
  </thead>
  <tbody>
    <?php foreach ($orders as $order): ?>
      <tr>
        <td><?= $order['orderNumber']; ?></td>
        <td><?= $order['orderDate']; ?></td>
        <td><?= $order['shippedDate']; ?></td>
        <td><?= $order['status']; ?></td>
        <td><?= $order['customerNumber']; ?></td>
        <td><a class="btn" href="?order= <?= $order['orderNumber'] ?> ">voir détails</a></td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>
