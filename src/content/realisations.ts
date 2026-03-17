export interface RealisationData {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  date: string;
  city?: string;
  image?: string;
  heroImage?: string;
  service: string;
  serviceSlug: string;
  zoneSlug?: string;
  context: string;
  challenge: string;
  solution: string;
  result: string;
  details: string[];
}

export const realisations: RealisationData[] = [
  {
    "slug": "remplacement-vmc-maison-marolles",
    "title": "Remplacement d'une VMC simple flux hygroréglable S&P - Maison à Marolles-en-Hurepoix",
    "seoTitle": "Remplacement VMC simple flux hygroréglable S&P à Marolles-en-Hurepoix - JM-ELEC 91",
    "seoDescription": "Remplacement d'une VMC simple flux en fin de vie par une VMC simple flux hygroréglable S&P (Soler & Palau) dans les combles d'une maison de plain-pied à Marolles-en-Hurepoix.",
    "description": "Remplacement d'une VMC qui tournait au ralenti par une VMC simple flux hygroréglable S&P, plus performante et adaptée à l'humidité du logement.",
    "date": "2026-03",
    "image": "/images/realisations/vmc-marolles-16-9.webp",
    "heroImage": "/images/realisations/vmc-marolles-21-9.webp",
    "city": "Marolles-en-Hurepoix",
    "service": "Dépannage électrique",
    "serviceSlug": "depannage-electrique",
    "zoneSlug": "marolles-en-hurepoix",
    "context": "Dans les combles d'une maison de plain-pied, la VMC existante tournait très lentement, avec une extraction d'air presque inexistante dans les pièces humides.",
    "challenge": "Rétablir une ventilation efficace sans reprise lourde du réseau, tout en améliorant le confort et la régulation de l'humidité au quotidien.",
    "solution": "Dépose de l'ancien groupe VMC puis installation d'une VMC simple flux hygroréglable S&P (Soler & Palau). Contrôle des raccordements, vérification des bouches et tests de fonctionnement après mise en service.",
    "result": "La ventilation est redevenue efficace. La VMC adapte désormais sa vitesse au taux d'humidité, ce qui améliore l'extraction d'air et le confort dans la maison.",
    "details": [
      "VMC simple flux hygroréglable S&P (Soler & Palau)",
      "Pose dans les combles d'une maison de plain-pied",
      "Remplacement complet du groupe de ventilation",
      "Contrôle des raccordements et des bouches d'extraction",
      "Tests de fonctionnement et mise en service"
    ]
  },
  {
    "slug": "remplacement-tableau-pavillon-bretigny",
    "title": "Remplacement de tableau — Pavillon à Brétigny-sur-Orge",
    "seoTitle": "Remplacement tableau électrique Brétigny-sur-Orge — JM-ELEC 91",
    "seoDescription": "Remplacement complet d'un tableau à fusibles par un tableau modulaire NFC 15-100 dans un pavillon à Brétigny-sur-Orge.",
    "description": "Remplacement d'un tableau à fusibles des années 80 par un tableau modulaire conforme NFC 15-100.",
    "date": "2024-09",
    "image": "/images/realisations/tableau-bretigny-16-9.webp",
    "heroImage": "/images/realisations/tableau-bretigny-21-9.webp",
    "service": "Remplacement de tableau électrique",
    "serviceSlug": "remplacement-tableau-electrique",
    "zoneSlug": "bretigny-sur-orge",
    "context": "Pavillon des années 1980, tableau d'origine avec fusibles en porcelaine. Aucun différentiel 30 mA. 6 circuits identifiés.",
    "challenge": "Tableau sous-dimensionné, circuits non repérés, absence de protection différentielle. Le propriétaire souhaitait une mise aux normes avant la vente du bien.",
    "solution": "Remplacement par un tableau Legrand 2 rangées, ajout des protections différentielles requises et repérage complet des circuits. Pas de parafoudre sur cette installation.",
    "result": "Installation conforme NFC 15-100, attestation remise, diagnostic électrique favorable pour la vente.",
    "details": [
      "Tableau Legrand — 2 rangées",
      "Pas de parafoudre",
      "Repérage de 6 circuits",
      "Durée : demi-journée"
    ]
  },
  {
    "slug": "depannage-urgence-corbeil",
    "title": "Dépannage d'urgence — Commerce à Corbeil-Essonnes",
    "seoTitle": "Dépannage électrique urgence Corbeil-Essonnes — JM-ELEC 91",
    "seoDescription": "Dépannage électrique en urgence pour un commerce à Corbeil-Essonnes. Diagnostic et réparation en 2 heures.",
    "description": "Panne totale dans un commerce — diagnostic et réparation en 2 heures.",
    "date": "2024-11",
    "image": "/images/realisations/depannage-corbeil-commerce-16-9.webp",
    "heroImage": "/images/realisations/depannage-corbeil-commerce-21-9.webp",
    "service": "Dépannage électrique",
    "serviceSlug": "depannage-electrique",
    "zoneSlug": "corbeil-essonnes",
    "context": "Boulangerie en centre-ville, panne électrique totale le matin. Le commerce ne pouvait pas ouvrir.",
    "challenge": "Identifier rapidement la cause de la panne pour permettre l'ouverture du commerce.",
    "solution": "Diagnostic : disjoncteur de branchement défaillant + court-circuit sur un circuit four. Remplacement du disjoncteur, isolation du circuit défaillant.",
    "result": "Commerce opérationnel en 2 heures. Réparation définitive réalisée le lendemain sans interruption d'activité.",
    "details": [
      "Intervention sous 1 heure",
      "Diagnostic en 30 minutes",
      "Réparation provisoire immédiate",
      "Réparation définitive J+1"
    ]
  },
  {
    "slug": "mise-en-securite-appartement-evry",
    "title": "Mise en sécurité — Appartement à Évry-Courcouronnes",
    "seoTitle": "Mise en sécurité électrique appartement Évry — JM-ELEC 91",
    "seoDescription": "Mise en sécurité d'un appartement des années 70 à Évry-Courcouronnes. Travaux ciblés, attestation.",
    "description": "Mise en sécurité d'un T3 des années 70 avec 8 anomalies identifiées au diagnostic.",
    "date": "2024-07",
    "image": "/images/realisations/mise-securite-evry-16-9.webp",
    "heroImage": "/images/realisations/mise-securite-evry-21-9.webp",
    "city": "Évry-Courcouronnes",
    "service": "Mise en sécurité et conformité",
    "serviceSlug": "mise-en-securite-conformite",
    "context": "Appartement T3 dans une résidence des années 70. Le diagnostic immobilier avait relevé 8 anomalies.",
    "challenge": "Corriger les anomalies avec un budget maîtrisé et sans travaux lourds (locataire en place).",
    "solution": "Ajout de différentiels, reprise de terre, protection des circuits, remplacement de prises défaillantes.",
    "result": "8 anomalies corrigées. Attestation remise. Nouveau diagnostic conforme.",
    "details": [
      "2 différentiels 30 mA ajoutés",
      "Reprise du circuit de terre",
      "6 prises remplacées",
      "Protection circuits ajoutée",
      "Durée : 1,5 jours"
    ]
  },
  {
    "slug": "borne-irve-maison-individuelle-massy",
    "title": "Installation borne IRVE — Maison à Massy",
    "seoTitle": "Installation borne de recharge Massy — JM-ELEC 91 certifié IRVE",
    "seoDescription": "Installation d'une borne de recharge 7 kW pour véhicule électrique dans une maison à Massy.",
    "description": "Installation d'une borne Autel 7 kW dans un garage de maison individuelle.",
    "date": "2024-10",
    "image": "/images/realisations/borne-massy-16-9.webp",
    "heroImage": "/images/realisations/borne-massy-21-9.webp",
    "service": "Installation borne IRVE",
    "serviceSlug": "borne-recharge-irve",
    "context": "Maison individuelle avec garage. Le client venait d'acquérir un véhicule électrique.",
    "challenge": "Installer une borne 7 kW avec un passage de câble de 12 m entre le tableau et le garage.",
    "solution": "Tirage de câble en 6 mm², ajout d'un disjoncteur dédié + différentiel Type A, pose d'une borne Autel.",
    "result": "Recharge en 6 h contre 24 h sur prise domestique. Client éligible au crédit d'impôt de 300 €.",
    "details": [
      "Borne Autel 7,4 kW",
      "Câble 6 mm² — 12 m",
      "Différentiel Type A dédié",
      "Aide crédit d'impôt",
      "Durée : demi-journée"
    ]
  },
  {
    "slug": "renovation-complete-villa-versailles",
    "title": "Rénovation électrique complète — Villa à Versailles",
    "seoTitle": "Rénovation électrique villa Versailles — JM-ELEC 91",
    "seoDescription": "Rénovation électrique complète d'une villa à Versailles. 32 circuits, finitions soignées.",
    "description": "Rénovation totale de l'installation électrique d'une villa de 200 m² en coordination avec l'architecte.",
    "date": "2024-06",
    "image": "/images/realisations/renovation-villa-versailles-16-9.webp",
    "heroImage": "/images/realisations/renovation-villa-versailles-21-9.webp",
    "city": "Versailles",
    "service": "Rénovation électrique",
    "serviceSlug": "renovation-electrique",
    "zoneSlug": "versailles",
    "context": "Villa de 200 m² en rénovation complète. L'architecte exigeait des finitions impeccables.",
    "challenge": "32 circuits à créer, tableau encastré dans un espace contraint, coordination avec 4 corps de métier.",
    "solution": "Tableau Hager sur mesure encastré, câblage structuré complet, coordination hebdomadaire avec l'architecte.",
    "result": "Installation livrée dans les délais, finitions validées par l'architecte, Consuel obtenu au premier passage.",
    "details": [
      "Tableau Hager encastré — 4 rangées",
      "6 différentiels",
      "Câblage structuré complet",
      "Consuel 1er passage",
      "Durée : 3 semaines"
    ]
  },
  {
    "slug": "domotique-maison-saint-cloud",
    "title": "Installation domotique — Maison à Saint-Cloud",
    "seoTitle": "Installation domotique Saint-Cloud — JM-ELEC 91",
    "seoDescription": "Installation domotique MyHOME de BTicino dans une maison à Saint-Cloud. Éclairage, volets, chauffage pilotés.",
    "description": "Installation d'un système domotique MyHOME de BTicino pour piloter éclairage, volets et chauffage.",
    "date": "2024-08",
    "image": "/images/realisations/domotique-saint-cloud-16-9.webp",
    "heroImage": "/images/realisations/domotique-saint-cloud-21-9.webp",
    "city": "Saint-Cloud",
    "service": "Domotique résidentielle",
    "serviceSlug": "domotique-residentielle",
    "zoneSlug": "saint-cloud",
    "context": "Maison de 180 m² avec des volets électriques, un éclairage en LED et un chauffage électrique à piloter.",
    "challenge": "Intégrer tous les équipements existants dans un système domotique unique et ergonomique.",
    "solution": "Installation de modules MyHOME de BTicino au tableau, écrans tactiles, programmation de scénarios (jour, nuit, absence).",
    "result": "Pilotage centralisé depuis tablette et smartphone. Économie estimée de 15 % sur le chauffage.",
    "details": [
      "Système MyHOME de BTicino",
      "2 écrans tactiles",
      "12 scénarios programmés",
      "Application smartphone",
      "Durée : 1 semaine"
    ]
  },
  {
    "slug": "alarme-villa-vaucresson",
    "title": "Alarme intrusion — Villa à Vaucresson",
    "seoTitle": "Installation alarme villa Vaucresson — JM-ELEC 91",
    "seoDescription": "Installation d'un système d'alarme intrusion dans une villa à Vaucresson.",
    "description": "Installation d'un système d'alarme NF A2P avec détecteurs et alerte smartphone.",
    "date": "2024-12",
    "city": "Vaucresson",
    "service": "Installation alarme",
    "serviceSlug": "alarme",
    "zoneSlug": "vaucresson",
    "context": "Villa de 250 m² avec jardin, le propriétaire souhaitait sécuriser sa propriété après un cambriolage dans le voisinage.",
    "challenge": "Couvrir tous les points d'accès (6 portes, 12 fenêtres) avec une installation discrète.",
    "solution": "Centrale d'alarme NF A2P, 8 détecteurs de mouvement, 6 détecteurs d'ouverture, 2 sirènes, alerte smartphone.",
    "result": "Propriété entièrement sécurisée. Alerte temps réel sur smartphone du propriétaire.",
    "details": [
      "Centrale NF A2P",
      "8 détecteurs de mouvement",
      "6 détecteurs d'ouverture",
      "Alerte smartphone",
      "Durée : 2 jours"
    ]
  },
  {
    "slug": "eclairage-jardin-le-vesinet",
    "title": "Éclairage extérieur — Jardin au Vésinet",
    "seoTitle": "Éclairage extérieur jardin Le Vésinet — JM-ELEC 91",
    "seoDescription": "Installation d'éclairage extérieur LED dans un jardin au Vésinet.",
    "description": "Conception et installation d'un éclairage extérieur LED pour un jardin paysager de 500 m².",
    "date": "2024-05",
    "city": "Le Vésinet",
    "service": "Éclairage intérieur et extérieur",
    "serviceSlug": "eclairage-interieur-exterieur",
    "zoneSlug": "le-vesinet",
    "context": "Jardin paysager de 500 m² avec allées, terrasse et massifs à mettre en valeur.",
    "challenge": "Créer une ambiance lumineuse élégante tout en assurant la sécurité des cheminements.",
    "solution": "Installation de spots encastrés dans les allées, projecteurs pour les arbres, appliques sur la terrasse. Programmation horaire.",
    "result": "Jardin sublimé le soir, cheminements sécurisés, consommation LED minimale.",
    "details": [
      "14 spots encastrés IP67",
      "4 projecteurs arbres",
      "6 appliques terrasse",
      "Programmation horaire",
      "Durée : 3 jours"
    ]
  },
  {
    "slug": "pac-raccordement-gif-sur-yvette",
    "title": "Raccordement PAC — Maison à Gif-sur-Yvette",
    "seoTitle": "Raccordement électrique PAC Gif-sur-Yvette — JM-ELEC 91",
    "seoDescription": "Raccordement électrique d'une pompe à chaleur dans une maison à Gif-sur-Yvette.",
    "description": "Raccordement électrique d'une PAC air-eau avec ligne dédiée et adaptation du tableau.",
    "date": "2025-01",
    "city": "Gif-sur-Yvette",
    "service": "PAC — Alimentation électrique",
    "serviceSlug": "pac-alimentation-electrique",
    "zoneSlug": "gif-sur-yvette",
    "context": "Maison individuelle passant du chauffage fioul à une PAC air-eau. Nécessité de raccorder électriquement la PAC.",
    "challenge": "Tableau existant presque complet, passage de câble de 15 m vers l'unité extérieure.",
    "solution": "Ajout d'un coffret secondaire dédié PAC, tirage de ligne en 6 mm², coordination avec le chauffagiste.",
    "result": "PAC raccordée et opérationnelle. Puissance du compteur adaptée avec ENEDIS.",
    "details": [
      "Coffret secondaire dédié",
      "Ligne 6 mm² — 15 m",
      "Coordination chauffagiste",
      "Adaptation compteur",
      "Durée : 1 journée"
    ]
  },
  {
    "slug": "videosurveillance-commerce-arpajon",
    "title": "Vidéosurveillance — Commerce à Arpajon",
    "seoTitle": "Installation vidéosurveillance commerce Arpajon — JM-ELEC 91",
    "seoDescription": "Installation de vidéosurveillance pour un commerce à Arpajon. 4 caméras HD, enregistrement, accès distant.",
    "description": "Installation de 4 caméras HD avec enregistreur et accès à distance pour un commerce.",
    "date": "2024-04",
    "city": "Arpajon",
    "service": "Vidéosurveillance",
    "serviceSlug": "video-surveillance",
    "zoneSlug": "arpajon",
    "context": "Commerce en centre-ville d'Arpajon souhaitant surveiller ses locaux jour et nuit.",
    "challenge": "4 caméras à installer avec câblage réseau discret et conformité CNIL.",
    "solution": "Installation de 4 caméras IP HD, enregistreur NVR, câblage réseau structuré, accès smartphone pour le gérant.",
    "result": "Surveillance 24/7 avec accès à distance. Conformité CNIL assurée (affichage, registre).",
    "details": [
      "4 caméras IP HD",
      "Enregistreur NVR 2 To",
      "Câblage réseau structuré",
      "Accès smartphone",
      "Durée : 2 jours"
    ]
  },
  {
    "slug": "interphonie-residence-sainte-genevieve",
    "title": "Vidéophone — Maison à Sainte-Geneviève-des-Bois",
    "seoTitle": "Installation vidéophone maison Sainte-Geneviève-des-Bois — JM-ELEC 91",
    "seoDescription": "Installation d'un vidéophone dans une maison à Sainte-Geneviève-des-Bois. Platine de rue vidéo, moniteur intérieur, ouverture à distance.",
    "description": "Installation d'un vidéophone pour une maison individuelle avec identification vidéo et ouverture à distance.",
    "date": "2025-02",
    "city": "Sainte-Geneviève-des-Bois",
    "service": "Interphonie et contrôle d'accès",
    "serviceSlug": "interphonie-controle-acces",
    "zoneSlug": "sainte-genevieve-des-bois",
    "context": "Maison individuelle avec interphone audio vieillissant. Le propriétaire souhaitait voir les visiteurs et ouvrir le portillon à distance.",
    "challenge": "Adapter le nouveau vidéophone sur l'installation existante avec un passage de câbles discret dans la maison.",
    "solution": "Installation d'une platine de rue vidéo avec moniteur intérieur, reprise du câblage existant et ajout d'une liaison 2 fils lorsque nécessaire.",
    "result": "Vidéophone fonctionnel avec image claire et ouverture à distance. Utilisation simple au quotidien.",
    "details": [
      "Platine de rue vidéo",
      "Moniteur vidéophone intérieur",
      "Câblage 2 fils",
      "Ouverture à distance",
      "Durée : 1 jour"
    ]
  },
  {
    "slug": "conformite-pavillon-saint-michel",
    "title": "Dépannage électrique — Différentiel brûlé à Saint-Michel-sur-Orge",
    "seoTitle": "Remplacement différentiel brûlé Saint-Michel-sur-Orge — JM-ELEC 91",
    "seoDescription": "Dépannage électrique à Saint-Michel-sur-Orge : remplacement d'un différentiel brûlé suite à un mauvais serrage au tableau.",
    "description": "Remplacement d'un différentiel brûlé après échauffement provoqué par un mauvais serrage.",
    "date": "2024-08",
    "image": "/images/realisations/mise-securite-saint-michel-16-9.webp",
    "heroImage": "/images/realisations/mise-securite-saint-michel-21-9.webp",
    "city": "Saint-Michel-sur-Orge",
    "service": "Dépannage électrique",
    "serviceSlug": "depannage-electrique",
    "zoneSlug": "saint-michel-sur-orge",
    "context": "Pavillon à Saint-Michel-sur-Orge avec déclenchements répétés et odeur de chauffe au tableau électrique.",
    "challenge": "Identifier la cause exacte de l'échauffement et sécuriser rapidement l'installation sans remplacer tout le tableau.",
    "solution": "Diagnostic au tableau : différentiel brûlé à cause d'un mauvais serrage. Remplacement du différentiel, reprise des serrages et contrôle thermique/fonctionnel des protections.",
    "result": "Installation remise en sécurité, plus d'échauffement ni de déclenchement intempestif après intervention.",
    "details": [
      "Remplacement d'un différentiel 30 mA brûlé",
      "Reprise des serrages du tableau",
      "Contrôle des connexions et protections",
      "Remise en service sécurisée",
      "Durée : demi-journée"
    ]
  },
  {
    "slug": "eclairage-interieur-led-verriere",
    "title": "Éclairage intérieur LED — Maison à Verrières-le-Buisson",
    "seoTitle": "Éclairage intérieur LED Verrières-le-Buisson — JM-ELEC 91",
    "seoDescription": "Installation d'éclairage intérieur LED avec variateurs dans une maison à Verrières-le-Buisson.",
    "description": "Remplacement complet de l'éclairage intérieur par des solutions LED avec variateurs et scènes programmables.",
    "date": "2024-09",
    "image": "/images/realisations/eclairage-verriere-le-buisson-16-9.webp",
    "heroImage": "/images/realisations/eclairage-verriere-le-buisson-21-9.webp",
    "city": "Verrières-le-Buisson",
    "service": "Éclairage intérieur et extérieur",
    "serviceSlug": "eclairage-interieur-exterieur",
    "zoneSlug": "verrieres-le-buisson",
    "context": "Maison de 140 m² avec un éclairage vieillissant (halogènes, fluocompacts). La propriétaire souhaitait un éclairage moderne et économique.",
    "challenge": "Remplacer 28 points lumineux en conservant l'esthétique existante et en ajoutant des variateurs dans les pièces de vie.",
    "solution": "Installation de spots LED encastrés, appliques murales LED, variateurs Legrand dans le séjour et les chambres. 3 scènes lumineuses programmées.",
    "result": "Éclairage moderne et chaleureux. Consommation divisée par 4. Ambiances personnalisables dans chaque pièce.",
    "details": [
      "28 points lumineux LED",
      "6 variateurs Legrand",
      "3 scènes programmées",
      "Consommation divisée par 4",
      "Durée : 2 jours"
    ]
  },
  {
    "slug": "renovation-electrique-pavillon-longpont",
    "title": "Rénovation électrique — Pavillon à Longpont-sur-Orge",
    "seoTitle": "Rénovation électrique pavillon Longpont-sur-Orge — JM-ELEC 91",
    "seoDescription": "Rénovation électrique complète d'un pavillon à Longpont-sur-Orge. Nouveau tableau, câblage, 18 circuits.",
    "description": "Rénovation électrique complète d'un pavillon de 110 m² avec création de 18 circuits.",
    "date": "2025-01",
    "image": "/images/realisations/renovation-longpont-16-9.webp",
    "heroImage": "/images/realisations/renovation-longpont-21-9.webp",
    "city": "Longpont-sur-Orge",
    "service": "Rénovation électrique",
    "serviceSlug": "renovation-electrique",
    "zoneSlug": "longpont-sur-orge",
    "context": "Pavillon de 110 m² des années 70 en cours de rénovation complète. L'installation électrique d'origine était totalement obsolète : fils en aluminium, tableau à porcelaine, pas de terre.",
    "challenge": "Reprendre toute l'installation de zéro dans un pavillon en cours de rénovation. Coordination avec le plaquiste et le plombier.",
    "solution": "Nouveau tableau Schneider 3 rangées, câblage complet en cuivre, 18 circuits créés, prises et interrupteurs Legrand Dooxie, éclairage LED.",
    "result": "Installation neuve conforme NFC 15-100. Consuel obtenu au premier passage. Propriétaire très satisfait.",
    "details": [
      "Tableau Schneider 3 rangées",
      "18 circuits créés",
      "Câblage cuivre complet",
      "Appareillage Legrand Dooxie",
      "Consuel 1er passage",
      "Durée : 2 semaines"
    ]
  },
  {
    "slug": "alarme-maison-fleury-merogis",
    "title": "Alarme intrusion — Maison à Fleury-Mérogis",
    "seoTitle": "Installation alarme maison Fleury-Mérogis — JM-ELEC 91",
    "seoDescription": "Installation d'un système d'alarme intrusion dans une maison à Fleury-Mérogis. Détecteurs, sirène, alerte smartphone.",
    "description": "Installation d'un système d'alarme pour une maison individuelle avec détecteurs et alerte smartphone.",
    "date": "2024-11",
    "image": "/images/realisations/alarme-fleury-16-9.webp",
    "heroImage": "/images/realisations/alarme-fleury-21-9.webp",
    "city": "Fleury-Mérogis",
    "service": "Installation alarme",
    "serviceSlug": "alarme",
    "zoneSlug": "fleury-merogis",
    "context": "Maison individuelle de 100 m² avec jardin. La propriétaire, souvent en déplacement professionnel, souhaitait un système d'alarme avec notification smartphone.",
    "challenge": "Couvrir 4 portes et 8 fenêtres avec un système filaire discret dans une maison habitée.",
    "solution": "Centrale d'alarme avec 4 détecteurs de mouvement, 4 détecteurs d'ouverture sur les accès principaux, sirène intérieure et extérieure, module GSM pour alerte smartphone.",
    "result": "Maison sécurisée avec alerte en temps réel. La propriétaire peut vérifier l'état du système à distance.",
    "details": [
      "Centrale d'alarme",
      "4 détecteurs de mouvement",
      "4 détecteurs d'ouverture",
      "Sirène int. + ext.",
      "Alerte smartphone GSM",
      "Durée : 1,5 jours"
    ]
  },
  {
    "slug": "borne-irve-22kw-saint-germain",
    "title": "Borne IRVE 22 kW — Maison à Saint-Germain-lès-Arpajon",
    "seoTitle": "Installation borne IRVE 22 kW Saint-Germain-lès-Arpajon — JM-ELEC 91",
    "seoDescription": "Installation d'une borne de recharge 22 kW triphasée à Saint-Germain-lès-Arpajon.",
    "description": "Installation d'une borne de recharge 22 kW triphasée avec adaptation du compteur et du tableau.",
    "date": "2025-02",
    "city": "Saint-Germain-lès-Arpajon",
    "service": "Installation borne IRVE",
    "serviceSlug": "borne-recharge-irve",
    "zoneSlug": "saint-germain-les-arpajon",
    "context": "Maison individuelle avec garage. Le propriétaire possédait un véhicule électrique acceptant la charge en 22 kW triphasé, mais le compteur était en monophasé 6 kVA.",
    "challenge": "Passage du compteur en triphasé 12 kVA, adaptation du tableau existant, et installation de la borne 22 kW avec 18 m de câble.",
    "solution": "Demande ENEDIS de passage en triphasé, adaptation du tableau avec disjoncteur tétra et différentiel Type A dédié, tirage de câble 5G6 mm² sur 18 m, pose borne Schneider EVlink.",
    "result": "Recharge complète en 2 h au lieu de 8 h. Compteur adapté, installation conforme. Éligible crédit d'impôt 300 €.",
    "details": [
      "Borne Schneider EVlink 22 kW",
      "Passage triphasé ENEDIS",
      "Câble 5G6 mm² — 18 m",
      "Différentiel Type A dédié",
      "Crédit d'impôt 300 €",
      "Durée : 1 journée"
    ]
  },
  {
    "slug": "videosurveillance-maison-bondoufle",
    "title": "Vidéosurveillance — Maison à Bondoufle",
    "seoTitle": "Installation vidéosurveillance maison Bondoufle — JM-ELEC 91",
    "seoDescription": "Installation de vidéosurveillance HD pour une maison individuelle à Bondoufle. 4 caméras, enregistreur, accès smartphone.",
    "description": "Installation de 4 caméras HD extérieures avec enregistreur et accès smartphone pour une maison individuelle.",
    "date": "2024-06",
    "image": "/images/realisations/videosurveillance-bondoufle-16-9.webp",
    "heroImage": "/images/realisations/videosurveillance-bondoufle-21-9.webp",
    "city": "Bondoufle",
    "service": "Vidéosurveillance",
    "serviceSlug": "video-surveillance",
    "zoneSlug": "bondoufle",
    "context": "Maison individuelle avec un terrain de 600 m². Le propriétaire avait subi une tentative d'effraction et souhaitait installer un système de vidéosurveillance.",
    "challenge": "Couvrir les 4 façades de la maison avec des caméras extérieures résistantes aux intempéries, tout en passant les câbles de manière invisible.",
    "solution": "4 caméras IP HD (IP67) positionnées aux 4 coins de la maison, enregistreur NVR 1 To, câblage réseau encastré, configuration accès smartphone.",
    "result": "Surveillance 360° de la propriété avec accès en temps réel sur smartphone. Vision nocturne infrarouge.",
    "details": [
      "4 caméras IP HD IP67",
      "Enregistreur NVR 1 To",
      "Câblage réseau encastré",
      "Vision nocturne IR",
      "Accès smartphone",
      "Durée : 1,5 jours"
    ]
  },
  {
    "slug": "pac-raccordement-leudeville",
    "title": "Raccordement PAC — Maison à Leudeville",
    "seoTitle": "Raccordement électrique PAC Leudeville — JM-ELEC 91",
    "seoDescription": "Raccordement électrique d'une pompe à chaleur air-eau à Leudeville. Ligne dédiée, tableau, compteur.",
    "description": "Raccordement électrique d'une PAC air-eau avec augmentation de puissance du compteur.",
    "date": "2024-12",
    "image": "/images/realisations/pac-leudeville-16-9.webp",
    "heroImage": "/images/realisations/pac-leudeville-21-9.webp",
    "city": "Leudeville",
    "service": "PAC — Alimentation électrique",
    "serviceSlug": "pac-alimentation-electrique",
    "zoneSlug": "leudeville",
    "context": "Maison individuelle de 130 m² passant d'un chauffage fioul à une PAC air-eau Daikin. Le chauffagiste avait besoin d'un électricien pour le raccordement.",
    "challenge": "Le tableau existant était saturé (plus de place). Le compteur était en 6 kVA, insuffisant pour la PAC. Distance tableau-PAC : 20 m.",
    "solution": "Installation d'un coffret secondaire dédié PAC avec disjoncteur 20A et différentiel Type A. Tirage de ligne en 6 mm² sur 20 m. Demande ENEDIS de passage en 9 kVA.",
    "result": "PAC raccordée et fonctionnelle. Chauffage fioul supprimé. Économie annuelle estimée à 40 % sur le chauffage.",
    "details": [
      "Coffret secondaire dédié PAC",
      "Ligne 6 mm² — 20 m",
      "Passage 6 → 9 kVA ENEDIS",
      "Coordination chauffagiste Daikin",
      "Durée : 1 journée"
    ]
  }
];

export function getRealisation(slug: string): RealisationData | undefined {
  return realisations.find((realisation) => realisation.slug === slug);
}
