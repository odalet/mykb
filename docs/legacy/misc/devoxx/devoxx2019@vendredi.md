# Vendredi

## JDK: 9 to 12 - Neuily 251

_Simon Ritter_ / Deputy CTO @ Azul Systems (azul.com), @speakjava

quelques Jdk 11 en prod dans la salle ; la plupart : Jdk 8

* JDK 9: Big & small changes - last major release of java (several years of development)
  * Core of java  is now modules - Module System!
  * Packages -> modules
  * Internal APIs are encapsulated (sun.misc.Unsafe)
  * jlink, the java linker - ties used modules into a runtime-specific deployment -> this builds a jdk directory structure containing only the required modules (from jdk or user provided)
* Moving Java forward faster!
  * new release every 6 months (march, september)
  * OpenJDK development more agile (previously 1 release every 2 years)
  * Features are included only when ready
  * LTS releases: 1 LTS release every 3 years
    * JDK 8 is a LTS
    * No more free JDK 8 updates from Oracle for commercial users
    * Non-commercial users get updates until December 2020 (but cannot be used in production)
    * JDK 11 is also a LTS (9, 10, 12 are feature releases)
  * Distributions:
    * Oracle JDK (Oracle Binary Code license Field of Use restriction)
    * Oracle OpenJDK JDK (GPLv2 license); security and bugfixes only for 6 months (with 2 scheduled updates) - No LTS for OpenJDK
  * In Java 10 and earlier, we have: Java SE core, OpenJDK (reference implementation) is a superset of JSE (eg. NAshorn), and Oracle JDK is a superset of OpenJDK
  * Starting with JDK 11, OpenJDK & Oracle JDK converge
  * JDK 11
    * some closed-source parts of Oracle JDK were release OSS (Flight recorder, Mission control, others)
    * other closed-source parts were removed (browser plugins/applets, Java Web Start, JavaFX); nb: JavaFX still exists elsewhere as OSS...
* Compatibility
  * According to Oracle, clean apps that just depend on java.se _should_ just work
  * JDK 9: the clean up starts, before 9, nothing was ever removed...
    * Deprecated APIs were removed!
    * Redundant features were removed: jhat, JVM TI hprof agent, GC options...
    * and going on with JDK 10, 11, 12...
    * more will be removed in the future: CMS GC, Nashorn, Pack200...
    * -> Compatibility is not guaranteed any more... New versions of Java may include breaking changes, but a minimum of 1 release warning with the stuff being deprecated
* Java Updates
  * Oracle JDK 11 has yet another license:
    * Free for dev and testing
    * Requires a Java SE subscription for use in production
    * JDK 8 can be used forever for free (no back in time changes of license); however, no more updates...
* JDK 10
  * Local var type inference
    * Beware of 'diamonds', the compiler infers Object (because of generics erasure...) instead of `Type<>`
    * Parallel full GC for G1
    * Application Class-data sharing (caching: speeds up startup time)
    * Experimental Java based JIT (Graal); this is not GraalVM
    * Heap allocation on alternative devices (contributed by Intel for supporting their Non-volatile ram...)
    * New APIs (streams api with 'unmodifiable' constructs)
* JDK 11
  * Extended inference (on lambda parameters) - this is useful if one needs 'annotate' a lambda parameter.
  * JDK 10 has 3 modes or the Java launcher:
    * Launch a class file
    * Launch the main class of a JAR
    * Launch the main class of a module
  * JDK 11 adds
    * Launch a class declared in a source file: `$java Factorial.java 4` or directly from a script (uing hebang `#!$JAVA_HOME/bin/java -- source 11` then java code)
  * Nested based access control
  * Dynamic class file constants (sort of final readonly; useful for languages builders)
  * Epsilon GC (does not collect actually; useful for testing or for serverless where we don't want the overhead of collection)
  * HTTP client made into the standard
  * TLS 1.3
  * Experimental GC: ZGC...
  * APIs
    * new I/O (nullInputStream, nullOutputStream, null Reader, nullWrityer)
    * Optional.isEmpty()
    * Character.toString(codepoint)
    * String methods (isBlank, lines, repeat, strip...: like trim but using the unicode definition of what a white pace is)
    * Predicate: not
    * Removed modules:
      * java.corba
      * java.transaction
      * java.activztion
      * JAX
        * java.xml.bind
        * java.xml.ws
        * ...
* JDK 12 = 18 months after Jdk 9
  * Switch Expression
    * 1st preview feature

      ```java
      int numLetters = switch (day) {
          case MONDAY, FRIDAY, SUNDAY-> 6;
          ...
          default -> throw new ooException("Yo");
      }
      ```

      can be mixed with the old syntax, or even use code blocks after the arrow (ending the block with `break result;`)
  * Shenandoah GC
  * G1 GC updates
  * JVM Constant API (for languages devs)
  * Default CDS archive...
  * Streams: teeing(collector, ollector, biFunction)
  * A lot of -XX flags removed or added... and now, nothing will start if invalid options
  * Project Amber (simplifying the syjtax)
    * underscore for unused
    * back quyotes for strings with CR...
  * Pattern matching: switch on types
  * Project Valhalla
    * Primitives vs Objects -> Value Types
  * Project Loom
    * Fibers (vs native threads), continuations

## Programmation modulaire ; au-delà des espaces de noms - Paris 243

_Xavier Van de Woestyne_ / <https://xvw.github.io> @ Margo Bank (construction d'une banque from scratch)

* Groupe Lille FP (prog fonctionnelle)

Se mettre d'accord sur ce que c'est : terminologie

* Module en ruby != module en programmation modulaire (fichier)
* Exposé dans un langage fortement typé (car en non typé, aucune analyse avant le runtime)

Ici : on fera du OCaml...
Très orienté (C++ et Go, c'est de la merde, mais Caml c'est magnifique)

Prosélytisme envers OCaml

Le système de modules de Caml (là où il est meilleur qu'un Haskell ou rust...)

Module : modularisation + compilation séparée (unités de compilation)

Histoire :

* Modula-2 : premier langage à introduire de la compil séparée
* Standard-ML : premier langage à fournir des modules
* Mais pas les 2 en même temps

Modularisation :

* découpler le travail sur un même programme
* Définition de la structure haut niveau

En Caml, séparation de l'impl et de l'interface :

* ``fichier.ml``, ``fichier.mli``
* ``let`` pour l'implémentation, val pour la déclaration
* mécanismes d'ouverture de module
  * ``open module``
  * ``let open module in`` (utilisation locale dans le scope)
  * ``open! module`` (importe tout sauf ce qu'on a déjà défini)
* ça fait des espaces de nom un peu pauvres.
* sous-modules ; module dans un fichier ml (qui lui-même est un module)
  * ``module name = structure`` vs ``module name = sig`` (dan le mli)
  * utilisation : ``foo.bar.baz``
  * on peut étendre les modules existants
    * ``include Module``
* Signatures libres (on définit, on implémente plus tard)
* Le langage de modules
  * Value-level (niveau des valeurs)
  * Au dessus Type-level (réification passage de type à valeur, valeurs vers types : types dépendants ; pas turing complet)
  * Application de fonctions au value-level : ok
  *Application de fonction sur les types (cf. Haskell)
  * En Caml, on a le module-level qui interagit avec les types et les valeurs -> foncteur
  * Les foncteurs de ML : rien à voir avec ceux de Haskell même si bon... les 2 ont un lien avec les foncteurs de la théorie des catégories
  * Foncteur applicatif : prend iun module en rgument et renvoie un nouvau module
  * Exemple : module mappable à convertir en iterable :
    * mappable -> iterable x mappable
  * Notion d'intersection de modules (_de types en fait_)
  * -> Monade : bind/join ou map/join, flatmap...
  * module infix :
    * ``>>=``
    * ``>|=``
    * ``>>``
    * ``<=<``
    * ``>=>``
    * ``=<<``
  * Résumé sur les foncteurs : fonctions sur des modules -> évite les héritages
  * En swift, il y a ``self`` qui peut représenter la classe qui implémente l'interface courante
  * Backpacking : sorte d'injection de dépendance
  * En Caml, on a aussi des foncteurs génératifs (ils pondent des types frais...)

  * Modules d'ordre supérieur
    * injection de dépendance
    * Module Findable
    * Pas de HTT en OCaml (mais y'a des hacks) (types d'ordre supérieur ? Higher-Kinded Types?)
  * Améliorations futures du langage de modules
    * résolution implicites (polymorphisme ad hoc comme en Haskell) avec de la résolution de type structurelle

## Votre API web passe-t-elle les 50 points du contrôle technique ? - Amphi bleu

> ![François Guillaume RIBREAU](https://d33wubrfki0l68.cloudfront.net/3116aca6f1ce43296561de6e264c7da470834a48/70537/assets/img/illustratio-author.png)
>
> François Guillaume RIBREAU

### Définition API

* 60s : contrat d'une bibliotheque
* 80, 90 : remote acces (réseau) MoM, queuing
* 00s : REST
* 10s : Hipster RPC protocoles, public APIs, platforms... monétisation

### Points de contrôle

* mettre le plus de contraintes en amont
* Before Development
  * What are the goals?
  * Define business requirements
  * Service level objectives (mesurable, sur une période de temps, quand et comment le mesurer -> dashboards et alertes). Ex : 95% de requêtes avec une certaine bandwidth sur 1 mois
  * Service level indicators -> monitoring des objectis
  * Service Level Ageements (explicite ou implicite) $$$
  * Define the Service Name
    * Pas un nom à la& con, mais boring et descriptif
    * Naming must be boring! Descriptif, non ambigu, transparent respecte Single Source of Truth/Separation of Concerns
  * IAM (authent authorize, auditabilité) ; cf. RedHat Keycloak
  * Modèle de sécurité par périmètre des années 90 : chateau, pont-levis...
  * Années 2000 - attention accès via VPN ... on vient à l'analyse auto d'intrusions et donc les applis s'authentifient entre elles (on passe de trusted à untrusted networks)
  * Histio, Service mesh...
  * Set Versioning, update change log (génération du changelog en se basant sur le semver dans les commits)
    * Et donc les clients de l'API doivent pouvoir sélectionner la version (ex via le header accept pour github, ou des sous-domaines, ou via l'url ; cf. Twitter)
    * Autre approche : stripe
      * C'est tjs la dernière version de l'api qui est "exposée" mais en interne, y'a des conversions dans tous les sens pour supporter les anciennes versions ; ils ont fait un blogpost là dessus en 2007
  * Définition de la compatibilité descendante... ?
    * Toujours stripe définit sa compatibilité descendante
  * Be conservative in what you send...
  * Test des contrats d'API
    * Exemple : Twitter diffy (proxy)
    * Autre approche : tests classiques (expected, actual)
  * Supporter :
    * pagination, search, sorting, filtering, field selection, field expansion (sous champs) -> graphql ou équivalent
    * La pagination
      * la prévoir à l'avance ! Pas plus tard ! Il faut "tout limiter dans l'espace et dans le temps". ; ici, c'est l'espace...
  * split state & logic!
    * save data as immutable!
    * supporte historisation, auditabilité, undo...
    * utiliser un "object storage" pour les fichiers : eg. AWS S3, Riak S2...
  * **Supporter le multi-tenant <-- TODO NCore Server (tenant = printer)**
    * Dans les IAM, on a des realms (similaires aux schémas des BDD)
    * Il faut implémenter un truc similaire au niveau API (genre organisation, app, website...)
  * Comment on fait les tests e2e là dessus ?
  * Comment o fait des tests de perf ?
  * Authent : HMAC : on ajoute une 'signature' des paramètres à la requête, mais il faut aussi ajouter un tenant-id à la requête
  * cf. imagecharts
    * Y'a un watermark dans la version gratos ; modèe de monétisation supporté par tenant-id + signature ; attention au caching
  * Toujours définir des timeouts (tous les appels, dès qu'il y a du réseau)
  * Faire des retry
  * -> Circuit breakers
  * Faut tester :
    * Post deploy tests (tests juste après la mise en prod)
    * Canari tests
    * Smoke tests (feedback plus rapide depuis la prod)
  * Limiter le nombre max de requêtes simulatanées
  * Rate-limiting?
  * Définir des quotas (sur les utilisations d'APIs comme chez Google, Amazon...) ; y'a pas encore de brique de gestion des quotas d'APIs
  * Alerting (basé sur les métriques des SLI, SLO).
    * Idée : une alerte par métrique : au début, ça spamme, mais ça permet de fine-tuner le niveau de l'alerte.
    * Gitlab : "Run books" : expliquent quoi faire en cas d'alerte
  * Générer la doc, les sdk, les clients...
    * on peut aussi utiliser les tests de l'api pour générer la doc
  * CI/CD
    * Restart
    * Blue/Green
    * Rolling updates (PaaS, CaaS) : support des versions n et n-1
    * Dark launch, Canarying, rolling updates
  * Après la prod
    * Efficience ? Kubernetes vs Functions vs Bare metal?
    * -> <https://getnobullshit.com/> : check-list

## D'architecte à meta-architecte - Maillot

_Rémi Cocula_ / IPPON - github: biconou

A commencé en 1995 sur de l'exploit de mainframes IBM

Positionnement de l'archi...

Archi ça veut plus dire la même chose

La crise d'identité

* Au début des années 2000 : les archis sont arrivés avec les archis 3-tiers (middleware, objet, frameworks, couches...) ; et là, c'étaient les dieux !
* Vu par les autres, l'archi c'est  : le cp a pas confiance, on a besoin d'un archi ?, ça risque de compliquer le projet...
* Les archis, ça sert juste a pondre des DAT...
* mais ça sert àrien : pas appliqué dans le code
* ou alors, c'est juste des experts techniques... des pompiers

Et pourtant

* on a besoin d'architecturer...
* Les "on a pas besoin d'arhis"... on n'est qu'aux débuts de l'informatique

Le métier

* différents niveaux, divers périmetres
* entreprise
  * urbaniste
* fonctionnel
* solution
  * logiciel
  * applicatif
  * data
* technique
  * cloud
* ...

C'est aussi compliqué de les positionner entre IT, Stratégie d'entreprise et business...

C'est quoi ce qui est commun ?

Principales missions :

* **concevoir**
* **garantir**
* **conseiller**
* **veiller**

Les skills

* Legacy
  * Savoir faire des carrés et des flèches
  * Concevoir (tout et avant toute mise en oeuvre)
  * Voir globalement et chercher à prendre de la hauteur
  * Entendre
  * Savoir poser une problématique et chercher une soltion
  * Cultiver une large compétence technique -> pb des archis tour d'ivoire, ... Hors sol...
* Que s'est-il passé ces 10 dernières années ?
  * La transformation digitale ! Rencontre entre les entreprises 'digital native' et une génération 'digital native' elle aussi... aka l'arrivée du smartphone ; c'est la fn de la préhistoire numérique en fait... ça exerce une pression monumentale sur toute la société : toutes les entreprises doivent se "transformer" !
* L'archi invisible : les digital native disent "c'est facile", mais en fait, ils font de l'archi, ils ont des archis...
* Cahier des charges : "Développe Google" :)
* Easy and fun... et la nouvelle génération (Y ?) elle écoute pas, elle fait n'imp... comment on les gère ? Alors, Happyness management, entreprise libérée... baby foot... Faut pas se prendre la tête ! Et puis, un dév en 5mn à grand coup de SO, c'est cool, plus besoin d'archis...
* Tout ça ça rend obsolète, la reflexion, la conception...
* Marketing : illusion du TTM court, donc quick & dirty, kiss, applis magiques intégration chaotique, instabilité technologique...
* Dévoiement de l'agilité !!!! Les spzcs, c'est has been
* La dette techniquedu monolithe a épuisé les développeurs
* **La dette technique distribuée épuisera les architectes** !!!
  * cf. moi : la complexité elle diparait pas magiquemnt...

Le shadow IT : la stratégie exerce une pression sur le métier ; "il faut des solutions numériques" -> le métier produit du shadow IT...

Nouveaux métiers et cultures

* Agile
* Devops
* Produit

* Scrum master, PO, tech lead, ux designer...

Mai gros overlap entre ces métiers et les "archis"

Donc, faut évoluer.

* Il fautr se reconfirmer ses propres skills, puis
* Postmodernité numérique
  * suprématie du savoir, top-down... NON

  * fautdu bottom-up : pousser les idées, faire adhérer...

En milieu agile, (cf. Netflix, cf. Spotify) ; Adrian Cockroft

Voire aussi le framework SAFe

* L'archi guide, aide, pas là pour imposer.
* Les nouveaux métiers ont des méthodes et des outils adaptés à la culture agile
* Les archis ont UML ... :(
* Il faut cartographier ? OUI !!! A-t-on le bon formalisme ? cf. Archimate

Les nouveaux skills

* Communication
* Ecoute
* Pragmatisme, réalisme
* Challenger, pas fermer des portes

L'archi, c'est pas (plus) notre "seul" expert technique ; cf. Socrate : il aide les gens à comprendre sur eux même (dialectique / maïeutique)

Une nouvelle culture à inventer (_let designers code and engineers design_ ; vu à la biennale du design à St Etienne).

Les archis veulent juste remettre le bo,n niveau de conception dans les entreprises !
