-- *Afficher les departs de jour
SELECT jour_depart, heure_depart, nom_ville FROM voyage
INNER JOIN ville ON voyage.id_ville_depart = ville.id_ville
WHERE heure_depart < '18:00';





