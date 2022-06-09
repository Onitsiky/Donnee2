-- Le chauffeur qui conduira lors d'un voyage prevus (date)
SELECT nom_complet, jour_depart, v.id_voyage FROM chauffeur c
INNER JOIN vehicules ve
ON c.id_vehicule = ve.id_vehicule
INNER JOIN utiliser u
ON u.id_vehicule = ve.id_vehicule
INNER JOIN voyage v
ON u.id_voyage = v.id_voyage;