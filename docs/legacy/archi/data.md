# Data Architecture

## Time Series, events, logging

* Docker-based
  * NLog + Graylog + Docker: <https://sachabarbs.wordpress.com/2020/08/24/setting-up-graylog-for-use-with-nlog/>
* Influxdata - **TICK** Stack: <https://www.influxdata.com/time-series-platform/>
  * Telegraf
    * RabbitMQ Input Plugin: <https://github.com/influxdata/telegraf/tree/master/plugins/inputs/rabbitmq>
    * MQTT Consumer Input Plugin: <https://github.com/influxdata/telegraf/tree/master/plugins/inputs/mqtt_consumer>
      * <https://github.com/influxdata/telegraf/issues/4580>
    * NB: runs on Windows: <https://github.com/influxdata/telegraf/blob/master/docs/WINDOWS_SERVICE.md>
  * InfluxDB
  * Chronograf
    * Grafana vs Chronograf: <https://community.influxdata.com/t/grafana-and-chronograf-concurrents-what-is-the-difference/8282/2> 
    * Use cases:
      * _Chronograf is better at data exploration and understanding schemas for InfluxDB data._
      * _Typically we tell people to use Chronograf to explore and play around with their data. Once they find something they want to be able to check/monitor then you create a Grafana dashboard and/or alert based on that data. If you have to find new data inside Grafana, well it can be painful_
  * Kapacitor
* InfluxDB + Grafana + Chronograf: <https://medium.com/@xaviergeerinck/how-to-visualize-metrics-with-grafana-and-chronograf-by-using-influxdb-450a6b796710>
* **TIG** Stack (Telegraf/InfluxDB/Grafana) - MQTT -> Telegraf -> InfluxDB:
  * <https://xebia.com/blog/use-the-tig-stack-to-create-your-iot-home-automation-dashboards/>
  * <https://www.andymelichar.com/2017/02/26/iot-data-management-with-the-tig-stack/>
* **Telegraf + MQTT** issues; how to map MQTT topics to InfluxDB tags and measurements?
  * There is a proposal; howvever it is not implemented... As of now, the hack is to consume one's MQTT topics and re-publish them into a new 'unpacked' topic for consumption by Telegraf: _My current ugly workaround for this is that I write a small program that extracts fields from the topic and posts them on a new "unpacked" topic with the payload as json. I can then use the datatype json and the "tag_keys" to add specific json fields as tags in influxdb._ See <https://github.com/influxdata/telegraf/issues/648>.

* Grafana vs Kibana: <https://logz.io/blog/grafana-vs-kibana/>
  * Logs vs. metrics: _Grafana is designed for analyzing and visualizing metrics (...). Kibana, on the other hand, runs on top of Elasticsearch and is used primarily for analyzing log messages._

* InfluxDB Articles
  * Processing Time Series Data in Real-Time with InfluxDB and Structured Streaming: <https://towardsdatascience.com/processing-time-series-data-in-real-time-with-influxdb-and-structured-streaming-d1864154cf8b>
  * InfluxDB Data Retention: <https://towardsdatascience.com/influxdb-data-retention-f026496d708f>

## Big Data, Streaming

### Apache Kafka

* Kafka can be used for activity monitoring. The activity could belong to a website or physical sensors and devices. Producers can publish raw data from data sources that later can be used to find trends and pattern. From <https://towardsdatascience.com/getting-started-with-apache-kafka-in-python-604b3250aa05>
* Getting Started with Kafka & python: <https://towardsdatascience.com/getting-started-with-apache-kafka-in-python-604b3250aa05>
* Confluent's blog
  * Overview: <https://www.confluent.io/blog/stream-data-platform-1/> and <https://www.confluent.io/blog/stream-data-platform-2/>
  * Kafka for Data Scientists: <https://www.confluent.io/blog/putting-power-apache-kafka-hands-data-scientists/>

### QuasarDB

* <https://quasardb.net/>
  * .NET Client: <https://github.com/bureau14/qdb-api-dotnet>
  * Windows Administration: <https://github.com/quasar/QuasarRAT>
  * QuasarDB + Kafka:
    * <https://doc.quasardb.net/master/api/kafka.html>
    * <https://github.com/bureau14/kafka-connect-qdb>
    * <https://jujucharms.com/u/bigdata-dev/kafka-quasardb/>

### Juju (Hadoop platform)

Juju: _The reference implementation of the Anssr Data Platform, developed by Juju experts at Spicule._
* <https://jujucharms.com/>
  * <https://jujucharms.com/big-data>
  * <https://jujucharms.com/how-it-works>

## Machining Data

* MTConnect vs OPC-UA: <https://www.mmsonline.com/columns/the-difference-between-mtconnect-and-opc-ua>

### MTConnect

### OPC-UA

### MQTT

## MongoDB

* Time-series and MongoDB:
  * <https://www.mongodb.com/blog/post/time-series-data-and-mongodb-part-1-introduction>. This is the intro article; nothing really useful here...
  * <https://www.mongodb.com/blog/post/time-series-data-and-mongodb-part-2-schema-design-best-practices>. Interesting concepts:
    * Use **WiredTiger** engine, not **MMAPV1**
    * data bucketting,
    * **TTL** indexes (<https://docs.mongodb.com/manual/core/index-ttl/>)
    * Collection per block of time
  * <https://www.mongodb.com/blog/post/time-series-data-and-mongodb-part-3--querying-analyzing-and-presenting-timeseries-data>. Querying:
    * Aggregation Framework
    * Read Only Views (materialized at run-time)

* Articles at red-gate:
  * MongoDB: <https://www.red-gate.com/simple-talk/dotnet/net-development/how-to-program-with-mongodb-using-the-net-driver/>
  * CQRS (using ASP.NET Core, RabbitMQ and MongoDB): <https://www.red-gate.com/simple-talk/dotnet/c-programming/getting-started-with-cqrs-part-1/>