-- selectioner les clients dont la reservation n'est pas encore payée en totalitée

SELECT COUNT(nom_client) 
	FROM client 
	INNER JOIN reserver
	INNER JOIN offre 
	ON offre.id_offre = reserver.id_offre 
	ON reserver.id_client = client.id_client 
	WHERE montant_paye < tarif ;
