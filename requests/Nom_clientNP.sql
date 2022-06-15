-- afficher les noms des clients qui n'ont pas encore paye leurs reservations
SELECT nom_client, prenom_client FROM client 
INNER JOIN reserver ON reserver.id_client = client.id_client 
WHERE montant_paye = '0';