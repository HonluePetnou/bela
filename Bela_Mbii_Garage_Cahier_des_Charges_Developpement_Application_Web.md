

## BELA MBII LTD (GARAGE)
BUSUMBII ENTRANCE MILE 3 — Limbe, Cameroun
NIU : M012416350442Z   Tél : (+237) 690 208 485
Cahier des Charges
Fonctionnel et Technique
Site Web Vitrine et Système de Réservation en Ligne
## Bilingue Français / Anglais — Responsive — Next.js 14
DocumentCahier des Charges Fonctionnel et Technique
ClientBELA MBII LTD (GARAGE)
PrestataireSALAM SARL — NIU : M052517774658S
## Version1.0 — Document Officiel
Date4 mai 2026
StatutConfidentiel
Contact prestatairesalamsarlcmr@gmail.com — (+237) 692 17 41 46
Ce document est confidentiel. Sa reproduction ou diffusion sans accord écrit de SALAM SARL est
interdite.

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
Table des matières
-  Contexte et Présentation du Projet. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  4
1.1  Présentation de BELA MBII GARAGE. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   4
1.2  Objectifs du Projet. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   4
1.3  Périmètre de la Version 1.0 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   4
-  Besoins Fonctionnels . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  5
2.1  Site Vitrine Bilingue. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   5
2.1.1  Architecture des pages . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   5
2.1.2  Services proposés par le garage  . . . . . . . . . . . . . . . . . . . . . . . . .   5
2.1.3  Contenu de la page d’accueil  . . . . . . . . . . . . . . . . . . . . . . . . . .   7
2.2  Système de Réservation en Ligne. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   7
2.2.1  Règles métier des créneaux  . . . . . . . . . . . . . . . . . . . . . . . . . . .   7
2.2.2  Flux de réservation — Wizard 5 étapes  . . . . . . . . . . . . . . . . . . . .   8
2.2.3  Règle de confirmation et de modification . . . . . . . . . . . . . . . . . . . .   9
2.2.4  Notifications automatiques . . . . . . . . . . . . . . . . . . . . . . . . . . . .   9
2.3  Espace Client. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   9
2.4  Tableau de Bord Administrateur . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   9
2.4.1  Rôles et accès . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  10
2.4.2  Fonctionnalités . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  10
-  Exigences UX, Design et Accessibilité. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11
3.1  Identité Visuelle et Charte Graphique . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  11
3.2  Responsive Design — Stratégie Mobile First . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  11
3.3  Performance et Accessibilité . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
-  Architecture Technique. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
4.1  Stack Technologique . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  13
4.2  Modèle de Données (Schéma Prisma). . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  14
4.3  Sécurité . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  14
-  SEO et Internationalisation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
5.1  Stratégie SEO . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  15
5.2  Internationalisation FR / EN . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  15
-  Hébergement, Nom de Domaine et Déploiement . . . . . . . . . . . . . . . . . . . . . . . . . . 16
## Page 2 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
6.1  Nom de Domaine . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  16
6.2  Sécurité de l’Infrastructure — Ce que Vercel Prend en Charge . . . . . . . . . . . . . . . . . . . . . .  16
6.3  Infrastructure d’Hébergement — Coûts Réels Vérifiés. . . . . . . . . . . . . . . . . . . . . . . . . . . . .  17
6.4  Pipeline CI/CD . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  19
-  Charge de Travail et Plan de Réalisation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20
7.1  Phases du Projet . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  20
7.2  Estimation de la Charge par Module . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  21
-  Critères de Recette et Scénarios de Tests. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
-  Budget et Conditions Contractuelles. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
9.1  Plan de Paiement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  23
9.2  Garantie et Maintenance. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  23
-  Conclusion et Prochaines Étapes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24
10.1  Synthèse des Livrables . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  24
10.2  Actions Immédiates après Validation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  24
## Page 3 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
- Contexte et Présentation du Projet
1.1 Présentation de BELA MBII GARAGE
BELA MBII LTD est un établissement de services automobiles implanté à Limbe, dans la région
du Sud-Ouest du Cameroun, enregistré sous le numéro TPPRR/RC/LBE/2024/B/007. Il propose
une gamme complète de services de maintenance, de réparation et d’expertise automobile destinée
aux particuliers et aux entreprises de la région.
Dans un contexte de digitalisation croissante du secteur des services au Cameroun, BELA MBII
GARAGE souhaite établir une présence numérique professionnelle permettant à la fois de valoriser
ses activités auprès d’une clientèle connectée, et d’optimiser la gestion des admissions en atelier
via un système de réservation en ligne.
1.2 Objectifs du Projet
Le projet poursuit trois objectifs stratégiques complémentaires.
Visibilité et image de marque. Doter le garage d’un site web professionnel, moderne et bilingue
constituant sa vitrine numérique officielle, renforçant sa crédibilité auprès des clients potentiels et
le positionnant comme un acteur moderne du secteur automobile dans le Sud-Ouest Cameroun.
Acquisition client. Générer de nouvelles prises de contact et réservations via le canal numérique,
en offrant aux clients une expérience de prise de rendez-vous fluide, disponible 24h/24 et 7j/7.
Optimisation opérationnelle. Structurer les admissions de véhicules par un système de cré-
neaux, réduire la charge administrative de la réception et offrir au garage une visibilité en temps
réel sur son planning via un tableau de bord dédié.
1.3 Périmètre de la Version 1.0
ModuleDescriptionPriorité
Site vitrine bilinguePages institutionnelles FR/EN, SEO, responsive  Critique
Système de réservationFormulaire multi-étapes, gestion des créneauxCritique
Espace clientCompte, historique, notificationsHaute
Tableau de bord adminPlanning, gestion réservations, configurationCritique
NotificationsEmail (client) + In-app (client et admin)Haute
Nom de domaine +
hébergement
Achat, configuration, mise en ligneCritique
Sont explicitement exclus de la version 1.0 : le paiement en ligne des prestations, l’application
mobile native, le suivi temps réel des interventions en atelier, l’intégration avec le système ERP
interne, et le module multi-sites.
## Page 4 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
## 2. Besoins Fonctionnels
## 2.1 Site Vitrine Bilingue
2.1.1 Architecture des pages
PageURLContenu principal
Accueil          /Hero, services en avant, chiffres clés, témoignages, CTA
réservation
Nos Services/servicesListe complète, descriptions, photos, durées indicatives
À Propos        /a-proposHistoire, équipe, valeurs, photos de l’atelier
Réserver/reserverWizard de réservation 5 étapes
Galerie          /galeriePhotos atelier, avant/après
Contact/contactFormulaire, carte, horaires, coordonnées
Espace client     /mon-compteRéservations, historique, profil
Connexion/connexionConnexion / création de compte
Mentions légales  /mentions-
legales
Infos légales et confidentialité
2.1.2 Services proposés par le garage
Les services suivants sont présentés sur le site et disponibles à la réservation en ligne. Chaque
service dispose d’une durée de créneau dédiée, configurable depuis l’interface d’administration.
## Page 5 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
ServiceDescription détailléeDurée créneau
Maintenance et Entretien
Vidange et filtresVidange huile moteur, remplacement filtre à
huile, à air, à carburant
1 créneau (2h)
Révision complèteContrôle général, remplacement consommables
selon barème constructeur
2 créneaux (4h)
Système de freinageRemplacement plaquettes, disques, tambours, li-
quide de frein
1 créneau (2h)
AmortisseursDiagnostic suspension, remplacement amortis-
seurs et silent-blocs
1 créneau (2h)
Réparation Mécanique et Électronique
Réparation moteurCulasse, distribution, joints, révision moteur2 créneaux (4h)
Diagnostic électronique    Lecture et effacement codes défauts, expertise
calculateurs OBD
1 créneau (2h)
Électricité autoCâblage, alternateur, démarreur, systèmes élec-
triques
1 créneau (2h)
Carrosserie et Tôlerie
Réparation collisionRedressage, soudure, remplacement éléments de
carrosserie
2 créneaux (4h)
PeintureRetouche, peinture partielle ou complèteSur devis
DébosselageDébosselage sans peinture (PDR), réparation im-
pacts
1 créneau (2h)
## Services Spécialisés
PneumatiquesMontage, équilibrage, permutation, réparation
crevaison
1 créneau (2h)
## Remplacement
pare-brise
Dépose/pose pare-brise, vitrages latéraux1 créneau (2h)
ClimatisationRecharge, diagnostic, remplacement compres-
seur
1 créneau (2h)
ReprogrammationReprogrammation calculateurs, mise à jour logi-
ciel
1 créneau (2h)
Dépannage et Remorquage
Dépannage rapideIntervention mobile, diagnostic sur siteSur appel
RemorquagePrise en charge et acheminement au garageSur appel
## Page 6 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
Les services de dépannage et remorquage ne sont pas réservables en ligne. Ils disposent d’un
formulaire de demande d’intervention rapide avec numéro de téléphone direct.
2.1.3 Contenu de la page d’accueil
La page d’accueil est conçue pour convertir un visiteur en client en moins de 10 secondes. Elle
s’articule autour des blocs suivants, dans l’ordre :
– Section hero : visuel pleine largeur de l’atelier ou d’un véhicule en intervention, titre principal
accrocheur bilingue, sous-titre descriptif, bouton principal « Réserver un créneau » et bouton
secondaire « Découvrir nos services ».
– Barre de confiance : 4 chiffres clés du garage disposés horizontalement (année d’ouverture,
nombre de marques prises en charge, nombre de services proposés, satisfaction client).
– Services en vedette : 6 cartes de services avec icône, titre et description courte. Lien « Voir
tous nos services ».
– Pourquoi nous choisir : 3 arguments différenciants (techniciens expérimentés, équipement
de diagnostic moderne, garantie des travaux).
– Témoignages clients : 3 avis mis en avant avec prénom, type de véhicule et note.
– Bandeau de réservation : section colorée avec call-to-action fort et rappel des horaires d’ou-
verture.
– Footer : logo, coordonnées, liens rapides, réseaux sociaux, mentions légales, copyright.
2.2 Système de Réservation en Ligne
2.2.1 Règles métier des créneaux
Le garage est ouvert du lundi au samedi, de 10h00 à 17h30. Chaque créneau de réservation en
ligne a une durée fixe de 2 heures. Cette durée a été définie pour laisser une marge de travail
indépendant entre chaque véhicule réservé, sans saturer le planning de l’atelier.
## Page 7 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
ParamètreValeurConfigurable
Heure d’ouverture10h00Oui
Heure de fermeture17h30Oui
Durée d’un créneau2 heuresOui
Créneaux disponibles par jour10h00, 12h00, 14h00, 16h00 (4 cré-
neaux)
Calculés auto
Jours ouvrablesLundi au SamediOui
Jours fériés / fermeturesParamétrables par l’adminOui
Délai minimum avant réservation4 heuresOui
Horizon de réservation30 jours à l’avance maximumOui
Réservations simultanées par
créneau
1 (exclusif)Oui
Modification/annulation par le
client
Non autorisée—
Modification/annulation par
l’admin
Oui, avec notification email auto-
matique au client
## —
2.2.2 Flux de réservation — Wizard 5 étapes
Le formulaire de réservation est présenté sous forme d’un assistant multi-étapes (wizard). Le client
ne peut pas passer à l’étape suivante sans avoir complété l’étape courante. Un indicateur de
progression est affiché en permanence.
ÉtapeTitreChamps et contenu
1Votre véhiculeMarque, modèle, année, immatriculation, type de carburant
2Service souhaitéSélection du service dans la liste ; description libre du pro-
blème (optionnel)
3Choisir un créneau  Calendrier interactif : sélection de la date, puis du créneau
disponible (les créneaux pris sont masqués)
4Votre compteConnexion ou création de compte (prénom, nom, email, télé-
phone, mot de passe)
5RécapitulatifRésumé complet, case à cocher CGU, bouton de confirmation
final
## Page 8 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
2.2.3 Règle de confirmation et de modification
La réservation est confirmée automatiquement et immédiatement à la soumission du formulaire.
Aucune validation manuelle n’est nécessaire du côté du garage. Le créneau est bloqué instantané-
ment.
Seul l’administrateur du site peut modifier ou annuler une réservation via le tableau de bord. Dans
les deux cas, le client reçoit une notification automatique par email et par notification in-app dans
son espace client. Le client ne dispose d’aucun bouton d’annulation autonome.
2.2.4 Notifications automatiques
ÉvénementDestinataireCanalContenu
Réservation confirmée   ClientEmail +
## In-app
Récapitulatif complet, date, heure, service, réfé-
rence
Nouvelle réservationAdminIn-appNom client, véhicule, service, créneau
Rappel 24h avantClientEmail +
## In-app
Rappel, adresse du garage, heure du rendez-vous
Réservation annulée
par admin
ClientEmail +
## In-app
Motif si renseigné, invitation à re-réserver
Réservation modifiée
par admin
ClientEmail +
## In-app
Nouveau créneau, nouveau service si modifié
Compte crééClientEmailBienvenue + lien vérification
## 2.3 Espace Client
Le client accède à son espace personnel après connexion. Il y dispose des fonctionnalités suivantes.
– Mes réservations à venir : liste des rendez-vous futurs avec statut, date, heure et service.
Aucun bouton d’annulation côté client.
– Historique : toutes les réservations passées avec leur statut final (honoré, annulé, absent).
– Notifications in-app : centre de notifications listant tous les événements liés à ses réservations
(confirmations, modifications, rappels, annulations).
– Mes véhicules : véhicules enregistrés, avec possibilité d’en ajouter.
– Mon profil : modification du téléphone, de l’email et du mot de passe.
2.4 Tableau de Bord Administrateur
## Page 9 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
2.4.1 Rôles et accès
RôleAttribué àPermissions
Super AdminSALAM SARLAccès total, gestion des comptes admin, confi-
guration système
ResponsableDirecteur du garageToutes  réservations,  paramétrage  créneaux,
rapports
RéceptionnisteÉquipe réceptionVue planning, modification/annulation, créa-
tion manuelle
## 2.4.2 Fonctionnalités
– Système de notifications in-app : chaque nouvelle réservation, annulation ou demande
déclenche une notification visible dans l’interface admin, avec indicateur de non-lu et liste
chronologique des événements récents.
– Vue planning : calendrier hebdomadaire des réservations, code couleur par statut (confirmé,
terminé, annulé, absent).
– Vue liste : tableau de toutes les réservations avec filtres (date, statut, service, client) et export
## CSV.
– Gestion manuelle : création d’une réservation directement depuis l’admin (client présent
physiquement), modification de créneau ou de service, annulation avec motif.
– Blocage de créneaux : l’admin peut rendre des créneaux indisponibles (fermeture exception-
nelle, formation, équipement indisponible).
– Gestion des services : activation, désactivation, modification de la durée ou du nom d’un
service.
– Gestion des horaires : modification des heures d’ouverture, des jours ouvrables, ajout de
jours fériés.
– Fiche client : depuis une réservation, accès au profil complet du client et à tout son historique.
– Statistiques : nombre de réservations par période, par service, taux de présence, heure de
pointe.
## Page 10 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
- Exigences UX, Design et Accessibilité
3.1 Identité Visuelle et Charte Graphique
Le design du site décline l’identité de BELA MBII GARAGE dans un registre professionnel et
sobre. La charte graphique est la suivante.
ÉlémentValeurUsage
Couleur primaire      #0065CA (bleu BELA MBII)    Navigation, boutons principaux, titres
Couleur d’accent#F97316 (orange)Boutons CTA, éléments d’action prio-
ritaire
Fond sections         #F8FAFC (gris très clair)Alternance de sections
TypographieInter (Google Fonts)Titres Bold, corps Regular 16px, inter-
ligne 1.6
LogoSVG fourni par le clientEn-tête, footer, favicon
IcônesLucide Icons (outline)Services, navigation, actions
CoinsBorder-radius 8pxCartes, boutons, champs de formulaire
## 3.2 Responsive Design — Stratégie Mobile First
Le site est conçu en Mobile First : le design est pensé pour les petits écrans en premier, puis adapté
aux formats larges. Les trois breakpoints principaux sont les suivants.
FormatLargeurComportement
Mobile< 768pxNavigation hamburger, formulaire pleine largeur, bouton ré-
server fixe en bas d’écran
Tablette768–1024pxNavigation horizontale compacte, grille 2 colonnes
Desktop> 1024pxNavigation complète, grille 3–4 colonnes, sidebar calendrier
Le bouton « Réserver » est accessible depuis toutes les pages, sur tous les formats d’écran, à tout
moment de la navigation.
## Page 11 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
3.3 Performance et Accessibilité
IndicateurCibleOutil
Largest Contentful Paint (LCP)< 2,5 secondesGoogle PageSpeed
Cumulative Layout Shift (CLS)< 0,1Google PageSpeed
Score PageSpeed mobile> 80 / 100Google PageSpeed
Score PageSpeed desktop> 90 / 100Google PageSpeed
Contraste texte (WCAG 2.1 AA)Ratio > 4,5 :1WebAIM Checker
Zones tactiles mobilesMin. 44 × 44 pxTests manuels
## Page 12 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
## 4. Architecture Technique
## 4.1 Stack Technologique
La stack retenue — Next.js 14 (App Router) + TypeScript + Prisma ORM + PostgreSQL —
est optimale pour ce projet. Elle garantit un rendu hybride SSR/CSR pour des performances et
un SEO maximaux, un typage fort sur l’ensemble du code, une gestion des données relationnelles
robuste pour les réservations et les comptes, et un déploiement simplifié via Vercel.
CoucheTechnologieRôle
FrontendNext.js 14 + React 18 +
Tailwind CSS
Pages, composants, interface utilisa-
teur
LangageTypeScript (strict)Typage fort sur tout le projet
AuthentificationNextAuth.js v5 (Auth.js)Sessions, JWT, comptes locaux
ORMPrisma + PostgreSQL 15Modèles de données, migrations, re-
quêtes
APINext.js Route HandlersEndpoints REST internes
EmailsResend + React EmailEmails transactionnels
Stockage imagesCloudinaryUpload, optimisation, CDN images
Notifications in-appServer-Sent Events ou
WebSocket
Temps réel sans polling
HébergementVercel (frontend) + Neon
## (BDD)
Déploiement continu, serverless
MonitoringVercel Analytics + SentryPerformance et erreurs
## Page 13 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
4.2 Modèle de Données (Schéma Prisma)
ModèleChamps principauxRelations
Userid,  email,  passwordHash,  firstName,  last-
Name, phone, emailVerified, role, createdAt
A plusieurs Booking et
## Vehicle
Vehicleid, userId, brand, model, year, licensePlate,
fuelType
Appartient à User ; a
plusieurs Booking
Serviceid, nameFr, nameEn, descFr, descEn, slotDu-
ration, isActive
A plusieurs Booking
TimeSlotid, date, startTime, endTime, isBlocked, is-
## Booked
A un Booking (1 :1)
Bookingid, userId, vehicleId, serviceId, timeSlotId, sta-
tus, reference, notes, createdAt
## Lie User, Vehicle,
Service, TimeSlot
Notificationid, userId, type, title, body, isRead, createdAtAppartient à User
GarageConfigid, openTime, closeTime, slotDuration, mi-
nAdvanceHours, maxAdvanceDays
## Singleton
ClosedDayid, date, reasonJours fériés et fermetures
Les  statuts  possibles  d’une  réservation  (Booking.status)  sont  :  CONFIRMED,  CANCELLED,
## COMPLETED, NO_SHOW.
## 4.3 Sécurité
DomaineMesure implémentée
AuthentificationNextAuth.js avec JWT (HS256), sessions de 7 jours, refresh automa-
tique
Mots de passeHachage bcrypt (salt rounds 12) ; politique 8 caractères minimum
AutorisationMiddleware Next.js vérifiant le rôle sur toutes les routes /admin/*
InjectionsPrisma utilise des requêtes paramétrées ; validation Zod sur toutes les
entrées
HTTPSCertificat SSL/TLS via Vercel (Let’s Encrypt), redirection HTTP forcée
Variables d’env.Toutes les clés API dans les variables d’environnement, jamais dans le
code
Rate limiting5 tentatives de connexion maximum par 15 minutes (Upstash Redis)
## Page 14 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
- SEO et Internationalisation
5.1 Stratégie SEO
Le SEO est intégré dès la conception, non ajouté après coup. Les leviers principaux sont les suivants.
– Rendu serveur (SSR) : Next.js génère le HTML complet côté serveur. Google indexe le
contenu réel, pas du JavaScript.
– Métadonnées par page : title unique (50–60 caractères), meta description (150–160 carac-
tères), balises Open Graph pour le partage social.
– URLs sémantiques : /services/mecanique-generale plutôt que /page?id=3.
– Schema.orgJSON-LD:balisage     LocalBusiness,     AutoRepair,
OpeningHoursSpecification pour enrichir les résultats Google.
– Sitemap XML : généré automatiquement et soumis à Google Search Console.
– Images optimisées : Next.js Image optimise et redimensionne automatiquement, génère des
formats WebP.
5.2 Internationalisation FR / EN
Le site est intégralement bilingue. L’implémentation utilise next-intl. Les URL reflètent la
langue : /fr/services et /en/services. La langue par défaut est le français. Le changement
de langue est accessible depuis toutes les pages via un sélecteur dans la navigation (FR | EN).
Les emails de notification sont envoyés dans la langue choisie par le client lors de la création de
son compte.
## Page 15 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
- Hébergement, Nom de Domaine et Déploiement
6.1 Nom de Domaine
Le nom de domaine retenu est l’extension .com, universellement reconnue et adaptée à toute
audience, locale comme internationale. Les options recommandées par ordre de préférence sont
belambiigarage.com et, en alternative, garage-belambii.com.
Le registrar recommandé est Namecheap (namecheap.com), reconnu pour la transparence de ses
tarifs et la protection de la vie privée (WHOIS privacy incluse gratuitement à vie). Le coût d’un
.com est d’environ 25 USD la première année, puis 35 – 50 USD/an au renouvellement,
soit approximativement 25 000 FCFA/an.
6.2 Sécurité de l’Infrastructure — Ce que Vercel Prend en Charge
Un point critique pour tout projet web est la sécurité de l’infrastructure. Vercel, la plateforme
d’hébergement retenue, intègre nativement un niveau de protection de qualité entreprise, sans
surcoût et sans configuration requise. Les protections suivantes sont actives dès le déploiement.
## Page 16 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
ProtectionDescriptionInclus dans
SSL / TLS automatiqueCertificat HTTPS généré et renouvelé au-
tomatiquement pour le domaine. TLS 1.2
et TLS 1.3 supportés. Redirection HTTP
→ HTTPS forcée.
Tous les plans
DDoS mitigation automatiquePare-feu réseau qui détecte et bloque auto-
matiquement les attaques par déni de ser-
vice distribué (DDoS) avant qu’elles n’at-
teignent l’application. Aucune configura-
tion requise.
Tous les plans
## Web Application Firewall
## (WAF)
Firewall applicatif personnalisable : blo-
cage par IP, limitation de débit, règles
par chemin ou géolocalisation. Protection
contre les injections SQL, XSS et les
risques OWASP Top 10.
Tous les plans
Gestion des botsDétection et blocage du trafic automatisé
malveillant. Les robots légitimes (moteurs
de recherche) sont laissés passer automati-
quement.
Tous les plans
CDN mondial edgeContenu servi depuis le nœud le plus
proche de l’utilisateur. Latence réduite,
haute disponibilité par redondance géogra-
phique.
Tous les plans
Spend ManagementAlertes et plafond de dépenses configu-
rables pour éviter tout dépassement de
budget inattendu.
## Pro
Ces protections intégrées couvrent l’essentiel des besoins de sécurité au niveau de l’infrastruc-
ture pour un projet de cette envergure. La sécurité applicative (authentification, contrôle d’accès,
validation des entrées) reste sous la responsabilité des développeurs et est détaillée en section 4.3.
6.3 Infrastructure d’Hébergement — Coûts Réels Vérifiés
Les tarifs ci-dessous sont vérifiés et exacts à la date d’émission du présent document. Les conversions
FCFA sont calculées au taux indicatif de 580 FCFA pour 1 USD.
## Page 17 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
ServicePlanUSD/moisFCFA/moisJustification
## Vercel (hébergement
## Next.js)
Pro — 1 siège
développeur
20 USD11 600 FCFAZéro-config
Next.js,  CDN
mondial,   SSL
auto, DDoS +
WAF  intégrés,
déploiement
continu, analy-
tics
## Neon.tech
(PostgreSQL)
## Launch —
usage-based
## ~ 10–20 USD~ 5 800–11 600
## FCFA
## Serverless Post-
greSQL,  scale-
to-zero  (aucun
coût si inactif),
backups  auto-
matiques, com-
patible Prisma
Cloudinary (images)   Free tier0 USD0 FCFA25 crédits/mois
inclus   (25 Go
stockage+
25 Go   bande
passante),
suffisant  pour
la   phase   de
lancement
## Resend (emails
transac.)
Free tier0 USD0 FCFA3 000
emails/mois
inclusgra-
tuits.  Passage
au  plan  Pro
($20/mois)   si
volumedé-
passe3 000
emails/mois
## Sentry (monitoring
erreurs)
Free tier0 USD0 FCFACapture  d’er-
reurs    temps
réel,alertes
automatiques,
suffisant  pour
lesvolumes
attendus
Total mensuel
## (fourchette)
## —30–40 USD17 400–23 200
## FCFA
## Horsnom
dedomaine
## (annuel)
## Page 18 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
PosteFréquenceUSDFCFARemarque
Nom de domaine
## .com
Annuel~ 25 USD/an    ~ 14 500
FCFA/an
## Renouvellement
## Namecheap ;
première  an-
née  à  ~  25
## USD
Coût total annuel
## (estimation)
## —280–470
USD/an
## 162 400–
## 272 600
FCFA/an
## Mensuel  (20–
35) × 12 + do-
maine annuel
Note : Le plan Neon Launch est entièrement usage-based sans abonnement fixe (minimum 10 USD/mois).
Pour un garage avec des réservations quotidiennes modérées (< 20 réservations/jour), la base de données
consommera vraisemblablement entre 8 et 15 USD/mois. Le plan Resend Free est limité à 100 emails/jour ;
si le nombre de réservations dépasse ce seuil quotidien, le passage au plan Pro Resend (50 USD/mois)
devient nécessaire, portant le total mensuel à 60–75 USD.
6.4 Pipeline CI/CD
– Local : chaque développeur travaille avec PostgreSQL local via Docker Compose et Next.js en
mode développement.
– Staging : chaque Pull Request GitHub déclenche automatiquement un déploiement Vercel
Preview avec une URL unique pour tests et validation.
– Production : la fusion sur la branche main déclenche le déploiement automatique en produc-
tion. Zéro downtime garanti par Vercel.
– Migrations BDD : appliquées manuellement via prisma migrate deploy avant chaque dé-
ploiement majeur.
## Page 19 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
- Charge de Travail et Plan de Réalisation
7.1 Phases du Projet
PhaseDuréeObjectif et livrables
Phase 0 — Cadrage    3 joursValidation CDC, achat domaine, setup Git / Vercel /
## Neon / Resend
## Phase 1 —
## Fondations
4 joursSetup Next.js, Prisma, NextAuth, composants UI de
base, i18n
## Phase 3 — Site
vitrine
## 1,5
semaines
Pages publiques (accueil, services, à-propos, contact, ga-
lerie), SEO
## Phase 4 —
## Réservation
1 semaines   Wizard  réservation,  logique  créneaux,  espace  client,
emails, in-app
Phase 5 — Admin1 semainesTableau de bord complet : planning, gestion, stats, noti-
fications
Phase 6 — Tests et
## QA
4 joursTests fonctionnels, corrections, audit performance, SEO
## Phase 7 —
## Lancement
2 joursMise en production, DNS, formation équipe garage
## Total6
semaines
## —
## Page 20 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
7.2 Estimation de la Charge par Module
TâcheComplexitéJH DevJH
## Design
Total JH
Setup projet (Next.js, Prisma, Auth,
i18n)
## Moyenne303
Composants UI de base (design sys-
tem)
## Moyenne235
Page accueilMoyenne224
Pages institutionnelles (services, à-
propos, contact)
## Faible31,54,5
Galerie photos + optimisationFaible112
Navigation bilingue + sélecteur de
langue
## Moyenne20,52,5
SEO  (metadata,  Schema.org,  site-
map)
## Faible1,501,5
Schéma BDD Prisma + migrationsMoyenne202
Authentification (NextAuth, compte
client)
## Élevée314
Wizard de réservation (5 étapes)Élevée426
Logique métier créneauxÉlevée303
Espace client (dashboard, historique)Moyenne314
Notifications email (templates + en-
voi)
## Moyenne213
Notifications in-app (client + admin)Élevée30,53,5
Tableau de bord admin (planning)Élevée415
Gestion créneaux et config adminMoyenne20,52,5
Statistiques adminFaible1,50,52
Tests fonctionnels + correctionsVariable303
Déploiement production + DNSFaible101
Formation équipe garageFaible101
## Total4615,561,5
## Page 21 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
- Critères de Recette et Scénarios de Tests
IDScénarioCritère de succès
T01Créer un compte client avec email et mot de passeCompte créé, email de
vérification reçu et
fonctionnel
T02Réserver un créneau disponible en 5 étapesRéservation confirmée, email
reçu en moins de 30
secondes
T03Tenter de réserver un créneau déjà prisCréneau masqué, impossible
à sélectionner
T04Admin annule une réservation depuis le tableau de
bord
Réservation annulée,
créneau re-disponible, client
notifié par email et in-app
T05Admin modifie le créneau d’une réservationClient notifié par email et
in-app avec le nouveau
créneau
T06Admin bloque un créneau depuis l’interfaceCréneau invisible pour les
clients
T07Notification in-app admin à la nouvelle réservation    Notification visible dans le
tableau de bord dans les 5
secondes
T08Changer la langue du site de FR à ENTout le contenu bascule en
anglais, URL mise à jour
T09Réservation complète sur mobile (375px)Formulaire utilisable,
calendrier lisible, CTA
visible à chaque étape
T10Score Google PageSpeed mobileScore validé≥ 80/100 sur
l’URL de production
T11Accès à /admin sans compte adminRedirection vers la page de
connexion
T12Flux complet de bout en boutRéservation créée, modifiée
par admin, rappel 24h reçu,
créneau terminé
## Page 22 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
- Budget et Conditions Contractuelles
9.1 Plan de Paiement
ÉtapeCondition de déclenchement%
Acompte de démarrageSignature du contrat et validation du CDC50 %
Acompte stagingSite complet déployé en environnement de test30 %
Solde livraisonMise en production + formation + PV de réception
signé
## 20 %
9.2 Garantie et Maintenance
– Garantie correction bugs : 3 mois après la mise en production. Correction gratuite de tout
bug fonctionnel signalé. Les évolutions fonctionnelles sont hors garantie.
– Maintenance corrective (abonnement mensuel) : corrections de bugs, mises à jour de sécurité
Next.js et dépendances.
– Maintenance évolutive (sur devis) : nouvelles fonctionnalités, nouvelles pages, évolutions du
design.
– Délai de prise en charge : J+2 ouvrables pour tout incident signalé par email ou WhatsApp.
## Page 23 / 24

Cahier des Charges Fonctionnel et Technique — Site Web BELA MBII GARAGESALAM SARL
- Conclusion et Prochaines Étapes
Le présent Cahier des Charges Fonctionnel et Technique constitue le document de référence contrac-
tuelle entre BELA MBII GARAGE et SALAM SARL pour la réalisation du site web. Toute évolu-
tion du périmètre défini dans ce document doit faire l’objet d’un avenant signé par les deux parties
avant la mise en œuvre.
10.1 Synthèse des Livrables
LivrablePhase
Site vitrine bilingue FR/EN, 9 pages, SEO optimiséPhase 3
Système de réservation en ligne (wizard 5 étapes, logique créneaux)Phase 4
Espace client avec notifications in-appPhase 4
Tableau de bord administrateur completPhase 5
Emails transactionnels (4 types)Phase 4
Infrastructure cloud configurée (Vercel + Neon + Cloudinary + Resend)Phase 0 + 7
Documentation technique (README, guide déploiement)Phase 7
Formation équipe garage (2 heures)Phase 7
10.2 Actions Immédiates après Validation
- Signature du contrat de prestation et versement de l’acompte de démarrage (50 %).
- Achat du nom de domaine (belambiigarage.cm recommandé).
- Fourniture par BELA MBII GARAGE des contenus disponibles : photos du garage et de
l’équipe, textes de présentation, témoignages clients.
- Réunion de lancement (kickoff ) pour valider les horaires exacts, la capacité de l’atelier et les
détails opérationnels du système de créneaux.
- Démarrage de la Phase 0 : setup des environnements techniques.
CCFT — Site Web BELA MBII GARAGE — Version 1.0 — SALAM SARL — Confidentiel
## Page 24 / 24