 -- les clients qui ont choisi l'offre lite pour le voyage tana-fianarantsoa

 select nom_client, prenom_client from reserver inner join client on  reserver.id_client = client.id_client 
 where id_voyage = 1;