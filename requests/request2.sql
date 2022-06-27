--voyage pendant le jours, (entre 00h et 18h)

SELECT id_voyage FROM voyage 
  WHERE heure_depart 
    BETWEEN '00:00' AND '18:00';
