'use strict';   // Mode strict du JavaScript

let html = `
<div class="game-state">
    <figure class="game-state_player">
        <img src="images/knight.png" alt="Chevalier">
        <figcaption>${player.pointsDeVie} PV</figcaption>
    </figure>
    <figure class="game-state_player">
        <img src="images/dragon.png" alt="Dragon">
        <figcaption>${dragon.pointsDeVie} PV</figcaption>
    </figure>
</div>
`;
document.write(html);
