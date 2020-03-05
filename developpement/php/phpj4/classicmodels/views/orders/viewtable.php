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
    <?php if(array_key_exists('order', $_GET)) : ?>
      <?php
        include('views/orders/view_order_details.php');
      ?>
    <?php else : ?>
      <?php
        include('views/orders/view_orders_list.php');
      ?>
    <?php endif ?>
  </tbody>
</table>
