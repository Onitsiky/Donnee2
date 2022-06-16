-- afficher la colonne type sur la première ligne dans la methode getMax
SELECT type FROM
    (
-- afficher le type et ses nombre total ordoonée en décroissante
-- et numéroter les lignes
	    SELECT 
        (type , COUNT(type) count , ROW_NUMBER() OVER (ORDER BY type) row)
	    FROM reserver 
	    INNER JOIN offre
	    ON offre.id_offre = reserver.id_offre
	    GROUP BY offre.type ORDER BY count desc
    ) getMax
WHERE getMax.row = 1;

