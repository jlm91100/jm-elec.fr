export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  heroSubtitle: string;
  icon: string;
  image?: string;
  problems: string[];
  solution: string;
  editorial: string;
  tips: string[];
  whyUs: string;
  process: { step: string; detail: string }[];
  proofs: string[];
  faq: { question: string; answer: string }[];
  relatedZones: string[];
}

const serviceImages: Record<string, string> = {
  "remplacement-tableau-electrique": "/images/services/remplacement-tableau-electrique-16-9.webp",
  "depannage-electrique": "/images/services/depannage-electrique-16-9.webp",
  "mise-en-securite-conformite": "/images/services/mise-en-securite-conformite-16-9.webp",
  "renovation-electrique": "/images/services/renovation-electrique-16-9.webp",
  "borne-recharge-irve": "/images/services/borne-recharge-irve-16-9.webp",
  "eclairage-interieur-exterieur": "/images/services/eclairage-interieur-exterieur-16-9.jpg",
  "interphonie-controle-acces": "/images/services/interphonie-controle-acces-16-9.webp",
  "domotique-residentielle": "/images/services/domotique-residentielle-16-9.webp",
  "alarme": "/images/services/alarme-16-9.webp",
  "video-surveillance": "/images/services/video-surveillance-16-9.webp",
  "pac-alimentation-electrique": "/images/services/pac-alimentation-electrique-16-9.webp"
};

const serviceDetailImages: Record<string, string> = {
  "remplacement-tableau-electrique": "/images/services/remplacement-tableau-electrique-4-3.webp",
  "depannage-electrique": "/images/services/depannage-electrique-4-3.webp",
  "mise-en-securite-conformite": "/images/services/mise-en-securite-conformite-4-3.webp",
  "renovation-electrique": "/images/services/renovation-electrique-4-3.webp",
  "borne-recharge-irve": "/images/services/borne-recharge-irve-4-3.webp",
  "eclairage-interieur-exterieur": "/images/services/eclairage-interieur-exterieur-4-3.jpg",
  "interphonie-controle-acces": "/images/services/interphonie-controle-acces-4-3.webp",
  "domotique-residentielle": "/images/services/domotique-residentielle-4-3.webp",
  "alarme": "/images/services/alarme-4-3.webp",
  "video-surveillance": "/images/services/video-surveillance-4-3.webp",
  "pac-alimentation-electrique": "/images/services/pac-alimentation-electrique-4-3.webp"
};

export const services: ServiceData[] = [
  {
    "slug": "remplacement-tableau-electrique",
    "title": "Remplacement de tableau électrique",
    "shortTitle": "Tableau électrique",
    "seoTitle": "Remplacement de tableau électrique — JM-ELEC 91",
    "seoDescription": "Remplacement et mise aux normes de votre tableau électrique en Essonne et Île-de-France. Intervention conforme NFC 15-100, assurance décennale, matériel Schneider/Legrand. Devis gratuit sous 24 h.",
    "description": "Un tableau vétuste est un risque. Nous le remplaçons par une installation conforme NFC 15-100, propre, étiquetée et garantie.",
    "heroSubtitle": "Sécurité & conformité NFC 15-100",
    "icon": "⚡",
    "problems": [
      "Disjoncteurs anciens (porcelaine, bakélite) qui ne protègent plus.",
      "Absence de différentiel 30 mA — risque d'électrocution.",
      "Tableau sous-dimensionné pour vos usages actuels (borne de recharge, pompe à chaleur, climatisation).",
      "Assurance pouvant refuser d'indemniser en cas de sinistre sur installation non conforme.",
      "Fusibles qui sautent régulièrement sans raison apparente.",
      "Fils volants, dominos apparents, branchements sauvages accumulés au fil des années."
    ],
    "solution": "Nous effectuons un diagnostic complet de votre installation, puis remplaçons le tableau par un équipement modulaire aux normes, avec différentiels adaptés, protection parafoudre si nécessaire, et étiquetage clair de chaque circuit. Chaque remplacement respecte la norme NFC 15-100 en vigueur et intègre les protections obligatoires : différentiels de type A pour les circuits spécialisés (plaque de cuisson, lave-linge), différentiels de type AC pour les circuits classiques, et parafoudre dans les zones à risque.",
    "editorial": "Le tableau électrique est le cœur de votre installation. C'est lui qui distribue le courant dans chaque pièce, protège vos circuits contre les surcharges et les courts-circuits, et assure la sécurité de votre famille grâce aux différentiels 30 mA. Un tableau vétuste — avec des fusibles en porcelaine, des disjoncteurs divisionnaires d'ancienne génération ou l'absence de différentiel — représente un danger réel : risque d'incendie, d'électrocution, et impossibilité de faire jouer votre assurance en cas de sinistre.\n\nEn Essonne et en Île-de-France, de nombreux pavillons construits dans les années 70 et 80 possèdent encore leur tableau d'origine. Ces installations, conçues pour des usages bien différents des nôtres (pas de plaques à induction, pas de borne de recharge, pas de climatisation), sont structurellement sous-dimensionnées. Un simple ajout de circuit ne suffit pas : il faut repenser l'ensemble de la distribution.\n\nChez JM-ELEC 91, nous procédons à un remplacement méthodique : relevé de chaque circuit existant, dimensionnement du nouveau tableau en fonction de vos besoins actuels et futurs, choix du matériel (Schneider, Legrand ou Hager selon la configuration), et remise en service avec tests circuit par circuit. Le résultat : un tableau propre, étiqueté, conforme, et prêt à accueillir de nouveaux équipements.",
    "tips": [
      "Vérifiez la présence de différentiels 30 mA sur votre tableau — s'il n'y en a pas, le remplacement est fortement recommandé.",
      "Si votre tableau a plus de 25 ans, un diagnostic préventif peut révéler des anomalies invisibles au quotidien.",
      "Lors d'un remplacement de tableau, c'est le moment idéal pour ajouter un parafoudre et protéger vos appareils électroniques.",
      "Un tableau bien dimensionné doit prévoir 20 % de réserve pour de futurs circuits (borne IRVE, PAC, climatisation).",
      "Faites vérifier votre tableau avant une vente immobilière : un diagnostic favorable accélère la transaction."
    ],
    "whyUs": "Nous avons remplacé plus de 300 tableaux électriques en 10 ans d'activité. Chaque intervention suit le même protocole rigoureux : diagnostic, devis détaillé ligne par ligne, intervention propre (bâche de protection, aspiration en fin de chantier), tests de conformité, et remise d'une attestation. Nous utilisons exclusivement du matériel de marque (Schneider, Legrand, Hager) et nos travaux sont couverts par une assurance décennale.",
    "process": [
      {
        "step": "Diagnostic",
        "detail": "Audit visuel et électrique de l'installation existante. Relevé des circuits, mesure d'isolement, identification des anomalies. Nous vérifions la présence de terre, l'état des conducteurs, et la conformité du branchement ENEDIS."
      },
      {
        "step": "Devis détaillé",
        "detail": "Chiffrage transparent, ligne par ligne, avec références du matériel prévu. Aucun coût caché. Le devis précise la durée estimée, le matériel et le montant TTC."
      },
      {
        "step": "Intervention",
        "detail": "Remplacement du tableau, raccordement circuit par circuit, pose des protections (différentiels, disjoncteurs, parafoudre). Nous protégeons votre mobilier avec des bâches pendant l'intervention."
      },
      {
        "step": "Remise en service",
        "detail": "Vérification de chaque circuit par mesure et test fonctionnel. Étiquetage normalisé de chaque départ. Nettoyage complet du chantier."
      },
      {
        "step": "Attestation",
        "detail": "Remise d'une attestation de conformité détaillée avec photos avant/après. Garantie décennale sur l'ensemble de l'intervention."
      }
    ],
    "proofs": [
      "Conformité NFC 15-100",
      "Assurance décennale",
      "10 ans d'expérience — plus de 300 tableaux remplacés",
      "Matériel Schneider, Legrand, Hager exclusivement",
      "Photos avant/après systématiques",
      "Devis gratuit sous 24 h"
    ],
    "faq": [
      {
        "question": "Combien coûte un remplacement de tableau électrique ?",
        "answer": "Entre 800 € et 2 500 € HT pour une installation résidentielle standard, selon le nombre de circuits et l'état existant. Les installations complexes (plus de 20 circuits, reprise de terre, parafoudre) peuvent atteindre 3 500 €. Nous fournissons un devis gratuit détaillé avant toute intervention."
      },
      {
        "question": "Combien de temps dure l'intervention ?",
        "answer": "En général une journée pour un tableau résidentiel standard (8 à 12 circuits). Les installations complexes (plus de 15 circuits, reprise partielle de câblage) peuvent nécessiter deux jours. Nous vous communiquons la durée exacte dans le devis."
      },
      {
        "question": "Faut-il couper le courant pendant toute la durée ?",
        "answer": "Oui, la coupure est nécessaire pendant l'intervention pour des raisons de sécurité. Pour un tableau standard, la coupure dure entre 4 et 8 heures. Nous planifions l'intervention pour minimiser la gêne et pouvons prévoir un branchement provisoire si nécessaire."
      },
      {
        "question": "Mon tableau est ancien mais fonctionne, dois-je le changer ?",
        "answer": "Un tableau qui « fonctionne » n'est pas nécessairement sûr. Les différentiels 30 mA sont obligatoires depuis 1991 et protègent contre l'électrocution. Sans eux, votre installation présente un risque réel pour les occupants. De plus, votre assurance habitation peut refuser de couvrir un sinistre électrique si l'installation n'est pas aux normes."
      },
      {
        "question": "Quel matériel utilisez-vous pour les tableaux ?",
        "answer": "Nous utilisons exclusivement du matériel de marque : Schneider (gamme Resi9), Legrand (gamme Drivia), ou Hager selon la configuration. Ces marques garantissent fiabilité, disponibilité des pièces, et conformité aux normes françaises."
      },
      {
        "question": "Le remplacement de tableau est-il éligible à des aides ?",
        "answer": "Le remplacement de tableau seul n'est pas éligible aux aides type MaPrimeRénov'. Cependant, si le remplacement s'inscrit dans une rénovation énergétique globale (installation de PAC, par exemple), la TVA à 10 % s'applique sur la main-d'œuvre et le matériel."
      }
    ],
    "relatedZones": [
      "bretigny-sur-orge",
      "corbeil-essonnes",
      "sainte-genevieve-des-bois",
      "saint-michel-sur-orge",
      "arpajon"
    ]
  },
  {
    "slug": "depannage-electrique",
    "title": "Dépannage électrique & recherche de panne",
    "shortTitle": "Dépannage",
    "seoTitle": "Dépannage électrique et recherche de panne — JM-ELEC 91",
    "seoDescription": "Dépannage électrique rapide et recherche de panne méthodique en Essonne et Île-de-France. Diagnostic rigoureux avec appareils de mesure professionnels. Devis transparent.",
    "description": "Court-circuit, disjoncteur qui saute, panne partielle : nous intervenons rapidement avec une méthode de diagnostic rigoureuse pour identifier et corriger le défaut.",
    "heroSubtitle": "Diagnostic méthodique — intervention rapide",
    "icon": "🔍",
    "problems": [
      "Disjoncteur général qui saute sans raison apparente, parfois la nuit.",
      "Prise ou circuit qui ne fonctionne plus dans une ou plusieurs pièces.",
      "Odeur de brûlé ou échauffement anormal au niveau du tableau ou d'une prise.",
      "Panne intermittente difficile à identifier — le problème disparaît et revient.",
      "Luminaires qui clignotent ou éclairage instable.",
      "Choc électrique ressenti en touchant un appareil ou un robinet."
    ],
    "solution": "Notre approche repose sur un diagnostic méthodique : test d'isolement, vérification circuit par circuit, appareils de mesure professionnels (mégohmmètre, pince ampèremétrique, testeur de terre). Nous identifions la cause exacte avant toute réparation. Pas de remplacement systématique — nous traitons la cause, pas le symptôme.",
    "editorial": "Une panne électrique peut avoir des dizaines de causes : un défaut d'isolement sur un câble endommagé, un appareil défaillant qui met en défaut le différentiel, un serrage insuffisant qui provoque un échauffement, une infiltration d'eau sur un circuit extérieur, ou un rongeur qui a grignoté une gaine dans les combles. Le vrai travail d'un électricien, c'est de trouver la cause — pas de changer des pièces au hasard.\n\nChez JM-ELEC 91, chaque dépannage commence par un diagnostic structuré. Nous testons l'isolement de chaque circuit avec un mégohmmètre, mesurons les courants de fuite, vérifions les serrages au tableau, et identifions le circuit ou l'appareil en défaut. Cette méthode prend parfois 30 minutes, parfois 2 heures — mais elle garantit que la réparation sera définitive.\n\nNous intervenons principalement en Essonne et en Île-de-France, pour les particuliers comme pour les professionnels. Les pannes en milieu professionnel (commerce, bureau, atelier) nécessitent une approche particulière car chaque heure d'arrêt a un coût. Nous adaptons notre méthode pour rétablir le courant le plus rapidement possible, quitte à effectuer une réparation provisoire sécurisée en attendant une intervention définitive.",
    "tips": [
      "Si votre disjoncteur général saute, débranchez tous vos appareils et réenclenchez : si ça tient, rebranchez-les un par un pour identifier le fautif.",
      "Un différentiel qui saute indique un défaut d'isolement (fuite de courant) — c'est différent d'un disjoncteur divisionnaire qui saute (surcharge ou court-circuit).",
      "Ne réarmez jamais un disjoncteur qui a déclenché à cause d'une odeur de brûlé — coupez au général et appelez un professionnel.",
      "Les pannes intermittentes sont souvent liées à des serrages insuffisants ou à des câbles endommagés : elles ne se résolvent pas seules et empirent avec le temps.",
      "En cas de choc électrique en touchant un robinet, c'est un défaut de terre — ne touchez plus les éléments métalliques et faites intervenir un électricien rapidement."
    ],
    "whyUs": "Nous disposons d'un outillage de diagnostic professionnel complet : mégohmmètre (Fluke, Chauvin Arnoux), pince ampèremétrique, testeur de terre, caméra thermique pour les échauffements. Cette instrumentation nous permet de localiser précisément la panne sans tâtonner. Nous ne remplaçons pas de pièces « au cas où » : chaque intervention est ciblée et justifiée.",
    "process": [
      {
        "step": "Appel",
        "detail": "Description du problème par téléphone. Premiers conseils de sécurité immédiats (couper le circuit en défaut, ne pas toucher les éléments suspects). Évaluation de l'urgence."
      },
      {
        "step": "Intervention",
        "detail": "Arrivée sur site avec outillage de diagnostic complet : mégohmmètre, pince ampèremétrique, testeur de terre, multimètre. Inspection visuelle du tableau et de l'installation."
      },
      {
        "step": "Diagnostic",
        "detail": "Tests méthodiques circuit par circuit pour identifier la cause précise de la panne : test d'isolement, mesure de continuité, vérification des serrages, identification du composant défaillant."
      },
      {
        "step": "Réparation",
        "detail": "Correction du défaut identifié. Remplacement des composants défaillants si nécessaire (disjoncteur, prise, câble). Réparation ciblée — pas de remplacement systématique."
      },
      {
        "step": "Vérification",
        "detail": "Test de l'ensemble de l'installation après réparation. Mesure d'isolement pour confirmer l'absence de défaut résiduel. Conseils de prévention personnalisés."
      }
    ],
    "proofs": [
      "Appareils de mesure professionnels (Fluke, Chauvin Arnoux)",
      "Diagnostic avant devis — pas de réparation à l'aveugle",
      "Pas de remplacement inutile — intervention ciblée",
      "Assurance décennale",
      "Intervention rapide en Essonne et Île-de-France",
      "Devis transparent communiqué avant intervention"
    ],
    "faq": [
      {
        "question": "Intervenez-vous en urgence ?",
        "answer": "Nous intervenons dans les meilleurs délais selon notre planning. Pour une urgence absolue (danger immédiat : fils à nu, odeur de brûlé, étincelles), contactez les pompiers (18) ou ENEDIS (09 72 67 50 + n° département). Pour les pannes non dangereuses, nous pouvons généralement intervenir sous 24 à 48 h."
      },
      {
        "question": "Combien coûte un dépannage ?",
        "answer": "Le tarif dépend de la complexité du diagnostic et de la réparation. Un dépannage simple (remplacement d'un disjoncteur, resserrage) : 150 à 300 €. Une recherche de panne complexe (défaut d'isolement, câble endommagé dans un mur) : 300 à 600 €. Nous vous communiquons un devis avant toute intervention payante."
      },
      {
        "question": "Comment savoir si c'est un problème chez moi ou sur le réseau ?",
        "answer": "Si vos voisins sont aussi en panne, c'est le réseau (contactez ENEDIS au 09 72 67 50 + votre département). Si seul votre logement est touché et que votre disjoncteur général a déclenché, c'est votre installation. Si le disjoncteur ENEDIS (en limite de propriété) a déclenché, le problème peut être votre installation ou le branchement."
      },
      {
        "question": "Ma prise fait des étincelles, est-ce dangereux ?",
        "answer": "Oui, des étincelles à une prise indiquent un mauvais contact, un câble endommagé ou une prise défaillante. Cessez d'utiliser cette prise immédiatement et faites-la vérifier. Un mauvais contact génère un échauffement qui peut provoquer un incendie."
      },
      {
        "question": "Mon différentiel saute quand il pleut, pourquoi ?",
        "answer": "C'est un signe classique d'infiltration d'eau sur un circuit extérieur (éclairage de jardin, prise extérieure, boîte de dérivation non étanche). L'eau provoque un défaut d'isolement détecté par le différentiel. Il faut identifier et traiter le point d'infiltration."
      },
      {
        "question": "Pouvez-vous intervenir le week-end ?",
        "answer": "Nous intervenons en semaine (lundi-vendredi, 7h30-18h30) et le samedi sur rendez-vous pour les situations qui ne peuvent pas attendre. Les tarifs restent identiques."
      }
    ],
    "relatedZones": [
      "bretigny-sur-orge",
      "corbeil-essonnes",
      "arpajon",
      "sainte-genevieve-des-bois",
      "le-plessis-pate"
    ]
  },
  {
    "slug": "mise-en-securite-conformite",
    "title": "Mise en sécurité et conformité électrique",
    "shortTitle": "Conformité",
    "seoTitle": "Mise en sécurité et conformité électrique — JM-ELEC 91",
    "seoDescription": "Mise en sécurité de votre installation électrique selon NFC 15-100. Diagnostic point par point, travaux ciblés, attestation de conformité. Électricien certifié en Essonne.",
    "description": "Votre installation ne respecte plus les normes ? Nous la mettons en conformité, point par point, sans travaux inutiles. Diagnostic rigoureux, travaux ciblés, attestation.",
    "heroSubtitle": "Conformité NFC 15-100 — travaux ciblés",
    "icon": "🛡️",
    "problems": [
      "Installation électrique de plus de 15 ans sans mise à jour — potentiellement dangereuse.",
      "Diagnostic immobilier révélant des anomalies (vente ou location obligatoire).",
      "Absence de terre, de différentiels, de protection adaptée sur certains circuits.",
      "Vente ou location nécessitant une installation conforme pour rassurer l'acquéreur.",
      "Assurance habitation exigeant une mise aux normes après un sinistre.",
      "Prises sans terre dans les pièces d'eau — danger d'électrocution."
    ],
    "solution": "Nous réalisons un diagnostic précis de votre installation, point par point selon la norme NFC 15-100, et priorisons les travaux selon le niveau de risque. Objectif : atteindre la conformité avec le juste nécessaire, sans sur-facturer. Chaque anomalie identifiée est documentée et le devis détaille précisément les travaux prévus pour chaque point.",
    "editorial": "La mise en sécurité et la mise en conformité électrique sont deux notions distinctes mais souvent confondues. La mise en sécurité traite les points de danger immédiat : absence de différentiel (risque d'électrocution), absence de terre (risque de choc), matériel vétuste (risque d'incendie). La mise en conformité totale, plus ambitieuse, aligne l'ensemble de l'installation sur la norme NFC 15-100 en vigueur.\n\nEn pratique, la plupart de nos clients ont besoin d'une mise en sécurité : corriger les anomalies dangereuses sans nécessairement tout refaire. C'est souvent le cas lors d'une vente immobilière, quand le diagnostic électrique révèle des anomalies. Le diagnostic n'impose pas de travaux, mais les anomalies sont visibles par l'acquéreur et peuvent freiner la transaction ou entraîner une négociation de prix.\n\nLa norme NFC 15-100 évolue régulièrement. Les installations des années 70-80 ne comportent souvent pas de différentiel 30 mA (obligatoire depuis 1991), pas de circuit spécialisé pour le lave-linge ou le four (obligatoire dans le neuf), et parfois même pas de prise de terre dans les pièces d'eau. Ces manquements ne sont pas de simples « non-conformités administratives » — ce sont des risques réels pour les occupants.\n\nChez JM-ELEC 91, nous adoptons une approche pragmatique : nous identifions les points vraiment dangereux, les hiérarchisons, et proposons un plan de travaux adapté à votre budget. Pas de devis gonflé pour « tout refaire » quand quelques interventions ciblées suffisent.",
    "tips": [
      "Le diagnostic électrique est obligatoire pour la vente d'un logement dont l'installation a plus de 15 ans — anticipez-le pour éviter les mauvaises surprises.",
      "Les 6 points de sécurité minimaux : présence d'un appareil de coupure générale, différentiel 30 mA, terre, liaison équipotentielle en salle de bain, protection des circuits, matériel en bon état.",
      "La mise en sécurité coûte moins cher que la mise en conformité totale — et suffit dans la majorité des cas pour une vente.",
      "Si vous êtes locataire et constatez des anomalies électriques (prises sans terre en salle de bain, fils apparents), signalez-le par écrit à votre propriétaire.",
      "Après mise en sécurité, faites refaire le diagnostic électrique : un diagnostic favorable est un argument de vente majeur."
    ],
    "whyUs": "Notre approche est différente : nous ne proposons pas de « tout refaire » systématiquement. Nous identifions les anomalies réelles, les hiérarchisons selon leur dangerosité, et proposons un plan de travaux avec des priorités. Cela permet à nos clients de planifier leurs travaux de manière réaliste, en traitant d'abord l'essentiel. Nos attestations de conformité sont documentées et acceptées par les diagnostiqueurs immobiliers.",
    "process": [
      {
        "step": "Diagnostic complet",
        "detail": "Vérification point par point selon la norme NFC 15-100 : coupure générale, différentiels, terre, liaisons équipotentielles, protection des circuits, état du matériel. Chaque anomalie est documentée et photographiée."
      },
      {
        "step": "Rapport de préconisations",
        "detail": "Liste priorisée des anomalies et des travaux recommandés, classés par niveau de risque. Ce rapport vous permet de comprendre exactement ce qui doit être fait et pourquoi."
      },
      {
        "step": "Devis",
        "detail": "Chiffrage détaillé par poste de travaux. Chaque ligne correspond à une anomalie identifiée dans le rapport. Possibilité de phasage si le budget est contraint."
      },
      {
        "step": "Travaux",
        "detail": "Interventions ciblées, propres, avec protection du mobilier. Nous ne touchons qu'aux éléments nécessaires — pas de démolition inutile."
      },
      {
        "step": "Attestation",
        "detail": "Document de conformité détaillé remis à la fin des travaux, avec liste des travaux réalisés et photos. Ce document est accepté par les diagnostiqueurs pour un nouveau diagnostic."
      }
    ],
    "proofs": [
      "Connaissance approfondie de la NFC 15-100",
      "Travaux ciblés — pas de sur-facturation",
      "Attestation de conformité documentée",
      "Assurance décennale",
      "Rapport de préconisations avant travaux",
      "Photos avant/après systématiques"
    ],
    "faq": [
      {
        "question": "Quelle différence entre mise en sécurité et mise en conformité ?",
        "answer": "La mise en sécurité traite les 6 points de danger essentiels définis par l'arrêté du 28 septembre 2017 : coupure générale, différentiel, terre, liaisons équipotentielles, protection des circuits, matériel en bon état. La mise en conformité totale aligne l'intégralité de l'installation sur la norme NFC 15-100 actuelle, ce qui est plus complet et plus coûteux."
      },
      {
        "question": "Est-ce obligatoire lors d'une vente ?",
        "answer": "Le diagnostic électrique est obligatoire pour les installations de plus de 15 ans. Les travaux de mise en sécurité ne sont pas juridiquement obligatoires, mais les anomalies sont visibles par l'acquéreur et peuvent freiner la vente ou entraîner une négociation de prix significative."
      },
      {
        "question": "Combien coûte une mise en conformité ?",
        "answer": "La mise en sécurité (points essentiels) : de 500 € à 2 000 €. La mise en conformité partielle : de 1 500 € à 4 000 €. La mise en conformité totale : de 3 000 € à 8 000 € selon la taille du logement. Un diagnostic préalable permet de chiffrer précisément et d'adapter l'intervention à votre budget."
      },
      {
        "question": "Combien de temps durent les travaux ?",
        "answer": "Une mise en sécurité simple (ajout de différentiels, reprise de terre) : 1 jour. Une mise en conformité partielle : 2 à 3 jours. Une mise en conformité totale : 1 à 2 semaines selon la taille du logement et l'ampleur des travaux."
      },
      {
        "question": "Faut-il faire refaire le diagnostic après les travaux ?",
        "answer": "Oui, c'est recommandé. Un nouveau diagnostic électrique conforme est un argument de vente puissant. Notre attestation de conformité est acceptée par les diagnostiqueurs pour justifier les travaux réalisés."
      },
      {
        "question": "Mon locataire me signale des problèmes électriques, que dois-je faire ?",
        "answer": "En tant que propriétaire, vous êtes responsable de la sécurité électrique du logement. Nous pouvons réaliser un diagnostic et vous proposer les travaux nécessaires. Les mises en sécurité sont déductibles des revenus fonciers."
      }
    ],
    "relatedZones": [
      "bretigny-sur-orge",
      "corbeil-essonnes",
      "saint-michel-sur-orge",
      "sainte-genevieve-des-bois",
      "arpajon"
    ]
  },
  {
    "slug": "renovation-electrique",
    "title": "Rénovation électrique complète",
    "shortTitle": "Rénovation",
    "seoTitle": "Rénovation électrique complète — JM-ELEC 91",
    "seoDescription": "Rénovation électrique complète de votre logement ou local. Reprise intégrale du câblage, tableau neuf, appareillage aux normes. Coordination architectes. Devis gratuit.",
    "description": "Reprise complète de l'installation électrique : câblage, tableau, prises, éclairage. Un chantier coordonné pour un résultat conforme et durable.",
    "heroSubtitle": "Reprise intégrale — résultat conforme et durable",
    "icon": "🏠",
    "problems": [
      "Installation trop ancienne pour une simple mise aux normes — tout doit être repris.",
      "Rénovation globale du logement nécessitant une reprise complète de l'électricité.",
      "Câblage inadapté (section insuffisante, gaines détériorées, fils en textile).",
      "Nombre de circuits insuffisant pour les usages modernes (10 circuits pour un T4 au lieu des 20+ recommandés).",
      "Pas de plan d'implantation — prises et interrupteurs mal positionnés.",
      "Coordination nécessaire avec d'autres corps de métier (plaquiste, plombier, peintre)."
    ],
    "solution": "Nous reprenons l'intégralité de l'installation : nouveau tableau dimensionné pour vos besoins, câblage aux normes en section adaptée, prises et interrupteurs neufs positionnés selon un plan d'implantation validé, éclairage repensé. Le tout en coordination avec les autres corps de métier si nécessaire. Chaque chantier fait l'objet d'un plan d'exécution précis pour anticiper les besoins et éviter les allers-retours.",
    "editorial": "La rénovation électrique complète est le projet le plus structurant pour un logement. Elle intervient généralement dans le cadre d'une rénovation globale (achat d'un bien ancien, remise à neuf d'un appartement, transformation d'un local) et détermine le confort et la sécurité du logement pour les 30 prochaines années.\n\nContrairement à une mise en sécurité qui traite les points dangereux, la rénovation complète reprend tout depuis zéro : tirage de nouveaux câbles dans les gaines (ou création de nouvelles gaines si nécessaire), pose d'un tableau neuf dimensionné pour l'ensemble des circuits, installation de prises et interrupteurs à des emplacements optimisés pour votre usage quotidien.\n\nLa norme NFC 15-100 impose un nombre minimum de prises par pièce, des circuits spécialisés pour les gros appareils (four, lave-linge, lave-vaisselle, plaque de cuisson), et des protections adaptées. Un plan d'implantation bien pensé fait la différence entre un logement « aux normes » et un logement vraiment fonctionnel.\n\nEn Île-de-France, nous intervenons aussi bien dans des pavillons en Essonne que dans des appartements haussmanniens à Boulogne-Billancourt ou des villas à Versailles. Chaque contexte a ses contraintes : dans l'ancien parisien, les gaines sont étroites et les murs en pierre ; dans les pavillons de banlieue, les combles et les vides sanitaires facilitent le passage de câbles. Notre expérience nous permet d'adapter notre approche à chaque situation.",
    "tips": [
      "Faites établir le plan d'implantation électrique avant les travaux de plâtrerie : les saignées doivent être faites avant la finition des murs.",
      "Prévoyez plus de prises que ce que vous pensez nécessaire — c'est beaucoup moins cher de les poser pendant la rénovation qu'après.",
      "Demandez un circuit dédié pour une future borne de recharge ou PAC, même si vous n'en avez pas besoin maintenant : le câble coûte quelques euros, le refaire plus tard coûte des centaines.",
      "Dans un appartement ancien, vérifiez si la puissance du compteur ENEDIS est suffisante pour votre nouvelle installation — un changement d'abonnement peut être nécessaire.",
      "La certification Consuel est obligatoire pour les rénovations lourdes : nous gérons la demande et l'inspection pour vous."
    ],
    "whyUs": "Nous avons l'habitude de travailler sur des chantiers de rénovation en coordination avec d'autres corps de métier. Notre plan d'implantation est validé avant le début des travaux, ce qui évite les surprises et les surcoûts. Nous gérons la demande de Consuel quand elle est nécessaire et livrons un dossier complet (plans, attestation, photos) à la fin du chantier.",
    "process": [
      {
        "step": "Étude",
        "detail": "Relevé de l'existant, définition des besoins avec le client, plan d'implantation détaillé (position de chaque prise, interrupteur, point lumineux). Coordination avec l'architecte ou le maître d'œuvre si présent."
      },
      {
        "step": "Chiffrage",
        "detail": "Devis détaillé par poste : tableau, câblage, appareillage, éclairage, circuits spécialisés. Le devis inclut la référence de chaque matériel prévu."
      },
      {
        "step": "Travaux",
        "detail": "Tirage de câbles (gaines existantes ou nouvelles saignées), pose du tableau, raccordements circuit par circuit, pose de l'appareillage (prises, interrupteurs, points lumineux)."
      },
      {
        "step": "Essais",
        "detail": "Tests de conformité circuit par circuit : continuité, isolement, mesure de terre. Vérification fonctionnelle de chaque point."
      },
      {
        "step": "Réception",
        "detail": "Consuel si nécessaire (rénovation lourde), attestation de conformité, dossier complet (plans, photos, références matériel), nettoyage du chantier."
      }
    ],
    "proofs": [
      "Plan d'implantation avant travaux",
      "Matériel de marque exclusivement",
      "Consuel géré si nécessaire",
      "Assurance décennale",
      "Coordination avec architectes et maîtres d'œuvre",
      "Dossier technique complet en fin de chantier"
    ],
    "faq": [
      {
        "question": "Combien de temps dure une rénovation électrique complète ?",
        "answer": "Pour un appartement T3 (70-90 m²) : 1 à 2 semaines. Pour un pavillon de 120-150 m² : 2 à 3 semaines. Pour une villa de 200 m²+ : 3 à 4 semaines. Ces durées dépendent de la coordination avec les autres corps de métier et de la complexité du chantier."
      },
      {
        "question": "Faut-il refaire toute l'installation ?",
        "answer": "Pas nécessairement. Après diagnostic, nous pouvons identifier ce qui peut être conservé (câbles en bon état, en section suffisante) et ce qui doit être repris. Cependant, sur les installations de plus de 30 ans, la reprise complète est souvent plus économique à long terme."
      },
      {
        "question": "Pouvez-vous travailler avec mon architecte ?",
        "answer": "Oui, nous avons l'habitude de travailler en coordination avec architectes et maîtres d'œuvre. Nous participons aux réunions de chantier, respectons le planning général, et adaptons notre intervention aux contraintes esthétiques du projet."
      },
      {
        "question": "Le Consuel est-il obligatoire ?",
        "answer": "Le Consuel est obligatoire pour les rénovations lourdes (reprise complète du branchement) et les constructions neuves. Pour une rénovation partielle, il n'est pas systématiquement requis. Nous vous indiquons clairement si votre projet le nécessite."
      },
      {
        "question": "Quelles marques d'appareillage proposez-vous ?",
        "answer": "Nous travaillons avec Legrand (Céliane, Dooxie, Mosaic), Schneider (Odace, Unica), et Hager (Kallysta). Le choix dépend de vos préférences esthétiques et de votre budget. Nous pouvons vous présenter des échantillons."
      },
      {
        "question": "Combien coûte une rénovation électrique complète ?",
        "answer": "Pour un appartement T3 : de 5 000 € à 10 000 €. Pour un pavillon de 120 m² : de 8 000 € à 15 000 €. Pour une villa avec domotique : de 15 000 € à 30 000 €+. Ces montants incluent le tableau, le câblage, l'appareillage et la main-d'œuvre."
      }
    ],
    "relatedZones": [
      "versailles",
      "boulogne-billancourt",
      "saint-cloud",
      "sceaux",
      "ville-d-avray"
    ]
  },
  {
    "slug": "borne-recharge-irve",
    "title": "Installation de borne de recharge IRVE",
    "shortTitle": "Borne IRVE",
    "seoTitle": "Installation borne de recharge IRVE — JM-ELEC 91 certifié IRVE",
    "seoDescription": "Installation de borne de recharge pour véhicule électrique par un électricien certifié IRVE en Essonne. Éligible au crédit d'impôt 300 €. Wallbox, Schneider, Legrand. Devis gratuit.",
    "description": "Électricien certifié IRVE, nous installons votre borne de recharge à domicile ou en entreprise dans les règles de l'art. Éligible au crédit d'impôt.",
    "heroSubtitle": "Certification IRVE — éligible au crédit d'impôt",
    "icon": "🔌",
    "problems": [
      "Recharge sur prise domestique lente (24 à 40 h pour une charge complète) et potentiellement dangereuse.",
      "Besoin d'une borne adaptée à votre véhicule et votre installation électrique.",
      "Méconnaissance des aides financières disponibles (crédit d'impôt 300 €, TVA réduite à 5,5 %).",
      "Installation non conforme par un prestataire non certifié IRVE — pas d'aides, pas de garantie.",
      "Copropriété refusant l'installation ou imposant des contraintes techniques.",
      "Puissance insuffisante au compteur pour supporter la charge du véhicule en plus du reste."
    ],
    "solution": "Nous dimensionnons et installons la borne adaptée à votre véhicule, votre installation et vos habitudes de recharge. Vérification de la puissance disponible, ajout d'un circuit dédié avec protection adaptée, pose et configuration de la borne. La certification IRVE est obligatoire pour les bornes de plus de 3,7 kW et pour bénéficier des aides financières.",
    "editorial": "La recharge d'un véhicule électrique à domicile est le mode de recharge le plus pratique et le plus économique. Brancher son véhicule le soir et le retrouver chargé le matin, c'est le confort que permet une borne de recharge bien dimensionnée. Mais encore faut-il que l'installation soit conforme, performante et sûre.\n\nUne borne de recharge n'est pas un simple accessoire que l'on branche sur une prise. C'est un équipement électrique de puissance (de 3,7 kW à 22 kW) qui nécessite un circuit dédié, une protection adaptée au tableau (disjoncteur + différentiel de type A), et un câblage en section suffisante. La norme impose un installateur certifié IRVE pour toute borne de plus de 3,7 kW — et cette certification est également obligatoire pour bénéficier du crédit d'impôt de 300 € et de la TVA à 5,5 %.\n\nChez JM-ELEC 91, nous sommes certifiés IRVE et installons des bornes de toutes les marques principales : Wallbox, Schneider (EVlink), Legrand (Green'Up). Le choix de la borne dépend de votre véhicule, de votre installation (monophasé ou triphasé), de votre abonnement ENEDIS, et de vos habitudes de recharge.\n\nEn maison individuelle, l'installation est généralement simple : tirage d'un câble du tableau au garage ou à la place de stationnement, ajout d'un circuit dédié, pose et configuration de la borne. En copropriété, le « droit à la prise » permet à tout copropriétaire de demander l'installation d'une borne, mais les contraintes techniques sont plus importantes (passage du câble dans les parties communes, comptage individuel).\n\nNous gérons l'intégralité du projet : étude technique, choix de la borne, devis incluant les informations sur les aides, installation, mise en service et explication du fonctionnement.",
    "tips": [
      "Une borne 7 kW (monophasé) recharge la plupart des véhicules en 6 à 8 h — c'est suffisant pour une recharge de nuit à domicile.",
      "Vérifiez votre abonnement ENEDIS : une borne 7 kW nécessite un compteur d'au moins 9 kVA (idéalement 12 kVA) pour pouvoir charger tout en utilisant vos appareils normalement.",
      "Le crédit d'impôt de 300 € est disponible uniquement si l'installation est réalisée par un électricien certifié IRVE — vérifiez la certification de votre installateur.",
      "Si vous prévoyez de passer en triphasé, optez directement pour une borne 22 kW : le surcoût est faible et la recharge sera 3 fois plus rapide.",
      "En copropriété, le « droit à la prise » vous protège : la copropriété ne peut pas refuser votre demande sans motif technique sérieux.",
      "Programmez la recharge en heures creuses pour réduire votre facture — la plupart des bornes le permettent nativement."
    ],
    "whyUs": "Nous sommes certifiés IRVE (Infrastructure de Recharge pour Véhicule Électrique) et avons installé des dizaines de bornes en Essonne et en Île-de-France. Notre certification vous garantit l'accès aux aides financières (crédit d'impôt 300 €, TVA 5,5 %) et une installation conforme aux normes en vigueur. Nous vous conseillons objectivement sur le choix de la borne, sans favoriser une marque en particulier.",
    "process": [
      {
        "step": "Étude technique",
        "detail": "Vérification de la puissance disponible au compteur, de l'état du tableau, du parcours de câble entre le tableau et l'emplacement de la borne. Mesure de la distance et identification des contraintes (passage en extérieur, traversée de mur)."
      },
      {
        "step": "Préconisation",
        "detail": "Choix de la borne adaptée à votre véhicule, votre installation et vos habitudes. Comparaison des options (marques, puissances, fonctionnalités : wifi, programmation, comptage). Conseil sur l'abonnement ENEDIS."
      },
      {
        "step": "Devis + aides",
        "detail": "Chiffrage détaillé incluant la borne, le câblage, la protection au tableau, la pose. Information claire sur le crédit d'impôt (300 €), la TVA réduite (5,5 %), et les éventuelles aides locales."
      },
      {
        "step": "Installation",
        "detail": "Pose de la borne, tirage du câble en section adaptée, ajout d'un disjoncteur dédié et d'un différentiel de type A au tableau. Vérification de la terre."
      },
      {
        "step": "Mise en service",
        "detail": "Configuration de la borne (wifi, programmation horaire, puissance de charge). Test avec votre véhicule. Explication complète du fonctionnement et de la programmation en heures creuses."
      }
    ],
    "proofs": [
      "Certification IRVE obligatoire",
      "Éligible crédit d'impôt 300 € + TVA 5,5 %",
      "Assurance décennale",
      "Bornes Wallbox, Schneider, Legrand",
      "Conseil objectif sur le choix de borne",
      "Gestion du projet de A à Z"
    ],
    "faq": [
      {
        "question": "Pourquoi choisir un installateur certifié IRVE ?",
        "answer": "La certification IRVE est obligatoire pour les bornes de plus de 3,7 kW. Sans elle, vous ne pouvez pas bénéficier du crédit d'impôt de 300 € ni de la TVA à 5,5 %. De plus, une installation non conforme peut présenter des risques (échauffement, incendie) et ne sera pas couverte par votre assurance."
      },
      {
        "question": "Quelle puissance de borne choisir ?",
        "answer": "7 kW (monophasé) : recharge en 6-8 h, suffisant pour une recharge de nuit. 11 kW (triphasé) : recharge en 3-4 h. 22 kW (triphasé) : recharge en 1-2 h. La majorité des installations résidentielles sont en monophasé, donc 7 kW est le choix le plus courant. Nous vérifions votre compteur et vous conseillons la puissance adaptée."
      },
      {
        "question": "Mon installation doit-elle être modifiée ?",
        "answer": "Dans la plupart des cas, l'ajout d'un circuit dédié au tableau suffit (disjoncteur + différentiel type A). Si le tableau est vétuste ou saturé, une mise à niveau peut être nécessaire. Si la puissance du compteur est insuffisante, un changement d'abonnement ENEDIS sera recommandé."
      },
      {
        "question": "Combien coûte l'installation complète ?",
        "answer": "Borne + installation : de 1 200 € à 2 500 € TTC pour une maison individuelle (selon la marque de borne et la distance tableau-borne). Après crédit d'impôt de 300 € et TVA à 5,5 %, le coût net est de 900 € à 2 200 €."
      },
      {
        "question": "Puis-je installer une borne en copropriété ?",
        "answer": "Oui, le « droit à la prise » (décret n°2020-1720) vous permet de demander l'installation d'une borne sur votre place de parking. La copropriété ne peut s'y opposer que pour un motif technique sérieux. Nous vous accompagnons dans les démarches."
      },
      {
        "question": "Quelle marque de borne recommandez-vous ?",
        "answer": "Wallbox Pulsar Plus : excellent rapport qualité/prix, compacte, wifi intégré. Schneider EVlink : robuste, marque française. Legrand Green'Up : intégration parfaite avec les tableaux Legrand. Le choix dépend de vos préférences et de votre installation."
      }
    ],
    "relatedZones": [
      "bretigny-sur-orge",
      "versailles",
      "boulogne-billancourt",
      "gif-sur-yvette",
      "saint-germain-les-arpajon"
    ]
  },
  {
    "slug": "eclairage-interieur-exterieur",
    "title": "Éclairage intérieur et extérieur",
    "shortTitle": "Éclairage",
    "seoTitle": "Éclairage intérieur et extérieur — JM-ELEC 91",
    "seoDescription": "Conception et installation d'éclairage intérieur et extérieur LED. Spots, balisage, mise en valeur architecturale. Électricien professionnel en Essonne et Île-de-France.",
    "description": "Conception et installation d'éclairages fonctionnels et décoratifs, en intérieur comme en extérieur. LED, spots, balisage, scénarios lumineux sur mesure.",
    "heroSubtitle": "Fonctionnel et esthétique — LED et scénarios",
    "icon": "💡",
    "problems": [
      "Éclairage insuffisant ou mal réparti dans les pièces de vie — zones d'ombre, fatigue visuelle.",
      "Consommation excessive avec des ampoules halogènes ou incandescentes obsolètes.",
      "Absence d'éclairage extérieur : jardin sombre, allées dangereuses, entrée peu accueillante.",
      "Besoin de scénarios lumineux adaptés aux usages (travail, détente, repas, lecture).",
      "Éclairage de jardin défaillant ou mal conçu (éblouissement, zones non éclairées).",
      "Souhait de mettre en valeur une façade, un arbre, un espace paysager."
    ],
    "solution": "Nous concevons un plan d'éclairage adapté à vos espaces et vos usages, en privilégiant la technologie LED pour une consommation réduite et un confort visuel optimal. En intérieur : spots encastrés, rubans LED, appliques, suspensions. En extérieur : spots de balisage, projecteurs paysagers, appliques murales, tous en indice de protection adapté (IP44 à IP67).",
    "editorial": "L'éclairage est souvent le parent pauvre d'une installation électrique. Pourtant, c'est lui qui détermine l'ambiance de votre intérieur et la mise en valeur de votre extérieur. Un éclairage bien pensé transforme un espace : il agrandit les pièces, crée des ambiances chaleureuses, sécurise les cheminements, et met en valeur l'architecture.\n\nEn intérieur, la clé est de multiplier les sources : un plafonnier central ne suffit jamais. La combinaison d'un éclairage général (spots encastrés ou plafonnier), d'un éclairage fonctionnel (plan de travail de cuisine, bureau) et d'un éclairage d'ambiance (rubans LED, appliques) permet de créer des scénarios adaptés à chaque moment de la journée.\n\nEn extérieur, l'éclairage remplit trois fonctions : la sécurité (baliser les cheminements, éclairer l'entrée), la mise en valeur (façade, arbres, massifs) et le confort (terrasse, coin repas). La technologie LED et les automatismes (détection de présence, programmation horaire, crépusculaire) permettent d'allier esthétique et économie d'énergie.\n\nChez JM-ELEC 91, nous ne nous contentons pas de poser des luminaires : nous concevons un véritable plan d'éclairage en tenant compte de l'architecture, des couleurs, des matériaux et de vos usages. Le résultat est un éclairage cohérent, qui met en valeur votre intérieur et votre extérieur sans éblouissement ni zone d'ombre.",
    "tips": [
      "En cuisine, prévoyez un éclairage sous meuble haut en LED (ruban ou réglette) : c'est le meilleur investissement pour le confort de travail.",
      "Pour l'extérieur, choisissez des luminaires IP65 minimum — l'IP44 suffit sous un auvent mais pas en exposition directe à la pluie.",
      "Privilégiez une température de couleur de 2700K à 3000K pour les espaces de vie (chaleureux) et 4000K pour les espaces de travail (neutre).",
      "Les variateurs permettent d'adapter l'intensité à l'ambiance souhaitée — vérifiez que vos ampoules LED sont compatibles avec la variation.",
      "Un éclairage extérieur sur minuterie ou détecteur de présence consomme très peu et sécurise efficacement votre propriété."
    ],
    "whyUs": "Nous concevons l'éclairage en tenant compte de l'architecture et des usages, pas seulement en posant des luminaires. Notre expérience sur des projets résidentiels haut de gamme (Versailles, Saint-Cloud, Le Vésinet) nous permet de proposer des solutions esthétiques et fonctionnelles, avec du matériel de qualité et une installation soignée.",
    "process": [
      {
        "step": "Étude",
        "detail": "Analyse de vos espaces (dimensions, couleurs, orientation), de vos besoins (fonctionnel, ambiance, mise en valeur) et de vos envies. Visite sur site pour l'extérieur."
      },
      {
        "step": "Proposition",
        "detail": "Plan d'éclairage avec positionnement des luminaires, choix des types (spots, rubans, appliques, projecteurs) et des températures de couleur. Proposition de scénarios si variateurs ou domotique."
      },
      {
        "step": "Installation",
        "detail": "Pose des luminaires, câblage dédié, raccordement au tableau. En extérieur : tranchée pour passage de câble si nécessaire, pose de luminaires IP adaptés."
      },
      {
        "step": "Réglage",
        "detail": "Orientation des spots, réglage des variateurs, paramétrage des scénarios et des automatismes (détection de mouvement, programmation horaire, crépusculaire)."
      }
    ],
    "proofs": [
      "Conseil en aménagement lumineux",
      "Technologie LED — jusqu'à 80 % d'économie",
      "Luminaires de qualité (IP65+ en extérieur)",
      "Assurance décennale",
      "Projets résidentiels haut de gamme",
      "Scénarios sur mesure"
    ],
    "faq": [
      {
        "question": "Quel type d'éclairage pour l'extérieur ?",
        "answer": "Spots encastrés dans les allées (IP67, passage de véhicule si nécessaire), projecteurs LED pour les arbres et façades (IP65), appliques murales pour la terrasse et l'entrée (IP44 minimum). Le tout sur programmation horaire ou crépusculaire pour une gestion automatique."
      },
      {
        "question": "Peut-on piloter l'éclairage à distance ?",
        "answer": "Oui, avec des interrupteurs connectés (Legrand, Schneider) ou un système domotique complet. La programmation horaire, les scénarios (jour, nuit, absence) et le pilotage par smartphone sont possibles."
      },
      {
        "question": "Combien coûte un éclairage extérieur de jardin ?",
        "answer": "Pour un jardin de taille moyenne (200-500 m²) avec balisage d'allées, éclairage de terrasse et mise en valeur de quelques éléments : de 2 000 € à 6 000 € TTC, fournitures et pose incluses."
      },
      {
        "question": "Les LED sont-elles fiables ?",
        "answer": "Les LED de qualité ont une durée de vie de 30 000 à 50 000 heures (20 à 30 ans d'utilisation normale). Elles ne chauffent presque pas, consomment 80 % de moins que les halogènes, et ne contiennent pas de mercure."
      },
      {
        "question": "Peut-on installer des rubans LED dans les meubles ?",
        "answer": "Oui, les rubans LED adhésifs se posent facilement sous les meubles hauts de cuisine, dans les niches, derrière un miroir, ou le long d'un escalier. Nous les raccordons proprement avec un transformateur dédié."
      }
    ],
    "relatedZones": [
      "versailles",
      "saint-cloud",
      "sceaux",
      "le-vesinet",
      "ville-d-avray"
    ]
  },
  {
    "slug": "interphonie-controle-acces",
    "title": "Interphonie et contrôle d'accès",
    "shortTitle": "Interphonie",
    "seoTitle": "Interphonie et contrôle d'accès — JM-ELEC 91",
    "seoDescription": "Installation d'interphones, vidéophones et systèmes de contrôle d'accès. Résidentiel et professionnel, neuf et remplacement. Électricien en Essonne et Île-de-France.",
    "description": "Installation d'interphones, vidéophones et systèmes de contrôle d'accès pour résidences et locaux professionnels. Neuf et remplacement.",
    "heroSubtitle": "Sécurité et confort d'accès",
    "icon": "🔑",
    "problems": [
      "Interphone défaillant ou obsolète — grésillements, pannes récurrentes.",
      "Besoin de visiophone pour identifier les visiteurs avant d'ouvrir.",
      "Gestion des accès pour un immeuble, une résidence ou un local professionnel.",
      "Système filaire vieillissant à moderniser sans tout recâbler.",
      "Besoin de consulter les appels à distance via smartphone.",
      "Plusieurs entrées à gérer (portail, porte d'entrée, portillon)."
    ],
    "solution": "Nous installons des systèmes modernes (vidéophones, digicodes, contrôle d'accès par badge ou clé électronique) adaptés à votre configuration. En filaire ou sans fil selon les contraintes du bâtiment. Compatibilité avec les systèmes existants quand c'est possible, pour éviter un recâblage coûteux.",
    "editorial": "L'interphonie et le contrôle d'accès sont des éléments de confort et de sécurité essentiels dans un logement. Identifier un visiteur avant de lui ouvrir, commander l'ouverture du portail depuis l'intérieur, gérer les accès d'un immeuble — ces fonctions sont devenues indispensables.\n\nLes technologies ont considérablement évolué : les vidéophones actuels offrent une image HD, un écran couleur tactile, et la possibilité de consulter les appels sur smartphone même en étant absent. Les systèmes de contrôle d'accès permettent de gérer les entrées par badge, clé électronique ou code, avec un historique des passages.\n\nEn remplacement d'un interphone ancien, il est souvent possible de réutiliser le câblage existant (2 fils) avec des systèmes compatibles, ce qui évite un recâblage coûteux dans les parties communes d'un immeuble. Pour les installations neuves, nous posons un câblage structuré qui permet d'évoluer facilement vers des fonctionnalités plus avancées.\n\nChez JM-ELEC 91, nous travaillons avec les marques de référence (Aiphone, Comelit, Bticino, Hikvision) et adaptons la solution à votre contexte : maison individuelle (visiophone + commande de portail), immeuble (interphone multi-logements), local professionnel (contrôle d'accès par badge).",
    "tips": [
      "Avant de remplacer un interphone défaillant, faites vérifier le câblage — c'est souvent un problème de connexion, pas de matériel.",
      "Les vidéophones sur 2 fils réutilisent le câblage existant d'un ancien interphone audio — pas de recâblage nécessaire.",
      "En maison individuelle, couplé au portail électrique, le visiophone vous permet de voir et d'ouvrir sans vous déplacer.",
      "Les vidéophones connectés (avec app smartphone) permettent de répondre aux visiteurs même en votre absence — idéal pour les livraisons."
    ],
    "whyUs": "Nous maîtrisons aussi bien les systèmes résidentiels simples (visiophone pour maison individuelle) que les installations plus complexes (interphonie multi-logements, contrôle d'accès professionnel). Notre expérience nous permet de proposer la solution la plus adaptée à votre configuration, en réutilisant le câblage existant quand c'est possible.",
    "process": [
      {
        "step": "Étude",
        "detail": "Analyse du bâtiment, des accès à gérer, du câblage existant et de vos besoins fonctionnels (audio, vidéo, connecté, contrôle d'accès)."
      },
      {
        "step": "Préconisation",
        "detail": "Choix du système adapté parmi les solutions disponibles. Comparaison des options, avec avantages et inconvénients de chacune."
      },
      {
        "step": "Installation",
        "detail": "Pose de la platine de rue, du moniteur intérieur, câblage (neuf ou réutilisation de l'existant), raccordement à la gâche ou au moteur de portail."
      },
      {
        "step": "Formation",
        "detail": "Explication du fonctionnement, paramétrage du système (sonneries, volumes, codes), installation de l'application smartphone si vidéophone connecté."
      }
    ],
    "proofs": [
      "Marques fiables (Aiphone, Comelit, Bticino)",
      "Installation soignée et discrète",
      "Réutilisation du câblage existant quand possible",
      "Formation incluse",
      "Assurance décennale",
      "Compatibilité portail électrique"
    ],
    "faq": [
      {
        "question": "Peut-on remplacer un interphone ancien sans tout recâbler ?",
        "answer": "Dans la majorité des cas, oui. Les vidéophones modernes sur 2 fils (Aiphone, Comelit) sont compatibles avec le câblage existant des anciens interphones audio. Nous vérifions le câblage lors de la visite pour confirmer la compatibilité."
      },
      {
        "question": "Proposez-vous des vidéophones connectés ?",
        "answer": "Oui, nous installons des vidéophones avec application smartphone (Aiphone, Hikvision, Comelit). Vous pouvez voir et répondre aux visiteurs depuis votre téléphone, même à l'autre bout du monde."
      },
      {
        "question": "Combien coûte un visiophone pour maison individuelle ?",
        "answer": "Un visiophone de qualité avec platine de rue et moniteur intérieur : de 500 € à 1 200 € TTC pose incluse (selon la marque, la taille d'écran et les fonctionnalités connectées). Un modèle avec commande de portail intégrée est légèrement plus cher."
      },
      {
        "question": "Pouvez-vous installer un contrôle d'accès par badge ?",
        "answer": "Oui, nous installons des lecteurs de badges (Mifare, proximity) pour les immeubles et les locaux professionnels. Le système gère les autorisations, les plages horaires et l'historique des passages."
      }
    ],
    "relatedZones": [
      "sainte-genevieve-des-bois",
      "arpajon",
      "boulogne-billancourt",
      "corbeil-essonnes"
    ]
  },
  {
    "slug": "domotique-residentielle",
    "title": "Domotique résidentielle",
    "shortTitle": "Domotique",
    "seoTitle": "Domotique résidentielle — JM-ELEC 91",
    "seoDescription": "Installation domotique pour votre maison : éclairage, volets, chauffage, scénarios intelligents. KNX, Legrand, Schneider. Électricien professionnel en Essonne et Île-de-France.",
    "description": "Pilotez votre éclairage, vos volets, votre chauffage et vos scénarios depuis une interface unique. Confort, économies et sécurité au quotidien.",
    "heroSubtitle": "Confort, économies et pilotage intelligent",
    "icon": "🏡",
    "problems": [
      "Gestion manuelle de chaque équipement (volets, éclairage, chauffage) — contraignant au quotidien.",
      "Absence de programmation horaire ou de scénarios automatiques.",
      "Consommation énergétique non optimisée — chauffage qui tourne en votre absence.",
      "Souhait de piloter son logement à distance depuis un smartphone.",
      "Multiplication des télécommandes et des applications différentes pour chaque équipement.",
      "Besoin de scénarios de sécurité (simulation de présence, alerte intrusion)."
    ],
    "solution": "Nous installons et configurons des solutions domotiques professionnelles (KNX, Legrand, Schneider) pour centraliser le pilotage de vos équipements électriques. Contrairement aux solutions grand public (Alexa, Google Home), les systèmes professionnels sont fiables, pérennes, et ne dépendent pas d'un serveur cloud qui peut être interrompu.",
    "editorial": "La domotique résidentielle a longtemps été perçue comme un gadget réservé aux maisons de luxe. Aujourd'hui, elle est devenue un outil de confort et d'économie accessible, à condition de choisir les bons systèmes.\n\nIl existe deux grandes familles de solutions : les systèmes grand public (Philips Hue, Google Home, Alexa) et les systèmes professionnels (KNX, Legrand with Netatmo, Schneider Wiser). Les premiers sont faciles à installer mais dépendent de serveurs cloud (si le fabricant ferme le service, votre installation ne fonctionne plus). Les seconds fonctionnent localement, sont extrêmement fiables, et sont conçus pour durer 20 ans ou plus.\n\nChez JM-ELEC 91, nous installons exclusivement des systèmes professionnels. Notre spécialité est l'intégration : faire communiquer l'éclairage, les volets, le chauffage et la sécurité dans un système cohérent, piloté depuis un écran tactile central ou un smartphone. Nous créons des scénarios adaptés à vos habitudes de vie : « Bonne nuit » (fermeture des volets, extinction des lumières, passage en mode éco du chauffage, activation de l'alarme), « Départ » (même chose + simulation de présence), « Retour » (ouverture du portail, allumage de l'entrée, chauffage en mode confort).\n\nLe vrai bénéfice de la domotique n'est pas le côté « high-tech » : c'est l'économie d'énergie. Un chauffage piloté intelligemment (baisse en absence, montée avant le retour, adaptation aux prévisions météo) peut réduire la facture de 15 à 25 %.",
    "tips": [
      "Commencez par les volets et le chauffage : ce sont les postes où la domotique apporte le plus d'économies.",
      "Un système KNX installé dans le tableau électrique est invisible et extrêmement fiable — c'est le standard international de la domotique professionnelle.",
      "Évitez de multiplier les marques et les applications : un système intégré est plus fiable et plus simple à utiliser qu'un patchwork de solutions.",
      "La simulation de présence (allumage aléatoire des lumières et mouvement des volets quand vous êtes absent) est un excellent complément à une alarme.",
      "Prévoyez un câble Ethernet dans chaque pièce principale même si vous utilisez le wifi — c'est le gage d'une domotique fiable et réactive."
    ],
    "whyUs": "Nous ne vendons pas de gadgets : nous concevons et installons des systèmes domotiques professionnels qui fonctionnent de manière fiable pendant des décennies. Notre approche est centrée sur l'usage : nous comprenons vos habitudes de vie, créons des scénarios pertinents, et vous formons à l'utilisation de votre installation.",
    "process": [
      {
        "step": "Audit",
        "detail": "Identification des équipements à piloter (éclairage, volets, chauffage, portail, alarme), de vos habitudes de vie, et de vos attentes en matière de confort et d'économies."
      },
      {
        "step": "Architecture",
        "detail": "Choix du système domotique (KNX, Legrand, Schneider), dimensionnement des modules nécessaires, architecture du réseau. Plan d'intégration détaillé."
      },
      {
        "step": "Installation",
        "detail": "Pose des modules au tableau électrique, câblage des capteurs et actionneurs, installation de l'écran tactile central si prévu. Intégration avec les équipements existants."
      },
      {
        "step": "Programmation",
        "detail": "Création des scénarios personnalisés (jour, nuit, absence, retour, invités), programmation des automatismes, paramétrage de l'application smartphone."
      },
      {
        "step": "Formation",
        "detail": "Prise en main complète de l'interface : scénarios, modifications, ajout d'équipements. Documentation utilisateur remise."
      }
    ],
    "proofs": [
      "Systèmes KNX, Legrand, Schneider — standards professionnels",
      "Scénarios personnalisés et programmation sur mesure",
      "Pilotage smartphone inclus",
      "Économie d'énergie mesurable (15 à 25 %)",
      "Assurance décennale",
      "Formation et documentation incluses"
    ],
    "faq": [
      {
        "question": "Faut-il tout recâbler pour installer la domotique ?",
        "answer": "Non. En rénovation, des modules s'ajoutent au tableau électrique et pilotent les circuits existants. Certains systèmes (Legrand with Netatmo) utilisent les interrupteurs existants. En construction neuve, un câblage domotique dédié (bus KNX) est recommandé pour une installation optimale."
      },
      {
        "question": "Quelle est la fiabilité des systèmes domotiques professionnels ?",
        "answer": "Les systèmes professionnels (KNX, Legrand, Schneider) sont extrêmement fiables car ils fonctionnent localement, sans dépendre d'un serveur cloud. Le standard KNX existe depuis plus de 30 ans et équipe des millions de bâtiments dans le monde. La durée de vie des modules est de 20 ans et plus."
      },
      {
        "question": "Combien coûte une installation domotique ?",
        "answer": "Entrée de gamme (éclairage + volets, 5-10 points) : 3 000 à 6 000 €. Milieu de gamme (éclairage + volets + chauffage + scénarios) : 6 000 à 15 000 €. Haut de gamme (KNX complet + écran tactile + intégration totale) : 15 000 à 40 000 €. Le retour sur investissement se fait en 5 à 8 ans grâce aux économies d'énergie."
      },
      {
        "question": "La domotique fonctionne-t-elle en cas de coupure internet ?",
        "answer": "Les systèmes professionnels fonctionnent localement : même sans internet, les scénarios, les automatismes et les commandes manuelles continuent de fonctionner. Seul le pilotage à distance (smartphone hors du domicile) nécessite une connexion internet."
      },
      {
        "question": "Puis-je ajouter des équipements plus tard ?",
        "answer": "Oui, les systèmes modulaires permettent d'ajouter des points de commande, des capteurs ou des actionneurs progressivement. C'est l'un des avantages majeurs des systèmes professionnels : ils sont évolutifs."
      }
    ],
    "relatedZones": [
      "versailles",
      "saint-cloud",
      "ville-d-avray",
      "marnes-la-coquette",
      "le-vesinet"
    ]
  },
  {
    "slug": "alarme",
    "title": "Installation d'alarme intrusion",
    "shortTitle": "Alarme",
    "seoTitle": "Installation alarme intrusion — JM-ELEC 91",
    "seoDescription": "Installation de systèmes d'alarme intrusion certifiés NF A2P. Maisons et locaux professionnels en Essonne et Île-de-France. Détection, sirène, alerte smartphone.",
    "description": "Protégez votre domicile ou vos locaux avec un système d'alarme intrusion fiable et certifié, installé par un professionnel.",
    "heroSubtitle": "Protection fiable — installation professionnelle",
    "icon": "🚨",
    "problems": [
      "Logement ou local non protégé contre les intrusions — risque accru dans les zones pavillonnaires.",
      "Système d'alarme ancien, non fonctionnel ou non connecté.",
      "Besoin d'alertes en temps réel sur smartphone — pas seulement une sirène.",
      "Zones non couvertes par le système existant (garage, dépendance, véranda).",
      "Fausses alarmes fréquentes avec un système mal paramétré ou obsolète.",
      "Besoin de simulation de présence couplée à l'alarme."
    ],
    "solution": "Nous installons des systèmes d'alarme certifiés NF A2P, adaptés à votre configuration : détecteurs de mouvement, détecteurs d'ouverture sur les accès, sirène intérieure et extérieure, centrale avec alerte smartphone en temps réel. Le paramétrage est fait sur mesure pour éviter les fausses alarmes.",
    "editorial": "La protection de votre domicile est un sujet sérieux qui mérite une installation professionnelle. Un système d'alarme mal conçu ou mal installé donne un faux sentiment de sécurité : détecteurs mal positionnés, zones non couvertes, fausses alarmes répétées qui finissent par être ignorées.\n\nUn système d'alarme efficace repose sur trois principes : une couverture complète des points d'accès (portes, fenêtres, garage), une détection volumétrique dans les zones de passage (entrée, couloir, pièces de vie), et une transmission fiable de l'alerte (sirène + notification smartphone + éventuellement télésurveillance).\n\nLa certification NF A2P est le standard de qualité pour les systèmes d'alarme en France. Elle garantit la résistance du matériel aux tentatives de neutralisation (arrachement, brouillage), la fiabilité des détecteurs, et le respect des normes de transmission. Les assureurs reconnaissent cette certification et peuvent accorder des réductions de prime.\n\nChez JM-ELEC 91, nous ne vendons pas de kit « discount » : nous concevons une installation sur mesure, avec un positionnement optimal des détecteurs, un paramétrage rigoureux pour éliminer les fausses alarmes, et une formation complète pour que vous maîtrisiez votre système. Nous pouvons également coupler l'alarme à la domotique : simulation de présence, allumage automatique des lumières en cas d'intrusion, fermeture des volets.",
    "tips": [
      "Placez un détecteur de mouvement dans le couloir d'entrée — c'est le passage obligé de tout intrus.",
      "Les détecteurs d'ouverture sur les fenêtres et portes sont plus fiables que les détecteurs de mouvement seuls : ils détectent l'intrusion avant même l'entrée.",
      "Prévenez votre assureur de l'installation — certaines compagnies accordent jusqu'à 15 % de réduction sur la prime habitation.",
      "Testez votre alarme régulièrement (une fois par mois) : un système non testé peut ne plus fonctionner le jour J.",
      "La simulation de présence (lumières aléatoires + mouvements de volets) est un complément très efficace à l'alarme quand vous êtes en vacances."
    ],
    "whyUs": "Nous concevons des systèmes de sécurité sur mesure, pas des installations standardisées. Chaque maison est différente : la surface, le nombre d'accès, l'environnement, les habitudes de vie déterminent le type et le nombre de détecteurs nécessaires. Notre paramétrage rigoureux garantit l'absence de fausses alarmes, principal motif de désactivation des systèmes.",
    "process": [
      {
        "step": "Étude",
        "detail": "Visite sur site : analyse des points d'accès (portes, fenêtres, garage, dépendances), des zones de passage, de l'environnement (animaux, jardin). Identification des zones à risque et des contraintes."
      },
      {
        "step": "Préconisation",
        "detail": "Choix du système (filaire ou sans fil), type et nombre de détecteurs, positionnement de la sirène, options (télésurveillance, domotique). Devis détaillé avec plan d'implantation."
      },
      {
        "step": "Installation",
        "detail": "Pose de la centrale, des détecteurs (mouvement + ouverture), des sirènes (intérieure + extérieure). Câblage ou configuration radio selon le système choisi."
      },
      {
        "step": "Paramétrage",
        "detail": "Configuration des zones, des temporisations, des codes utilisateurs, des alertes smartphone. Test de chaque détecteur dans différentes conditions."
      },
      {
        "step": "Formation",
        "detail": "Prise en main complète du système : activation, désactivation, modes (total, partiel, nuit), consultation de l'historique, modification des codes. Installation de l'application smartphone."
      }
    ],
    "proofs": [
      "Systèmes certifiés NF A2P",
      "Alerte smartphone en temps réel",
      "Installation sur mesure — pas de kit standardisé",
      "Paramétrage anti-fausses alarmes",
      "Assurance décennale",
      "Formation et documentation incluses"
    ],
    "faq": [
      {
        "question": "Alarme filaire ou sans fil ?",
        "answer": "En rénovation, le sans fil est généralement privilégié pour limiter les travaux (pas de câblage à tirer). En construction neuve ou rénovation lourde, le filaire offre une fiabilité maximale et une autonomie illimitée (pas de piles à changer). Les deux systèmes sont disponibles en certification NF A2P."
      },
      {
        "question": "Le système fonctionne-t-il en cas de coupure de courant ?",
        "answer": "Oui, les centrales d'alarme disposent de batteries de secours qui assurent la continuité de la protection pendant 12 à 72 heures selon les modèles. Les détecteurs sans fil ont leurs propres piles (autonomie de 2 à 5 ans)."
      },
      {
        "question": "Combien coûte une installation d'alarme ?",
        "answer": "Pour une maison individuelle standard (3-4 chambres) : de 1 500 € à 3 500 € TTC selon le nombre de détecteurs et les fonctionnalités (connectée ou non, NF A2P ou non). Une installation haut de gamme avec télésurveillance : de 3 000 € à 6 000 €."
      },
      {
        "question": "Les animaux domestiques déclenchent-ils l'alarme ?",
        "answer": "Les détecteurs de mouvement « immunité animaux » tolèrent les animaux jusqu'à 25 kg ou 40 kg selon les modèles. Nous paramétrons la sensibilité en fonction de vos animaux pour éviter les fausses alarmes."
      },
      {
        "question": "Qu'est-ce que la télésurveillance ?",
        "answer": "La télésurveillance est un service (abonnement mensuel) où un centre de surveillance reçoit les alertes de votre alarme et peut déclencher une intervention (vigile, police). C'est un complément, pas un remplacement de l'alarme elle-même."
      }
    ],
    "relatedZones": [
      "sainte-genevieve-des-bois",
      "le-plessis-pate",
      "fleury-merogis",
      "vaucresson",
      "marolles-en-hurepoix"
    ]
  },
  {
    "slug": "video-surveillance",
    "title": "Vidéosurveillance",
    "shortTitle": "Vidéosurveillance",
    "seoTitle": "Installation vidéosurveillance — JM-ELEC 91",
    "seoDescription": "Installation de systèmes de vidéosurveillance HD pour particuliers et professionnels. Caméras IP, enregistrement, accès smartphone. Conformité CNIL. Électricien en Essonne.",
    "description": "Installation de systèmes de vidéosurveillance HD : caméras IP, enregistrement local, consultation à distance sur smartphone. Respect de la réglementation CNIL.",
    "heroSubtitle": "Surveillance HD — accès à distance",
    "icon": "📹",
    "problems": [
      "Besoin de surveiller son domicile ou son local à distance, en temps réel.",
      "Cambriolages ou incivilités récurrentes dans le voisinage.",
      "Absence de preuves exploitables en cas d'incident (vol, dégradation, litige).",
      "Système existant obsolète : basse résolution, pas d'accès distant, enregistreur défaillant.",
      "Méconnaissance de la réglementation (CNIL, droit à l'image, affichage obligatoire).",
      "Besoin de surveiller des accès multiples (entrée, garage, jardin, local technique)."
    ],
    "solution": "Nous installons des systèmes de vidéosurveillance HD (2 MP, 4 MP ou 4K) avec enregistrement local (NVR) et accès à distance via smartphone. Caméras intérieures et extérieures (IP66/IP67), vision nocturne infrarouge, détection de mouvement avec alertes. Le tout dans le strict respect de la réglementation CNIL.",
    "editorial": "La vidéosurveillance est devenue un outil de sécurité incontournable, aussi bien pour les particuliers que pour les professionnels. Les technologies actuelles offrent une qualité d'image remarquable (jusqu'à 4K), une vision nocturne en infrarouge efficace, et un accès à distance depuis n'importe où via smartphone.\n\nMais la vidéosurveillance ne se résume pas à fixer des caméras sur un mur. Un système efficace repose sur un positionnement réfléchi des caméras (champs de vision complémentaires, sans angle mort), un câblage réseau structuré (câble Ethernet Cat6 pour une transmission fiable), un enregistreur NVR dimensionné pour la durée de stockage souhaitée, et un paramétrage fin de la détection de mouvement (pour éviter les alertes intempestives).\n\nLa réglementation encadre strictement la vidéosurveillance : chez un particulier, les caméras ne doivent pas filmer la voie publique ni les propriétés voisines. En entreprise ou commerce, les salariés doivent être informés, le système déclaré, et un affichage visible doit signaler la présence de caméras. Nous vous accompagnons sur ces obligations pour garantir la conformité de votre installation.\n\nChez JM-ELEC 91, nous installons des systèmes de marque fiable (Hikvision, Dahua, Axis) avec un câblage réseau professionnel (câble Cat6, connecteurs sertis, baie de brassage si nécessaire). Chaque installation est documentée et le client formé à l'utilisation de son système.",
    "tips": [
      "Préférez les caméras IP (réseau Ethernet) aux systèmes analogiques : meilleure résolution, plus de fonctionnalités, et évolutivité.",
      "Un enregistreur NVR avec disque de 2 To stocke environ 30 jours d'enregistrement pour 4 caméras en HD — suffisant pour la plupart des usages.",
      "Positionnez une caméra en hauteur (3-4 m) orientée vers le bas : meilleur angle de vue et plus difficile à atteindre pour un intrus.",
      "La détection de mouvement avec zones configurables évite les alertes intempestives (passage de voitures, arbres qui bougent).",
      "En entreprise, affichez un panneau visible à l'entrée signalant la présence de vidéosurveillance — c'est une obligation légale."
    ],
    "whyUs": "Nous installons des systèmes de vidéosurveillance professionnels avec un câblage réseau structuré (pas de wifi pour les caméras fixes). Notre expertise en électricité garantit une alimentation fiable (PoE) et une intégration propre dans l'installation existante. Nous vous accompagnons sur la conformité CNIL pour éviter tout risque juridique.",
    "process": [
      {
        "step": "Audit",
        "detail": "Identification des zones à surveiller, des angles de vue nécessaires, des contraintes (distance, éclairage, exposition). Évaluation des besoins en stockage et en accès distant."
      },
      {
        "step": "Conception",
        "detail": "Choix des caméras (résolution, focale, intérieur/extérieur), de l'enregistreur (NVR, capacité de stockage), du réseau (câblage Cat6, alimentation PoE). Plan d'implantation."
      },
      {
        "step": "Installation",
        "detail": "Pose des caméras sur supports adaptés, tirage du câble réseau Cat6, installation de l'enregistreur NVR, raccordement et mise sous tension."
      },
      {
        "step": "Configuration",
        "detail": "Paramétrage de l'enregistrement (continu, sur détection, horaires), des zones de détection de mouvement, des alertes smartphone, de l'accès distant sécurisé."
      },
      {
        "step": "Conformité",
        "detail": "Conseil sur les obligations légales : affichage, information des salariés (en entreprise), orientation des caméras (pas de voie publique ni de voisinage). Documentation de conformité."
      }
    ],
    "proofs": [
      "Caméras HD, 4 MP et 4K",
      "Enregistrement local NVR — pas de cloud obligatoire",
      "Accès smartphone sécurisé",
      "Câblage réseau professionnel (Cat6, PoE)",
      "Accompagnement conformité CNIL",
      "Assurance décennale"
    ],
    "faq": [
      {
        "question": "Ai-je le droit d'installer des caméras chez moi ?",
        "answer": "Oui, à condition qu'elles ne filment que votre propriété : pas la voie publique, pas les propriétés voisines. Les images sont à votre usage personnel. En cas d'incident, elles peuvent être transmises aux forces de l'ordre."
      },
      {
        "question": "Combien de caméras faut-il pour une maison ?",
        "answer": "En général, 3 à 6 caméras couvrent les points d'accès principaux d'une maison individuelle : entrée, garage, jardin arrière, portail. Le nombre exact dépend de la configuration de votre propriété."
      },
      {
        "question": "Combien coûte une installation de vidéosurveillance ?",
        "answer": "Pour une maison (4 caméras HD + NVR + câblage) : de 2 000 € à 4 000 € TTC. Pour un commerce (6-8 caméras + NVR + câblage structuré) : de 3 500 € à 7 000 € TTC. Les systèmes 4K et les installations complexes sont plus onéreux."
      },
      {
        "question": "Wifi ou câble pour les caméras ?",
        "answer": "Nous recommandons le câble Ethernet (Cat6) pour les caméras fixes : fiabilité de transmission, alimentation PoE (un seul câble pour l'image et l'alimentation), pas d'interférence wifi. Le wifi est acceptable pour les caméras d'appoint ou temporaires."
      },
      {
        "question": "Quelles obligations en entreprise ?",
        "answer": "Information préalable des salariés et des représentants du personnel, affichage visible à l'entrée, déclaration au registre des traitements (RGPD), limitation de la durée de conservation (30 jours maximum sauf exception). Nous vous fournissons un guide de conformité."
      }
    ],
    "relatedZones": [
      "le-plessis-pate",
      "bondoufle",
      "marolles-en-hurepoix",
      "arpajon",
      "vaucresson"
    ]
  },
  {
    "slug": "pac-alimentation-electrique",
    "title": "PAC — Alimentation et raccordements électriques",
    "shortTitle": "PAC",
    "seoTitle": "Alimentation électrique pompe à chaleur — JM-ELEC 91",
    "seoDescription": "Raccordement électrique de pompe à chaleur (PAC) en Essonne et Île-de-France. Ligne dédiée, protection tableau, vérification puissance compteur. Coordination avec installateur CVC.",
    "description": "Raccordement électrique de votre pompe à chaleur : ligne dédiée, protection au tableau, vérification de la puissance disponible. Coordination avec votre installateur CVC.",
    "heroSubtitle": "Raccordement conforme — puissance adaptée",
    "icon": "❄️",
    "problems": [
      "Installation de PAC nécessitant une alimentation électrique dédiée que votre tableau actuel ne prévoit pas.",
      "Puissance disponible au compteur insuffisante pour supporter la PAC en plus de l'installation existante.",
      "Tableau électrique saturé — plus de place pour ajouter le circuit dédié à la PAC.",
      "Besoin de coordination avec l'installateur CVC pour un raccordement dans les règles.",
      "Câble à tirer sur une longue distance entre le tableau et l'unité extérieure de la PAC.",
      "Incertitude sur la section de câble nécessaire et les protections à installer."
    ],
    "solution": "Nous assurons la partie électrique du raccordement PAC : vérification de la puissance disponible au compteur, dimensionnement de la ligne dédiée (section de câble adaptée à la puissance et à la distance), ajout de la protection au tableau (disjoncteur + différentiel), et raccordement en coordination avec votre installateur CVC. Si le tableau est saturé, nous ajoutons un coffret secondaire dédié.",
    "editorial": "Le raccordement électrique d'une pompe à chaleur est une intervention technique qui ne s'improvise pas. La PAC est un gros consommateur d'énergie (de 2 à 10 kW selon les modèles) qui nécessite une alimentation électrique dédiée, dimensionnée en fonction de sa puissance et de la distance entre le tableau et l'unité extérieure.\n\nLe câble doit être en section suffisante pour supporter le courant de démarrage de la PAC (qui peut être 3 à 5 fois supérieur au courant nominal). Un câble sous-dimensionné provoque des chutes de tension qui endommagent le compresseur et réduisent la durée de vie de l'appareil.\n\nLa protection au tableau doit également être adaptée : disjoncteur courbe D (pour supporter les courants de démarrage) et différentiel de type A ou de type B selon les préconisations du fabricant. Ces éléments ne sont pas interchangeables — un mauvais choix entraîne des déclenchements intempestifs ou une protection insuffisante.\n\nChez JM-ELEC 91, nous travaillons régulièrement en coordination avec des installateurs CVC (chauffage, ventilation, climatisation). Nous recevons les spécifications techniques de la PAC, dimensionnons l'alimentation électrique en conséquence, et nous coordonnons pour que le raccordement soit prêt au moment de la mise en service. Si la puissance du compteur ENEDIS est insuffisante, nous vous accompagnons dans la démarche de changement d'abonnement.",
    "tips": [
      "Avant l'installation de la PAC, faites vérifier la puissance de votre compteur : un passage de 6 kVA à 9 ou 12 kVA est souvent nécessaire.",
      "Demandez les spécifications électriques de la PAC à votre installateur CVC avant notre intervention : puissance, courant nominal, courant de démarrage, type de différentiel requis.",
      "Si le tableau principal est saturé, un coffret secondaire dédié à la PAC est une solution propre et conforme.",
      "Le câble d'alimentation de la PAC doit être protégé contre les UV s'il passe en extérieur — une gaine TPC enterrée est la meilleure solution.",
      "Profitez du raccordement PAC pour faire vérifier l'ensemble de votre tableau : c'est l'occasion de corriger d'éventuelles anomalies."
    ],
    "whyUs": "Nous avons l'habitude de travailler en coordination avec les installateurs CVC. Notre expérience nous permet de dimensionner précisément l'alimentation électrique de la PAC (section de câble, protection, puissance compteur) et d'anticiper les contraintes techniques (distance, passage de câble, capacité du tableau). Le raccordement est conforme aux préconisations du fabricant et aux normes en vigueur.",
    "process": [
      {
        "step": "Vérification",
        "detail": "Contrôle de la puissance disponible au compteur (rapport entre l'abonnement existant et la consommation + la PAC). Vérification de l'état du tableau et de la place disponible."
      },
      {
        "step": "Dimensionnement",
        "detail": "Calcul de la section de câble en fonction de la puissance de la PAC et de la distance. Choix de la protection (disjoncteur courbe D, différentiel type A ou B). Si le tableau est saturé, dimensionnement d'un coffret secondaire."
      },
      {
        "step": "Préparation",
        "detail": "Tirage de la ligne dédiée (dans gaine encastrée, en apparent, ou en tranchée extérieure selon le parcours). Ajout de la protection au tableau ou pose du coffret secondaire."
      },
      {
        "step": "Raccordement",
        "detail": "Branchement de la PAC en coordination avec l'installateur CVC. Vérification des serrages, des continuités et de la terre."
      },
      {
        "step": "Tests",
        "detail": "Vérification du fonctionnement électrique : mesure de la tension en charge, contrôle du courant de démarrage, test du différentiel. Mise en service validée avec l'installateur CVC."
      }
    ],
    "proofs": [
      "Coordination avec installateur CVC",
      "Ligne dédiée aux normes — section adaptée",
      "Vérification puissance compteur et accompagnement ENEDIS",
      "Assurance décennale",
      "Coffret secondaire si tableau saturé",
      "Tests de conformité avant mise en service"
    ],
    "faq": [
      {
        "question": "Faut-il augmenter la puissance de mon compteur ?",
        "answer": "Cela dépend de la puissance de la PAC et de votre consommation existante. Une PAC de 5 kW sur un compteur de 6 kVA nécessitera probablement un passage à 9 ou 12 kVA. Nous vérifions la puissance disponible lors de notre visite et vous conseillons si un changement est nécessaire. La démarche auprès d'ENEDIS est simple et nous pouvons vous accompagner."
      },
      {
        "question": "Pouvez-vous intervenir en coordination avec mon chauffagiste ?",
        "answer": "Oui, c'est notre fonctionnement habituel. Nous nous coordonnons avec l'installateur CVC pour que l'alimentation électrique soit prête au moment de la mise en service de la PAC. Il suffit de nous transmettre les spécifications techniques de l'appareil."
      },
      {
        "question": "Combien coûte le raccordement électrique d'une PAC ?",
        "answer": "De 400 € à 1 200 € HT selon la distance entre le tableau et la PAC, la nécessité d'un coffret secondaire, et la complexité du passage de câble. Un changement d'abonnement ENEDIS, si nécessaire, est facturé directement par ENEDIS (environ 40 €)."
      },
      {
        "question": "Mon tableau est plein, comment ajouter le circuit PAC ?",
        "answer": "Nous installons un coffret secondaire dédié, alimenté depuis le tableau principal. Ce coffret contient la protection spécifique de la PAC (disjoncteur + différentiel). C'est une solution propre, conforme et facilement accessible pour la maintenance."
      },
      {
        "question": "Quelle section de câble pour une PAC ?",
        "answer": "La section dépend de la puissance et de la distance. Pour une PAC de 5 kW en monophasé, 4 mm² jusqu'à 20 m, 6 mm² au-delà. Pour une PAC triphasée de 10 kW, 4 mm² jusqu'à 30 m. Le calcul exact tient compte des chutes de tension admissibles et du courant de démarrage."
      }
    ],
    "relatedZones": [
      "bretigny-sur-orge",
      "arpajon",
      "gif-sur-yvette",
      "leudeville",
      "saint-aubin"
    ]
  }
];

export function getService(slug: string): (ServiceData & { image: string }) | undefined {
  const s = services.find((service) => service.slug === slug);
  if (!s) return undefined;
  return { ...s, image: serviceDetailImages[s.slug] || "/images/services/tableau-electrique.jpg" };
}

export function getServiceImage(slug: string): string {
  return serviceImages[slug] || "/images/services/tableau-electrique.jpg";
}
