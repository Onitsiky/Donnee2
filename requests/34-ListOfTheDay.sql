-- afficher la liste des clients qui partent aujourd'hui
SELECT nom_client FROM client
-- faire une jointure entre les tables client,voyage,reserver
                  INNER JOIN voyage
                  INNER JOIN reserver
                  ON reserver.id_voyage = voyage.id_voyage
                  ON voyage.id_client = client.id_client
-- quand le jour de départ dans la table voyage est aujourd'hui
WHERE voyage.jour_depart = current_date;
