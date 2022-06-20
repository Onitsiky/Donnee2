--selectionner les client dont leur reservation ne sont pas encore payées

SELECT nom_client , prenom_client , type , tarif , montant_paye 
 	FROM client INNER JOIN offre INNER JOIN reserver 
 	ON offre.id_offre = reserver.id_offre 
 	ON client.id_client = reserver.id_client 
 	WHERE montant_paye < tarif ;
