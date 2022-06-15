 --Places disponibles dans un vehicule pour un voyage.
SELECT  count( places_dispo)  FROM vehicules
INNER JOIN utiliser ON utiliser.id_vehicule = vehicules.id_vehicule ;
