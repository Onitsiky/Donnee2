-- medium/hard
-- affiche tous les voyages durant une semaine
SELECT * from voyage
WHERE jour_depart BETWEEN date(now()) AND (date(now())+1);