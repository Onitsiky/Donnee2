--Afficher tous les places reservés
select matricule, jour_depart, place from reserver res
INNER JOIN voyage vo on vo.id_voyage = res.id_voyage
INNER JOIN utiliser ut on ut.id_voyage = vo.id_voyage
INNER JOIN vehicules ve on ut.id_vehicule = ve.id_vehicule
;   