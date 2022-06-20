SELECT nom_client,montant_paye from client INNER JOIN reservation ON client.id_client = reservation.id_reservation where 
montant_paye = "0;"