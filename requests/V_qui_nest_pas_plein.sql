-- 	le vehicule qui n'est pas plein le jour depart
select matricule,  places_dispo from vehicules ve 
INNER JOIN utiliser ut on ut.id_vehicule = ve.id_vehicule
INNER JOIN voyage vo on vo.id_voyage = ut.id_voyage
where places_dispo >= '1' ;