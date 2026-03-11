export interface ZoneData {
  slug: string;
  title: string;
  city: string;
  department: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  heroSubtitle: string;
  context: string;
  editorial?: string;
  servicesHighlight: string[];
  localInfo: string;
  faq: { question: string; answer: string }[];
  relatedServices: string[];
  isPremium?: boolean;
}

export const zones: ZoneData[] = [
  {
    "slug": "bretigny-sur-orge",
    "city": "Brétigny-sur-Orge",
    "department": "91",
    "title": "Électricien à Brétigny-sur-Orge",
    "seoTitle": "Électricien à Brétigny-sur-Orge (91) — JM-ELEC 91",
    "seoDescription": "Électricien professionnel à Brétigny-sur-Orge. Tableau électrique, dépannage, conformité, borne IRVE. 10 ans d'expérience, zone prioritaire. Devis gratuit sous 24 h.",
    "description": "Brétigny-sur-Orge est notre zone d'intervention prioritaire. Nous y réalisons des travaux électriques résidentiels et professionnels depuis plus de 10 ans.",
    "heroSubtitle": "Zone d'intervention prioritaire",
    "context": "Brétigny-sur-Orge est une commune dynamique de l'Essonne comptant environ 27 000 habitants. Son parc immobilier est très représentatif de ce que nous rencontrons quotidiennement : des pavillons des années 70-80 dans les quartiers résidentiels (La Fontaine, Les Maréchaux, Le Clos de la Ferme), des logements collectifs dans le centre-ville, et des constructions récentes dans les nouveaux quartiers autour de la gare RER C.\n\nLes pavillons anciens présentent des problématiques récurrentes : tableaux à fusibles porcelaine sans différentiel 30 mA, câblage en section insuffisante, absence de terre dans certaines pièces, et circuits sous-dimensionnés pour les usages modernes (plaque induction, borne de recharge, climatisation). Les constructions récentes génèrent des demandes différentes : installation de bornes IRVE, domotique, éclairage LED.",
    "editorial": "En tant qu'électricien basé en Essonne, Brétigny-sur-Orge est au cœur de notre zone d'activité. Nous y intervenons plusieurs fois par semaine et connaissons parfaitement le parc immobilier local. Les pavillons du quartier de La Fontaine et des Maréchaux, construits entre 1975 et 1985, sont nos chantiers les plus fréquents : remplacement de tableaux vétustes, ajout de différentiels, mise en sécurité avant vente.\n\nLa gare RER C de Brétigny et le projet de réaménagement du quartier Clause-Bois Badeau transforment progressivement la commune. Les nouveaux logements sont aux normes, mais les propriétaires de pavillons anciens ont tout intérêt à moderniser leur installation, autant pour la sécurité que pour la valeur du bien.\n\nNous avons réalisé de nombreux chantiers documentés à Brétigny : remplacement de tableaux, dépannages, installations de bornes IRVE pour les propriétaires de véhicules électriques. Notre proximité nous permet d'intervenir rapidement, souvent sous 24 à 48 h.",
    "servicesHighlight": [
      "Remplacement de tableau dans les pavillons anciens (années 70-80)",
      "Dépannage rapide — intervention sous 24 à 48 h",
      "Installation de bornes IRVE (certifié IRVE)",
      "Mise en sécurité avant vente ou location",
      "Rénovation électrique lors de travaux de modernisation"
    ],
    "localInfo": "Brétigny-sur-Orge fait partie de notre zone d'intervention prioritaire. Rendez-vous possible sous 48 h. Nous connaissons les particularités du parc immobilier local et travaillons régulièrement avec les agences immobilières du secteur pour les diagnostics et mises en sécurité avant vente.",
    "faq": [
      {
        "question": "Intervenez-vous rapidement à Brétigny-sur-Orge ?",
        "answer": "Oui, Brétigny fait partie de notre zone prioritaire. Rendez-vous habituellement sous 24 à 48 h. Pour les dépannages, nous faisons notre possible pour intervenir dans la journée selon notre planning."
      },
      {
        "question": "Connaissez-vous les particularités des pavillons de Brétigny ?",
        "answer": "Nous intervenons très régulièrement sur les pavillons des années 70-80 des quartiers résidentiels de Brétigny. Nous connaissons les problématiques courantes : tableaux à fusibles porcelaine, absence de différentiel 30 mA, circuits sous-dimensionnés, absence de terre dans certaines pièces."
      },
      {
        "question": "Combien coûte un remplacement de tableau à Brétigny ?",
        "answer": "Pour un pavillon standard de Brétigny (10 à 14 circuits), comptez entre 1 000 € et 2 000 € HT. Le devis est gratuit et détaillé, sans surprise."
      },
      {
        "question": "Installez-vous des bornes de recharge à Brétigny ?",
        "answer": "Oui, nous sommes certifiés IRVE et installons des bornes de recharge pour véhicules électriques dans les maisons individuelles de Brétigny. L'installation est éligible au crédit d'impôt de 300 €."
      },
      {
        "question": "Travaillez-vous avec les agences immobilières de Brétigny ?",
        "answer": "Oui, nous travaillons régulièrement avec les agences du secteur pour les mises en sécurité avant vente. Notre attestation de conformité est acceptée par les diagnostiqueurs pour un nouveau diagnostic favorable."
      }
    ],
    "relatedServices": [
      "remplacement-tableau-electrique",
      "depannage-electrique",
      "borne-recharge-irve",
      "mise-en-securite-conformite"
    ]
  },
  {
    "slug": "corbeil-essonnes",
    "city": "Corbeil-Essonnes",
    "department": "91",
    "title": "Électricien à Corbeil-Essonnes",
    "seoTitle": "Électricien à Corbeil-Essonnes (91) — JM-ELEC 91",
    "seoDescription": "Électricien à Corbeil-Essonnes. Dépannage, tableau électrique, conformité. Particuliers et professionnels. Devis gratuit.",
    "description": "Interventions pour particuliers et professionnels à Corbeil-Essonnes : dépannage, mise en conformité, rénovation.",
    "heroSubtitle": "Particuliers et professionnels",
    "context": "Corbeil-Essonnes présente un tissu urbain dense avec un patrimoine bâti varié. Les immeubles anciens du centre-ville nécessitent souvent des mises en sécurité, tandis que les zones d'activité génèrent des besoins en installation professionnelle.\n\nLa ville compte environ 52 000 habitants répartis entre le centre historique, les quartiers résidentiels des Tarterêts et de Montconseil, et les zones pavillonnaires périphériques. Chaque secteur présente des besoins électriques distincts que nous connaissons bien.",
    "editorial": "Corbeil-Essonnes est une ville aux multiples facettes : un centre-ville historique avec des immeubles anciens, des quartiers résidentiels, et des zones d'activité économique. Cette diversité génère des besoins électriques variés que nous connaissons bien.\n\nDans le centre-ville, les immeubles anciens présentent des contraintes spécifiques : gaines étroites, murs en pierre, accès difficile, coordination avec la copropriété. Notre expérience du bâti ancien nous permet d'intervenir efficacement dans ces contextes.\n\nPour les commerces et professionnels de Corbeil, nous proposons des interventions rapides car chaque heure d'arrêt représente un manque à gagner. Nous avons notamment réalisé un dépannage d'urgence pour une boulangerie du centre-ville, rétabli en 2 heures.\n\nLes quartiers pavillonnaires en périphérie de Corbeil présentent des problématiques similaires à celles de Brétigny : tableaux vétustes, circuits sous-dimensionnés, absence de différentiels. Nous y réalisons régulièrement des remises aux normes complètes.",
    "servicesHighlight": [
      "Mise en sécurité d'installations anciennes en immeubles",
      "Dépannage rapide pour particuliers et professionnels",
      "Remise aux normes avant vente ou location",
      "Intervention en immeubles anciens du centre-ville",
      "Installation et modernisation pour commerces"
    ],
    "localInfo": "Nous connaissons le secteur et les contraintes liées au bâti ancien du centre-ville de Corbeil-Essonnes. Intervention sous 48 à 72 h pour les travaux planifiés, plus rapide pour les dépannages selon disponibilité.",
    "faq": [
      {
        "question": "Intervenez-vous en centre-ville de Corbeil ?",
        "answer": "Oui, y compris dans les immeubles anciens où les contraintes d'accès et de vétusté sont plus marquées. Nous avons l'habitude de travailler dans ce type de bâti."
      },
      {
        "question": "Pouvez-vous intervenir pour un commerce à Corbeil ?",
        "answer": "Oui, nous travaillons pour les professionnels avec les mêmes exigences de qualité et de conformité. Nous comprenons l'urgence quand un commerce est à l'arrêt."
      },
      {
        "question": "Quel délai pour un dépannage à Corbeil-Essonnes ?",
        "answer": "Pour un dépannage, nous faisons notre maximum pour intervenir dans la journée ou le lendemain. Pour les travaux planifiés, comptez 48 à 72 h pour un rendez-vous."
      },
      {
        "question": "Réalisez-vous des mises en conformité à Corbeil ?",
        "answer": "Oui, c'est l'une de nos interventions les plus fréquentes à Corbeil. Nous corrigeons les anomalies relevées au diagnostic et remettons une attestation de conformité."
      },
      {
        "question": "Intervenez-vous dans les copropriétés de Corbeil ?",
        "answer": "Oui, nous intervenons dans les parties privatives des copropriétés. Pour les parties communes, nous pouvons travailler en coordination avec le syndic."
      }
    ],
    "relatedServices": [
      "mise-en-securite-conformite",
      "depannage-electrique",
      "remplacement-tableau-electrique",
      "renovation-electrique"
    ]
  },
  {
    "slug": "saint-michel-sur-orge",
    "city": "Saint-Michel-sur-Orge",
    "department": "91",
    "title": "Électricien à Saint-Michel-sur-Orge",
    "seoTitle": "Électricien à Saint-Michel-sur-Orge (91) — JM-ELEC 91",
    "seoDescription": "Électricien à Saint-Michel-sur-Orge. Remplacement de tableau, dépannage, mise en conformité. Pavillons et appartements. Devis gratuit.",
    "description": "Interventions régulières à Saint-Michel-sur-Orge : tableaux, dépannage, conformité pour les pavillons et appartements du secteur.",
    "heroSubtitle": "Interventions régulières sur le secteur",
    "context": "Saint-Michel-sur-Orge compte environ 20 000 habitants et un parc immobilier composé principalement de pavillons des années 60-80 et de résidences collectives. Les installations électriques de ces logements nécessitent fréquemment des remises aux normes, notamment l'ajout de différentiels et le remplacement de tableaux obsolètes.\n\nLa commune est desservie par la gare RER C, ce qui en fait un secteur résidentiel prisé. Les transactions immobilières y sont régulières, ce qui génère des demandes de mise en sécurité avant vente.",
    "editorial": "Saint-Michel-sur-Orge est une commune que nous connaissons bien. Les pavillons des années 60-80 constituent la majorité de nos interventions dans ce secteur. Ces constructions, bien que solides, ont souvent conservé leur installation électrique d'origine : tableau à fusibles, fils en aluminium dans certains cas, absence de terre dans les pièces humides.\n\nLe marché immobilier actif à Saint-Michel génère de nombreuses demandes de mise en sécurité. Quand un diagnostic immobilier relève des anomalies électriques, les propriétaires nous contactent pour corriger les points relevés et obtenir une attestation de conformité qui permettra un nouveau diagnostic favorable.\n\nNous intervenons également dans les résidences collectives pour des travaux en parties privatives : remplacement de tableau, ajout de prises, modernisation de l'éclairage. La coordination avec la copropriété est parfois nécessaire et nous avons l'habitude de ces démarches.",
    "servicesHighlight": [
      "Remplacement de tableaux dans les pavillons des années 60-80",
      "Mise en conformité avant vente immobilière",
      "Dépannage résidentiel rapide",
      "Ajout de circuits pour équipements modernes (induction, clim)",
      "Intervention en résidences collectives (parties privatives)"
    ],
    "localInfo": "Commune limitrophe de notre zone prioritaire, nous y intervenons régulièrement avec des délais courts. Rendez-vous habituellement sous 48 à 72 h.",
    "faq": [
      {
        "question": "Intervenez-vous à Saint-Michel-sur-Orge ?",
        "answer": "Oui, Saint-Michel-sur-Orge fait partie de notre zone d'intervention courante. Rendez-vous sous 48 à 72 h."
      },
      {
        "question": "Combien coûte un remplacement de tableau à Saint-Michel ?",
        "answer": "Pour un pavillon standard avec 10 à 14 circuits, comptez entre 1 000 € et 2 000 € HT selon la complexité. Devis gratuit et détaillé."
      },
      {
        "question": "Pouvez-vous intervenir avant une vente immobilière ?",
        "answer": "Oui, c'est une demande fréquente. Nous corrigeons les anomalies du diagnostic et remettons une attestation de conformité."
      },
      {
        "question": "Faites-vous l'ajout de prises dans un pavillon ancien ?",
        "answer": "Oui, nous ajoutons des prises, des circuits dédiés (induction, four, sèche-linge) en respectant la norme NFC 15-100."
      },
      {
        "question": "Intervenez-vous aussi en appartement à Saint-Michel ?",
        "answer": "Oui, nous réalisons des travaux en parties privatives dans les résidences collectives, en coordination avec le syndic si nécessaire."
      }
    ],
    "relatedServices": [
      "remplacement-tableau-electrique",
      "mise-en-securite-conformite",
      "depannage-electrique"
    ]
  },
  {
    "slug": "sainte-genevieve-des-bois",
    "city": "Sainte-Geneviève-des-Bois",
    "department": "91",
    "title": "Électricien à Sainte-Geneviève-des-Bois",
    "seoTitle": "Électricien à Sainte-Geneviève-des-Bois (91) — JM-ELEC 91",
    "seoDescription": "Électricien à Sainte-Geneviève-des-Bois. Tableau, dépannage, conformité, alarme. Devis gratuit sous 24 h.",
    "description": "Interventions à Sainte-Geneviève-des-Bois pour les particuliers : tableaux, dépannage, alarme et contrôle d'accès.",
    "heroSubtitle": "Électricité résidentielle et sécurité",
    "context": "Sainte-Geneviève-des-Bois est une commune de plus de 35 000 habitants, avec un parc immobilier diversifié allant des pavillons des années 60 aux résidences récentes. Les quartiers du Donjon, de la Croix-Blanche et du centre-ville présentent chacun des caractéristiques différentes.\n\nLa commune connaît un taux de cambriolages supérieur à la moyenne départementale, ce qui explique la forte demande en systèmes de sécurité : alarmes intrusion, interphonie, contrôle d'accès.",
    "editorial": "Sainte-Geneviève-des-Bois fait partie des communes où nous intervenons le plus souvent en dehors de notre zone prioritaire. La taille de la ville et la diversité de son parc immobilier génèrent des demandes variées.\n\nLes pavillons des quartiers résidentiels (Le Donjon, Perray-Vaucluse) sont souvent équipés d'installations des années 60-70 qui nécessitent une modernisation : tableau, mise à la terre, protection différentielle. Les résidences collectives du centre-ville et de la Croix-Blanche génèrent des besoins en parties privatives.\n\nLa sécurité est une préoccupation croissante à Sainte-Geneviève. Nous installons régulièrement des alarmes intrusion et des systèmes de vidéosurveillance pour les particuliers qui souhaitent protéger leur domicile. Notre approche : un diagnostic des points d'accès, une solution adaptée au budget, et une installation propre.",
    "servicesHighlight": [
      "Mise en sécurité des installations anciennes (quartiers résidentiels)",
      "Installation d'alarme intrusion et vidéosurveillance",
      "Interphonie et contrôle d'accès",
      "Remplacement de tableau électrique",
      "Dépannage résidentiel"
    ],
    "localInfo": "Commune desservie régulièrement, avec une bonne connaissance du parc immobilier local. Délai de rendez-vous : 48 à 72 h en général.",
    "faq": [
      {
        "question": "Proposez-vous l'installation d'alarme à Sainte-Geneviève ?",
        "answer": "Oui, nous installons des systèmes d'alarme intrusion pour les maisons individuelles et les appartements du secteur. Diagnostic gratuit des points d'accès."
      },
      {
        "question": "Quel est le délai d'intervention à Sainte-Geneviève-des-Bois ?",
        "answer": "En général, nous proposons un rendez-vous sous 48 à 72 h. Pour les dépannages urgents, nous faisons notre possible pour intervenir plus rapidement."
      },
      {
        "question": "Intervenez-vous dans les résidences collectives ?",
        "answer": "Oui, nous réalisons des travaux en parties privatives (tableau, prises, éclairage) dans les résidences de Sainte-Geneviève."
      },
      {
        "question": "Combien coûte une installation d'alarme ?",
        "answer": "Une installation d'alarme pour une maison individuelle démarre à environ 800 € HT, détecteurs et pose compris. Le devis est gratuit."
      },
      {
        "question": "Faites-vous aussi l'interphonie ?",
        "answer": "Oui, nous installons et remplaçons les systèmes d'interphonie et de visiophonie, aussi bien en maison individuelle qu'en copropriété."
      }
    ],
    "relatedServices": [
      "alarme",
      "interphonie-controle-acces",
      "remplacement-tableau-electrique",
      "depannage-electrique"
    ]
  },
  {
    "slug": "le-plessis-pate",
    "city": "Le Plessis-Pâté",
    "department": "91",
    "title": "Électricien au Plessis-Pâté",
    "seoTitle": "Électricien au Plessis-Pâté (91) — JM-ELEC 91",
    "seoDescription": "Électricien au Plessis-Pâté. Dépannage, tableau, vidéosurveillance. Intervention rapide. Devis gratuit.",
    "description": "Interventions au Plessis-Pâté : dépannage, tableaux électriques et systèmes de sécurité pour les résidents.",
    "heroSubtitle": "Proximité et réactivité",
    "context": "Le Plessis-Pâté est une petite commune résidentielle de l'Essonne d'environ 4 000 habitants. L'habitat y est principalement pavillonnaire, avec des constructions des années 80-90 et des lotissements plus récents.\n\nLa proximité de la base aérienne 217 et de la zone d'activité de Brétigny-Plessis influence le tissu local. Les résidents sont souvent des familles propriétaires qui souhaitent entretenir et moderniser leur installation électrique.",
    "editorial": "Le Plessis-Pâté est l'une des communes les plus proches de notre base d'intervention. Cette proximité nous permet de proposer des délais très courts, souvent dès le lendemain pour un dépannage.\n\nLes pavillons de la commune, construits pour la plupart dans les années 80-90, commencent à montrer des signes de vieillissement électrique : disjoncteurs qui sautent de plus en plus souvent, prises qui ne tiennent plus, éclairage qui scintille. Ce sont des signaux qu'il ne faut pas ignorer.\n\nNous réalisons également des installations de vidéosurveillance pour les résidents du Plessis-Pâté. La commune étant relativement isolée le soir, plusieurs propriétaires ont choisi d'équiper leur domicile de caméras et d'un enregistreur avec accès smartphone.",
    "servicesHighlight": [
      "Dépannage électrique rapide — souvent sous 24 h",
      "Installation vidéosurveillance pour maisons individuelles",
      "Remplacement de tableau électrique",
      "Ajout de circuits pour nouveaux équipements",
      "Mise en sécurité avant vente"
    ],
    "localInfo": "Commune très proche de notre base, nous y intervenons avec une grande réactivité. Rendez-vous souvent possible dès le lendemain.",
    "faq": [
      {
        "question": "Intervenez-vous rapidement au Plessis-Pâté ?",
        "answer": "Oui, c'est une commune très proche de notre base. Nous pouvons souvent intervenir sous 24 à 48 h, parfois dès le lendemain."
      },
      {
        "question": "Installez-vous la vidéosurveillance au Plessis-Pâté ?",
        "answer": "Oui, nous installons des systèmes de vidéosurveillance HD avec enregistreur et accès smartphone pour les maisons du secteur."
      },
      {
        "question": "Mon tableau disjoncte souvent, que faire ?",
        "answer": "Des déclenchements fréquents indiquent un problème : surcharge, défaut d'isolement ou tableau sous-dimensionné. Nous réalisons un diagnostic pour identifier la cause et vous proposer une solution adaptée."
      },
      {
        "question": "Combien coûte un remplacement de tableau au Plessis-Pâté ?",
        "answer": "Pour un pavillon standard (10 à 14 circuits), comptez entre 1 000 € et 2 000 € HT. Devis gratuit et sans engagement."
      },
      {
        "question": "Faites-vous aussi de l'éclairage extérieur ?",
        "answer": "Oui, nous installons des éclairages extérieurs (spots, appliques, balisage) pour sécuriser les abords de votre maison."
      }
    ],
    "relatedServices": [
      "depannage-electrique",
      "video-surveillance",
      "remplacement-tableau-electrique"
    ]
  },
  {
    "slug": "arpajon",
    "city": "Arpajon",
    "department": "91",
    "title": "Électricien à Arpajon",
    "seoTitle": "Électricien à Arpajon (91) — JM-ELEC 91",
    "seoDescription": "Électricien à Arpajon. Dépannage, conformité, rénovation. Particuliers et commerces. Devis gratuit.",
    "description": "Interventions à Arpajon pour particuliers et commerces : dépannage, conformité, rénovation électrique.",
    "heroSubtitle": "Particuliers et commerces",
    "context": "Arpajon, sous-préfecture de l'Essonne, est une ville de marché dynamique d'environ 11 000 habitants. Le centre-bourg mêle habitat ancien (immeubles du XIXe, maisons de ville) et commerces de proximité. En périphérie, les pavillons des années 70-80 constituent l'essentiel du parc résidentiel.\n\nLe marché couvert d'Arpajon et les commerces du centre génèrent des besoins spécifiques : mise en conformité de locaux professionnels, dépannage rapide pour éviter les fermetures.",
    "editorial": "Arpajon est une commune où nous intervenons pour des profils variés : particuliers en pavillon, commerçants du centre-ville, propriétaires d'immeubles anciens. Cette diversité nous permet de mobiliser l'ensemble de nos compétences.\n\nLe centre-bourg d'Arpajon compte de nombreux immeubles anciens dont les installations électriques datent de plusieurs décennies. Les mises en conformité y sont fréquentes, que ce soit pour la sécurité des occupants ou en vue d'une transaction immobilière.\n\nPour les commerces, nous comprenons l'urgence d'un dépannage : un magasin sans électricité, c'est un jour de chiffre d'affaires perdu. Nous nous organisons pour intervenir rapidement et limiter l'interruption d'activité.\n\nLes pavillons en périphérie d'Arpajon présentent les mêmes problématiques que partout en Essonne sud : tableaux vétustes, circuits sous-dimensionnés, absence de différentiels. Nous les modernisons dans les règles de l'art.",
    "servicesHighlight": [
      "Dépannage électrique pour particuliers et professionnels",
      "Mise en conformité de locaux commerciaux",
      "Rénovation électrique de pavillons",
      "Remplacement de tableaux obsolètes",
      "Installation d'éclairage pour commerces"
    ],
    "localInfo": "Arpajon est dans notre zone d'intervention courante. Nous y intervenons pour les particuliers et les professionnels avec des délais de 48 à 72 h.",
    "faq": [
      {
        "question": "Intervenez-vous pour les commerces d'Arpajon ?",
        "answer": "Oui, nous réalisons des interventions pour les commerces et locaux professionnels d'Arpajon : dépannage, mise en conformité, installation d'éclairage."
      },
      {
        "question": "Quel délai pour un dépannage à Arpajon ?",
        "answer": "Pour un dépannage, nous faisons notre maximum pour intervenir dans la journée ou le lendemain. Pour les travaux planifiés, rendez-vous sous 48 à 72 h."
      },
      {
        "question": "Faites-vous la mise en conformité d'un local commercial ?",
        "answer": "Oui, nous réalisons la mise en conformité électrique des locaux commerciaux selon les normes en vigueur, avec délivrance d'une attestation."
      },
      {
        "question": "Les immeubles anciens du centre sont-ils plus complexes ?",
        "answer": "Oui, ils présentent des contraintes spécifiques (gaines étroites, murs épais, réseaux anciens) que nous savons gérer grâce à notre expérience."
      },
      {
        "question": "Proposez-vous des devis gratuits à Arpajon ?",
        "answer": "Oui, tous nos devis sont gratuits, détaillés et sans engagement. Nous nous déplaçons pour évaluer votre besoin sur place."
      }
    ],
    "relatedServices": [
      "depannage-electrique",
      "mise-en-securite-conformite",
      "renovation-electrique",
      "remplacement-tableau-electrique"
    ]
  },
  {
    "slug": "saint-germain-les-arpajon",
    "city": "Saint-Germain-lès-Arpajon",
    "department": "91",
    "title": "Électricien à Saint-Germain-lès-Arpajon",
    "seoTitle": "Électricien à Saint-Germain-lès-Arpajon (91) — JM-ELEC 91",
    "seoDescription": "Électricien à Saint-Germain-lès-Arpajon. Tableau, dépannage, borne IRVE. Devis gratuit.",
    "description": "Interventions à Saint-Germain-lès-Arpajon : tableaux électriques, dépannage et bornes de recharge.",
    "heroSubtitle": "Interventions résidentielles",
    "context": "Saint-Germain-lès-Arpajon est une commune résidentielle d'environ 9 000 habitants, voisine d'Arpajon. Le parc pavillonnaire des années 70-90 domine largement l'habitat local.\n\nLes propriétaires de ces pavillons sont de plus en plus nombreux à faire installer des bornes de recharge pour véhicules électriques. C'est une tendance forte que nous accompagnons grâce à notre certification IRVE.",
    "editorial": "Saint-Germain-lès-Arpajon est une commune où nous intervenons régulièrement, souvent en complément de chantiers à Arpajon ou Brétigny. Les pavillons y sont bien entretenus mais leurs installations électriques montrent leur âge.\n\nUn sujet revient souvent : l'installation de bornes de recharge. Les résidents de Saint-Germain, souvent propriétaires de maisons avec garage, sont nombreux à passer au véhicule électrique. En tant qu'électricien certifié IRVE, nous installons des bornes 7 kW ou 22 kW adaptées à chaque situation, avec ligne dédiée depuis le tableau.\n\nLe remplacement de tableau est notre autre intervention fréquente à Saint-Germain. Les tableaux des années 70-80 n'ont pas été conçus pour les usages actuels : plaque induction, sèche-linge, borne de recharge. Il faut adapter la puissance et la protection.",
    "servicesHighlight": [
      "Remplacement de tableau électrique",
      "Installation de bornes IRVE (certification IRVE)",
      "Dépannage résidentiel",
      "Ajout de circuits pour nouveaux usages",
      "Mise en conformité avant vente"
    ],
    "localInfo": "Commune voisine de notre zone prioritaire, délais d'intervention courts — rendez-vous habituellement sous 48 h.",
    "faq": [
      {
        "question": "Installez-vous des bornes IRVE à Saint-Germain ?",
        "answer": "Oui, en tant qu'électricien certifié IRVE, nous installons des bornes de recharge dans les maisons individuelles du secteur. L'installation est éligible au crédit d'impôt de 300 €."
      },
      {
        "question": "Mon tableau est ancien, faut-il le changer ?",
        "answer": "Si votre tableau a des fusibles porcelaine, pas de différentiel 30 mA, ou si les disjoncteurs sautent régulièrement, un remplacement est recommandé. Nous réalisons un diagnostic gratuit."
      },
      {
        "question": "Quel est le délai d'intervention à Saint-Germain ?",
        "answer": "Rendez-vous habituellement sous 48 h pour les travaux planifiés. Dépannage plus rapide selon disponibilité."
      },
      {
        "question": "Peut-on installer une borne si le tableau est ancien ?",
        "answer": "Dans la plupart des cas, il faut d'abord adapter le tableau (ajout d'un disjoncteur et d'un différentiel dédiés). Nous intégrons cette étape dans le devis borne IRVE."
      },
      {
        "question": "Le devis est-il gratuit ?",
        "answer": "Oui, le devis est toujours gratuit, détaillé ligne par ligne, et sans engagement."
      }
    ],
    "relatedServices": [
      "remplacement-tableau-electrique",
      "depannage-electrique",
      "borne-recharge-irve",
      "mise-en-securite-conformite"
    ]
  },
  {
    "slug": "marolles-en-hurepoix",
    "city": "Marolles-en-Hurepoix",
    "department": "91",
    "title": "Électricien à Marolles-en-Hurepoix",
    "seoTitle": "Électricien à Marolles-en-Hurepoix (91) — JM-ELEC 91",
    "seoDescription": "Électricien à Marolles-en-Hurepoix. Dépannage, tableau, vidéosurveillance. Devis gratuit.",
    "description": "Interventions à Marolles-en-Hurepoix pour les particuliers : tableaux, dépannage et sécurité.",
    "heroSubtitle": "Électricité et sécurité résidentielle",
    "context": "Marolles-en-Hurepoix est une commune résidentielle d'environ 10 000 habitants, à mi-chemin entre Brétigny et Arpajon. Le parc immobilier est composé principalement de pavillons individuels, avec quelques lotissements récents.\n\nLa commune conserve un caractère semi-rural qui attire les familles. Les propriétés sont souvent pourvues de jardins, ce qui génère des besoins en éclairage extérieur et en sécurisation (vidéosurveillance, alarme).",
    "editorial": "Marolles-en-Hurepoix est une commune où nous aimons intervenir : les propriétaires sont souvent impliqués dans l'entretien de leur maison et comprennent l'importance d'une installation électrique sûre et moderne.\n\nLes pavillons de Marolles datent majoritairement des années 80-90. Leurs installations sont fonctionnelles mais commencent à montrer des faiblesses : prises qui chauffent, disjoncteurs qui se déclenchent sous charge, éclairage vieillissant. Autant de signaux qui justifient un diagnostic.\n\nLa vidéosurveillance est un sujet récurrent à Marolles. Les propriétés étant souvent en retrait de la route, avec un jardin, les résidents souhaitent pouvoir surveiller leur domicile à distance. Nous installons des systèmes HD avec enregistreur et accès smartphone, discrets et efficaces.",
    "servicesHighlight": [
      "Remplacement de tableau électrique",
      "Installation de vidéosurveillance HD",
      "Dépannage résidentiel",
      "Éclairage extérieur et balisage de jardin",
      "Mise en sécurité avant vente"
    ],
    "localInfo": "Commune desservie régulièrement depuis notre base en Essonne. Rendez-vous sous 48 à 72 h.",
    "faq": [
      {
        "question": "Proposez-vous la vidéosurveillance à Marolles ?",
        "answer": "Oui, nous installons des systèmes de vidéosurveillance HD pour les maisons individuelles du secteur. Caméras extérieures, enregistreur, accès smartphone."
      },
      {
        "question": "Mon pavillon date des années 80, faut-il refaire l'électricité ?",
        "answer": "Pas forcément tout refaire, mais un diagnostic permet d'identifier les points critiques : tableau, terre, différentiels, sections de câble. Nous vous proposons des travaux ciblés et proportionnés."
      },
      {
        "question": "Faites-vous l'éclairage de jardin ?",
        "answer": "Oui, nous concevons et installons des éclairages extérieurs : spots encastrés, balisage d'allée, projecteurs, appliques. Le tout en LED basse consommation."
      },
      {
        "question": "Quel est votre délai d'intervention à Marolles ?",
        "answer": "Rendez-vous habituellement sous 48 à 72 h. Dépannage plus rapide selon disponibilité."
      },
      {
        "question": "Vos devis sont-ils gratuits ?",
        "answer": "Oui, tous nos devis sont gratuits, détaillés et sans engagement. Déplacement compris."
      }
    ],
    "relatedServices": [
      "remplacement-tableau-electrique",
      "video-surveillance",
      "depannage-electrique",
      "eclairage-interieur-exterieur"
    ]
  },
  {
    "slug": "leudeville",
    "city": "Leudeville",
    "department": "91",
    "title": "Électricien à Leudeville",
    "seoTitle": "Électricien à Leudeville (91) — JM-ELEC 91",
    "seoDescription": "Électricien à Leudeville. Tableau, dépannage, raccordement PAC. Devis gratuit.",
    "description": "Interventions à Leudeville : tableaux électriques, dépannage et raccordement de pompes à chaleur.",
    "heroSubtitle": "Électricité rurale et résidentielle",
    "context": "Leudeville est une petite commune rurale de l'Essonne d'environ 1 600 habitants. L'habitat y est exclusivement pavillonnaire, avec des maisons individuelles sur des parcelles souvent généreuses.\n\nBeaucoup de propriétaires de Leudeville font installer des pompes à chaleur pour remplacer leur ancien chauffage (fioul ou électrique). Le raccordement électrique de la PAC nécessite une adaptation du tableau et une ligne dédiée.",
    "editorial": "Leudeville est une commune rurale où les maisons individuelles dominent largement. Les propriétaires y sont souvent attachés à leur bien et investissent dans sa modernisation.\n\nLe raccordement de pompes à chaleur est l'une de nos interventions les plus fréquentes à Leudeville. Le passage du fioul à la PAC est un choix économique et écologique, mais il nécessite une adaptation électrique sérieuse : ligne dédiée en section adaptée, protection au tableau, parfois augmentation de la puissance du compteur auprès d'ENEDIS.\n\nNous travaillons en coordination avec les chauffagistes du secteur pour assurer un raccordement propre et conforme. Notre partie se concentre sur l'électricité : tirage de câble, protection, mise à la terre de l'unité extérieure, vérification de la puissance disponible.",
    "servicesHighlight": [
      "Raccordement électrique de pompe à chaleur (PAC)",
      "Remplacement de tableau électrique",
      "Dépannage résidentiel",
      "Adaptation de puissance compteur ENEDIS",
      "Mise en sécurité des installations anciennes"
    ],
    "localInfo": "Commune proche de notre zone d'intervention, nous y intervenons avec réactivité. Rendez-vous sous 48 à 72 h.",
    "faq": [
      {
        "question": "Raccordez-vous les pompes à chaleur à Leudeville ?",
        "answer": "Oui, nous assurons la partie électrique du raccordement PAC : ligne dédiée, protection au tableau, vérification de la puissance. Coordination avec votre chauffagiste."
      },
      {
        "question": "Faut-il changer le tableau pour une PAC ?",
        "answer": "Pas toujours, mais il faut souvent ajouter un disjoncteur et un différentiel dédiés. Si le tableau est ancien ou saturé, un remplacement peut être recommandé."
      },
      {
        "question": "Faites-vous les démarches ENEDIS ?",
        "answer": "Nous vous accompagnons dans la demande d'augmentation de puissance auprès d'ENEDIS si nécessaire pour le raccordement de votre PAC."
      },
      {
        "question": "Quel est le délai d'intervention à Leudeville ?",
        "answer": "Rendez-vous habituellement sous 48 à 72 h. Nous coordonnons notre intervention avec votre chauffagiste si besoin."
      },
      {
        "question": "Combien coûte un raccordement PAC ?",
        "answer": "Le raccordement électrique d'une PAC coûte entre 500 € et 1 200 € HT selon la distance tableau-PAC et les adaptations nécessaires. Devis gratuit."
      }
    ],
    "relatedServices": [
      "pac-alimentation-electrique",
      "remplacement-tableau-electrique",
      "depannage-electrique"
    ]
  },
  {
    "slug": "fleury-merogis",
    "city": "Fleury-Mérogis",
    "department": "91",
    "title": "Électricien à Fleury-Mérogis",
    "seoTitle": "Électricien à Fleury-Mérogis (91) — JM-ELEC 91",
    "seoDescription": "Électricien à Fleury-Mérogis. Dépannage, conformité, alarme. Intervention rapide. Devis gratuit.",
    "description": "Interventions à Fleury-Mérogis : dépannage électrique, mise en conformité et installation de systèmes de sécurité.",
    "heroSubtitle": "Sécurité et conformité",
    "context": "Fleury-Mérogis est une commune de l'Essonne d'environ 9 500 habitants. Le parc immobilier mêle logements collectifs et pavillons individuels. Les besoins portent principalement sur la mise en sécurité des installations et la protection des biens.\n\nLa commune connaît des problématiques de sécurité qui poussent de nombreux résidents à s'équiper en alarme et vidéosurveillance.",
    "editorial": "Fleury-Mérogis est une commune où la sécurité des installations électriques et la protection des biens sont des sujets prioritaires pour les résidents.\n\nNous y réalisons régulièrement des mises en conformité : ajout de différentiels 30 mA, reprise de la terre, remplacement de tableaux obsolètes. Ces interventions sont souvent déclenchées par un diagnostic immobilier défavorable ou par des incidents (disjonctions répétées, odeur de brûlé).\n\nL'installation d'alarmes intrusion est notre autre activité fréquente à Fleury-Mérogis. Nous proposons des systèmes adaptés au budget et à la configuration du logement : détecteurs de mouvement, détecteurs d'ouverture, sirène, alerte smartphone. Chaque installation est précédée d'un diagnostic gratuit des points d'accès.",
    "servicesHighlight": [
      "Mise en conformité électrique",
      "Installation d'alarme intrusion",
      "Dépannage électrique rapide",
      "Remplacement de tableau",
      "Vidéosurveillance pour maisons et appartements"
    ],
    "localInfo": "Fleury-Mérogis est desservie régulièrement dans le cadre de nos interventions en Essonne. Rendez-vous sous 48 à 72 h.",
    "faq": [
      {
        "question": "Proposez-vous l'installation d'alarme à Fleury-Mérogis ?",
        "answer": "Oui, nous installons des systèmes d'alarme intrusion pour les habitations du secteur. Diagnostic gratuit des points d'accès."
      },
      {
        "question": "Mon diagnostic immobilier a relevé des anomalies, que faire ?",
        "answer": "Contactez-nous pour un devis de mise en sécurité. Nous corrigeons les anomalies relevées et remettons une attestation de conformité."
      },
      {
        "question": "Combien coûte une mise en conformité ?",
        "answer": "Cela dépend du nombre d'anomalies. Une mise en sécurité simple (différentiels, terre, prises) coûte entre 500 € et 1 500 € HT. Devis gratuit."
      },
      {
        "question": "Faites-vous aussi la vidéosurveillance ?",
        "answer": "Oui, nous installons des systèmes de vidéosurveillance HD avec enregistreur et accès smartphone."
      },
      {
        "question": "Quel est le délai d'intervention ?",
        "answer": "Rendez-vous habituellement sous 48 à 72 h. Dépannage plus rapide selon disponibilité."
      }
    ],
    "relatedServices": [
      "mise-en-securite-conformite",
      "alarme",
      "depannage-electrique",
      "video-surveillance"
    ]
  },
  {
    "slug": "longpont-sur-orge",
    "city": "Longpont-sur-Orge",
    "department": "91",
    "title": "Électricien à Longpont-sur-Orge",
    "seoTitle": "Électricien à Longpont-sur-Orge (91) — JM-ELEC 91",
    "seoDescription": "Électricien à Longpont-sur-Orge. Tableau, éclairage, dépannage. Devis gratuit.",
    "description": "Interventions à Longpont-sur-Orge : tableaux électriques, éclairage et dépannage résidentiel.",
    "heroSubtitle": "Interventions résidentielles",
    "context": "Longpont-sur-Orge est une commune résidentielle d'environ 7 000 habitants, voisine de Brétigny-sur-Orge. Le parc immobilier est composé de pavillons individuels, souvent avec jardin, et de quelques résidences collectives.\n\nLa commune est appréciée pour son cadre verdoyant et son abbaye. Les résidents investissent dans l'entretien et l'embellissement de leur propriété, ce qui génère des besoins en éclairage extérieur.",
    "editorial": "Longpont-sur-Orge est une commune que nous connaissons particulièrement bien grâce à sa proximité avec Brétigny. Nous y intervenons très régulièrement pour des travaux variés.\n\nL'éclairage extérieur est un sujet récurrent à Longpont. Les maisons disposent souvent de jardins agréables que les propriétaires souhaitent mettre en valeur le soir : spots encastrés dans les allées, projecteurs pour les arbres, appliques sur la façade. Nous concevons des éclairages LED basse consommation, esthétiques et fonctionnels.\n\nCôté tableau, les pavillons de Longpont présentent les mêmes problématiques que ceux de Brétigny : installations des années 70-80 qui nécessitent une modernisation. Le remplacement de tableau est notre intervention la plus courante dans la commune.",
    "servicesHighlight": [
      "Remplacement de tableau électrique",
      "Éclairage extérieur et balisage de jardin",
      "Dépannage résidentiel rapide",
      "Éclairage intérieur LED",
      "Mise en sécurité avant vente"
    ],
    "localInfo": "Commune voisine de Brétigny-sur-Orge, desservie très régulièrement. Rendez-vous souvent sous 48 h.",
    "faq": [
      {
        "question": "Installez-vous l'éclairage extérieur à Longpont ?",
        "answer": "Oui, nous concevons et installons des éclairages extérieurs (spots, balisage, appliques, projecteurs) pour les maisons et jardins du secteur."
      },
      {
        "question": "Quel est le délai d'intervention à Longpont ?",
        "answer": "Longpont étant voisine de notre zone prioritaire, nous proposons souvent un rendez-vous sous 48 h."
      },
      {
        "question": "Faites-vous le passage en LED intérieur ?",
        "answer": "Oui, nous remplaçons les éclairages anciens (halogènes, fluocompacts) par des solutions LED modernes et économiques."
      },
      {
        "question": "Combien coûte un éclairage de jardin ?",
        "answer": "Un éclairage de jardin simple (6 à 10 points lumineux) démarre à environ 1 000 € HT, pose et matériel compris. Devis gratuit."
      },
      {
        "question": "Mon tableau a des fusibles, faut-il le changer ?",
        "answer": "Un tableau à fusibles est obsolète et ne protège pas aussi bien qu'un tableau modulaire avec disjoncteurs et différentiels. Nous recommandons le remplacement."
      }
    ],
    "relatedServices": [
      "remplacement-tableau-electrique",
      "eclairage-interieur-exterieur",
      "depannage-electrique"
    ]
  },
  {
    "slug": "bondoufle",
    "city": "Bondoufle",
    "department": "91",
    "title": "Électricien à Bondoufle",
    "seoTitle": "Électricien à Bondoufle (91) — JM-ELEC 91",
    "seoDescription": "Électricien à Bondoufle. Dépannage, tableau, vidéosurveillance. Résidentiel et zones d'activité. Devis gratuit.",
    "description": "Interventions à Bondoufle : dépannage, tableaux électriques et sécurité pour les résidents et entreprises.",
    "heroSubtitle": "Résidentiel et zones d'activité",
    "context": "Bondoufle est une commune de l'Essonne d'environ 10 000 habitants, qui combine zones résidentielles et zones d'activité économique. Le parc résidentiel est composé de pavillons et de résidences collectives.\n\nLa zone d'activité de Bondoufle accueille des entreprises qui ont besoin d'installations électriques fiables et conformes, ainsi que de systèmes de sécurité (vidéosurveillance, contrôle d'accès).",
    "editorial": "Bondoufle est une commune où nous intervenons aussi bien pour les particuliers que pour les professionnels. Cette double compétence nous permet de répondre à des besoins très différents.\n\nCôté résidentiel, les pavillons de Bondoufle présentent les mêmes besoins que dans le reste de l'Essonne sud : remplacement de tableaux, dépannage, mise en sécurité. Les résidents des lotissements récents ont plutôt des demandes d'ajout de circuits ou d'installation de bornes de recharge.\n\nCôté professionnel, nous intervenons dans les locaux de la zone d'activité pour des installations de vidéosurveillance, des mises en conformité et des dépannages. Chaque heure d'arrêt coûte de l'argent — nous nous organisons pour intervenir rapidement.",
    "servicesHighlight": [
      "Dépannage électrique pour particuliers et entreprises",
      "Vidéosurveillance pour locaux professionnels",
      "Remplacement de tableau électrique",
      "Mise en conformité de locaux d'activité",
      "Installation de bornes IRVE"
    ],
    "localInfo": "Commune de l'Essonne desservie régulièrement. Rendez-vous sous 48 à 72 h.",
    "faq": [
      {
        "question": "Intervenez-vous dans les zones d'activité de Bondoufle ?",
        "answer": "Oui, nous intervenons pour les entreprises et les locaux professionnels de Bondoufle : dépannage, vidéosurveillance, mise en conformité."
      },
      {
        "question": "Installez-vous la vidéosurveillance pour les entreprises ?",
        "answer": "Oui, nous installons des systèmes de vidéosurveillance professionnels avec caméras HD, enregistreur et accès à distance."
      },
      {
        "question": "Quel est le délai d'intervention pour un professionnel ?",
        "answer": "Pour les professionnels, nous faisons notre maximum pour intervenir rapidement, souvent sous 24 à 48 h."
      },
      {
        "question": "Faites-vous aussi des bornes IRVE à Bondoufle ?",
        "answer": "Oui, nous installons des bornes de recharge pour les maisons individuelles et les parkings d'entreprise."
      },
      {
        "question": "Le devis est-il gratuit ?",
        "answer": "Oui, tous nos devis sont gratuits, détaillés et sans engagement, aussi bien pour les particuliers que pour les professionnels."
      }
    ],
    "relatedServices": [
      "depannage-electrique",
      "video-surveillance",
      "remplacement-tableau-electrique",
      "borne-recharge-irve"
    ]
  },
  {
    "slug": "gif-sur-yvette",
    "city": "Gif-sur-Yvette",
    "department": "91",
    "title": "Électricien à Gif-sur-Yvette",
    "seoTitle": "Électricien à Gif-sur-Yvette (91) — JM-ELEC 91",
    "seoDescription": "Électricien à Gif-sur-Yvette. Rénovation, domotique, borne IRVE. Devis gratuit.",
    "description": "Interventions à Gif-sur-Yvette : rénovation électrique, domotique et bornes de recharge pour un habitat résidentiel.",
    "heroSubtitle": "Résidentiel et innovation",
    "context": "Gif-sur-Yvette est une commune vallonnée de l'Essonne d'environ 21 000 habitants, située au pied du plateau de Saclay. La commune accueille des centres de recherche (CEA, CNRS) et un habitat résidentiel de qualité : pavillons dans la vallée, maisons sur les coteaux.\n\nLes résidents de Gif sont souvent des cadres et des chercheurs, sensibles aux solutions modernes : domotique, bornes de recharge, éclairage LED intelligent. Les maisons y sont souvent plus spacieuses que la moyenne.",
    "editorial": "Gif-sur-Yvette est une commune où les attentes en matière d'installation électrique sont souvent élevées. Les résidents sont informés, exigeants et apprécient les solutions modernes.\n\nLa domotique est un sujet qui revient fréquemment dans nos échanges avec les propriétaires de Gif. Pilotage de l'éclairage, des volets, du chauffage depuis un smartphone — ces solutions ne sont plus réservées aux budgets illimités. Nous installons des systèmes accessibles (Legrand, Schneider) qui apportent un vrai confort au quotidien.\n\nLes bornes de recharge sont également très demandées à Gif. La commune est bien desservie par la N118 et l'A10, et beaucoup de résidents ont adopté le véhicule électrique. Nous installons des bornes 7 kW ou 22 kW avec ligne dédiée.\n\nEnfin, les maisons de Gif, souvent construites dans les années 70-80, nécessitent des rénovations électriques que nous réalisons avec soin, en respectant le caractère de chaque propriété.",
    "servicesHighlight": [
      "Domotique résidentielle (Legrand, Schneider)",
      "Installation de bornes IRVE (7 kW et 22 kW)",
      "Rénovation électrique de maisons individuelles",
      "Éclairage LED intelligent",
      "Remplacement de tableau électrique"
    ],
    "localInfo": "Gif-sur-Yvette est desservie dans le cadre de nos interventions en Essonne et vers le plateau de Saclay. Rendez-vous sous 72 h.",
    "faq": [
      {
        "question": "Proposez-vous la domotique à Gif-sur-Yvette ?",
        "answer": "Oui, nous installons des solutions domotiques (Legrand, Schneider) pour le pilotage de l'éclairage, des volets et du chauffage. Systèmes compatibles smartphone."
      },
      {
        "question": "Installez-vous des bornes de recharge à Gif ?",
        "answer": "Oui, en tant qu'électricien certifié IRVE, nous installons des bornes 7 kW et 22 kW pour les maisons individuelles de Gif."
      },
      {
        "question": "La domotique coûte-t-elle cher ?",
        "answer": "Les solutions actuelles sont accessibles. Un système de pilotage éclairage + volets pour une maison démarre à environ 2 000 € HT. Devis gratuit."
      },
      {
        "question": "Faites-vous la rénovation électrique complète ?",
        "answer": "Oui, nous réalisons des rénovations électriques complètes : tableau, câblage, prises, éclairage. De la conception à l'attestation de conformité."
      },
      {
        "question": "Quel est le délai pour un rendez-vous à Gif ?",
        "answer": "Rendez-vous habituellement sous 72 h. Pour les projets importants, nous proposons une visite de diagnostic gratuite."
      }
    ],
    "relatedServices": [
      "domotique-residentielle",
      "borne-recharge-irve",
      "renovation-electrique",
      "eclairage-interieur-exterieur"
    ]
  },
  {
    "slug": "saint-aubin",
    "city": "Saint-Aubin",
    "department": "91",
    "title": "Électricien à Saint-Aubin",
    "seoTitle": "Électricien à Saint-Aubin (91) — JM-ELEC 91",
    "seoDescription": "Électricien à Saint-Aubin. PAC, tableau, dépannage. Devis gratuit.",
    "description": "Interventions à Saint-Aubin : raccordement PAC, tableaux électriques et dépannage résidentiel.",
    "heroSubtitle": "Habitat résidentiel et PAC",
    "context": "Saint-Aubin est une petite commune de l'Essonne d'environ 700 habitants, proche du plateau de Saclay. L'habitat y est exclusivement constitué de maisons individuelles, souvent spacieuses et entourées de verdure.\n\nLa transition énergétique est un sujet concret à Saint-Aubin : beaucoup de propriétaires remplacent leur chaudière fioul par une pompe à chaleur, ce qui nécessite un raccordement électrique adapté.",
    "editorial": "Saint-Aubin est un village où chaque propriétaire a des besoins spécifiques. L'habitat individuel, les terrains spacieux et l'environnement calme attirent des familles qui investissent dans leur maison sur le long terme.\n\nLe raccordement de pompes à chaleur est notre intervention la plus fréquente à Saint-Aubin. Le remplacement d'une chaudière fioul par une PAC air-eau est un projet courant, mais la partie électrique ne doit pas être sous-estimée : ligne dédiée en section adaptée, protection au tableau, vérification de la puissance du compteur.\n\nNous assurons également l'entretien et la modernisation des installations existantes : remplacement de tableaux, ajout de circuits, dépannage. Notre connaissance du secteur nous permet d'intervenir efficacement.",
    "servicesHighlight": [
      "Raccordement électrique de pompe à chaleur",
      "Remplacement de tableau électrique",
      "Dépannage résidentiel",
      "Adaptation de puissance compteur",
      "Éclairage extérieur de propriété"
    ],
    "localInfo": "Saint-Aubin est desservie dans le cadre de nos interventions vers le plateau de Saclay. Rendez-vous sous 72 h.",
    "faq": [
      {
        "question": "Intervenez-vous à Saint-Aubin ?",
        "answer": "Oui, Saint-Aubin fait partie de notre zone d'intervention. Rendez-vous sous 72 h."
      },
      {
        "question": "Raccordez-vous les PAC à Saint-Aubin ?",
        "answer": "Oui, nous assurons le raccordement électrique des pompes à chaleur : ligne dédiée, protection au tableau, vérification de la puissance."
      },
      {
        "question": "Faut-il augmenter la puissance du compteur pour une PAC ?",
        "answer": "Souvent oui. Nous vérifions la puissance disponible et, si nécessaire, nous vous accompagnons dans la demande auprès d'ENEDIS."
      },
      {
        "question": "Combien coûte un raccordement PAC ?",
        "answer": "Entre 500 € et 1 200 € HT selon la distance et les adaptations nécessaires. Devis gratuit."
      },
      {
        "question": "Faites-vous aussi l'éclairage extérieur ?",
        "answer": "Oui, nous installons des éclairages extérieurs LED pour les allées, terrasses et jardins."
      }
    ],
    "relatedServices": [
      "pac-alimentation-electrique",
      "remplacement-tableau-electrique",
      "depannage-electrique"
    ]
  },
  {
    "slug": "verrieres-le-buisson",
    "city": "Verrières-le-Buisson",
    "department": "91",
    "title": "Électricien à Verrières-le-Buisson",
    "seoTitle": "Électricien à Verrières-le-Buisson (91) — JM-ELEC 91",
    "seoDescription": "Électricien à Verrières-le-Buisson. Rénovation, éclairage, domotique. Finitions soignées. Devis gratuit.",
    "description": "Interventions à Verrières-le-Buisson : rénovation électrique, éclairage et domotique pour un habitat résidentiel de qualité.",
    "heroSubtitle": "Résidentiel de qualité",
    "context": "Verrières-le-Buisson est une commune résidentielle d'environ 16 000 habitants, réputée pour son cadre verdoyant et ses propriétés de caractère. Le parc immobilier mêle maisons anciennes rénovées et constructions plus récentes.\n\nLes propriétaires de Verrières sont souvent exigeants sur la qualité des finitions. Les projets de rénovation électrique y sont fréquents, souvent couplés avec des demandes d'éclairage design et de domotique.",
    "editorial": "Verrières-le-Buisson est une commune où nous réalisons des projets qui demandent un soin particulier dans les finitions. Les propriétaires y sont attentifs aux détails : encastrements propres, câblage invisible, matériel de qualité.\n\nLes rénovations électriques à Verrières sont souvent liées à des projets de modernisation globale de la maison. Nous travaillons en coordination avec les autres corps de métier (plaquistes, peintres) pour un résultat impeccable.\n\nL'éclairage est un sujet important à Verrières : les propriétaires investissent dans des solutions LED de qualité, des variateurs, et des scènes lumineuses programmables. La domotique permet d'aller encore plus loin avec le pilotage depuis un smartphone.",
    "servicesHighlight": [
      "Rénovation électrique complète avec finitions soignées",
      "Éclairage intérieur et extérieur de qualité",
      "Domotique résidentielle",
      "Remplacement de tableau avec encastrement soigné",
      "Coordination avec architectes et autres corps de métier"
    ],
    "localInfo": "Commune où nous intervenons pour des projets nécessitant un niveau de finition élevé. Rendez-vous sous 72 h.",
    "isPremium": true,
    "faq": [
      {
        "question": "Proposez-vous des finitions soignées à Verrières ?",
        "answer": "Oui, nous accordons une attention particulière aux finitions : encastrements propres, câblage invisible, matériel de marque, coordination avec les autres corps de métier."
      },
      {
        "question": "Travaillez-vous avec des architectes ?",
        "answer": "Oui, nous avons l'habitude de travailler en coordination avec des architectes sur des projets de rénovation."
      },
      {
        "question": "Installez-vous la domotique à Verrières ?",
        "answer": "Oui, nous installons des systèmes domotiques pour le pilotage de l'éclairage, des volets et du chauffage."
      },
      {
        "question": "Combien coûte une rénovation électrique complète ?",
        "answer": "Pour une maison de 100 à 150 m², comptez entre 8 000 € et 15 000 € HT selon la complexité. Devis gratuit et détaillé."
      },
      {
        "question": "Quel matériel utilisez-vous ?",
        "answer": "Exclusivement du matériel de marque : Schneider, Legrand, Hager pour les tableaux et protections. Pas de sous-marques."
      }
    ],
    "relatedServices": [
      "eclairage-interieur-exterieur",
      "domotique-residentielle",
      "renovation-electrique"
    ]
  },
  {
    "slug": "versailles",
    "city": "Versailles",
    "department": "78",
    "title": "Électricien à Versailles",
    "seoTitle": "Électricien à Versailles (78) — JM-ELEC 91",
    "seoDescription": "Électricien à Versailles. Rénovation, domotique, éclairage, borne IRVE. Finitions soignées. Devis gratuit.",
    "description": "Projets électriques à Versailles : rénovation complète, domotique, éclairage sur mesure. Finitions impeccables.",
    "heroSubtitle": "Finitions impeccables",
    "context": "Versailles est une ville d'environ 85 000 habitants, connue pour son patrimoine architectural exceptionnel. Le parc immobilier résidentiel comprend des appartements dans des immeubles de caractère, des maisons de ville et des propriétés avec jardin.\n\nLes projets de rénovation électrique à Versailles exigent un niveau de finition irréprochable : encastrements parfaits, câblage invisible, matériel de qualité. La coordination avec les architectes et les autres corps de métier est souvent nécessaire.",
    "editorial": "Versailles est une ville où chaque projet demande une attention particulière. Le bâti ancien et le niveau d'exigence des propriétaires imposent un savoir-faire que nous avons développé au fil des ans.\n\nLes rénovations électriques dans les appartements versaillais présentent des contraintes spécifiques : moulures à préserver, gaines étroites, coordination avec la copropriété. Nous savons travailler dans ces contextes sans compromettre ni la sécurité ni l'esthétique.\n\nPour les maisons avec jardin, nous proposons des projets complets incluant l'électricité intérieure, l'éclairage extérieur et la domotique. La coordination avec l'architecte ou le maître d'œuvre fait partie de notre quotidien.\n\nNous nous déplaçons à Versailles pour des projets d'envergure qui justifient le déplacement depuis notre base en Essonne. Les petits dépannages courants sont mieux traités par un électricien local.",
    "servicesHighlight": [
      "Rénovation électrique complète avec finitions soignées",
      "Domotique et éclairage sur mesure",
      "Coordination avec architectes et maîtres d'œuvre",
      "Installation de bornes IRVE",
      "Tableaux encastrés dans les règles de l'art"
    ],
    "localInfo": "Nous nous déplaçons à Versailles pour des projets de rénovation ou d'installation significatifs. Rendez-vous sur devis après échange téléphonique.",
    "isPremium": true,
    "faq": [
      {
        "question": "Qu'est-ce qui distingue vos interventions à Versailles ?",
        "answer": "Un niveau de finition adapté au bâti : encastrement parfait, câblage invisible, étiquetage détaillé, matériel de marque, coordination avec les autres corps de métier."
      },
      {
        "question": "Travaillez-vous avec des architectes ?",
        "answer": "Oui, nous avons l'habitude de travailler en coordination avec des architectes et des maîtres d'œuvre sur des projets de rénovation."
      },
      {
        "question": "Intervenez-vous pour de petits travaux à Versailles ?",
        "answer": "Pour les petits dépannages, un électricien local sera plus réactif. Nous nous déplaçons à Versailles pour des projets de rénovation, de domotique ou d'éclairage."
      },
      {
        "question": "Quel est le délai pour un projet à Versailles ?",
        "answer": "Nous proposons une visite de diagnostic gratuite sous 1 semaine, puis un planning d'intervention adapté au projet."
      },
      {
        "question": "Faites-vous la domotique à Versailles ?",
        "answer": "Oui, nous installons des systèmes domotiques complets (KNX, Legrand) pour le pilotage de l'éclairage, des volets et du chauffage."
      }
    ],
    "relatedServices": [
      "renovation-electrique",
      "domotique-residentielle",
      "eclairage-interieur-exterieur",
      "borne-recharge-irve"
    ]
  },
  {
    "slug": "boulogne-billancourt",
    "city": "Boulogne-Billancourt",
    "department": "92",
    "title": "Électricien à Boulogne-Billancourt",
    "seoTitle": "Électricien à Boulogne-Billancourt (92) — JM-ELEC 91",
    "seoDescription": "Électricien à Boulogne-Billancourt. Rénovation, tableau, conformité, domotique. Appartements et maisons. Devis gratuit.",
    "description": "Interventions à Boulogne-Billancourt : rénovation électrique, conformité et domotique pour appartements et maisons.",
    "heroSubtitle": "Appartements et maisons",
    "context": "Boulogne-Billancourt est la deuxième ville d'Île-de-France avec plus de 120 000 habitants. Le parc immobilier est très varié : appartements dans des immeubles anciens et récents, maisons de ville dans les quartiers résidentiels.\n\nLes rénovations électriques dans les immeubles anciens de Boulogne nécessitent une expertise dans le bâti ancien et des finitions adaptées aux contraintes (gaines étroites, moulures, copropriété).",
    "editorial": "Boulogne-Billancourt est une ville où nous intervenons pour des projets de rénovation électrique dans des appartements et des maisons. La densité urbaine et la diversité du bâti font de chaque chantier un cas unique.\n\nDans les immeubles anciens, les contraintes sont multiples : gaines trop étroites pour le nombre de câbles nécessaire, tableaux d'origine sans aucune protection, absence de terre, fils en aluminium parfois. Nous savons diagnostiquer ces situations et proposer des solutions conformes sans travaux disproportionnés.\n\nLes appartements en cours de rénovation complète sont l'occasion de reprendre toute l'installation : nouveau tableau, nouveau câblage, prises et interrupteurs aux bons emplacements, éclairage LED. Nous travaillons en coordination avec les entreprises de rénovation.\n\nPour les maisons des quartiers résidentiels (Billancourt, Point-du-Jour), nous proposons des projets complets incluant domotique et éclairage.",
    "servicesHighlight": [
      "Rénovation électrique d'appartements anciens",
      "Mise en conformité dans les copropriétés",
      "Domotique pour maisons et grands appartements",
      "Remplacement de tableau électrique",
      "Éclairage LED et variateurs"
    ],
    "localInfo": "Nous intervenons à Boulogne-Billancourt pour des projets de rénovation significatifs. Rendez-vous après échange téléphonique.",
    "isPremium": true,
    "faq": [
      {
        "question": "Intervenez-vous dans les immeubles anciens de Boulogne ?",
        "answer": "Oui, nous avons l'expérience des rénovations dans les immeubles anciens : contraintes d'encastrement, gaines étroites, coordination avec la copropriété."
      },
      {
        "question": "Faites-vous la mise en conformité d'appartements ?",
        "answer": "Oui, nous réalisons les mises en conformité selon la norme NFC 15-100 : ajout de différentiels, reprise de terre, protection des circuits."
      },
      {
        "question": "Quel est le coût d'une rénovation électrique d'appartement ?",
        "answer": "Pour un T3 de 60-70 m², comptez entre 5 000 € et 10 000 € HT pour une rénovation complète. Devis gratuit et détaillé."
      },
      {
        "question": "Travaillez-vous en coordination avec d'autres artisans ?",
        "answer": "Oui, nous avons l'habitude de travailler avec des plaquistes, des peintres et des entreprises de rénovation pour un chantier bien coordonné."
      },
      {
        "question": "Proposez-vous la domotique à Boulogne ?",
        "answer": "Oui, pour les maisons et les grands appartements. Pilotage de l'éclairage, des volets et du chauffage depuis un smartphone."
      }
    ],
    "relatedServices": [
      "renovation-electrique",
      "mise-en-securite-conformite",
      "domotique-residentielle",
      "remplacement-tableau-electrique"
    ]
  },
  {
    "slug": "sceaux",
    "city": "Sceaux",
    "department": "92",
    "title": "Électricien à Sceaux",
    "seoTitle": "Électricien à Sceaux (92) — JM-ELEC 91",
    "seoDescription": "Électricien à Sceaux. Rénovation, éclairage, dépannage. Maisons et appartements. Devis gratuit.",
    "description": "Interventions à Sceaux : rénovation électrique, éclairage et dépannage pour maisons et appartements.",
    "heroSubtitle": "Résidentiel de qualité",
    "context": "Sceaux est une commune résidentielle d'environ 20 000 habitants dans les Hauts-de-Seine. La ville est connue pour son parc, ses rues arborées et son cadre de vie préservé. Le parc immobilier comprend des maisons de caractère et des appartements dans des résidences de qualité.\n\nLes propriétaires de Sceaux recherchent des artisans soigneux qui respectent leur intérieur et proposent des finitions à la hauteur de leur habitat.",
    "editorial": "Sceaux est une commune où nous intervenons avec un soin particulier. Les maisons de caractère et les beaux appartements de la ville méritent des installations électriques à la hauteur.\n\nNos interventions à Sceaux portent principalement sur la rénovation électrique (souvent couplée avec des travaux de rénovation intérieure) et l'éclairage. Les propriétaires sont sensibles à la qualité de l'éclairage et investissent dans des solutions LED bien pensées : variateurs, scènes lumineuses, spots encastrés.\n\nPour les dépannages, nous nous déplaçons à Sceaux dans un délai raisonnable (48 à 72 h). Les urgences sont traitées au cas par cas selon notre planning.",
    "servicesHighlight": [
      "Rénovation électrique avec finitions soignées",
      "Éclairage intérieur et extérieur de qualité",
      "Dépannage résidentiel",
      "Remplacement de tableau électrique",
      "Mise en conformité avant vente"
    ],
    "localInfo": "Nous intervenons à Sceaux et communes voisines (Bourg-la-Reine, Châtenay-Malabry, Antony). Rendez-vous sous 72 h.",
    "faq": [
      {
        "question": "Intervenez-vous à Sceaux et environs ?",
        "answer": "Oui, nous couvrons Sceaux et les communes voisines : Bourg-la-Reine, Châtenay-Malabry, Antony, Fontenay-aux-Roses."
      },
      {
        "question": "Quel type de travaux réalisez-vous à Sceaux ?",
        "answer": "Principalement des rénovations électriques, de l'éclairage et des remplacements de tableaux. Nous intervenons aussi en dépannage."
      },
      {
        "question": "Proposez-vous de l'éclairage sur mesure ?",
        "answer": "Oui, nous concevons des installations d'éclairage adaptées à votre intérieur : spots, variateurs, scènes lumineuses, LED."
      },
      {
        "question": "Quel est le délai d'intervention à Sceaux ?",
        "answer": "Rendez-vous habituellement sous 72 h. Nous nous adaptons au mieux pour les situations urgentes."
      },
      {
        "question": "Vos finitions sont-elles soignées ?",
        "answer": "Oui, nous utilisons du matériel de marque et nous apportons un soin particulier aux encastrements, au câblage et à la propreté du chantier."
      }
    ],
    "relatedServices": [
      "renovation-electrique",
      "eclairage-interieur-exterieur",
      "depannage-electrique"
    ]
  },
  {
    "slug": "ville-d-avray",
    "city": "Ville-d'Avray",
    "department": "92",
    "title": "Électricien à Ville-d'Avray",
    "seoTitle": "Électricien à Ville-d'Avray (92) — JM-ELEC 91",
    "seoDescription": "Électricien à Ville-d'Avray. Domotique, éclairage, rénovation. Devis gratuit.",
    "description": "Interventions à Ville-d'Avray : domotique, éclairage sur mesure et rénovation pour des propriétés de caractère.",
    "heroSubtitle": "Propriétés de caractère",
    "context": "Ville-d'Avray est une commune résidentielle d'environ 11 000 habitants, nichée entre les forêts de Fausses-Reposes et de Meudon. Le cadre exceptionnel attire des propriétaires qui investissent dans des maisons de caractère.\n\nLes projets électriques à Ville-d'Avray portent sur la domotique, l'éclairage architectural et la rénovation complète. Les attentes en matière de finitions sont élevées.",
    "editorial": "Ville-d'Avray est une commune où les propriétés ont du caractère et où chaque projet demande une approche sur mesure. Les maisons y sont souvent spacieuses, entourées de verdure, et les propriétaires cherchent à allier confort moderne et charme de l'existant.\n\nLa domotique est un sujet récurrent à Ville-d'Avray. Piloter l'éclairage, les volets et le chauffage depuis un smartphone n'est plus un luxe — c'est un confort devenu accessible. Nous installons des systèmes fiables et simples d'utilisation.\n\nL'éclairage est l'autre sujet fort : mettre en valeur un jardin, créer des ambiances dans les pièces de vie, installer des variateurs pour adapter l'intensité à chaque moment de la journée. Nous concevons chaque installation en fonction de l'architecture du lieu.",
    "servicesHighlight": [
      "Domotique résidentielle (pilotage éclairage, volets, chauffage)",
      "Éclairage architectural intérieur et extérieur",
      "Rénovation électrique de maisons de caractère",
      "Installation de bornes IRVE",
      "Tableaux encastrés avec finitions soignées"
    ],
    "localInfo": "Commune desservie pour des projets significatifs. Rendez-vous après échange téléphonique.",
    "isPremium": true,
    "faq": [
      {
        "question": "Proposez-vous la domotique à Ville-d'Avray ?",
        "answer": "Oui, nous installons des solutions domotiques (Legrand, Schneider, KNX) adaptées aux maisons de Ville-d'Avray."
      },
      {
        "question": "Faites-vous l'éclairage de jardin ?",
        "answer": "Oui, nous concevons et installons des éclairages extérieurs adaptés aux jardins et propriétés de la commune."
      },
      {
        "question": "Intervenez-vous pour une rénovation complète ?",
        "answer": "Oui, nous réalisons des rénovations électriques complètes en coordination avec les autres artisans du chantier."
      },
      {
        "question": "Quel est le délai pour un projet à Ville-d'Avray ?",
        "answer": "Nous proposons une visite de diagnostic sous 1 semaine, puis un planning adapté au projet."
      },
      {
        "question": "Quel matériel utilisez-vous ?",
        "answer": "Exclusivement du matériel de marque : Schneider, Legrand, Hager. Nous ne travaillons pas avec des sous-marques."
      }
    ],
    "relatedServices": [
      "domotique-residentielle",
      "eclairage-interieur-exterieur",
      "renovation-electrique"
    ]
  },
  {
    "slug": "saint-cloud",
    "city": "Saint-Cloud",
    "department": "92",
    "title": "Électricien à Saint-Cloud",
    "seoTitle": "Électricien à Saint-Cloud (92) — JM-ELEC 91",
    "seoDescription": "Électricien à Saint-Cloud. Rénovation, domotique, borne IRVE. Devis gratuit.",
    "description": "Interventions à Saint-Cloud : rénovation électrique, domotique et bornes de recharge.",
    "heroSubtitle": "Résidentiel et projets sur mesure",
    "context": "Saint-Cloud est une commune d'environ 30 000 habitants, surplombant Paris depuis les collines de l'ouest. Le parc immobilier comprend des appartements dans des résidences de qualité et des maisons individuelles avec vue.\n\nLes projets électriques à Saint-Cloud exigent un niveau de finition supérieur. La coordination avec les architectes et les décorateurs est fréquente, notamment pour les projets de rénovation.",
    "editorial": "Saint-Cloud est une commune où nous réalisons des projets qui combinent technique et esthétique. Les propriétaires attendent un résultat irréprochable, tant sur le plan de la sécurité que des finitions.\n\nLa domotique est très demandée à Saint-Cloud. Nous avons notamment réalisé l'installation d'un système KNX complet dans une maison de 180 m², avec pilotage de l'éclairage, des volets et du chauffage. Ce type de projet demande une planification minutieuse et une exécution sans faille.\n\nLes bornes de recharge sont également un sujet fréquent. Les garages privatifs des maisons de Saint-Cloud se prêtent bien à l'installation de bornes 7 kW ou 22 kW. Nous prenons en charge l'ensemble du projet, du diagnostic à l'attestation.",
    "servicesHighlight": [
      "Rénovation électrique avec coordination architecte",
      "Domotique intégrée (KNX, Legrand)",
      "Installation de bornes IRVE",
      "Éclairage sur mesure",
      "Tableaux encastrés avec repérage complet"
    ],
    "localInfo": "Nous intervenons à Saint-Cloud pour des projets résidentiels significatifs. Visite de diagnostic gratuite.",
    "isPremium": true,
    "faq": [
      {
        "question": "Réalisez-vous des projets de domotique à Saint-Cloud ?",
        "answer": "Oui, nous avons réalisé plusieurs installations domotiques à Saint-Cloud, notamment un système KNX complet dans une maison de 180 m²."
      },
      {
        "question": "Installez-vous des bornes IRVE à Saint-Cloud ?",
        "answer": "Oui, nous installons des bornes 7 kW et 22 kW dans les garages privatifs des maisons de Saint-Cloud."
      },
      {
        "question": "Travaillez-vous avec des architectes ?",
        "answer": "Oui, la coordination avec les architectes et les décorateurs fait partie de notre quotidien sur les projets de rénovation."
      },
      {
        "question": "Quel est le coût d'un projet domotique ?",
        "answer": "Un système domotique complet (éclairage, volets, chauffage) pour une maison démarre à environ 5 000 € HT. Devis gratuit."
      },
      {
        "question": "Intervenez-vous pour de petits travaux à Saint-Cloud ?",
        "answer": "Nous privilégions les projets de rénovation, de domotique ou d'éclairage à Saint-Cloud. Pour les petits dépannages, un électricien local sera plus réactif."
      }
    ],
    "relatedServices": [
      "renovation-electrique",
      "domotique-residentielle",
      "borne-recharge-irve",
      "eclairage-interieur-exterieur"
    ]
  },
  {
    "slug": "l-etang-la-ville",
    "city": "L'Étang-la-Ville",
    "department": "78",
    "title": "Électricien à L'Étang-la-Ville",
    "seoTitle": "Électricien à L'Étang-la-Ville (78) — JM-ELEC 91",
    "seoDescription": "Électricien à L'Étang-la-Ville. Rénovation, domotique, éclairage. Devis gratuit.",
    "description": "Interventions à L'Étang-la-Ville : rénovation, domotique et éclairage pour les propriétés résidentielles du secteur.",
    "heroSubtitle": "Propriétés résidentielles",
    "context": "L'Étang-la-Ville est une commune résidentielle d'environ 5 000 habitants dans les Yvelines, en lisière de la forêt de Marly. Les maisons individuelles, souvent spacieuses et entourées de verdure, dominent le paysage urbain.\n\nLes propriétaires recherchent des solutions électriques modernes : rénovation de l'installation existante, éclairage extérieur pour les jardins, et domotique pour le confort quotidien.",
    "editorial": "L'Étang-la-Ville est une commune paisible où les propriétés résidentielles sont soignées. Les maisons, souvent construites sur de belles parcelles en lisière de forêt, demandent des installations électriques à la fois performantes et discrètes.\n\nNous y intervenons principalement pour des rénovations électriques et des projets d'éclairage extérieur. Les jardins boisés de L'Étang se prêtent particulièrement bien à un éclairage paysager : balisage d'allées, mise en valeur des arbres, ambiance terrasse.\n\nLa domotique est un sujet qui intéresse de plus en plus les résidents : piloter l'éclairage et les volets depuis un smartphone, programmer des scénarios d'absence, automatiser le chauffage.",
    "servicesHighlight": [
      "Rénovation électrique de maisons individuelles",
      "Éclairage extérieur paysager",
      "Domotique résidentielle",
      "Remplacement de tableau",
      "Installation de bornes IRVE"
    ],
    "localInfo": "Commune desservie dans le cadre de nos interventions dans les Yvelines. Rendez-vous sous 1 semaine.",
    "faq": [
      {
        "question": "Intervenez-vous à L'Étang-la-Ville ?",
        "answer": "Oui, L'Étang-la-Ville fait partie de notre zone d'intervention dans les Yvelines pour les projets de rénovation et d'éclairage."
      },
      {
        "question": "Faites-vous l'éclairage de jardin à L'Étang ?",
        "answer": "Oui, nous concevons et installons des éclairages paysagers adaptés aux jardins boisés de la commune."
      },
      {
        "question": "Proposez-vous la domotique ?",
        "answer": "Oui, nous installons des systèmes domotiques pour le pilotage de l'éclairage, des volets et du chauffage."
      },
      {
        "question": "Quel est le délai pour un rendez-vous ?",
        "answer": "Rendez-vous habituellement sous 1 semaine pour les communes des Yvelines."
      },
      {
        "question": "Faites-vous aussi les bornes de recharge ?",
        "answer": "Oui, nous sommes certifiés IRVE et installons des bornes de recharge dans les garages et carports."
      }
    ],
    "relatedServices": [
      "renovation-electrique",
      "domotique-residentielle",
      "eclairage-interieur-exterieur",
      "borne-recharge-irve"
    ]
  },
  {
    "slug": "vaucresson",
    "city": "Vaucresson",
    "department": "92",
    "title": "Électricien à Vaucresson",
    "seoTitle": "Électricien à Vaucresson (92) — JM-ELEC 91",
    "seoDescription": "Électricien à Vaucresson. Alarme, domotique, éclairage. Devis gratuit.",
    "description": "Interventions à Vaucresson : alarme, domotique et éclairage pour des propriétés résidentielles.",
    "heroSubtitle": "Sécurité et confort",
    "context": "Vaucresson est une commune résidentielle d'environ 9 000 habitants dans les Hauts-de-Seine. Les maisons individuelles, souvent de grande taille et entourées de jardins, constituent l'essentiel du parc immobilier.\n\nLa sécurité est une préoccupation importante à Vaucresson. Les propriétaires investissent dans des systèmes d'alarme, de vidéosurveillance et de contrôle d'accès pour protéger leur domicile.",
    "editorial": "Vaucresson est une commune où la sécurité et le confort sont les deux axes principaux de nos interventions. Les propriétés spacieuses de la commune nécessitent des systèmes de protection adaptés.\n\nNous avons réalisé plusieurs installations complètes de sécurité à Vaucresson : alarme intrusion avec détecteurs de mouvement et d'ouverture, vidéosurveillance HD couvrant l'ensemble de la propriété, interphonie avec visiophone au portail. Chaque installation est précédée d'un diagnostic des points d'accès.\n\nLa domotique est l'autre demande forte à Vaucresson. Les propriétaires souhaitent piloter leur éclairage, leurs volets et leur chauffage de manière centralisée. Les scénarios d'absence (simulation de présence, fermeture automatique) sont particulièrement appréciés.",
    "servicesHighlight": [
      "Alarme intrusion avec alerte smartphone",
      "Vidéosurveillance HD intérieure et extérieure",
      "Domotique résidentielle et scénarios d'absence",
      "Éclairage extérieur de propriété",
      "Interphonie et visiophonie au portail"
    ],
    "localInfo": "Commune desservie pour des projets de sécurité et de domotique. Visite de diagnostic gratuite.",
    "isPremium": true,
    "faq": [
      {
        "question": "Proposez-vous des systèmes de sécurité complets à Vaucresson ?",
        "answer": "Oui, nous installons des systèmes complets : alarme, vidéosurveillance, interphonie, contrôle d'accès. Diagnostic gratuit des points d'accès."
      },
      {
        "question": "Faites-vous la vidéosurveillance à Vaucresson ?",
        "answer": "Oui, nous installons des systèmes de vidéosurveillance HD avec enregistreur et accès smartphone, en conformité avec la CNIL."
      },
      {
        "question": "Qu'est-ce qu'un scénario d'absence en domotique ?",
        "answer": "C'est une programmation qui simule votre présence quand vous êtes absent : allumage/extinction aléatoire des lumières, ouverture/fermeture des volets. Dissuasion efficace."
      },
      {
        "question": "Combien coûte un système d'alarme complet ?",
        "answer": "Pour une maison de grande taille avec 8 à 12 détecteurs, comptez entre 1 500 € et 3 000 € HT. Devis gratuit et diagnostic inclus."
      },
      {
        "question": "Installez-vous aussi la domotique ?",
        "answer": "Oui, nous installons des systèmes domotiques complets pour le pilotage de l'éclairage, des volets et du chauffage."
      }
    ],
    "relatedServices": [
      "alarme",
      "video-surveillance",
      "domotique-residentielle",
      "interphonie-controle-acces"
    ]
  },
  {
    "slug": "saint-nom-la-breteche",
    "city": "Saint-Nom-la-Bretèche",
    "department": "78",
    "title": "Électricien à Saint-Nom-la-Bretèche",
    "seoTitle": "Électricien à Saint-Nom-la-Bretèche (78) — JM-ELEC 91",
    "seoDescription": "Électricien à Saint-Nom-la-Bretèche. Rénovation, domotique, borne IRVE. Devis gratuit.",
    "description": "Interventions à Saint-Nom-la-Bretèche : rénovation, domotique et bornes de recharge pour les propriétés du secteur.",
    "heroSubtitle": "Résidentiel d'exception",
    "context": "Saint-Nom-la-Bretèche est une commune résidentielle d'environ 5 000 habitants dans les Yvelines, à proximité de Versailles. La commune est réputée pour son golf et ses propriétés spacieuses dans un cadre verdoyant.\n\nLes projets électriques y sont souvent liés à des rénovations de propriétés existantes ou à l'installation de solutions modernes (domotique, bornes IRVE) dans des maisons récentes.",
    "editorial": "Saint-Nom-la-Bretèche est une commune où nous intervenons pour des projets qui demandent du soin et de la rigueur. Les propriétés y sont spacieuses et les propriétaires investissent dans la durée.\n\nLes rénovations électriques complètes sont notre activité principale à Saint-Nom. Une maison de 200 à 300 m² représente 25 à 40 circuits à créer ou reprendre, un tableau conséquent, et une coordination minutieuse avec les autres corps de métier.\n\nLes bornes de recharge sont très demandées : beaucoup de propriétaires disposent de garages ou carports adaptés à l'installation d'une borne 7 kW ou 22 kW. La domotique complète souvent le projet, avec un pilotage centralisé de l'éclairage et des volets.",
    "servicesHighlight": [
      "Rénovation électrique complète de propriétés",
      "Domotique résidentielle intégrée",
      "Installation de bornes IRVE",
      "Éclairage intérieur et extérieur",
      "Coordination avec architectes"
    ],
    "localInfo": "Commune desservie pour des projets significatifs dans les Yvelines. Visite de diagnostic gratuite.",
    "isPremium": true,
    "faq": [
      {
        "question": "Intervenez-vous à Saint-Nom-la-Bretèche ?",
        "answer": "Oui, nous y réalisons des projets de rénovation, de domotique et d'installation de bornes IRVE."
      },
      {
        "question": "Combien coûte une rénovation complète pour une grande maison ?",
        "answer": "Pour une maison de 200 à 300 m², comptez entre 15 000 € et 30 000 € HT selon la complexité. Devis gratuit et détaillé."
      },
      {
        "question": "Faites-vous les bornes IRVE à Saint-Nom ?",
        "answer": "Oui, nous sommes certifiés IRVE et installons des bornes 7 kW et 22 kW dans les garages et carports."
      },
      {
        "question": "Travaillez-vous avec des architectes ?",
        "answer": "Oui, nous coordonnons régulièrement nos interventions avec des architectes pour les projets de rénovation."
      },
      {
        "question": "Quel est le délai pour un projet à Saint-Nom ?",
        "answer": "Visite de diagnostic gratuite sous 1 semaine, puis planning d'intervention adapté au projet."
      }
    ],
    "relatedServices": [
      "renovation-electrique",
      "domotique-residentielle",
      "borne-recharge-irve"
    ]
  },
  {
    "slug": "marnes-la-coquette",
    "city": "Marnes-la-Coquette",
    "department": "92",
    "title": "Électricien à Marnes-la-Coquette",
    "seoTitle": "Électricien à Marnes-la-Coquette (92) — JM-ELEC 91",
    "seoDescription": "Électricien à Marnes-la-Coquette. Domotique, éclairage, alarme. Devis gratuit.",
    "description": "Interventions à Marnes-la-Coquette : domotique, éclairage architectural et systèmes de sécurité.",
    "heroSubtitle": "Propriétés d'exception",
    "context": "Marnes-la-Coquette est la plus petite commune des Hauts-de-Seine, avec environ 1 800 habitants. Ce village résidentiel discret abrite des propriétés spacieuses dans un cadre boisé exceptionnel.\n\nLes installations électriques à Marnes-la-Coquette doivent être performantes et parfaitement intégrées : câblage invisible, tableaux encastrés, domotique discrète. Les exigences de finition y sont parmi les plus élevées de notre zone d'intervention.",
    "editorial": "Marnes-la-Coquette est un écrin résidentiel où chaque détail compte. Les propriétés y sont exceptionnelles et les installations électriques doivent être à la hauteur.\n\nNos interventions à Marnes portent principalement sur la domotique intégrée, l'éclairage architectural et la sécurité. Chaque projet est conçu sur mesure, en fonction de l'architecture du lieu et des attentes du propriétaire.\n\nL'éclairage architectural est un art que nous pratiquons avec passion. Mettre en valeur une façade, créer des jeux de lumière dans un jardin, installer des scènes lumineuses dans les pièces de réception — chaque installation est unique et pensée pour sublimer l'espace.\n\nLa sécurité est l'autre pilier de nos interventions à Marnes : alarme intrusion, vidéosurveillance discrète, contrôle d'accès au portail. Protection maximale, intégration minimale.",
    "servicesHighlight": [
      "Domotique intégrée sur mesure",
      "Éclairage architectural intérieur et extérieur",
      "Alarme et vidéosurveillance discrètes",
      "Tableaux encastrés avec finitions irréprochables",
      "Coordination avec architectes et décorateurs"
    ],
    "localInfo": "Commune desservie pour des projets sur mesure. Visite de diagnostic gratuite après échange téléphonique.",
    "isPremium": true,
    "faq": [
      {
        "question": "Quel niveau de finition proposez-vous à Marnes-la-Coquette ?",
        "answer": "Le niveau le plus exigeant : encastrements parfaits, câblage invisible, matériel de qualité, coordination avec architectes et décorateurs."
      },
      {
        "question": "Faites-vous l'éclairage architectural ?",
        "answer": "Oui, nous concevons des éclairages sur mesure pour mettre en valeur l'architecture intérieure et extérieure de votre propriété."
      },
      {
        "question": "Proposez-vous la vidéosurveillance discrète ?",
        "answer": "Oui, nous installons des systèmes de vidéosurveillance intégrés de manière discrète, sans compromettre l'esthétique de la propriété."
      },
      {
        "question": "Combien coûte un projet domotique complet ?",
        "answer": "Pour une propriété de Marnes, comptez à partir de 8 000 € HT pour un système domotique complet. Chaque projet étant unique, le devis est établi après visite."
      },
      {
        "question": "Travaillez-vous avec des décorateurs d'intérieur ?",
        "answer": "Oui, nous avons l'habitude de coordonner nos interventions avec des décorateurs pour harmoniser l'installation électrique avec le projet décoratif."
      }
    ],
    "relatedServices": [
      "domotique-residentielle",
      "eclairage-interieur-exterieur",
      "alarme",
      "video-surveillance"
    ]
  },
  {
    "slug": "le-vesinet",
    "city": "Le Vésinet",
    "department": "78",
    "title": "Électricien au Vésinet",
    "seoTitle": "Électricien au Vésinet (78) — JM-ELEC 91",
    "seoDescription": "Électricien au Vésinet. Rénovation, éclairage extérieur, borne IRVE. Ville-parc résidentielle. Devis gratuit.",
    "description": "Interventions au Vésinet : rénovation électrique, éclairage extérieur et bornes de recharge pour la ville-parc résidentielle.",
    "heroSubtitle": "La ville-parc résidentielle",
    "context": "Le Vésinet est une ville-parc d'environ 16 000 habitants dans les Yvelines, connue pour ses lacs, ses parcs et son architecture résidentielle remarquable. Les propriétés y sont souvent spacieuses, avec des jardins qui méritent un éclairage soigné.\n\nLa ville est classée et les travaux extérieurs doivent respecter certaines contraintes architecturales. Nous prenons en compte ces exigences dans nos installations.",
    "editorial": "Le Vésinet est une ville-parc unique en Île-de-France. Les lacs, les pelouses et les arbres centenaires créent un cadre résidentiel exceptionnel. Les propriétés y sont entretenues avec soin et les installations électriques doivent être à la hauteur.\n\nL'éclairage extérieur est notre spécialité au Vésinet. Nous avons réalisé plusieurs projets d'éclairage paysager : balisage d'allées en pavé, mise en valeur d'arbres remarquables, éclairage de terrasse et de piscine. Chaque installation est conçue en LED basse consommation avec programmation horaire.\n\nLes bornes de recharge sont très demandées au Vésinet. Les propriétaires de véhicules électriques souhaitent recharger chez eux, dans leur garage ou sous leur carport. Nous installons des bornes 7 kW et 22 kW avec ligne dédiée.\n\nLa rénovation électrique des maisons anciennes du Vésinet demande un savoir-faire particulier : respect de l'architecture, encastrements discrets, matériel de qualité.",
    "servicesHighlight": [
      "Éclairage extérieur paysager et balisage",
      "Rénovation électrique de maisons de caractère",
      "Installation de bornes IRVE",
      "Éclairage de terrasse et piscine",
      "Remplacement de tableau avec finitions soignées"
    ],
    "localInfo": "Commune desservie pour des projets d'éclairage, de rénovation et de bornes IRVE. Visite de diagnostic gratuite.",
    "isPremium": true,
    "faq": [
      {
        "question": "Réalisez-vous l'éclairage extérieur au Vésinet ?",
        "answer": "Oui, nous avons réalisé plusieurs projets d'éclairage paysager au Vésinet : balisage d'allées, mise en valeur d'arbres, éclairage de terrasse."
      },
      {
        "question": "Respectez-vous les contraintes architecturales du Vésinet ?",
        "answer": "Oui, nous connaissons les exigences de la ville-parc et nos installations sont conçues pour s'intégrer discrètement dans l'environnement."
      },
      {
        "question": "Installez-vous des bornes de recharge au Vésinet ?",
        "answer": "Oui, nous installons des bornes 7 kW et 22 kW dans les garages et carports des propriétés du Vésinet."
      },
      {
        "question": "Faites-vous l'éclairage de piscine ?",
        "answer": "Oui, nous installons des éclairages de piscine conformes aux normes (volumes de protection, IP adaptés) et esthétiques."
      },
      {
        "question": "Combien coûte un éclairage de jardin au Vésinet ?",
        "answer": "Un projet d'éclairage paysager (10 à 20 points lumineux) démarre à environ 2 000 € HT. Devis gratuit après visite."
      }
    ],
    "relatedServices": [
      "eclairage-interieur-exterieur",
      "renovation-electrique",
      "borne-recharge-irve"
    ]
  }
];

export function getZone(slug: string): ZoneData | undefined {
  return zones.find((zone) => zone.slug === slug);
}
