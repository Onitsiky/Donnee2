--select the travel during the night 
SELECT id_voyage FROM voyage 
  WHERE heure_depart > '18:00' 
      AND heure_depart < '00:00';
