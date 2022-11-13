# Jeudi

## Observabilité, mythes, réalité et chaos

_Benjamin Gakic_ / Chaos engineer chez oui.sncf

### Définitions

Monitoring : indicateurs ; les machines monitorent ; répéter le test de manière régulière...

known/unknown vs knowns/unknowns

* choses qu'on connait et qu'on ne maitrise pas (known/unknowns)
* choses dont on n'a pas conscience et qu'on ne maitrise pas (unknown/unknowns)
* choszs qu'on connait et qu'on comprend (k/k)
* choses dont on n'a  pas conscience mais qu'on comprend (u/k)

Ex : k/u : un disque qui se remplit (on le sait, mais pas quand)

* Détection : observabilité : nope,  monitoring oui, alerting, mieux
* Diagnostic : observabilité, monitoring
* résolution : observabilité+ monitoring+ alerting+

Monitorer les services techniques, ça suffit pas !

Bon indicateur ?

* pertinent (spécifique à mon système)
* utilisable (précis mais facilement interprétable)
* utilisé :)

Attention à l'interprétation des indicateurs

Augmentation de la complexité des systèmes -> monitoring ne suffit plus

* wordpress : simple
* lamp : compliqué
* docker / vm -> complexe
* chaotique : serverless... les machines popent, disparaissent... le monitoring "classique" ne sert plus à rien

=> observabilité

* low : monolithe avec des logs
* medium : monolithe avec des traces et logs
* microservices
* lambdas

### Observabilité, buzzword ?

Un système est observable : déterminé complètement depuis ses I/O et quand on peut déduire son état des symptomes

Capacité du système à exposer des infos qu'on peut choisir d'exploiter et permettant d'appréhender son fonctionnemebnt et son état -> pour les humains !

Traite les u/u

On en fait déjà :

* monitoring
* logs
* corrélation d'événements ?
* APM

Logs à l'ancienne vs "instrumentation" -> cf. [**OpenTracing**](https://opentracing.io/)

* le monitoring se concentre sur des détails... mais possibilité de "détection indirecte"
* Test -> on fout le bordel, le chaos...

NB : les k/k, c'est les tests -> définit le fonctionnement nominal

Chaos Engineering : expérimentation sur un sys distribué afin de renfrcer la confiance dans la capacité du système à résister à des conditions turbulentes en prod : résilience + observabilité

Chaos : u/k, en foutant le feu dans un endroit ciblé, on sait où regarder (serendipity) et on trouve des trucs à améliorer.

Ex : chaos monkey : tout marchait, mais mauvais monitoring : 40mn pour détecter que la mahine était tombée... Donc le pb était plus au niveau observabilité que résilience

Et puis... Chaos Kong : pête ton datacenter...

Monitoring Netflix : [Vizceral](https://github.com/Netflix/vizceral)

### REX

Tests :

* shift left = tests au plus tôt (agilité)
* shift right (= chaos engineering) au plus tard, mais au plus près de la réalité : là, on teste en vrai...

## Synchro bidirectionnelle legacy <-> Archi micro services

_Brice Leporini_ / PALO IT (java, scala dev) @blep

e-Commerce Monolith (15 yo) to micro services; progressive migration

L'appli n'est pas "arrêtabe" en prod... pas de big bang !

Buzz words

* Event Sourcing
* CQRS
* DDD
* Change data capture
* Data streaming

Why microservices?

* scale out
* distinct lifecycles (no more 6-monthly releases)
* On choisit la techno en fonction du contexte

Gradual migration:

* No big bang
* [**Strangler Application Pattern**](https://www.martinfowler.com/bliki/StranglerApplication.html), feature by feature, bounded contexts (DDD)!!!
* En plus, [Releases Canary](https://martinfowler.com/bliki/CanaryRelease.html) (genre [Blue Green deployment](https://martinfowler.com/bliki/BlueGreenDeployment.html) ou test A/B : les 2 versions tournent en //)
  * About differences between these deployment patterns: <https://blog.christianposta.com/deploy/blue-green-deployments-a-b-testing-and-canary-releases/>
  * Donc compatibilité bi-directionnelle !

The legacy and micro-servives run SxS; they can modify the dame data concurrently!

Chaque micro-service a sa BDD dédiée. Le monolithe a la sienne ; y'a quoi entre les deux ?

* Pas de gestion des conflits ; pas d'arbre de décision pour décider qui a raison + pb de scalabilité
* En phase de canary, le legacy est le maître des données
* Une fois le contexte testé et dispo pour tout le monde, on continue de notifier le legacy des changements, mais le legacy ne valide plus rien

DB = Buffer = Transaction log -> Data files
Donc, à l'envers, l'état du système, c'est les data files + le transaction log non encore appliqué

Exemple : utilisateur change son n° de tél :

* Création d'un événement métier "état avant + état après" envoyé dans l'event store, puis de manière asynchrone au legacy.
* Si une UI demande ces infos, récupration des données en BDD (obsolète), puis regarde dans l'event store si il n'y a pas un event non traité, applique ça et affiche une donnée à jour...
* Côté Legacy, modifs :
  * Process de validation qui valide les événements avant d'écrire dans la BDD legacy + envoi d'un CR côté microservice.
  * En plus tous les changements effectués dans la BDD legacy sont trackés et envoyés dans une BDD 'snapshot' côté microservice.

  Events are:
  * immutable (if needed, one adds a ne event to cancel a previous one)
  * Ordered
  * couplage lache entre events et snapshot (clé métier, pas de contraintes d'intégrité !)

  NB : le event store est en postgre (comme le snapshot)

  On a là un CQRS + Event Sourcing

  La synchro entre la BDD legacy et le snapshot est faite
  * pas de génération d'événements métier par le legacy (trop compliqué)
  * pas de triggers : perfs, scalabilité !!!
  * --> CDC (Change Data Capture) :
    * logs every change on the db
    * nothing to change in the legacy
    * Technical option: For MSSQL: **Debezium** (built-in) -> pond dans Kafka
    * ça pond des "événements techniques"

About CDC in MSSQL

* 1 update on 1 row gives us 2 new CDC rows (by a background process)
* Beware of Bulk Updates!!!!!
* PErfs!!! FS filling!!!
* CDC tables should be stored in other disks than business tables
* Faire très gaffe aux tables sur lesquelles on l'applique + attention aux cas d'usage (genre chargement par des fichiers)

Events: dénormalisation???
Evénement de création d'article et de commande sont pas au même endroit... comment on sait que la commande est finie ?
On compte les trucs : à un moment la commnde est incohérente, mais à  la fin elle est bonne... Principe de "eventual consistency" appliqué au fonctionnel...

Propagation des événements : **Kafka**

* Delivery order is guaranted by _partition_

## Back to basics: Dates

_Frédéric Camblor_ / 4SH à Bordeaux

* GMT est déprécié au profis d'UTC...
* seconde : unité SI
  * définition : phénomène physique régulier et reproductible
    * rotation de la terre (en 1889)
    * ...
    * 9192631770 : changements d'état d'un atome de Césium 133 en 1s (horloges atomiques) -> Temps atomique international (déviation d'1 s en 100 000 000 années) - 1973
    * 1 m basé sur la vitesse de la lumière, donc la seconde...
  * UTC est basé sur le temps atomique international
  * Epoch UTC = 1970-01-01
  * Leap seconds: ajustement entre UT1 (temps astronomique) et TAI
  * Il y a eu 37 leap seconds depuis l'Epoch
  * N'arrive que fin juin ou fin septembre ; annoncé 6mois à l'avance
  * En Java, la leap second est répartie sur les 1000 dernières secondes contrairement à certaines libs qui montrent des heures en 00:00:60

  NTP :
  * réseau arborescent de serveurs (les racines sont des horloges atomiques)
  * NTP garantie une synchro toujours < 1s

### Unix Timestamps

nombre de s depuis epoch. Sur 32 bits, overflow en 2038...

En Java, timestamps sur 64b... gaffe au cobol

### DateTimes ISO 8601 / RFC 3339

comme le timestamp : moment dans le temps, mis formaté ; contient un TimeZone (Z ou +XX:XX)

### Date & Time "local"

Plein de problèmes

* Manque d'infos,
* peut représenter une date ou une heure ou les 2...

### Les TZ

TZ != TZ offset ; ex :

* TS Europe/Paris,
* Offset : +1, +2

la TZ ne suffit pas pour déduire l'offset (gaffe à l'heure d'été/hiver)

* Offsets : de -12 à +14
* 2 tables de référence : IANA & Windows Tables
* Entre 1909 et 1935, les pays bas avait un offset de 19minutes et 37 secondes... WTF!

Les tables (cf. le github de IANA) changent souvent !!! (entre 3 et 4 fois par semaine, des releases entre 3 et 9 fois par an)...

* Java permet la màj via un outil TZUpdater
* MySQL : dans une table système.
* Node.js : package node-geo-tz

### En résumé

* Ne rien considérer comme acquis : Attention aux dates dans le futur !!!

Quand on stocke une date dans le futur, il faut stocker l'heure locale + la TZ de l'utilisateur à l'origine de la date

### DST (changement d'heure)

* Date de 1916
* Certaines heures locales n'existent pas (local time gap) ; par ex: 02:00 -> 03:00 pour Europe/Paris et on passe de 01:59+01:00 à 03:00+02:00
* A l'inverse, certaines heures locales existent 2 fois ! Attention au comportement des libs quand 2 choix possibles sur une heure locale ! Cf. tzDate (comportement différent en fonction du navigateur)

Fausse bonne idée : éviter 2h30 comme passage d'un batch si pas UTC... -> les cron, en UTC !!!

Top : au maroc, pendant le ramadan, annulation de l'heure d'été -> donc 4 changements dans l'année SSI le ramadan tombe pendant l'été :)

Aux samoa, le 30/12/2011 n'existe pas (changement de TZ...)

Java :

* Attention ``dt.plusDays(1) != dt.plusHours(24)`` les jours de chngement d'heure (1d = 23 ou 24...)
* Attention : ``.equals != isEqual`` (identité vs égalité)

Dans les navigateurs, plein de bugs sur les vieux TZ offsets (<1970)

### Bonnes pratiques

Serveurs en UTC !!! Idem DB et Serveur d'appli

* Pas d'heure d'été/hiver
* révèle les bugs :)

Intervalle de temps implicite ; attention à la différence entre la saisie d'une date locale et les date/heures UTC dans la bdd...

* Dans 99% des cas, on cherche sur des intervalles de temps, pas des dates...
* Préférer les conversions côté apelant (client)
* Stocker **et** chercher en UTC (sauf dates dans le futur : ajouter la TZ)
* Attention aux heures locales : stocker la TZ
* Stockage des Time-only : ne pas mettre le time dans un datetime (ajoute arbitrairement le 01/01/1970... et la bdd pourra faire peut-être des transfos UTC -> préférer le stockage en chaînes)
* Stockage de Date-only (ex : date de naissance) ; éviter de stocker dans un datetime, si quand même dans un datetime, mettre midi dans l'heure, pas minuit... Evite des problèmes si jamais on joue un peu avec l'heure... si on est sûr de la TZ, la stocker. Utiliser une structure de onnées ad hoc
* Local DateTime : MAL !!!

## Kotlin under the covers - Neuilly 251

Oopsie... missed this one, went to the one below instead...

## Gérer des alertes @OVH-Scale avec Apache Flink

_Pierre Zemb_ / Infra Engineer @OVH

Missions :

* Alerting, observabilité
* Equipe Metrics chez OVH
* Projet OMNI (couche d'alerting)

Infra :

* 300000 serveurs clients
* Serveurs, DC internes, apps OVH
* 432 milliards de mesures /jour
  * Hadoop (pour HDFS) -> HBase, Warp10 (monitoring OSS français ; genre Influx DB ou prometheus en survitaminé et compatible big data)
* 198 noeuds Hadoop ; 2.3 PB ; 8.5 GB/s bandwidth
* HBase : 1.5 millions d'écritures / seconde, 3millions de read/ secondes

-> Metrics Data Platform

* Time Series, Grafana + IoT
* Support de graphite, flux, opentsdb, prometheus, warp10, tsl... en in/out

Solutions OSS d'alerting :

* prometheus/alertmanager
* linkedin/iris

-> nope, rien qui allait

Donc OMNI:

* Alerting as code -> Yaml
* based on metrics
* Distributed, scalable
* multi-tenant

Omni:

* Loops (cf. photo) donne une photo de ce qui est en erreur ou pas (un gros json)
* Omni va fournir du trending, des aggrégations (via des règles utilisateur)

Le "métier" de l'alerting :

* Escalade,
* Agrégation
* Acquittement
* Forwardning
* Planning...

Plein de façons de communiquer :

* Jabber, makl, SMS, slack, push notifs,
* web hooks ; permet de déclencher des actions en réponse à certaines alertes

En regardant la doc de l'alerting de **prometheus**, y'a du streaming là dedans ; y'a des mots clé : pipeline, dedup, task, router... Pareil avec **iris**, on a queue, task...

_CQFD_ : l'alerting, c'est un pb de streaming...

Solutions de streaming :

* Rien que chez Apache... Apex, Beam, Flink, Spark, Storm, Gearpump, Samza
* Y'en a aussi chez les fournisseurs de cloud (Google Dataflow, Amzon EMR, Azure Stream Anaytics, Ali baba Realtime compute)

Chez OVH -> Flink (expérience interne chez OVH)

* Faible latence
* Gros débit
* Stateful !!!
* Disribué
* Dernière version : 1.8 la semaine dernière

Flink, c'est une plateforme ; on déploie des "jobs"

"Job" de sErictreaming qui gère les alertes.

* Source : topic kafka
* topic de contrôle qui dit cuoi/comment agréger
* créer des notifs publiées dans un topic de notifications (le job flink fait donc du kafka to kafka)

### Code

C'est du java

L'intéret de Flink c'est qu'il distribue les calculs... (parallélisation des maps par exemple)

Par rapport à du streaming classique, très bonne gestion de l'état ; par eemple, voir la classe `RichMapFunction<T, U>` qui a un membre state (de type map)

Le state de Flink est récupérable depuis une appli Java (et exposable dans une API par exemple).
D'ailleurs Flink fournit un client Java ui sait récupérer ce qui se passe dans les jobs

En cas d'arrêts, de crashs... ça se passe bien car il y a des 'checkpoints'

RocksDB : state backend

Pros : doc, awesome productivity, state, rock solid
cons : queryable state:beta, java only, needs an external storage layer

## Du monolithe aux microservices : Leboncoin - Maillot

_Eric Lefevre-Ardant_ @ leboncoin

* 2006 : leboncoin en france ; toute petite equipe
  * Socle en C
  * Postgre
  * Front en php avec pas mal de métier dedans :D
  * Tout fait maison
  * Code éprouvé sur l'existant en Suède
  * Pas d'équipe data
  * Pas d'équipe mobile
  * déployé sur du Centos (puis avec le temps migration vers Debian)
* 2016
  * Expérimentations : services en python, php au lieu de C... utilisation de _Thrift_, plusieurs bdd pour soulager la base principale
* 2019
  * La base de D006 existe toujours et va rester
  * Moteur de recherche maison -> Elastic
  * 125 servicesw en Go
  * Kafka pour alimenter l'équipe data et communiquer entre les services
  * Déploiement : Pods Kubernetes (images docker)
  * Métriques : Datadog
  * API Gateway (Kong) ; attention... on sort des trucs de Kong (authent par exemple)

Pourquoi ?

* Maintenance de la base de code en C (base de code datant du milieu des années 90)
* Code très enrichi
* Plus maintenable !
* Mises en prod catastrophiques ! des jours voir des semaines pour déployer...
* Perfs !
  * BDD (découpée mais pas suffisament)
* Mobile first, faire du React -> API Rest... on sait pas vaiment faire du REST...
* Composants : stratégie groupe en 2016 ; par exemple, service de modération automatique d'annonces appelé par pkusieurs applis du groupe

Bénéfices

* Réorganisation en feature teams : de 2 à 5 dev backend par team (en fait 2 pour chaque couche tech : web, ios, android, back...)
* Recrutement
* Diversité (clean archi ?)
* Pb :
  * 2 dans une feature team, comment on fait des codes review ?
  * Astreintes ?

Techno :

* Le go a beaucoup plu -> Go partout

Architecture :

* Service : pods dans kubernetes (mini : 4 pods : 2 pods par datacenter)
* les fichiers de conf font partie des binaires

ça c'était la vue d'aigle, mais en vrai :

* Taille ? tout petit ou gros service ?
  * l'orateur -> un micro service par route http (et même par verb)
  * Mais d'autres font des plus gros micro services
* Echec dans les dépendances ?
  * avant tout échouait si un &chouait
  * Aujourd'hui, il y a un échec en live après que tout le monde a démarré, mais ça pose problème dans Kub
  * Conseil : ne pas démarrer si seulement certains services bas niveau (bdd, kafka...). Même concept que mes "stages" de démarrage dans le runner
  * Compatibilité Legacy ?
    * ben... c'est compliqué, pas trop de solution si ce n'est compter sur les humains qui ont la connaissance...
  * Diversité c'est cool, mais du coup, divergences...
  * Communication ?
    * LE canon :
      * Une bdd par service
      * Alimentation par événements... (Kafka) pour causer entre services
    * En vrai :
      * Message broker Kafka oui, sauf que il faut du temps pour mettre en place les "contrats" entre les services
      * copies locales (duplication des données) ; pareil, pose problème : ça coute du temps et de l'espace disque
      * Du coup : appels directs !
        * plus fragile (si ça pête, toute la chaîne pête ; attention aussi aux dépendances pendant les mises en prod)
      * ou libs d'accès (genre le moteur de recherche) ; ça permet d'aller vite à la solution, mais quand ça mrche pas, c'est la faute de la lib ou de mon utilisation de la lib ?...

Séances de "Cleaning Week", 2x par an

## Dessine moi un vrai test d'intégration - Maillot

_Yvonnick Esnault_ @yesnault / continuous delivery team @ OVH

Outil OVH maison : CDS Continuous Delivery Service (sur le github d'OVH)

Tester les fonctionnaliotés d'un sys sur l'ensemble des coposants fraichements construits via des scénarios utilisateur...

-> pas seulement sur master... Tout le temps (à faire sur toutes les PR)

* Scénario : Enregistrement d'un utilisateur (Web)
  * Navigateur : aller sur la page, saisir,... cliquer... (http / web)
  * Vérifier le mail (imap)
  * Revenir sur l'url de confirmation... (http / web)

Automatisation au départ :
bash + curl + regex...

Requirements de l'outil de test :

* Pas de boilerplate (bash)
* As Code
* Multi protocol
* sorties standard (xunit ici)
* Portable
* fonctionne sur le poste de dév et en CI

-> ça s'appelle _venom_: <https://github.com/ovh/venom>

test suites / cases... tout en yaml

## Etendre VSCode - Neuilly 251

Live Coding: Cool
