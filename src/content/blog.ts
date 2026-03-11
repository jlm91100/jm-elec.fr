export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
  faq: { question: string; answer: string }[];
}

export const blogArticles: BlogArticle[] = [
  {
    "slug": "comment-savoir-si-tableau-electrique-vetuste",
    "title": "Comment savoir si votre tableau électrique est vétuste ?",
    "metaTitle": "Tableau électrique vétuste : 7 signes à repérer — JM-ELEC 91",
    "metaDescription": "Fusibles porcelaine, absence de différentiel, câbles en tissu… Découvrez les 7 signes qui indiquent que votre tableau électrique doit être remplacé.",
    "excerpt": "Fusibles porcelaine, absence de différentiel, câbles en tissu… Voici les signes qui ne trompent pas.",
    "date": "2025-03-01",
    "readTime": "5 min",
    "category": "Conseils",
    "content": [
      "Le tableau électrique est le cœur de votre installation. C'est lui qui distribue le courant dans toute la maison et qui protège les circuits en cas de problème. Pourtant, dans de nombreux logements — surtout ceux construits avant les années 90 — le tableau n'a jamais été remplacé.",
      "**1. Des fusibles en porcelaine ou en bakélite.** Si votre tableau contient encore des fusibles à broches ou des cartouches en porcelaine, c'est un signe clair de vétusté. Ces composants datent des années 60-70 et ne répondent plus aux normes actuelles. Ils ne protègent pas contre les contacts indirects (défaut d'isolement).",
      "**2. Absence de disjoncteur différentiel 30 mA.** Le différentiel 30 mA est obligatoire depuis 1991 pour les constructions neuves. Il protège les personnes contre l'électrocution. Si votre tableau n'en possède pas, votre installation présente un risque grave.",
      "**3. Des fils en tissu ou en aluminium.** Les anciennes installations utilisaient des conducteurs gainés de tissu, voire de l'aluminium. Ces matériaux se dégradent avec le temps, augmentant les risques de court-circuit et d'incendie.",
      "**4. Un tableau sous-dimensionné.** Votre tableau ne comporte que 6 ou 8 disjoncteurs alors que vous avez 15 circuits ? Des circuits sont doublés sur un même disjoncteur ? C'est un signe que le tableau est sous-dimensionné pour vos besoins actuels.",
      "**5. Des disjoncteurs qui sautent régulièrement.** Si un disjoncteur saute chaque fois que vous utilisez le four, le lave-linge ou le sèche-cheveux en même temps, le tableau n'est plus adapté à votre consommation.",
      "**6. Traces de chauffe ou odeur de brûlé.** Des marques de brûlure, des plastiques déformés ou une odeur suspecte près du tableau sont des signaux d'urgence. Un échauffement peut provoquer un incendie.",
      "**7. Diagnostic immobilier défavorable.** Lors d'une vente ou d'une location, le diagnostic électrique peut relever des anomalies sur le tableau. C'est souvent le déclencheur d'une mise en conformité.",
      "**Que faire ?** Si vous reconnaissez un ou plusieurs de ces signes, faites appel à un électricien professionnel pour un diagnostic. Le remplacement d'un tableau électrique prend généralement une journée et vous garantit une installation aux normes pour les 30 prochaines années."
    ],
    "faq": [
      {
        "question": "Combien coûte le remplacement d'un tableau électrique ?",
        "answer": "Le remplacement complet d'un tableau électrique coûte en moyenne entre 800 € et 2 500 € selon la taille de l'installation, le nombre de circuits et la complexité des travaux. JM-ELEC 91 fournit un devis détaillé ligne par ligne."
      },
      {
        "question": "Combien de temps dure l'intervention ?",
        "answer": "Le remplacement d'un tableau électrique standard prend une journée. Pour les installations complexes (grande maison, remise en conformité complète), cela peut prendre 2 jours."
      },
      {
        "question": "Faut-il couper le courant pendant les travaux ?",
        "answer": "Oui, le courant est coupé pendant l'intervention. Nous vous prévenons à l'avance pour que vous puissiez vous organiser. En général, le courant est rétabli en fin de journée."
      }
    ]
  },
  {
    "slug": "aides-installation-borne-irve-2025",
    "title": "Borne de recharge IRVE : toutes les aides en 2025",
    "metaTitle": "Aides borne IRVE 2025 : crédit d'impôt, ADVENIR, TVA réduite — JM-ELEC 91",
    "metaDescription": "Crédit d'impôt de 500 €, prime ADVENIR, TVA à 5.5 %… Retrouvez toutes les aides disponibles en 2025 pour installer une borne de recharge à domicile.",
    "excerpt": "Crédit d'impôt, prime ADVENIR, TVA réduite… Le point complet sur les aides 2025.",
    "date": "2025-02-15",
    "readTime": "4 min",
    "category": "Aides & Financement",
    "content": [
      "L'installation d'une borne de recharge pour véhicule électrique à domicile est devenue un enjeu majeur avec l'essor des voitures électriques. En 2025, plusieurs dispositifs d'aide permettent de réduire significativement le coût de l'installation.",
      "**Crédit d'impôt borne de recharge.** Le crédit d'impôt pour l'installation d'une borne de recharge à domicile a été reconduit en 2025. Il s'élève à 75 % du montant des dépenses, plafonné à 500 € par point de charge. Ce crédit s'applique aux résidences principales et secondaires, que vous soyez propriétaire ou locataire.",
      "**Prime ADVENIR.** Le programme ADVENIR finance une partie de l'installation de bornes de recharge dans les copropriétés et les entreprises. En copropriété, la prime peut atteindre 50 % du coût HT de l'installation, dans la limite de 960 € par point de charge pour une infrastructure collective.",
      "**TVA réduite à 5,5 %.** L'installation d'une borne de recharge dans un logement de plus de 2 ans bénéficie du taux de TVA réduit à 5,5 % (au lieu de 20 %), à condition que l'installation soit réalisée par un professionnel certifié IRVE.",
      "**Condition obligatoire : certification IRVE.** Pour bénéficier de ces aides, l'installation doit être réalisée par un électricien certifié IRVE (Infrastructure de Recharge pour Véhicules Électriques). JM-ELEC 91 est certifié IRVE et vous accompagne dans les démarches administratives.",
      "**Quelle borne choisir ?** Pour un usage domestique, une borne de 7,4 kW (monophasé) suffit pour recharger votre véhicule pendant la nuit. Si vous disposez d'un abonnement triphasé, une borne de 11 kW ou 22 kW permet une recharge plus rapide. Nous vous conseillons la puissance adaptée à votre compteur et à vos habitudes.",
      "**Combien coûte l'installation ?** Le prix d'une borne de recharge installée varie de 1 200 € à 2 500 € selon la puissance, le modèle et la complexité du raccordement. Après déduction des aides, le reste à charge peut descendre à 600-1 200 €."
    ],
    "faq": [
      {
        "question": "Faut-il augmenter la puissance de mon compteur pour une borne IRVE ?",
        "answer": "Pas nécessairement. Une borne 7,4 kW fonctionne sur un abonnement standard de 9 kVA. Pour une borne 11 kW ou 22 kW, il faudra un abonnement triphasé. Nous vérifions la compatibilité lors du diagnostic."
      },
      {
        "question": "Puis-je installer une borne en copropriété ?",
        "answer": "Oui, grâce au 'droit à la prise' (loi LOM 2019). Vous pouvez faire installer une borne sur votre place de parking, même sans accord de la copropriété. La prime ADVENIR peut financer une partie des travaux."
      },
      {
        "question": "Combien de temps faut-il pour installer une borne ?",
        "answer": "L'installation d'une borne de recharge domestique prend en moyenne une demi-journée. Le délai peut être plus long si des travaux de câblage sont nécessaires."
      }
    ]
  },
  {
    "slug": "norme-nfc-15-100-essentiel",
    "title": "Norme NFC 15-100 : ce qu'il faut retenir",
    "metaTitle": "Norme NFC 15-100 : guide complet pour votre installation — JM-ELEC 91",
    "metaDescription": "La norme NFC 15-100 encadre toutes les installations électriques en France. Découvrez ses exigences principales et pourquoi elle est essentielle pour votre sécurité.",
    "excerpt": "La norme qui encadre toutes les installations électriques en France. Voici l'essentiel.",
    "date": "2025-01-20",
    "readTime": "6 min",
    "category": "Normes & Réglementation",
    "content": [
      "La norme NFC 15-100 est LE texte de référence pour les installations électriques basse tension en France. Elle s'applique à tous les logements neufs et aux rénovations, et définit les règles de sécurité, de dimensionnement et de confort que doit respecter toute installation électrique.",
      "**Protection des personnes.** La norme impose des dispositifs de protection contre les contacts directs (gaines isolantes, prises à éclipses) et indirects (disjoncteurs différentiels 30 mA). Chaque circuit doit être protégé par un disjoncteur adapté à la section des conducteurs.",
      "**Nombre minimum de circuits.** La NFC 15-100 définit un nombre minimum de prises, points d'éclairage et circuits spécialisés par pièce. Par exemple : au moins 5 prises dans un séjour de plus de 28 m², 6 prises dans une cuisine, un circuit dédié pour chaque gros appareil (four, lave-linge, lave-vaisselle, plaque de cuisson).",
      "**Le tableau électrique.** Le tableau doit être installé dans un espace technique électrique du logement (ETEL), accessible et ventilé. Il doit contenir au minimum 2 interrupteurs différentiels 30 mA (un de type A pour les circuits spécialisés, un de type AC pour les autres circuits). Une réserve de 20 % de modules libres est obligatoire.",
      "**Salle de bain : les volumes.** La norme définit des volumes de sécurité dans les salles de bain (volumes 0, 1, 2 et hors volume) qui déterminent quels appareils peuvent être installés et à quelle distance de la baignoire ou de la douche. Aucun appareillage n'est autorisé dans le volume 0 (intérieur de la baignoire/douche).",
      "**Parafoudre.** L'installation d'un parafoudre est obligatoire dans certaines zones géographiques à risque kéraunique élevé (fréquence des orages). L'Essonne fait partie des zones où le parafoudre est recommandé.",
      "**Gaine technique logement (GTL).** La GTL regroupe le tableau électrique, le coffret de communication et les arrivées de courant et de télécom. Elle doit mesurer au minimum 60 cm de large et aller du sol au plafond.",
      "**Mise en conformité vs mise en sécurité.** La mise en conformité vise à rendre l'installation conforme à la norme en vigueur. La mise en sécurité consiste à supprimer les défauts les plus dangereux (6 points de sécurité définis par l'arrêté du 28 septembre 2017). Pour une vente, seule la mise en sécurité est exigée, mais nous recommandons la mise en conformité complète pour une protection optimale."
    ],
    "faq": [
      {
        "question": "Mon installation doit-elle être aux normes NFC 15-100 pour vendre mon logement ?",
        "answer": "Non, la norme NFC 15-100 n'est pas rétroactive. Pour une vente, un diagnostic électrique est obligatoire (logements de plus de 15 ans), mais seuls les 6 points de sécurité minimaux sont exigés, pas la conformité complète."
      },
      {
        "question": "Combien coûte une mise en conformité NFC 15-100 ?",
        "answer": "Le coût dépend de l'état de l'installation. Pour un pavillon avec un tableau à remplacer et quelques circuits à reprendre, comptez entre 1 500 € et 4 000 €. Un diagnostic préalable permet de chiffrer précisément."
      },
      {
        "question": "La norme NFC 15-100 évolue-t-elle ?",
        "answer": "Oui, la norme est régulièrement mise à jour. La dernière version (amendement A5) date de 2015 et intègre notamment les prises RJ45 obligatoires et la gaine technique logement."
      }
    ]
  },
  {
    "slug": "difference-disjoncteur-fusible",
    "title": "Disjoncteur ou fusible : quelle différence ?",
    "metaTitle": "Disjoncteur vs fusible : différences et lequel choisir — JM-ELEC 91",
    "metaDescription": "Disjoncteur réarmable vs fusible jetable : découvrez les différences, avantages et pourquoi les disjoncteurs sont désormais la norme en électricité domestique.",
    "excerpt": "Réarmable vs jetable : comprendre la différence et pourquoi les disjoncteurs sont devenus la norme.",
    "date": "2025-01-05",
    "readTime": "3 min",
    "category": "Conseils",
    "content": [
      "Si vous vivez dans un logement ancien, il y a de fortes chances que votre tableau électrique contienne encore des fusibles (aussi appelés « plombs » ou « coupe-circuits »). Les constructions récentes utilisent exclusivement des disjoncteurs divisionnaires. Voici pourquoi.",
      "**Le fusible** est un dispositif de protection à usage unique. Il contient un fil calibré qui fond lorsque le courant dépasse une certaine intensité, coupant ainsi le circuit. Le problème : une fois fondu, il faut le remplacer. De plus, il ne protège que contre les surintensités, pas contre les défauts d'isolement.",
      "**Le disjoncteur divisionnaire** est un dispositif réarmable. Lorsqu'il détecte une surcharge ou un court-circuit, il coupe le circuit automatiquement. Il suffit de le réarmer (le remonter) après avoir identifié et résolu le problème. C'est plus pratique, plus sûr et plus rapide.",
      "**Pourquoi remplacer vos fusibles ?** Au-delà du confort d'utilisation, les tableaux à fusibles sont souvent associés à des installations vétustes qui ne respectent pas la norme NFC 15-100. L'absence de différentiel 30 mA, le sous-dimensionnement des circuits et la vétusté du câblage sont des risques courants.",
      "**Le remplacement.** Passer d'un tableau à fusibles à un tableau à disjoncteurs implique le remplacement complet du tableau. C'est l'occasion de remettre l'installation aux normes : ajout de différentiels 30 mA, création de circuits dédiés, mise en place d'un parafoudre si nécessaire. Durée : une journée en moyenne."
    ],
    "faq": [
      {
        "question": "Peut-on mélanger fusibles et disjoncteurs dans un tableau ?",
        "answer": "Techniquement oui, mais ce n'est pas recommandé. Un tableau mixte est souvent le signe d'une installation qui a été modifiée sans cohérence. Nous recommandons un remplacement complet pour une protection homogène."
      },
      {
        "question": "Les fusibles sont-ils dangereux ?",
        "answer": "Les fusibles ne sont pas dangereux en eux-mêmes, mais un tableau à fusibles est souvent associé à une installation ancienne sans différentiel 30 mA, ce qui représente un risque d'électrocution."
      }
    ]
  },
  {
    "slug": "prix-renovation-electrique-maison",
    "title": "Prix d'une rénovation électrique : guide complet",
    "metaTitle": "Prix rénovation électrique maison 2025 : tarifs et budget — JM-ELEC 91",
    "metaDescription": "Quel budget pour la rénovation électrique de votre maison ? De 80 €/m² à 150 €/m² selon l'ampleur des travaux. Guide complet avec tarifs détaillés.",
    "excerpt": "De 80 €/m² à 150 €/m² selon l'ampleur des travaux. Voici comment estimer votre budget.",
    "date": "2024-12-10",
    "readTime": "5 min",
    "category": "Tarifs",
    "content": [
      "La rénovation électrique est l'un des postes les plus importants dans la réhabilitation d'un logement ancien. Le budget dépend de l'ampleur des travaux, de la surface du logement et de l'état de l'installation existante.",
      "**Rénovation partielle (50-80 €/m²).** Elle concerne le remplacement du tableau électrique, l'ajout de différentiels 30 mA et la reprise de quelques circuits critiques. C'est la solution la plus courante pour les logements des années 80-90 dont l'installation est vieillissante mais pas totalement obsolète.",
      "**Rénovation complète (80-120 €/m²).** Elle inclut le remplacement total du tableau, le recâblage de tous les circuits, la mise aux normes des prises et interrupteurs, et la création de circuits spécialisés (cuisine, salle de bain). C'est la solution recommandée pour les logements d'avant 1980.",
      "**Rénovation totale avec remise à neuf (120-150 €/m²).** Elle comprend tout ce qui précède plus le passage en encastré (saignées dans les murs), l'installation d'un réseau de communication (prises RJ45), et éventuellement la domotique. C'est la solution pour les rénovations complètes de maisons anciennes.",
      "**Exemples concrets en Essonne :**\n- Pavillon 80 m² à Brétigny-sur-Orge, rénovation complète : 7 500 € – 9 500 €\n- Appartement 50 m² à Corbeil-Essonnes, mise en sécurité : 3 000 € – 4 500 €\n- Maison 120 m² à Gif-sur-Yvette, rénovation totale : 14 000 € – 18 000 €",
      "**Ce qui fait varier le prix :**\n- La surface du logement\n- L'état de l'installation existante\n- Le nombre de circuits à créer\n- Le type de pose (apparent vs encastré)\n- La qualité du matériel choisi\n- L'accessibilité du chantier",
      "**Notre approche.** Chez JM-ELEC 91, chaque devis est détaillé ligne par ligne. Pas de forfait opaque, pas de surprise. Le diagnostic préalable (gratuit) nous permet de vous proposer un chiffrage précis et adapté à votre situation."
    ],
    "faq": [
      {
        "question": "Peut-on rénover l'électricité sans casser les murs ?",
        "answer": "Oui, en utilisant des goulottes, plinthes et moulures. Le passage en apparent est plus économique et évite les travaux de maçonnerie. Le résultat est propre et discret avec du matériel de qualité."
      },
      {
        "question": "Faut-il refaire toute l'électricité en une fois ?",
        "answer": "Pas nécessairement. On peut procéder par étapes : d'abord le tableau et les différentiels (sécurité), puis les circuits critiques (cuisine, salle de bain), puis le reste. Nous vous conseillons sur les priorités."
      },
      {
        "question": "Les travaux sont-ils éligibles à des aides ?",
        "answer": "La rénovation électrique seule n'est pas éligible aux aides de l'État (MaPrimeRénov'). En revanche, si elle s'inscrit dans un projet global de rénovation énergétique, certaines aides peuvent s'appliquer. La TVA à 10 % s'applique pour les logements de plus de 2 ans."
      }
    ]
  }
];
