-- Combien de clients n'ont pas encore effectue leur payement en totalite? Lesquels?
SELECT count(nom_client)  FROM client 
INNER JOIN reserver ON reserver.id_client = client.id_client 
WHERE montant_paye = '0';
