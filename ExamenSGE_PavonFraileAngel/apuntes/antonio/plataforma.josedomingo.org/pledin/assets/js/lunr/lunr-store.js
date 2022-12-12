var store = [{
        "title": "Curso: servidor web Apache 2.4",
        "excerpt":"El servidor HTTP Apache es un servidor web HTTP de código abierto, para plataformas Unix (BSD, GNU/Linux, etc.), Microsoft Windows, Macintosh y otras, que implementa el protocolo HTTP/1.12​ y la noción de sitio virtual. Los siguientes contenidos forman parte de un curso que he impartido para OpenWebinars en febrero de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/index.html",
        "teaser": null
      },{
        "title": "Protocolo HTTP",
        "excerpt":"Presentación de la unidad Descripción general Protocolo de comunicaciones estándar que comunica servidores, proxys y clientes. Permite la transferencia de documentos web, sin importar cual es el cliente o cual es el servidor. Es un protocolo basado en el esquema petición/respuesta. El cliente realiza una petición y el servido devuelve...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u01/index.html",
        "teaser": null
      },{
        "title": "Introducción al servidor web Apache 2.4",
        "excerpt":"Presentación de la unidad Conceptos básicos Servidor web HTTP de código abierto Plataformas Linux, Windows, Mac y otras Implementa el protocolo HTTP/1.1 Se desarrolla dentro del proyecto HTTP Server (httpd) de la Apache Software Fundation Apache es el servidor HTTP más usado Extremadamente estable Un poco de historia El proyecto...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u02/index.html",
        "teaser": null
      },{
        "title": "Instalación del servidor web Apache 2.4",
        "excerpt":"Presentación de la unidad Instalación en Debian/Ubuntu Para instalar el servidor web Apache en sistemas GNU/Linux Debian/Ubuntu y derivados, ejecutamos como administrador: apt-get install apache2 Para controlar el servicio apache2 podemos usar (para más información): apache2ctl [-k start|restart|graceful|graceful-stop|stop] La opción graceful es un reinicio suave, se terminan de servir las...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u03/index.html",
        "teaser": null
      },{
        "title": "Estructura de los ficheros de configuración",
        "excerpt":"Presentación de la unidad El fichero principal de configuración de Apache2 es /etc/apache2/apache2.conf. En ese fichero se incluyen los ficheros que forman parte de la configuración de Apache2: ... IncludeOptional mods-enabled/*.load IncludeOptional mods-enabled/*.conf ... Include ports.conf ... IncludeOptional conf-enabled/*.conf IncludeOptional sites-enabled/*.conf Los ficheros que se añaden guardados en el directorio...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u04/index.html",
        "teaser": null
      },{
        "title": "Empezamos estudiando algunas directivas",
        "excerpt":"Presentación de la unidad Estudiemos algunas directivas que podemos encontrar en /etc/apache2/apache2.conf: Directivas de control de la conexión Timeout: define, en segundos, el tiempo que el servidor esperará por recibir y transmitir durante la comunicación. Timeout está configurado por defecto a 300 segundos, lo cual es apropiado para la mayoría...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u05/index.html",
        "teaser": null
      },{
        "title": "Probando nuestro servidor web",
        "excerpt":"Presentación de la unidad El servidor web Apache 2.4 se instala por defecto con la configuración de un servidor virtual. La configuración de este sitio la podemos encontrar en: /etc/apache2/sites-available/000-default.conf Y por defecto este sitio virtual está habilitado, por lo que podemos comprobar que existe un enlace simbólico a este...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u06/index.html",
        "teaser": null
      },{
        "title": "Introducción a Virtual Hosting",
        "excerpt":"Presentación de la unidad El término Hosting Virtual se refiere a hacer funcionar más de un sitio web (tales como www.pagina1.com y www.pagina2.com) en una sola máquina. Los sitios web virtuales pueden estar “basados en direcciones IP”, lo que significa que cada sitio web tiene una dirección IP diferente, o...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u07/index.html",
        "teaser": null
      },{
        "title": "Configuración de Virtual Hosting",
        "excerpt":"Presentación de la unidad Vamos a realizar un ejercicio para mostrar como podemos configurar distintos sitios virtuales en Apache 2.4 (basados en nombre). El objetivo es la puesta en marcha de dos sitios web utilizando el mismo servidor web apache. Hay que tener en cuenta lo siguiente: Cada sitio web...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u08/index.html",
        "teaser": null
      },{
        "title": "Configuración de acceso a los servidores virtuales",
        "excerpt":"Presentación de la unidad Configuración de los puertos de escucha Para determinar los puertos de escucha del servidor web utilizamos la directiva Listen que podemos modificar en el archivo /etc/apache2/ports.conf. Como funciona en los Virtual Host Listen solo le dice al servidor principal en qué direcciones y puertos tiene que...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u09/index.html",
        "teaser": null
      },{
        "title": "Opciones de directorios",
        "excerpt":"Presentación de la unidad Cuando indicamos la configuración de un servidor servidor por apache, por ejemplo con la directiva Directory, podemos indicar algunas opciones con la directiva Options. Algunas de las opciones que podemos indicar son las siguientes: All: Todas las opciones excepto MultiViews. FollowSymLinks: Se pueden seguir los enlaces...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u10/index.html",
        "teaser": null
      },{
        "title": "Trabajando con alias",
        "excerpt":"Las directiva Alias nos permite que el servidor sirva ficheros desde cualquier ubicación del sistema de archivo aunque este fuera del directorio indicado en el DocumentRoot. Por ejemplo si pongo este alias en el fichero de configuración de pagina1: Alias \"/image\" \"/ftp/pub/image\" Puedo acceder, por ejemplo, a una imagen con...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u11/index.html",
        "teaser": null
      },{
        "title": "Negociación de contenidos",
        "excerpt":"Apache puede escoger la mejor representación de un recurso basado en las preferencias proporcionadas por el navegador (browser) para los distintos tipos de medios, idiomas, conjunto de de caracteres y codificación. A esta funcionalidad se le llama negociación de contenidos. Un recurso puede estar disponible en diferentes representaciones. Por ejemplo,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u12/index.html",
        "teaser": null
      },{
        "title": "Redirecciones",
        "excerpt":"La directiva redirect es usada para pedir al cliente que haga otra petición a una URL diferente. Normalmente la usamos cuando el recurso al que queremos acceder ha cambiado de localización. Podemos crear redirecciones de dos tipos: Permanentes: se da cuando el recurso sobre el que se hace la petición...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u13/index.html",
        "teaser": null
      },{
        "title": "Páginas de errores personalizadas",
        "excerpt":"Apache ofrece la posibilidad de que los administradores puedan configurar las respuestas que muestra el servidor Apache cuando se producen algunos errores o problemas. Se puede hacer que el servidor siga uno de los siguientes comportamientos: Desplegar un texto diferente, en lugar de los mensajes que aparecen por defecto. Redireccionar...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u14/index.html",
        "teaser": null
      },{
        "title": "Control de acceso. Autorización",
        "excerpt":"Presentación de la unidad El control de acceso, hace referencia a todos los medios que proporcionan una forma de controlar el acceso a cualquier recurso. La directiva Require proporciona una variedad de diferentes maneras de permitir o denegar el acceso a los recursos. Además puede ser usada junto con las...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u15/index.html",
        "teaser": null
      },{
        "title": "Autentificación básica",
        "excerpt":"Presentación de la unidad El servidor web Apache puede acompañarse de distintos módulos para proporcionar diferentes modelos de autenticación. La primera forma que veremos es la más simple. Usamos para ello el módulo de autenticación básica que viene instalada “de serie” con cualquier Apache: mod_auth_basic. La configuración que tenemos que...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u16/index.html",
        "teaser": null
      },{
        "title": "Autentificación digest",
        "excerpt":"Presentación de la unidad La autentificación tipo digest soluciona el problema de la transferencia de contraseñas en claro sin necesidad de usar SSL. Se aplica una función hash a la contraseña antes de ser enviada sobre la red, lo que resulta más seguro que enviarla en texto plano como en...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u17/index.html",
        "teaser": null
      },{
        "title": "Implementación de políticas de autentificación y acceso",
        "excerpt":"Presentación de la unidad Políticas de acceso en Apache 2.2 Como hemos visto anteriormente el control de acceso en versiones anteriores de Apache2, se hacía con las directivas Order, Allow y Deny. Además teníamos otra directiva Satisfy (Nota: Esta directiva no existe en Apache 2.4) que nos permitía controlar como...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u18/index.html",
        "teaser": null
      },{
        "title": "Configuración de Apache mediante archivo .htaccess",
        "excerpt":"Presentación de la unidad Un fichero .htaccess (hypertext access), también conocido como archivo de configuración distribuida, es un fichero especial, popularizado por el Servidor HTTP Apache que nos permite definir diferentes directivas de configuración para cada directorio (con sus respectivos subdirectorios) sin necesidad de editar el archivo de configuración principal...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u19/index.html",
        "teaser": null
      },{
        "title": "Uso de módulos en Apache 2.4",
        "excerpt":"Presentación de la unidad Uno de los aspectos característicos del servidor HTTP Apache es su modularidad, Apache tiene un sinfín de características adicionales que si estuvieran siempre incluidas, harían de él un programa demasiado grande y pesado. En lugar de esto, Apache se compila de forma modular y se cargan...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u20/index.html",
        "teaser": null
      },{
        "title": "Módulo userdir",
        "excerpt":"En sistemas con múltiples usuarios, cada usuario puede tener un sitio web en su directorio home usando el módulo UserDir. Los visitantes de una URL http://example.com/~username/ recibirán el contenido del directorio home del usuario “username”, en el subdirectorio especificado por la directiva UserDir. La directiva UserDir la podemos modificar en...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u21/index.html",
        "teaser": null
      },{
        "title": "Creación de un servidor WebDAV",
        "excerpt":"WebDAV (“Edición y versionado distribuidos sobre la web”) es un protocolo para hacer que la www sea un medio legible y editable. Este protocolo proporciona funcionalidades para crear, cambiar y mover documentos en un servidor remoto (típicamente un servidor web). Esto se utiliza sobre todo para permitir la edición de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u22/index.html",
        "teaser": null
      },{
        "title": "Módulo rewrite",
        "excerpt":"El módulo rewrite nos va a permitir acceder a una URL e internamente estar accediendo a otra. Ayudado por los ficheros .htaccess, el módulo rewrite nos va a ayudar a formar URL amigables que son más consideradas por los motores de búsquedas y mejor recordadas por los humanos. Por ejemplo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u23/index.html",
        "teaser": null
      },{
        "title": "Módulos de Multiprocesamiento (MPM)",
        "excerpt":"Los servidores web pueden ser configurado para manejar las peticiones de diferente forma, desde el punto de vista en que son creados y manejados los subprocesos necesarios que atienden a cada cliente conectado a este. En esta unidad vamos a explicar los MPM (Módulos de multiprocesamiento) que nos permiten configurar...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u24/index.html",
        "teaser": null
      },{
        "title": "Ejecución de script PHP",
        "excerpt":"Apache2 y módulo PHP Instalamos apache2 y el módulo que permite que los procesos de apache2 sean capaz de ejecutar el código PHP: apt install apache2 php7.0 libapache2-mod-php7.0 Cuando hacemos la instalación se desactiva el MPM event y se activa el prefork: ... Module mpm_event disabled. Enabling module mpm_prefork. apache2_switch_mpm...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u25/index.html",
        "teaser": null
      },{
        "title": "Ejecución de script python",
        "excerpt":"Apache2 y módulo wsgi Instalamos el módulo de apache2 que nos permite ejecutar código python: libapache2-mod-wsgi si vamos a trabajar con python2 o libapache2-mod-wsgi-py3 si trabajamos con python3. Veamos un ejemplo de configuración para una aplicación django. Suponemos que el fichero wsgi se encuentra en el directorio: /var/www/html/mysite/mysite/wsgi.py y configuramos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u26/index.html",
        "teaser": null
      },{
        "title": "Introducción a HTTPS",
        "excerpt":"Presentación de la unidad Cada vez es más necesario cifrar el contenido que se trasmite entre el cliente y el servidor, este proceso nos permite asegurar por ejemplo el proceso de autenticación de usuarios para evitar que alguien capture una contraseña de usuario y acceda de forma fraudulenta. El cifrado...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u27/index.html",
        "teaser": null
      },{
        "title": "Obtener un certificado en CAcert",
        "excerpt":"Aunque en los últimos tiempos se está poniendo de moda Let’s Encrypt, que es una autoridad de certificación que proporciona certificados X.509 gratuitos para el cifrado de Seguridad de nivel de transporte (TLS), la utilización de un cliente llamado Certbot que automatiza todo el ciclo de vida de la gestión...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u28/index.html",
        "teaser": null
      },{
        "title": "Configuración de HTTPS",
        "excerpt":"Vamos a configurar el acceso con el protocolo HTTPS a prueba.josedomingo.org. Lo primero que tenemos que hacer es activar el módulo SSL: # a2enmod ssl A continuación vamos a crear un virtual host para nuestro FQDN a partir del fichero por defecto para la configuración de HTTPS, en el directorio...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u29/index.html",
        "teaser": null
      },{
        "title": "Introducción al módulo mod_security2",
        "excerpt":"modSecurity es un firewall de aplicaciones Web que se ejecuta como módulo del servidor web Apache, provee protección contra diversos ataques hacia aplicaciones Web y permite monitorizar tráfico HTTP, así como realizar análisis en tiempo real sin necesidad de hacer cambios a la infraestructura existente. Instalación de modSecurity Para instalar...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u30/index.html",
        "teaser": null
      },{
        "title": "Consejos de seguridad",
        "excerpt":"Presentación de la unidad Además de utilizar HTTPS y activar y configurar modSecurity, podemos tener en cuanta algunos otros consejos de seguridad: Ocultar versión y sistema En el fichero /etc/apache2/conf-enabled/security.conf, podemos configurar las directivas ServerSignature y ServerTokens. ServerTokens: Donde configuramos la información devuelta en las cabeceras de respuesta HTTP. Además...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u31/index.html",
        "teaser": null
      },{
        "title": "Configuración de un proxy inverso",
        "excerpt":"Un proxy inverso es un tipo de servidor proxy que recupera recursos en nombre de un cliente desde uno o más servidores. Por lo tanto el cliente hace la petición al puerto 80 del proxy, y éste es el que hace la petición al servidor web que normalmente está en...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u32/index.html",
        "teaser": null
      },{
        "title": "Analizador de logs: awstats",
        "excerpt":"AWStats es una herramienta open source analizar datos de acceso a un servidor web y genera informes HTML. Los datos son presentados visualmente en informes de tablas y gráficos de barra. Pueden crearse informes estáticos mediante una interfaz de línea de comando, y se pueden obtener informes a través de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/apache24/curso/u33/index.html",
        "teaser": null
      },{
        "title": "Proyecto Cloud Computing (2012)",
        "excerpt":"Proyecto de Innovación Implantación y puesta a punto de la infraestructura de un cloud computing privado para el despliegue de servicios en la nube Se permite el uso comercial de la obra y de las posibles obras derivadas, la distribución de las cuales se debe hacer con una licencia igual a...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/cloud2012/index",
        "teaser": null
      },{
        "title": "Debate sobre la utilización de esta tecnología en nuestra práctica docente",
        "excerpt":"Debate sobre la utilización de esta tecnología en nuestra práctica docente  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/cloud2013/doc/Debate_sobre_la_utilizacion_de_esta_tecnologia_en_nuestra_practica_docente",
        "teaser": null
      },{
        "title": "Ejercicio - Acceso a instancias Linux con claves privadas/públicas",
        "excerpt":"Trabajar con imágenes que tengan definida la contraseña del root no es conveniente ya que, si no tenemos la precaución de modificarla, cualquiera puede acceder a la instancia. Es por lo que lo normal es acceder a las intancias utilizando un par de claves ssh (privada/pública). En este caso la...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/cloud2013/doc/Ejercicio_Acceso_a_instancias_Linux_con_claves_privadas_publicas",
        "teaser": null
      },{
        "title": "Ejercicio - Instalación de joomla en OpenShift",
        "excerpt":"Siguiendo el manual anterior, y la explicación que se ha dado en clase, realiza la instalación de joomla en un gear de open shift.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/cloud2013/doc/Ejercicio_Instalacion_de_joomla_en_OpenShift",
        "teaser": null
      },{
        "title": "Ejercicio - Trabajando con snapshots",
        "excerpt":"Crea una imagen de un sistema operativo Linux. Una vez que has accedido al sistema instala el servidor web apache2: aptitude install apache2 Desde la máquina cliente comprueba que está funcionando el servidor web, accediendo con un navegador web a la IP flotante que le has asignado a la instancia....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/cloud2013/doc/Ejercicio_Trabajando_con_snapshots",
        "teaser": null
      },{
        "title": "Ejercicio - Trabajando con volúmenes",
        "excerpt":"Desde el menú Instances and volumes, crea un volumen (create volume) de 1 GB de capacidad. Selecciona la acción “Edit Attachments” sobre el volumen creado y asocialo a una imágen WIndows que hayas creado anteriormente. Accede al sistema operativo y formatea (FAT32). el volumen asociado con el gestor de discos....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/cloud2013/doc/Ejercicio_Trabajando_con_volumenes",
        "teaser": null
      },{
        "title": "Ejercicio - Trabajar con instancias Linux",
        "excerpt":"Accede a “horizon” con la URL http://jupiter.gonzalonazareno.org e introduce el nombre de usuario y la contraseña que te han dado durante estas jornadas. Comprueba el proyecto al que perteneces. Imagen: Imagen de sistema preconfigurado que se utiliza como base para crear instancias. Dentro del cloud podemos encontrar  diferentes imágenes para...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/cloud2013/doc/Ejercicio_Trabajar_con_instancias_Linux",
        "teaser": null
      },{
        "title": "Ejercicio - Trabajar con instancias Windows",
        "excerpt":"Siguiendo el video-tutorial anterior vamos a crear una instancia de una imagen de un sistema operativo Windows, ten en cuenta algunas cosas: Tienes que abrir el puerto 3389 en el grupo de seguridad para poder acceder usando el protocolo RDP. Cuando trabajamos con instancias Windows no tiene sentido utilizar claves...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/cloud2013/doc/Ejercicio_Trabajar_con_instancias_Windows",
        "teaser": null
      },{
        "title": "Objetivos y contenidos de las jornadas",
        "excerpt":"Objetivos      Conocer la Infraestructura de Cloud Computing   Utilizar una Infraestructura de Cloud con el software OpenStack   Evaluar las posibilidades didácticas que esta herramienta ofrece   Contenidos      Introducción al Cloud Computing   OpenStack   Utilización de instancias y almacenamiento en OpenStack   Cloud Computing como herramienta didáctica   Posibilidades de implantación en un centro educativo   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/cloud2013/doc/Objetivos_y_contenidos_de_las_jornadas",
        "teaser": null
      },{
        "title": "Jornadas Cloud Computing (2013)",
        "excerpt":"CLOUD COMPUTING CON OPENSTACK COMO HERRAMIENTA DIDÁCTICA Objetivos y contenidos de las jornadas Proyecto de innovación: Cloud Computing con OpenStack en educación 1ª SESIÓN: 26 de febrero Introducción al Cloud Computing Introducción al Cloud Computing Amazon Web Services Windows Azure RackSpace Cloud HP Cloud Services Google App Engine Red Hat...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/cloud2013/index",
        "teaser": null
      },{
        "title": "Curso de C++: Introducción a C++",
        "excerpt":"Realizando este curso de introducción a C++ aprenderás las características y los fundamentos de este lenguaje de programación, ya que es un curso de C++ pensado para todos los que quieran comenzar a aprender este interesante lenguaje. Los siguientes contenidos forman parte de un curso que he impartido para OpenWebinars...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/index.html",
        "teaser": null
      },{
        "title": "Análisis de problemas y diseño de algoritmos",
        "excerpt":"Un programador es una persona que resuelve problemas, y para llegar a ser un programador eficaz se necesita aprender a resolver problemas de un modo riguroso y sistemático: Definición o análisis del problema: consiste en el estudio detallado del problema. Se debe identificar los datos de entrada, de salida y...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/curso/u01/index.html",
        "teaser": null
      },{
        "title": "Introducción a los lenguajes de programación",
        "excerpt":"Para que un ordenador realice un proceso, se le debe suministrar en primer lugar un algoritmo adecuado, que llamamos programa. El procesador debe ser capaz de interpretar el algoritmo, lo que significa: Comprender las instrucciones de cada paso. Realizar las operaciones correspondientes. Clasificación de los lenguajes de programación Lenguaje Máquina...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/curso/u02/index.html",
        "teaser": null
      },{
        "title": "Introducción a C++",
        "excerpt":"C++ es un lenguaje de programación diseñado en 1979 por Bjarne Stroustrup. Para su creación se tomó como base un lenguaje de programación popular en aquella época el cual era C. Por lo tanto, C++ es un derivado del mítico lenguaje C, el cual fue creado en la década de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/curso/u03/index.html",
        "teaser": null
      },{
        "title": "Instalación del IDE Zinjai",
        "excerpt":"ZinjaI es un IDE (entorno de desarrollo integrado) libre y gratuito para programar en C/C++. Pensado originalmente para ser utilizado por estudiantes de programación durante el aprendizaje, presenta una interfaz inicial muy sencilla, pero sin dejar de incluir funcionalidades avanzadas. puedes acceder al programa en su página web. Un IDE...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/curso/u04/index.html",
        "teaser": null
      },{
        "title": "Estructura de un programa en C++",
        "excerpt":"Veamos nuestro primer programa para estudiar su estructura: #include &lt;iostream&gt; using namespace std; /* funcion main() Es la función donde empieza la ejecución */ int main() { cout &lt;&lt; \"Hola Mundo!!!\"; // Imprime Hola Mundo return 0; } Veamos algunas elementos que forman parte de la estructura de un programa...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/curso/u05/index.html",
        "teaser": null
      },{
        "title": "Compilación y ejecución de programas",
        "excerpt":"Vamos a compilar y ejecutar nuestro primer programa en C++: #include &lt;iostream&gt; using namespace std; /* funcion main() Es la función donde empieza la ejecución */ int main(int argc, char *argv[]) { cout &lt;&lt; \"Hola Mundo!!!\"; // Imprime Hola Mundo return 0; } Para ello vamos a seguir los siguientes...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/curso/u06/index.html",
        "teaser": null
      },{
        "title": "Datos y tipos de datos",
        "excerpt":"El tipo de dato representa la clase de datos con el que vamos a trabajar. Podemos clasificar los tipos de datos de la siguiente manera: Tipos de datos simples: Números enteros (int) Números reales (float o double) Valores lógicos (bool) Caracteres (char) Tipos de datos complejos: Arrays Cadena de caracteres...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/curso/u07/index.html",
        "teaser": null
      },{
        "title": "Literales y constantes",
        "excerpt":"Literales Los literales nos permiten representar valores. Estos valores pueden ser de diferentes tipos, de esta manera tenemos diferentes tipos de literales: Literales enteros: Para representar números enteros utilizamos cifras enteras. Ejemplos números en base decimal: 5,-12…, en base octal: 077 y en hexadecimal 0xfe. Literales reales: Utilizamos un punto...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/curso/u08/index.html",
        "teaser": null
      },{
        "title": "Variables",
        "excerpt":"Una variable nos permite almacenar información. Cada variable tiene un nombre y al crearlas hay que indicar el tipo de datos que va a almacenar. El nombre de una variable puede estar formado por letras, dígitos y subrayados, pero no puede empezar por un dígito. Los nombres se suelen indicar...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/curso/u09/index.html",
        "teaser": null
      },{
        "title": "Tipos de datos numéricos",
        "excerpt":"Los principales tipos de datos numéricos son los siguientes: int: Nos permite guardar valores enteros. float: Nos permiten guardar números reales de precisión simple (7 dígitos decimales). double: Nos permite guardar números reales de doble precisión (16 dígitos decimales). El tipo de un dato determina el tamaño de memoria que...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/curso/u10/index.html",
        "teaser": null
      },{
        "title": "Introducción a las cadenas de caracteres",
        "excerpt":"En C++ tenemos dos formas de trabajar con cadenas de caracteres: La forma tradicional del lenguaje C: una cadena de caracteres es un array de caracteres (un conjunto de caracteres). C++ nos ofrece la clase string que nos permite trabajar con cadenas de caracteres. Usando la clase string Para declarar...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/curso/u11/index.html",
        "teaser": null
      },{
        "title": "Entrada y salida estándar",
        "excerpt":"Veamos un ejemplo para estudiar la entrada y salida estándar: #include &lt;iostream&gt; using namespace std; int main(int argc, char *argv[]) { string nombre; int edad; cout &lt;&lt; \"Bienvenido...\" &lt;&lt; endl; cout &lt;&lt; \"Dime el nombre:\"; getline(cin,nombre); cout &lt;&lt; \"Dime la edad de \" &lt;&lt; nombre &lt;&lt; \":\"; cin &gt;&gt; edad;...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/curso/u12/index.html",
        "teaser": null
      },{
        "title": "Pasando de pseudocódigo a C++",
        "excerpt":"Antes de empezar hacer ejercicios con la estructura secuencial, vamos a ver como convertimos algunas instrucciones en pseudocódigo a C++: Leer variables por teclado Leer cadenas de caracteres En pseudocódigo: Definir nombre Como Cadena; Escribir \"Dime tu nombre:\"; Leer nombre; En C++: string nombre; cout &lt;&lt; \"Dime tu nombre:\"; getline(cin,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/curso/u13/index.html",
        "teaser": null
      },{
        "title": "Ejercicios estructura secuencial",
        "excerpt":"Ejercicio 1 Escribir un programa que pregunte al usuario su nombre, y luego lo salude. Ejercicio 2 Calcular el perímetro y área de un rectángulo dada su base y su altura. Ejercicio 3 Dados los catetos de un triángulo rectángulo, calcular su hipotenusa. Ejercicio 4 Dados dos números, mostrar la...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp1/curso/u14/index.html",
        "teaser": null
      },{
        "title": "Curso de C++: Estructuras de control y tipos de datos",
        "excerpt":"Realizando este curso de C++ aprenderás a estructurar los programas en C++ usando estructuras de control, ya que es el segundo de los cursos que conforman el itinerario formativo que hemos preparado para aprender C++ desde cero, y que debes realizar tras finalizar el curso introductorio a este lenguaje de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos booleano. Operadores relacionales y lógicos",
        "excerpt":"El tipo booleano o lógico bool puede tener dos estados expresados por las constantes predefinidas true (lo que lo convierte en el entero 1) y false (lo que lo convierte en el entero 0). Realmente cualquier valor entero distinto de 0 será verdadero, y el 0 será falso. Operadores de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u01/index.html",
        "teaser": null
      },{
        "title": "Estructuras alternativas: Si",
        "excerpt":"Alternativa simple: if La estructura es la siguiente: if (expresión lógica) { instrucciones } Al ejecutarse la instrucción if se evalúa la condición lógica. Si la condición lógica es true se ejecutan de manera secuencial el bloque de instrucciones Acciones A. Si la condición es false no se ejecuta el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u02/index.html",
        "teaser": null
      },{
        "title": "Estructuras alternativas: switch",
        "excerpt":"Alternativa múltiple: switch La secuencia de instrucciones ejecutada por una instrucción switch depende del valor de una variable numérica. switch(expresión) { case valor1: instrucciones; break; //opcional case valor2: instrucciones; break; //opcional ... default: //opcional statement(s); } Esta instrucción permite ejecutar opcionalmente varias acciones posibles, dependiendo del valor de una expresión....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u03/index.html",
        "teaser": null
      },{
        "title": "Ejercicios estructuras alternativas",
        "excerpt":"Ejercicio 1 Algoritmo que pida dos números e indique si el primero es mayor que el segundo o no. Ejercicio 2 Algoritmo que pida un número y diga si es positivo, negativo o 0. Ejercicio 3 Escribe un programa que lea un número e indique si es par o impar....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u04/index.html",
        "teaser": null
      },{
        "title": "Estructuras repetitivas: while",
        "excerpt":"La instrucción while ejecuta una secuencia de instrucciones mientras una condición sea verdadera. while(condición) { instrucciones; } Al ejecutarse esta instrucción, la condición es evaluada. Si la condición resulta verdadera, se ejecuta una vez la secuencia de instrucciones que forman el cuerpo del ciclo. Al finalizar la ejecución del cuerpo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u05/index.html",
        "teaser": null
      },{
        "title": "Estructuras repetitivas: do - while",
        "excerpt":"La instrucción do-while ejecuta una secuencia de instrucciones mientras que la condición sea verdadera. do { instrucciones; } while(condición lógica); Al ejecutarse esta instrucción, la secuencia de instrucciones que forma el cuerpo del ciclo se ejecuta una vez y luego se evalúa la condición. Si la condición es verdadera, el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u06/index.html",
        "teaser": null
      },{
        "title": "Estructuras repetitivas: for",
        "excerpt":"La instrucción for ejecuta una secuencia de instrucciones un número determinado de veces. for(&lt;variable&gt; = &lt;inicial&gt;; &lt;condición&gt;; &lt;incremento/decremento variable&gt; { &lt;instrucciones&gt; } Al ingresar al bloque, la variable &lt;variable&gt; recibe el valor &lt;inicial&gt; (1ª parte de la instrucción) y se ejecuta la secuencia de instrucciones que forma el cuerpo del...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u07/index.html",
        "teaser": null
      },{
        "title": "Uso específico de variables: contadores, acumuladores e indicadores",
        "excerpt":"Contadores Un contador es una variable entera que la utilizamos para contar cuando ocurre un suceso. Un contador: Se declara: int cont; Se inicializa a un valor inicial (Por defecto una variable entera tiene el valor 0, pero no está mal inicializarla de todas formas). cont = 0; Se incrementa,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u08/index.html",
        "teaser": null
      },{
        "title": "Ejercicios estructuras repetitivas",
        "excerpt":"Ejercicio 1 Crea una aplicación que pida un número y calcule su factorial (El factorial de un número es el producto de todos los enteros entre 1 y el propio número y se representa por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120), Ejercicio 2...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u09/index.html",
        "teaser": null
      },{
        "title": "Cadenas de caracteres con la clase string",
        "excerpt":"En el apartado Introducción a las cadenas de caracteres estuvimos estudiando varios aspectos de las cadenas en c++ usando la clase string: Declaración de las cadenas de caracteres. Indexación de los carácteres. Concatenación de cadenas con el operador +. Algunos métodos de la clase string Vamos a profundizar en el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u10/index.html",
        "teaser": null
      },{
        "title": "Ejercicios cadena de caracteres",
        "excerpt":"Ejercicio 1 Escribir por pantalla cada carácter de una cadena introducida por teclado. Ejercicio 2 Realizar un programa que comprueba si una cadena leída por teclado comienza por una subcadena introducida por teclado. Ejercicio 3 Pide una cadena y un carácter por teclado (valida que sea un carácter) y muestra...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u11/index.html",
        "teaser": null
      },{
        "title": "Introducción a los arrays",
        "excerpt":"Estructura de datos Hasta ahora, para hacer referencia a un dato utilizábamos una variable. El problema se plantea cuando tenemos gran cantidad de datos que guardan entre sí una relación. No podemos utilizar una variable para cada dato. Para resolver estas dificultades se agrupan los datos en un mismo conjunto,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u12/index.html",
        "teaser": null
      },{
        "title": "Arrays unidimensionales: Vectores",
        "excerpt":"Un vector es una array unidimensional. Para declarar un vector de 10 enteros: int vector[10]; Podemos inicializar el vector a declararlo: int vector[10]={1,2,3,4,5,6,7,8,9,10}; Para acceder a cada uno de los elementos del vector utilizamos un índice. el primer elemento se accede con el índice 0. Podemos trabajar individualmente con cada...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u13/index.html",
        "teaser": null
      },{
        "title": "Cadenas de caracteres estilo C",
        "excerpt":"La cadena de caracteres de estilo C se originó en el lenguaje C y continúa siendo compatible con C++. En C las cadenas de caracteres son en realidad un vector (array) de elementos del tipo carácter. La característica principal de este vector es que usamos un carácter especial llamado nulo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u14/index.html",
        "teaser": null
      },{
        "title": "Arrays multidimensionales: Tablas",
        "excerpt":"Una tabla en un array bidimensional. La primera dimensión indica el número de filas y el segundo el número de columnas. int tabla[3][4]; Hemos definido una tabla de enteras con 3 filas y 4 columnas, por tanto tenemos 12 elementos. Para acceder a cada uno de lo elemento tenemos que...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u15/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de arrays",
        "excerpt":"Ejercicio 1 Realizar un programa que defina un vector llamado “vector_numeros” de 10 enteros, a continuación lo inicialice con valores aleatorios (del 1 al 10) y posteriormente muestre en pantalla cada elemento del vector junto con su cuadrado y su cubo. Ejercicio 2 Crear un vector de 5 elementos de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp2/curso/u16/index.html",
        "teaser": null
      },{
        "title": "Curso de C++: Programación estructurada y orientación a objetos",
        "excerpt":"En este curso seguirás aprendiendo los fundamentos del lenguaje de programación C++, en este caso las funciones y la Programación Orientada a Objetos, una de las características más importantes de C++. Los siguientes contenidos forman parte de un curso que he impartido para OpenWebinars en septiembre de 2020. Puedes obtener...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp3/index.html",
        "teaser": null
      },{
        "title": "Introducción a los punteros (I)",
        "excerpt":"Hemos estudiado que las variables nos permiten guardar valores de distintos tipos en la memoria RAM del ordenador. Cada posición de memoria donde guardamos un dato tiene una dirección de memoria que nos permite localizar ea posición. Es decir al trabajar con variables tenemos que tener en cuenta 5 elementos:...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp3/curso/u01/index.html",
        "teaser": null
      },{
        "title": "Introducción a los punteros (II)",
        "excerpt":"¿Qué son los punteros? En el apartado anterior hemos aprendido los operadores &amp; y * que nos permiten trabajar con las variables.El operador * (“contenido de una dirección de memoria) tiene que trabajar sobre posiciones de memoria, pero ¿podemos guardar la dirección de memoria de una variable en otra variable?...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp3/curso/u02/index.html",
        "teaser": null
      },{
        "title": "Introducción a las referencias en C++",
        "excerpt":"¿Qué son los referencias? La referencia en C++ es una característica específica de este lenguaje y que tiene un comportamiento muy particular; lo que se logra con esto es darle un alias a una variable que ya se encuentra en existencia para, de esta forma, lograr realizar cambios sobre dicha...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp3/curso/u03/index.html",
        "teaser": null
      },{
        "title": "Tipos de datos complejos: estructuras",
        "excerpt":"El lenguaje C++ nos permite declarar nuevos tipos de datos. Las estructuras nos permiten declarar nuevos tipos de datos complejos. Una estructura es un conjunto de una o más variables, de distinto tipo, agrupadas bajo un mismo nombre para que su manejo sea más sencillo. Para definir una estructura usamos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp3/curso/u04/index.html",
        "teaser": null
      },{
        "title": "Programación estructurada",
        "excerpt":"La programación estructurada es un paradigma de programación orientado a mejorar la claridad, calidad y tiempo de desarrollo de un programa de ordenador o algoritmo, utilizando únicamente subrutinas (funciones o procedimientos) y tres estructuras: secuencia, alternativas y repetitivas. La programación modular es un paradigma de programación que consiste en dividir...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp3/curso/u05/index.html",
        "teaser": null
      },{
        "title": "Funciones y procedimientos",
        "excerpt":"Partimos del ejemplo anterior de función: #include &lt;iostream&gt; using namespace std; int CalcularMaximo(int num1,int num2); int main(int argc, char *argv[]) { int numero1,numero2,num_maximo; cout &lt;&lt; \"Dime el número1:\"; cin &gt;&gt; numero1; cout &lt;&lt; \"Dime el número2:\"; cin &gt;&gt; numero2; num_maximo = CalcularMaximo(numero1,numero2); cout &lt;&lt; \"El máximo es \" &lt;&lt; num_maximo;...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp3/curso/u06/index.html",
        "teaser": null
      },{
        "title": "Funciones recursivas",
        "excerpt":"Una función recursiva es aquella que al ejecutarse hace llamadas a ella misma. Por lo tanto tenemos que tener “un caso base” que hace terminar el bucle de llamadas. Veamos un ejemplo: #include &lt;iostream&gt; using namespace std; int CalcularFactorial(int num); int main(int argc, char *argv[]) { cout &lt;&lt; \"El factorial...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp3/curso/u07/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de funciones",
        "excerpt":"Ejercicio 1 Crea un procedimiento EscribirCentrado, que reciba como parámetro un texto y lo escriba centrado en pantalla (suponiendo una anchura de 80 columnas; pista: deberás escribir 40 - longitud/2 espacios antes del texto). Además subraya el mensaje utilizando el carácter =. Ejercicio 2 Crea un programa que pida dos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp3/curso/u08/index.html",
        "teaser": null
      },{
        "title": "Más Ejercicios",
        "excerpt":"Ejercicio 1 Realice un programa que pregunte aleatóriamente una multiplicación. El programa debe indicar si la respuesta ha sido correcta o no (en caso que la respuesta sea incorrecta el programa debe indicar cuál es la correcta). El programa preguntará 10 multiplicaciones, y al finalizar mostrará el número de aciertos....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp3/curso/u09/index.html",
        "teaser": null
      },{
        "title": "Introducción a la programación orientada a objetos",
        "excerpt":"La Programación Orientado a Objetos (POO) se basa en la agrupación de objetos de distintas clases que interactúan entre sí y que, en conjunto, consiguen que un programa cumpla su propósito. Definición de clase, objeto, atributos y métodos Llamamos clase a la representación abstracta de un concepto. Por ejemplo, “perro”,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp3/curso/u10/index.html",
        "teaser": null
      },{
        "title": "Encapsulamiento en la programación orientada a objetos",
        "excerpt":"En la unidad anterior terminamos viendo que teníamos la posibilidad de cambiar los valores de los atributos de un objeto. En muchas ocasiones es necesario que esta modificación no se haga directamente, sino que tengamos utilizar un método para realizar la modificación y poder controlar esa operación. También puede ser...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp3/curso/u11/index.html",
        "teaser": null
      },{
        "title": "Herencia y delegación",
        "excerpt":"Herencia La herencia es un mecanismo de la programación orientada a objetos que sirve para crear clases nuevas a partir de clases preexistentes. Se toman (heredan) atributos y métodos de las clases bases y se los modifica para modelar una nueva situación. La clase desde la que se hereda se...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp3/curso/u12/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de programación orientada a objetos",
        "excerpt":"Ejercicio 1 Vamos a crear una clase llamada Persona. Sus atributos son: nombre, edad y DNI. Construye los siguientes métodos para la clase: El constructor por defecto. Un constructor, que reciba los parámetros para inicializar los atributos. Los métodos de acceso (set,get) para cada uno de los atributos. Hay que...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/curso_cpp3/curso/u13/index.html",
        "teaser": null
      },{
        "title": "Curso flask (Miniframework python para desarrollar páginas web)",
        "excerpt":"Flask es un “micro” framework escrito en Python y concebido para facilitar el desarrollo de aplicaciones Web bajo el patrón MVC. Los siguientes contenidos forman parte de un curso que he impartido para OpenWebinars en septiembre de 2017. Puedes obtener todo el contenido del curso en el repositorio GitHub. Todas...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/index.html",
        "teaser": null
      },{
        "title": "Protocolo HTTP",
        "excerpt":"Presentación de la unidad Descripción general Protocolo de comunicaciones estándar que comunica servidores, proxys y clientes. Permite la transferencia de documentos web, sin importar cual es el cliente o cual es el servidor. Es un protocolo basado en el esquema petición/respuesta. El cliente realiza una petición y el servido devuelve...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u01/index.html",
        "teaser": null
      },{
        "title": "Programación web dinámica",
        "excerpt":"Presentación de la unidad Páginas web dinámicas Las páginas web dinámicas son aquellas en las que la información presentada se genera a partir de una petición del usuario de la página. Contrariamente a lo que ocurre con las páginas estáticas, en las que su contenido se encuentra predeterminado, en las...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u02/index.html",
        "teaser": null
      },{
        "title": "Patrón modelo-vista-controlador",
        "excerpt":"Presentación de la unidad Modelo–vista–controlador (MVC) es un patrón de arquitectura de software, que separa los datos y la lógica de negocio de una aplicación de la interfaz de usuario y el módulo encargado de gestionar los eventos y las comunicaciones. Para ello MVC propone la construcción de tres componentes...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u03/index.html",
        "teaser": null
      },{
        "title": "Introducción a la programación web con python",
        "excerpt":"Aunque de forma general se utilizan distintos framework (por ejemplo Flask) para el desarrollo de aplicaciones web con Python. En esta unidad voy a introducir los conceptos necesarios para crear una página web desarrollada con python sin utilizar ningún framework. Para ello es necesario conocer el concepto de WSGI (Web...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u04/index.html",
        "teaser": null
      },{
        "title": "Introducción a flask",
        "excerpt":"Presentación de la unidad Flask es un “micro” framework escrito en Python y concebido para facilitar el desarrollo de aplicaciones Web bajo el patrón MVC. ¿Qué es un framework? Podemos definir framework como un esquema (un esqueleto, un patrón) para el desarrollo y/o la implementación de una aplicación. En general...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u05/index.html",
        "teaser": null
      },{
        "title": "Instalación de flask",
        "excerpt":"Vamos a realizar la instalación de Flask utilizando la herramienta pip en un entorno virtual creado con virtualenv. La instalación de Flask depende de dos paquetes: Werkzeug, una librería WSGI para Python y jinja2 como motor de plantillas. Creando el entorno virtual Como Flask es compatible con python3 vamos a...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u06/index.html",
        "teaser": null
      },{
        "title": "Corriendo una aplicación sencilla",
        "excerpt":"Escribimos nuestra primera aplicación flask, en un fichero app.py: from flask import Flask app = Flask(__name__) @app.route('/') def hello_world(): return 'Hello, World!' if __name__ == '__main__': app.run() El objeto app de la clase Flask es nuestra aplicación WSGI, que nos permitirá posteriormente desplegar nuestra aplicación en un servidor Web. Se...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u07/index.html",
        "teaser": null
      },{
        "title": "Controlando nuestra aplicación con flask-script",
        "excerpt":"La extensión flask-script nos proporciona la posibilidad de gestionar nuestra aplicación flask desde un comando (Interfaz de línea de comando). Nos permite escribir pequeños programa (scripts) que gestionen nuestra aplicación, por defecto nos ofrece el servidor web de desarrollo y un interprete (shell) con nuestra aplicación cargada. Instalación de la...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u08/index.html",
        "teaser": null
      },{
        "title": "Enrutamiento: rutas",
        "excerpt":"El objeto Flask app nos proporciona un decorador router que es capaz de filtrar la función vista que se va ejecutar analizando la petición HTTP, fundamentalmente por la ruta y el método que se hace la petición. Trabajando con rutas Veamos un ejemplo: ... @app.route('/') def inicio(): return 'Página principal'...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u09/index.html",
        "teaser": null
      },{
        "title": "Enrutamiento: Métodos",
        "excerpt":"Para acceder a las distintas URLs podemos utilizar varios métodos en nuestra petición HTTP. En nuestros ejemplos vamos a trabajar con el método GET y POST, que son los métodos que normalmente podemos utilizar desde un navegador web. GET: Se realiza una petición para obtener un recurso del servidor web....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u10/index.html",
        "teaser": null
      },{
        "title": "Trabajando con peticiones HTTP",
        "excerpt":"Hemos indicado que nuestra aplicación Flask recibe una petición HTTP, cuando la URL a la que accedemos se corresponde con una ruta y un método indicada en una determinada route se ejecuta la función correspondiente. Desde esta función se puede acceder al objeto request que posee toda la información de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u11/index.html",
        "teaser": null
      },{
        "title": "Generando respuestas HTTP, respuestas de error y redirecciones",
        "excerpt":"El decorador router gestiona la petición HTTP recibida y crea un objeto reponse con la respuesta HTTP: el código de estado, las cabaceras y los datos devueltos. Esta respuesta la prepara a partir de lo que devuelve la función vista ejecutada con cada route. Estas funciones pueden devolver tres tipos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u12/index.html",
        "teaser": null
      },{
        "title": "Contenido estático",
        "excerpt":"Nuestra página web necesita tener contenido estático: hoja de estilo, ficheros java script, imágenes, documentos pdf, etc. Para acceder a eelos vamos a utilizar la función url_for. ¿Dónde guardamos el contenido estático? Dentro de nuestro directorio aplicacion vamos a crear un directorio llamado static, donde podemos crear la estructura de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u13/index.html",
        "teaser": null
      },{
        "title": "Plantillas con jinja2",
        "excerpt":"Jinja2 es un motor de plantilla desarrollado en Python. Flask utiliza jinja2 para generar documentos HTML válidos de una manera muy sencilla y eficiente. Por dependencias al instalar Flask instalamos jinja2. En esta unidad vamos a estudiar los elementos principales de jinja2, para más información accede a la documentación oficial...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u14/index.html",
        "teaser": null
      },{
        "title": "Generando páginas HTML con Flask y Jinja2",
        "excerpt":"Flask utiliza por defecto jinja2 para generar documentos HTML, para generar una plantilla utilizamos la función render_template que recibe como parámetro el fichero donde guardamos la plantilla y las variables que se pasan a esta. Las plantillas las vamos a guardar en ficheros en el directorio templates (dentro del directorio...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u15/index.html",
        "teaser": null
      },{
        "title": "Herencia de plantillas",
        "excerpt":"La herencia de plantillas nos permite hacer un esqueleto de plantilla, para que todas las páginas de nuestro sitio web sean similares. En la unidad anterior hicimos una plantilla independiente para cada página, eso tiene un problema: si queremos cambiar algo que es común a todas las páginas hay que...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u16/index.html",
        "teaser": null
      },{
        "title": "Plantillas con bootstrap (flask-bootstrap)",
        "excerpt":"Podemos utilizar la hoja de estilo que queramos, la podemos guardar en nuestro contenido estático o acceder por medio de una url. Sin embargo si queremos trabajar con plantillas que utilicen como hoja de estilos y javascript el framework bootstrap podemos utilizar la extensión Flask-Bootstrap. Instalación de Flask-Bootstrap Con nuestro...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u17/index.html",
        "teaser": null
      },{
        "title": "Trabajando con formularios",
        "excerpt":"La manera más usual de enviar información a las distintas páginas de nuestra aplicación web es usando formularios HTML5. Es recomendable utilizar el método POST (la información se envía en el cuerpo de la petición) para el envío de información usando formularios, aunque si es necesario también podemos usar el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u18/index.html",
        "teaser": null
      },{
        "title": "Generando formularios con flask-wtf",
        "excerpt":"Flask-WTF es una extensión de Flask que nos permite trabajar con la librería WTForm de python, que nos facilita la generación y validación de formularios HTML. Instalación de Flask-WTF Con nuestro entorno virtual ejecutamos: pip install Flask-WTF Por dependencia se instala la librería WTForm. Creando formularios En el directorio de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u19/index.html",
        "teaser": null
      },{
        "title": "Subida de ficheros",
        "excerpt":"Es posible realizar subidas de ficheros al servidor, Flask nos ofrece está posibilidad, pero vamos a utilizar la extensión Flask-WTF para facilitar esta labor. Hay que recordad que cuando se manda un fichero al servidor la información del fichero la encontramos en request.file. En esta unidad vamos a hacer una...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u20/index.html",
        "teaser": null
      },{
        "title": "Usando base de datos en Flask, flask-sqlalchemy",
        "excerpt":"Aunque python nos ofrece diferentes módulos para conectarnos a los distintos motores de base de datos: mysql: MySql-Python, PyMySQL, Mysql Conector postgreSQL sqlite3 Usaremos la extensión Flask-SQLAlchemy para manejar el modelo de datos de nuestra aplicación. Esta extensión provee un wrapper para el proyecto SQLAlchemy, el cual es un Object...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u21/index.html",
        "teaser": null
      },{
        "title": "El modelo de base de datos",
        "excerpt":"Los datos que guardamos en nuestra base de datos serán representados por una colección de clases que son referidas como modelos de base de datos. Definición del modelo En nuestro proyecto vamos a definir el modelo en el fichero models.py que crearemos dentro del directorio de nuestra aplicación (aplicacion). Veamos,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u22/index.html",
        "teaser": null
      },{
        "title": "Listando y filtrando los registros de la base de datos",
        "excerpt":"En esta unidad vamos a seguir trabando en nuestro proyecto, vamos a listar los artículos y las categorías. Además vamos a poder seleccionar los artículos por categoría. Seleccionando registros en el programa principal @app.route('/') @app.route('/categoria/&lt;id&gt;') def inicio(id='0'): categoria=Categorias.query.get(id) if id=='0': articulos=Articulos.query.all() else: articulos=Articulos.query.filter_by(CategoriaId=id) categorias=Categorias.query.all() return render_template(\"inicio.html\",articulos=articulos,categorias=categorias,categoria=categoria) Ejecutamos esta función cuando...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u23/index.html",
        "teaser": null
      },{
        "title": "Creando registros en la base de datos",
        "excerpt":"En este apartado vamos a estudiar como insertar un registro en nuestra base de datos. Creando nuevos artículos Lo primero es insertar un enlace en la página principal que nos permita insertar nuevos artículos, para ello en la plantilla inicio.html: &lt;a class=\"btn btn-primary\" href=\"{{url_for('articulos_new')}}\" role=\"button\"&gt;Nuevo videojuego&lt;/a&gt; Para realizar nuestra operación...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u24/index.html",
        "teaser": null
      },{
        "title": "Modificando registros en la base de datos",
        "excerpt":"En este apartado vamos a estudiar como modificar un registro en nuestra base de datos. Modificando artículos Lo primero es insertar un enlace en la página principal que nos permita modificar artículos (se añade un enlace por cada artículo), para ello en la plantilla inicio.html: &lt;td&gt;&lt;a href=\"{{url_for('articulos_edit',id=art.id)}}\"&gt;&lt;span class=\"glyphicon glyphicon-pencil\"&gt;&lt;/span&gt; Modificar&lt;/a&gt;&lt;/td&gt;...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u25/index.html",
        "teaser": null
      },{
        "title": "Borrando un registro de la base de datos",
        "excerpt":"En este apartado vamos a estudiar como borrar un registro en nuestra base de datos. Modificando artículos Modificación en el modelo de datos Vamos a modificar nuestro modelo de datos, para indicar que vamos a borrar en cascada en nuestra relación, es decir al borrar una categoría vamos a borrar...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u26/index.html",
        "teaser": null
      },{
        "title": "Gestión de usuarios con sesiones",
        "excerpt":"En esta unidad vamos a introducir el concepto de sesión para posibilitar que los usuarios de nuestra página puedan loguearse en ella. Posteriormente veremos como autorizar el acceso a las distintas opciones de nuestra aplicación según el rol del usuario. En esta unidad vamos a trabajar directamente con sesiones, en...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u27/index.html",
        "teaser": null
      },{
        "title": "Registrando nuevos usuarios",
        "excerpt":"En esta unidad vamos a estudiar como un usuario se puede registrar en nuestra aplicación, y una vez registrado podrá cambiar los datos de su perfil. En realidad lo que estamos haciendo es creando y modificando registros en la tabla de usuarios. Registro de nuevos usuarios En la plantilla base.html...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u28/index.html",
        "teaser": null
      },{
        "title": "Gestión de permisos de usuarios",
        "excerpt":"En esta unidad vamos a estudiar como autorizar las distintas acciones que pueden hacer nuestros usuarios en la aplicación. Cuando accedemos a la aplicación podemos hacerlo de tres formas distintas: Usuario invitado: Navegamos por la página sin autentificar ningún usuario del sistema. Usuario normal: Nos hemos autentificado con un usuario...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u29/index.html",
        "teaser": null
      },{
        "title": "Gestión de usuarios con extensión Flask-Login",
        "excerpt":"En las unidades anteriores hemos gestionado las sesiones con Flask de manera manual, gestionando las variables de sesión (fichero login.py) directamente y comprobando su existencia para el control de acceso. En esta unidad vamos a introducir una nueva extensión de Flask que nos permite trabajar con sesiones: Flask-Login. ˋFlask-Loginˋ es...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u30/index.html",
        "teaser": null
      },{
        "title": "Uso de cookies para añadir artículos al carrito",
        "excerpt":"Las cookie son ficheros de texto con información, que el navegador guarda en memoria o en el disco duro, a solicitud del servidor. Manejo de cokies en flask En flask tenemos que generar una respuesta HTTP que solicite la creación de una cookie en el cliente, para crear una cookie...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u31/index.html",
        "teaser": null
      },{
        "title": "Finalización de la compra ",
        "excerpt":"En esta última unidad vamos a simular el final de la compra, en este caso hemos simplificado mucho este proceso, simplemente vamos a mostrar la lista de los artículos comprados, el precio final y vamos a actualizar el stock de cada uno de los artículos. Realizar pedido En la plantilla...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u32/index.html",
        "teaser": null
      },{
        "title": "Despliegue de aplicación flask en un servidor LAMP",
        "excerpt":"Vamos a desplegar nuestra aplicación web desarrollada con flask en un servidor LAMP (Linux+Apache2+mysql+python) en un sistema operativo GNU/Linux Ubuntu 16.04. Configuración del servidor Después de actualizar los paquetes del sistema: $ sudo apt-get update $ sudo apt-get upgrade Hacemos la instalación del servidor web y del servidor de bases...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u33/index.html",
        "teaser": null
      },{
        "title": "Despliegue de aplicación flask en hosting pythonanywhere",
        "excerpt":"En este ejemplo vamos a desplegar nuestra aplicación en un hosting que nos permite trabajar con python llamado PythonAnywhere, que nos ofrece distintos planes de contratación, aunque nosotros vamos a usar el Beginner que es gratuito y para aplicaciones de prueba con pocos accesos es suficiente. Configuración de la base...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u34/index.html",
        "teaser": null
      },{
        "title": "Despliegue de aplicación flask en un PaaS Heroku",
        "excerpt":"En esta unidad vamos a desplegar nuestra aplicación web desarrollada en python utilizando el framework flask utilizando sólo la aplicación web Heroku (Heroku Dashboard) (no vamos a utilizar el comando heroku-cli). Heroku es una aplicación que nos ofrece un servicio de Cloud Computing PaaS (Plataforma como servicio). Como leemos en...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u35/index.html",
        "teaser": null
      },{
        "title": "Despliegue de aplicación flask en un contenedor docker",
        "excerpt":"Vamos a desplegar nuestra aplicación web desarrollada con flask en docker. Vamos a utilizar dos contenedores: uno para la base de datos mysql y otro para nuestra aplicación. Seguimos las instrucciones de la documentación de docker para realizar la instalación en Ubuntu 16.04. Contenedor de base de datos Vamos a...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/flask/curso/u36/index.html",
        "teaser": null
      },{
        "title": "Curso HELVIA - IES Gonzalo Nazareno (2007)",
        "excerpt":"Curso impartido en el instituto IES Gonzalo Nazareno sobre la plataforma educativa HELVIA. Plataforma Educativa Helvia Curso Impartido en el IES Gonzalo Nazareno Noviembre de 2007 Introducción ¿Qué es Helvia? Helvia en el IES Gonzalo Nazareno Uso de la plataforma como usuario Manejo de Helvia como usuario Video 1.- Acceso...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/helvia2007/index",
        "teaser": null
      },{
        "title": "Curso de introducción al uso de la plataforma moodle",
        "excerpt":"El 16 de marzo de 2020 se suspendieron las actividades docentes presenciales en el Sistema Educativo, debido a la declaración del estado de alarma a causa de la crisis causada por el COVID-19. Los docentes hemos tenido que adaptarnos de forma muy rápida a esta situación y al uso de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/moodle2020/index.html",
        "teaser": null
      },{
        "title": "Configuración de awstats para virtual hosting",
        "excerpt":"Configurar awstats para obtener las estadístcas de los dos subdominios creados en la tarea anterior, hay que entregar:      Documento donde expliques brevemente los pasos que hay que realizar   Ficheros de configuración de awstats para cada subdominio  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/mv2006/doc/Configuracion_de_awstats_para_virtual_hosting",
        "teaser": null
      },{
        "title": "Configurar dos subdominios",
        "excerpt":"Incluir los dos ficheros de configuración para crear dos subdominios (departamento1.nombreinstituto.org, elige el nombre de tu instituto y dos departamentos cualquiera). Incluye también un pequeño documento explicando brevemente los pasos necesarios para implementar los dos subdominios en apache2.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/mv2006/doc/Configurar_dos_subdominios",
        "teaser": null
      },{
        "title": "Crear un ftp anónimo",
        "excerpt":"Enviar el fichero de configuración de proftps para crear un ftp anónimo de sólo lectura.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/mv2006/doc/Crear_un_ftp_anonimo",
        "teaser": null
      },{
        "title": "Crear una red virtual con VMware Server segmentada en dos subredes",
        "excerpt":"Enviar un fichero que incluya:      Listado (ls) de los directorios con los ficheros de los sistemas huésped   Salida de ifconfig y route de cada sistema.   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/mv2006/doc/Crear_una_red_virtual_con_VMware_Server_segmentada_en_dos_subredes",
        "teaser": null
      },{
        "title": "Crear una red virtual con Xen segmentada en dos subredes",
        "excerpt":"Enviar un fichero que incluya:      Ficheros de configuración de los nuevos dominios.   Listado (ls) de los directorios con los ficheros imagen.   Salida de ifconfig y route de cada dominio.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/mv2006/doc/Crear_una_red_virtual_con_Xen_segmentada_en_dos_subredes",
        "teaser": null
      },{
        "title": "Implementar squid como proxy transparente para la red local",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/mv2006/doc/Implementar_squid_como_proxy_transparente_para_la_red_local",
        "teaser": null
      },{
        "title": "Implementar un cortafuegos",
        "excerpt":"Adjuntar un fichero de texto con las líneas correspondientes de iptables que configuren la red del tema anterior con una DMZ y una MZ. Utilizar política por defecto ACCEPT  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/mv2006/doc/Implementar_un_cortafuegos",
        "teaser": null
      },{
        "title": "Instalar VMware Server con la configuración de red por defecto",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/mv2006/doc/Instalar_VMware_Server_con_la_configuracion_de_red_por_defecto",
        "teaser": null
      },{
        "title": "Instalar Xen en modo puente",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/mv2006/doc/Instalar_Xen_en_modo_puente",
        "teaser": null
      },{
        "title": "Instalar xoops",
        "excerpt":"Xoops es otro CMS muy popular. La tarea consite en bajarte xoops de la página oficial en español http://www.esxoops.com/ e instalarlo en apache2 (en cualquier subdominio). Envía un pequeño documento explicando los pasos que has realizado para la instalación.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/mv2006/doc/Instalar_xoops",
        "teaser": null
      },{
        "title": "Modificar GRUB para incluir otro núcleo para Xen",
        "excerpt":"Adjuntar el fichero de configuración de GRUB con la entrada correspondiente a otro núcleo para Xen diferente al instalado en clase (hipervisor, núcleo e initrd.img en caso necesario)  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/mv2006/doc/Modificar_GRUB_para_incluir_otro_nucleo_para_Xen",
        "teaser": null
      },{
        "title": "Máquinas virtuales para la puesta en marcha de un portal educativo (2006)",
        "excerpt":"Objetivos Uso de máquinas virtuales para el desarrollo del módulo Redes de Área Local y otros módulos orientados a la administración de sistemas informáticos. Puesta en marcha de un portal educativo. Configuración y securización de una infraestructura típica de un portal para un centro educativo (extensible para un entorno real...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/mv2006/index",
        "teaser": null
      },{
        "title": "Curso de OpenShift",
        "excerpt":"En este curso aprenderás a desplegar servicios con OpenShift desde cero y ampliar tus conocimientos sobre Cloud Computing y la capa de Plataforma como Servicio PaaS. Los siguientes contenidos forman parte de un curso que he impartido para OpenWebinars en mayo de 2019. Puedes obtener todo el contenido del curso...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/index.html",
        "teaser": null
      },{
        "title": "Introducción a PaaS",
        "excerpt":"PaaS, acrónimo de Platform as a Service, es un concepto de computación en la nube mediante la cual los usuarios pueden desarrollar, ejecutar y administrar aplicaciones sin preocuparse por la infraestructura que haya por debajo. Al usar PaaS: Los desarrolladores solo tienen que preocuparse por la programación de las aplicaciones....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u01/index.html",
        "teaser": null
      },{
        "title": "Desplegando nuestras aplicaciones en contenedores",
        "excerpt":"Despliegue tradicional de aplicaciones Las aplicaciones tradicionalmente se implementan como un sólo conjunto de librerías y archivos de configuración. Se implementan en un sistema operativo (en servidores físicos o virtuales) con un conjunto se servicios en ejecución (web, base de datos, …). Desventaja 1: Las actualizaciones del S.O. puede interrumpir...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u02/index.html",
        "teaser": null
      },{
        "title": "Introducción a docker",
        "excerpt":"Virtualización ligera: aprovechamos mejor el hardware y únicamente necesitamos el sistema de archivos mínimo para que funcionen los servicios. Los contenedores son autosuficientes, sólo necesitamos una imagen para crear contenedores. Una imagen Docker podríamos entenderla como “un Sistema Operativo con aplicaciones instaladas”. El proyecto nos ofrece es un repositorio de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u03/index.html",
        "teaser": null
      },{
        "title": "Ciclo de vida de nuestras aplicaciones en docker",
        "excerpt":"Paso 1:Desarrollo de nuestra aplicación En este ejemplo vamos a desarrollar una página web que va a ser servida por un servidor web que se ejecutará en un contenedor Docker. Por lo tanto lo primero que debemos hacer es crear nuestra página web: $ cd public_html $ echo \"&lt;h1&gt;Prueba&lt;/h1&gt;\" &gt;...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u04/index.html",
        "teaser": null
      },{
        "title": "Persistencia de la información en docker",
        "excerpt":"Uso de volúmenes persistentes La información que se guarda en un contenedor no es persistente. Los contenedores que implementan aplicaciones Stateful deben guardar los datos en un medio de almacenamiento persistente. Desacoplamos la aplicación de los datos. Con docker podemos gestionar volúmenes de datos, que nos permiten guardar la información...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u05/index.html",
        "teaser": null
      },{
        "title": "Introducción a Kubernetes",
        "excerpt":"Kubernetes es un orquestador de contenedores de aplicación escrito en Go y con licencia Apache-2.0, fue lanzado el 21 de julio de 2015 por Google que rápidamente se alió con la Linux Foundation para crear la Cloud Native Computing Foundation (CNCF) y dejó el proyecto en sus manos. Gestionamos un...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u06/index.html",
        "teaser": null
      },{
        "title": "¿Qué nos aporta Kubernetes?: Tolerancia a fallos,escalabilidad, balanceo de carga",
        "excerpt":"Tolerancia a fallos Creamos un despliegue a partir de la imagen josedom24/aplicacionweb:v1 y comprobamos que se ha creado un pod: kubectl create deployment pagweb --image=josedom24/aplicacionweb:v1 kubectl get pod NAME READY STATUS RESTARTS AGE pagweb-5d756cb86-wm4zg 1/1 Running 0 3m7s Si por cualquier motivo el pod deja de funcionar, comprobamos que Kubernetes...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u07/index.html",
        "teaser": null
      },{
        "title": "¿Qué nos aporta Kubernetes?: Actualizaciones continúas/Roolback y enrutamiento",
        "excerpt":"Actualizaciones continúas Podemos modificar nuestro despliegue para actualizar a la última versión de nuestra aplicación. Comprobamos que se crean 3 nuevos pods con la última versión de nuestra aplicación: kubectl set image deployment pagweb *=josedom24/aplicacionweb:v2 deployment.extensions/pagweb image updated kubectl get pods NAME READY STATUS RESTARTS AGE pagweb-5d756cb86-2w2xq 1/1 Terminating 0...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u08/index.html",
        "teaser": null
      },{
        "title": "Persistencia de información en Kubernetes",
        "excerpt":"Volúmenes persistentes en Kubernetes El administrador del cluster debe crear un recurso PersistentVolumen, donde define el total de almacenamiento disponible en el cluster. Nosotros hemos creado una unidad nfs compartida entre los nodos: kubectl get pv NAME CAPACITY ACCESS MODES RECLAIM POLICY STATUS CLAIM STORAGECLASS REASON AGE nfs-pv 5Gi RWX...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u09/index.html",
        "teaser": null
      },{
        "title": "Introducción a OpenShiht",
        "excerpt":"Plataforma de Desarrollo, con características de Cloud Computing (PaaS) desarrollada por Red Hat Nos centramos en el desarrollo de la aplicación Openshift utiliza internamente Docker y Kubernetes Nos permite desplegar aplicaciones en diferentes entornos (desarrollo, producción,…) Facilita la integración continúa Tenemos varías formas de interactuar con OpenShift: aplicación web, CLI...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u10/index.html",
        "teaser": null
      },{
        "title": "OpenShift Online",
        "excerpt":"Para entrar a OpenShift Online accedemos a la URL: https://manage.openshift.com/. Al acceder, podemos escoger entre varios planes, nosotros vamos a utilizar el plan Starter, que está pensado para aprender y experimentar con OpenShift: Una vez que se ha creado nuestro plan, podemos acceder a la consola web y crear un...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u11/index.html",
        "teaser": null
      },{
        "title": "minishift: Jugando con openshift v3",
        "excerpt":"minishitf es una aplicación que nos ayuda a instalar un cluster de openshift en un único nodo. Por defecto crea una máquina en virtualbox donde realiza la instalación del cluster (de forma muy sencilla también podemos usar kvm). Instalación de minishift Necesitamos un sistema donde tengamos instalado virtualbox (la versión...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u12/index.html",
        "teaser": null
      },{
        "title": "Despliegue de nuestra primera aplicación en OpenShift",
        "excerpt":"Vamos a crear una aplicación web con un servidor web apache2. Nuestra aplicación tendrá ficheros html y php. Nuestra aplicación la tenemos en un repositorio de GitHub (https://github.com/josedom24/html_for_openshift) Vamos a crear nuestra aplicación usando source2image: al crear la aplicación vamos a escoger una imagen con apache2 y php y vamos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u13/index.html",
        "teaser": null
      },{
        "title": "Recursos que nos ofrece OpenShift",
        "excerpt":"Web Console: Aplicación web que nos permite trabajar con nuestros recursos de OpenShift Catálogo de servicios: Conjunto de imágenes y plantillas bases. A partir de ellas podemos construir (builds) nuevas imágenes con s2i. Proyectos: Permiten a los usuarios organizar y controlar sus aplicaciones. Aplicación: Nuestra aplicación es una aplicación Kubernetes,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u14/index.html",
        "teaser": null
      },{
        "title": "Tolerancia a fallos, escalabilidad y balanceado de carga en OpenShift",
        "excerpt":"Tolerancia a fallos Openshift va a asegurar que en todo momento se esté ejecutando nuestra aplicación. Para ello asegura la ejecución de los pods que hayamos indicado para ejecutar la aplicación. Antes de ver un ejemplo de tolerancia a fallos, vamos a señalar algunas funcionalidades que podemos obtener de los...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u15/index.html",
        "teaser": null
      },{
        "title": "Actualizaciones continúas y Rollback de nuestra aplicación en OpenShift",
        "excerpt":"Actualizaciones continúas El ciclo de vida del desarrollo de nuestra aplicación sería el siguiente: Modificamos el código de nuestra aplicación, y guardamos los cambios en el repositorio. Desde openshift realizamos un nuevo build, que construye una nueva imagen con la aplicación modificada. A continuación, de forma automática, se realizará un...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u16/index.html",
        "teaser": null
      },{
        "title": "Despliegue continuo en OpenShift",
        "excerpt":"# El despliegue continúo en OpenShift lo vamos a conseguir con la utilización de un webhook. Lo que queremos conseguir es que cada vez que ocurra un determinado evento en el repositorio github (por ejemplo que hayamos hecho un push y que haya cambiado el contenido), github haga una llamada...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u17/index.html",
        "teaser": null
      },{
        "title": "Autoescalado: Escalado automático en OpenShift",
        "excerpt":"El autoescalado en OpenShift es una característica muy interesante. Con el autoescalado podemos tener un número mínimo de pods de nuestra aplicación y queremos que cuando esa “máquina” llegue a una determinada carga se cree un pod nuevo. Con ello realizamos un escalado horizontal y la carga de peticiones que...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u18/index.html",
        "teaser": null
      },{
        "title": "Introducción a la utilidad de línea de comandos oc",
        "excerpt":"# Hasta ahora hemos manejado los recursos de nuestro cluster utilizando la página web de Openshift Online, pero también tenemos a nuestra disposición un comando CLI (command line interface) oc que podemos usar desde la línea de comandos. Instalación de la utilidad de línea de comandos oc Podemos bajarnos la...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u19/index.html",
        "teaser": null
      },{
        "title": "Despliegue de una aplicación con la utilidad de línea de comandos oc",
        "excerpt":"Una vez que nos hemos conectado a nuestro cluster y hemos creado un proyecto, vamos a crear nuestra aplicación. En este caso, volvemos a desplegar la misma aplicación que en el ejemplo anterior, usando source2image. Para ver todos recursos del catálogo que podemos utilizar: $ oc new-app --list Seguimos los...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u20/index.html",
        "teaser": null
      },{
        "title": "Operaciones avanzadas con la utilidad de línea de comandos oc",
        "excerpt":"Tolerancia a fallos Si borramos un pods, se va a crear inmediatamente otro para que la aplicación siga funcionando: $ oc get pods NAME READY STATUS RESTARTS AGE prueba-1-build 0/1 Completed 0 18m prueba-1-n6lmz 1/1 Running 0 17m $ oc delete pod/prueba-1-n6lmz pod \"prueba-1-n6lmz\" deleted $ oc get pods NAME...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u21/index.html",
        "teaser": null
      },{
        "title": "Despliegue de aplicaciones Python en OpenShift",
        "excerpt":"# Vamos a desplegar una aplicación python que tenemos guardada en el repositorio: https://github.com/josedom24/python_for_openshift Despliegue desde la consola web Para realizar el despliegue seguimos los siguientes pasos desde la consola web: Al crear nuestra aplicación, escogemos en el catálogo la opción de imagen python. Escogemos la versión de python e...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u22/index.html",
        "teaser": null
      },{
        "title": "Despliegue de aplicaciones PHP en OpenShift",
        "excerpt":"Vamos a instalar un CMS PHP que utiliza una base de datos Sqlite (phpSQLiteCMS). Para ello vamos a utilizar el código de la aplicación que se encuentra en el repositorio: https://github.com/ilosuna/phpsqlitecms Despliegue desde la consola web Vamos a seguir los siguientes pasos desde la consola web: Al crear nuestra aplicación,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u23/index.html",
        "teaser": null
      },{
        "title": "Despliegue de aplicaciones PHP en OpenShift con almacenamiento persistente",
        "excerpt":"En este ejemplo vamos a utilizar un volumen (almacenamiento persistente) para guardar las bases de datos de la aplicación (que están guardadas en el directorio /cms/data). Vamos a continuar trabajando donde lo dejamos en la unidad anterior. Estrategia de despliegue En este momento tenemos instalado phpSQLiteCMS pero sin almacenamiento persistente....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u24/index.html",
        "teaser": null
      },{
        "title": "Despliegue de aplicaciones PHP en OpenShift con almacenamiento persistente",
        "excerpt":"Desde Openshift se pueden desplegar aplicaciones con distintas bases de datos: Despliegue de una base de datos mysql sin almacenamiento persistente Lo primero que vamos a hacer es buscar en el catálogo los recursos que podemos desplegar relacionados con mysql: $ oc new-app --search mysql Templates (oc new-app --template=&lt;template&gt;) -----...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u25/index.html",
        "teaser": null
      },{
        "title": "Despliegue de Wordpress en OpenShift",
        "excerpt":"En esta unidad vamos a instalar WordPress, un CMS escrito en PHP, en OpenShift aplicando todos los conocimientos que hemos estudiado en unidades anteriores: Creación de la base de datos Vamos a crear un nuevo proyecto y en ella vamos a crear una aplicación con la base de datos mysql....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u26/index.html",
        "teaser": null
      },{
        "title": "Despliegue de Wordpress con un template en OpenShift",
        "excerpt":"En la unidad anterior, hemos detallamos los pasos necesarios para crear una instancia de WordPress creando todos los recursos paso a paso en openShift. En esta última unidad, le mostraremos una forma mucho más fácil de instalar y ejecutar una nueva instancia de WordPress en OpenShift utilizando una plantilla y...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/openshift/curso/u27/index.html",
        "teaser": null
      },{
        "title": "Curso de introducción a la programación con pseudocódigo",
        "excerpt":"Un algoritmo es un conjunto de acciones que especifican la secuencia de operaciones realizar, en orden, para resolver un problema. El pseudocódigo, nos permite una aproximación del algoritmo al lenguaje natural y por tanto un a redacción rápida del mismo. En este curso se presenta los fundamentos para analizar problemas...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/index.html",
        "teaser": null
      },{
        "title": "Resolución de problemas",
        "excerpt":"Presentación de la unidad ¿Qué es un problema? Un problema es un asunto o un conjunto de cuestiones que se plantean para ser resueltas. La naturaleza de los problemas varía con el ámbito o el contexto: problemas matemáticos, químicos, filosóficos, etc. Es importante que al abordar un problema se tenga...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u01/index.html",
        "teaser": null
      },{
        "title": "Análisis del problema",
        "excerpt":"Presentación de la unidad El primer paso, análisis del problema, requiere un estudio a fondo del problema y de todo lo que hace falta para poder abordarlo. El propósito del análisis de un problema es ayudar al programador (Analista) para llegar a una cierta comprensión de la naturaleza del problema....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u02/index.html",
        "teaser": null
      },{
        "title": "Diseño de algoritmos",
        "excerpt":"Presentación de la unidad A partir de los requerimientos, resultados del análisis, empieza la etapa de diseño donde tenemos que construir un algoritmo que resuelva el problema. Definición de algoritmo Un algoritmo es un conjunto de acciones que especifican la secuencia de operaciones realizar, en orden, para resolver un problema....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u03/index.html",
        "teaser": null
      },{
        "title": "Introducción a PSeInt",
        "excerpt":"PSeInt (PSeudo Intérprete) es un software libre educativo multiplataforma dirigido a personas que se inician en la programación. Ha sido creado por Pablo Novara y nos permite diseñar algoritmos utilizando pseudocódigo y diagramas de flujo. Este programa fue creado como proyecto final para la materia Programación 1 de la carrera...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u04/index.html",
        "teaser": null
      },{
        "title": "Estructura del algoritmo",
        "excerpt":"Opciones del lenguaje (perfiles) El lenguaje que utilizamos para construir el pseudocódigo no es estándar. Podemos añadir o eliminar algunas reglas de sintaxis sin ningún problema. En la opción Configurar-Opciones del Lenguaje (perfiles), podemos escoger las características del pseudocódigo que vamos a utilizar. Tenemos tres alternativas: Escoger un perfil que...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u05/index.html",
        "teaser": null
      },{
        "title": "Tipos de datos simples",
        "excerpt":"El tipo de dato representa la clase de datos con el que vamos a trabajar. Tenemos los siguientes tipos de datos simples: Números enteros: Nos sirve para representar números enteros. Números reales: Nos sirve para representar números reales. Cadenas de caracteres: Nos permite trabaja con cadenas de caracteres. Valores lógicos:...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u06/index.html",
        "teaser": null
      },{
        "title": "Variables",
        "excerpt":"Un variable nos permite almacenar información. Durante el análisis del problema, determinado las variables que vamos a necesitar en nuestro algoritmo (los datos de entrada y la información de salida). Cada variable tiene un nombre y al crearlas hay que indicar el tipo de datos que va a almacenar. Declaración...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u07/index.html",
        "teaser": null
      },{
        "title": "Operadores y expresiones",
        "excerpt":"Expresiones Una expresión es una combinación de variables, literales, operadores, funciones y expresiones, que tras su evaluación o cálculo nos devuelven un valor de un determinado tipo. Veamos ejemplos de expresiones: a + 7 (a ^ 2) + b Operadores aritméticos El valor devuelto por una operación aritmética es un...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u08/index.html",
        "teaser": null
      },{
        "title": "Asignación de variables",
        "excerpt":"Una vez que hemos definido una variable, podemos asignarle un valor con el operador de asignación (&lt;- ó :=). El dato que se guarda en una variable puede estar expresado por un literal, guardado en otra variable o calculado tras operar una expresión. Por ejemplo: var1 &lt;- 7; var2 &lt;-...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u09/index.html",
        "teaser": null
      },{
        "title": "Entrada y salida de información",
        "excerpt":"Entrada de datos Con la instrucción Leer permite asignar un valor a una (o varias) variables leído por teclado. Hay que tener en cuenta las mismas consideraciones que en las asignaciones. Leer &lt;variable1&gt;, &lt;variable2&gt;, ..., &lt;variableN&gt;; Ejemplo: Definir variable como entero; Leer variable; Como diagrama de flujo: Salida de información...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u10/index.html",
        "teaser": null
      },{
        "title": "Otras instrucciones",
        "excerpt":"La instrucción Borrar Pantalla (o Limpiar Pantalla) permite, como su nombre lo indica, borrar la pantalla y colocar el cursor en la esquina superior izquierda. Borrar Pantalla; La instrucción Esperar Tecla detiene su algoritmo hasta que el usuario presione una tecla cualquiera de su teclado. Esperar Tecla; La instrucción Esperar...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u11/index.html",
        "teaser": null
      },{
        "title": "Funciones matemáticas",
        "excerpt":"Una función es un subprograma que resuelve un problema determinado. Las funciones pueden tener parámetros de entrada y suelen devolver un valor de un tipo determinado. En el pseudocódigo que estamos utilizando se pueden utilizar varias funciones matemáticas: rc(número) o raiz(número): devuelve la raíz cuadrada del número. abs(número): Devuelve el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u12/index.html",
        "teaser": null
      },{
        "title": "Funciones de cadenas de texto",
        "excerpt":"El perfil del pseudocódigo con el que estamos trabajando, al igual que muchos lenguajes de programación, enumeran a partir del 0 el índice de cada carácter en la cadena. de esta manera el primer carácter de la cadena está en la posición 0. Para trabajar con cadenas de caracteres también...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u13/index.html",
        "teaser": null
      },{
        "title": "Nuestro primer pseudocódigo completo",
        "excerpt":"Presentación de la unidad Vamos a resolver un problema completo, siguiendo todas las etapas que hemos estudiado del cilo de desarrollo. El enunciado del problema es el siguiente: Queremos saber que porcentaje de hombres y que porcentaje de mujeres hay en un grupo de estudiantes. Análisis Definición del problema: Tenemos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u14/index.html",
        "teaser": null
      },{
        "title": "Ejecución paso a paso",
        "excerpt":"En al opción del menú Ejecutar -&gt; Ejecutar Paso a Paso nos permite realizar un seguimiento más detallado de la ejecución del algoritmo (proceso de depuración o debugging). Es decir, permite observar en tiempo real qué instrucciones y en qué orden se ejecutan, como así también observar el contenido de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u15/index.html",
        "teaser": null
      },{
        "title": "Ejercicios estructura secuencial",
        "excerpt":"Ejercicio 1 Escribir un programa que pregunte al usuario su nombre, y luego lo salude. Ejercicio 2 Calcular el perímetro y área de un rectángulo dada su base y su altura. Ejercicio 3 Dados los catetos de un triángulo rectángulo, calcular su hipotenusa. Ejercicio 4 Dados dos números, mostrar la...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u16/index.html",
        "teaser": null
      },{
        "title": "Estructuras alternativas: si",
        "excerpt":"Alternativa simple: si - finsi Al ejecutarse la instrucción si se evalúa la condición lógica. Si la condición lógica es Verdadera se ejecutan de manera secuencial el bloque de instrucciones Acciones A. Si la condición es Falsa no se ejecuta el bloque de instrucciones. Una vez ejecutado el si (opción...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u17/index.html",
        "teaser": null
      },{
        "title": "Estructuras alternativas: Segun",
        "excerpt":"Alternativa múltiple: Segun La secuencia de instrucciones ejecutada por una instrucción Segun depende del valor de una variable numérica. Segun &lt;variable&gt; Hacer &lt;número1&gt;: &lt;instrucciones&gt; &lt;número2&gt;,&lt;número3&gt;: &lt;instrucciones&gt; &lt;...&gt; [De Otro Modo: &lt;instrucciones&gt;] FinSegun Esta instrucción permite ejecutar opcionalmente varias acciones posibles, dependiendo del valor almacenado en una variable de tipo numérico....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u18/index.html",
        "teaser": null
      },{
        "title": "Ejercicios estructuras alternativas",
        "excerpt":"Ejercicio 1 Algoritmo que pida dos números e indique si el primero es mayor que el segundo o no. Ejercicio 2 Algoritmo que pida un número y diga si es positivo, negativo o 0. Ejercicio 3 Escribe un programa que lea un número e indique si es par o impar....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u19/index.html",
        "teaser": null
      },{
        "title": "Estructuras repetitivas: Mientras",
        "excerpt":"La instrucción Mientras ejecuta una secuencia de instrucciones mientras una condición sea verdadera. Mientras &lt;condición&gt; Hacer &lt;instrucciones&gt; FinMientras Al ejecutarse esta instrucción, la condición es evaluada. Si la condición resulta verdadera, se ejecuta una vez la secuencia de instrucciones que forman el cuerpo del ciclo. Al finalizar la ejecución del...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u20/index.html",
        "teaser": null
      },{
        "title": "Estructuras repetitivas: Repetir - Hasta Que",
        "excerpt":"La instrucción Repetir-Hasta Que ejecuta una secuencia de instrucciones hasta que la condición sea verdadera. Repetir &lt;instrucciones&gt; Hasta Que &lt;condición&gt; Al ejecutarse esta instrucción, la secuencia de instrucciones que forma el cuerpo del ciclo se ejecuta una vez y luego se evalúa la condición. Si la condición es falsa, el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u21/index.html",
        "teaser": null
      },{
        "title": "Estructuras repetitivas: Para",
        "excerpt":"La instrucción Para ejecuta una secuencia de instrucciones un número determinado de veces. Para &lt;variable&gt; &lt;- &lt;inicial&gt; Hasta &lt;final&gt; [Con Paso &lt;paso&gt;] Hacer &lt;instrucciones&gt; FinPara Al ingresar al bloque, la variable &lt;variable&gt; recibe el valor &lt;inicial&gt; y se ejecuta la secuencia de instrucciones que forma el cuerpo del ciclo. Luego...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u22/index.html",
        "teaser": null
      },{
        "title": "Uso específico de variables: contadores, acumuladores e indicadores",
        "excerpt":"Contadores Un contador es una variable entera que la utilizamos para contar cuando ocurre un suceso. Un contador: Se inicializa a un valor inicial. cont &lt;- 0; Se incrementa, cuando ocurre el suceso que estamos contado se le suma 1. cont &lt;- cont + 1; Ejemplo Introducir 5 número y...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u23/index.html",
        "teaser": null
      },{
        "title": "Ejercicios estructuras repetitivas",
        "excerpt":"Ejercicio 1 Crea una aplicación que pida un número y calcule su factorial (El factorial de un número es el producto de todos los enteros entre 1 y el propio número y se representa por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120), Ejercicio 2...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u24/index.html",
        "teaser": null
      },{
        "title": "Ejercicios cadena de caracteres",
        "excerpt":"Ejercicio 1 Escribir por pantalla cada carácter de una cadena introducida por teclado. Ejercicio 2 Realizar un programa que comprueba si una cadena leída por teclado comienza por una subcadena introducida por teclado. Ejercicio 3 Pide una cadena y un carácter por teclado (valida que sea un carácter) y muestra...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u25/index.html",
        "teaser": null
      },{
        "title": "Estructuras de datos: Arreglos (array)",
        "excerpt":"Estructura de datos Hasta ahora, para hacer referencia a un dato utilizábamos una variable. El problema se plantea cuando tenemos gran cantidad de datos que guardan entre sí una relación. No podemos utilizar una variable para cada dato. Para resolver estas dificultades se agrupan los datos en un mismo conjunto,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u26/index.html",
        "teaser": null
      },{
        "title": "Arreglos unidimensionales: Vectores",
        "excerpt":"Un vector es una array unidimensional. Para declarar un vector de 10 enteros: Definir vector como Entero; Dimension vector[10]; Para acceder a cada uno de los elementos del vector utilizamos un índice. el primer elemento se accede con el índice 0. Podemos trabajar individualmente con cada uno de los elementos:...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u27/index.html",
        "teaser": null
      },{
        "title": "Arreglos multidimensionales: Tablas",
        "excerpt":"Una tabla en un array bidimensional. La primera dimensión indica el número de filas y el segundo el número de columnas. Definir tabla como Entero; Dimension tabla[3,4]; Hemos definido una tabla de enteras con 3 filas y 4 columnas, por tanto tenemos 12 elementos. Para acceder a cada uno de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u28/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de arreglos",
        "excerpt":"Ejercicio 1 Realizar un programa que defina un vector llamado “vector_numeros” de 10 enteros, a continuación lo inicialice con valores aleatorios (del 1 al 10) y posteriormente muestre en pantalla cada elemento del vector junto con su cuadrado y su cubo. Ejercicio 2 Crear un vector de 5 elementos de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u29/index.html",
        "teaser": null
      },{
        "title": "Programación estructurada",
        "excerpt":"La programación estructurada es un paradigma de programación orientado a mejorar la claridad, calidad y tiempo de desarrollo de un programa de ordenador o algoritmo, utilizando únicamente subrutinas (funciones o procedimientos) y tres estructuras: secuencia, alternativas y repetitivas. La programación modular es un paradigma de programación que consiste en dividir...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u30/index.html",
        "teaser": null
      },{
        "title": "Funciones  y procedimientos",
        "excerpt":"Partimos del ejemplo anterior de función: Funcion max &lt;- CalcularMaximo(num1,num2) Definir max Como Entero; Si num1&gt;num2 Entonces max &lt;- num1; SiNo max &lt;- num2; FinSi FinFuncion Proceso Maximo Definir numero1,numero2,num_maximo Como Entero; Escribir \"Dime el número1:\"; Leer numero1; Escribir \"Dime el número2:\"; Leer numero2; num_maximo &lt;- CalcularMaximo(numero1,numero2); Escribir \"El máximo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u31/index.html",
        "teaser": null
      },{
        "title": "Funciones recursivas",
        "excerpt":"Una función recursiva es aquella que al ejecutarse hace llamadas a ella misma. Por lo tanto tenemos que tener “un caso base” que hace terminar el bucle de llamadas. Veamos un ejemplo: Funcion fact &lt;- CalcularFactorial(num) Definir fact Como Entero; Si num=0 O num=1 Entonces fact &lt;- 1; SiNo fact...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u32/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de funciones",
        "excerpt":"Ejercicio 1 Crea un procedimiento EscribirCentrado, que reciba como parámetro un texto y lo escriba centrado en pantalla (suponiendo una anchura de 80 columnas; pista: deberás escribir 40 - longitud/2 espacios antes del texto). Además subraya el mensaje utilizando el carácter =. Ejercicio 2 Crea un programa que pida dos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u33/index.html",
        "teaser": null
      },{
        "title": "Más Ejercicios",
        "excerpt":"Ejercicio 1 Realice un programa que pregunte aleatóriamente una multiplicación. El programa debe indicar si la respuesta ha sido correcta o no (en caso que la respuesta sea incorrecta el programa debe indicar cuál es la correcta). El programa preguntará 10 multiplicaciones, y al finalizar mostrará el número de aciertos....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u34/index.html",
        "teaser": null
      },{
        "title": "Introducción a los lenguajes de programación",
        "excerpt":"Presentación de la unidad Sistemas Informáticos Cuando el procesamiento de los datos y la información en un Sistema de Información lo realiza un ordenador lo llamamos Sistema Informático. En un Sistema Informático el algoritmo se describe mediante un programa. Programa: Conjunto ordenado de instrucciones que se dan al ordenador indicándole...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u35/index.html",
        "teaser": null
      },{
        "title": "Programas traductores",
        "excerpt":"Presentación de la unidad Los traductores transforman programas escritos en un lenguaje de alto nivel en programas escritos en código máquina. Podemos indicar distintos tipos: Compiladores Convierte un programa escrito en alto nivel (código fuente) a un programa máquina (código ejecutable). Para generar el código ejecutable el código no debe...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u36/index.html",
        "teaser": null
      },{
        "title": "Compilación y ejecución de un lenguaje compilado: C++",
        "excerpt":"Lo primero que vamos a hacer es escribir el código fuente. Para ello vamos a utilizar un IDE (Entorno de desarrollo integrado) llamado Zinjai utilizando el sistema operativo Linux. El fichero adivina.cpp tendría el siguiente contenido: #include &lt;iostream&gt; #include &lt;cstdlib&gt; using namespace std; int main(int argc, char *argv[]) { int...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u37/index.html",
        "teaser": null
      },{
        "title": "Compilación e interpretación de un programa Java",
        "excerpt":"A la hora de instalar Java tenemos que tener en cuenta que tenemos dos componentes diferentes: Java Runtime Environment (JRE) son el conjunto de aplicaciones que se instalan en un equipo para que puedan ejecutarse en él aplicaciones java. Los dos componentes principales de un JRE son: Java Virtual Machine:...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u38/index.html",
        "teaser": null
      },{
        "title": "Ejecución de programas interpretados con Python",
        "excerpt":"Un Lenguaje interpretado es aquel cuyo código no necesita ser preprocesado mediante un compilador, eso significa que el ordenador es capaz de ejecutar la sucesión de instrucciones dadas por el programador sin necesidad de leer y traducir exhaustivamente todo el código. Por lo tanto necesitamos el código fuentes para ejecutar...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion/curso/u39/index.html",
        "teaser": null
      },{
        "title": "Curso de introducción a la programación con python3",
        "excerpt":"En este curso aprenderás los fundamentos del lenguaje de programación Python 3 desde cero, pensado para no programadores que se quieran iniciar en este mundo. El lenguaje de programación Python es uno de los más valorados por la comunidad de programadores, además de uno de los que más crecen en...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/index.html",
        "teaser": null
      },{
        "title": "Análisis de problemas y diseño de algoritmos",
        "excerpt":"Un programador es una persona que resuelve problemas, y para llegar a ser un programador eficaz se necesita aprender a resolver problemas de un modo riguroso y sistemático: Definición o análisis del problema: consiste en el estudio detallado del problema. Se debe identificar los datos de entrada, de salida y...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u01/index.html",
        "teaser": null
      },{
        "title": "Introducción a los lenguajes de programación",
        "excerpt":"Para que un ordenador realice un proceso, se le debe suministrar en primer lugar un algoritmo adecuado, que llamamos programa. El procesador debe ser capaz de interpretar el algoritmo, lo que significa: Comprender las instrucciones de cada paso. Realizar las operaciones correspondientes. Clasificación de los lenguajes de programación Lenguaje Máquina...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u02/index.html",
        "teaser": null
      },{
        "title": "Introducción a python3",
        "excerpt":"Características de Python Python es un lenguaje: Interpretado Alto nivel Multiparadigma, ya que soporta orientación a objetos, programación imperativa y programación funcional. Multiplataforma Libre ¿Por qué elegir python? Porque es fácil de aprender Sintaxis muy limpia y sencilla Hay que escribir menos Obtienes resultados muy rápido Puedes programar con distintos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u03/index.html",
        "teaser": null
      },{
        "title": "Instalación de python3",
        "excerpt":"La página principal para descargar las distintas versiones es:www.python.org/downloads/. Instalación en Linux Python viene preinstalado de serie en la mayoría de las distribuciones GNU/Linux. Si no tenemos a nuestra disposición paquetes para instalarlo. En Debian 9 Stretch, la versión es la 3.5.3 En Ububtu 18.04 Bionic, la versión es la...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u04/index.html",
        "teaser": null
      },{
        "title": "Escribir y ejecutar programas python",
        "excerpt":"Podemos ejecutar código python de varia maneras: Uso del interprete Al instalar python3 el ejecutable del interprete lo podemos encontrar en /usr/bin/python3 (en debian Stretch). Este directorio por defecto está en el PATH, por lo tanto lo podemos ejecutar directamente en el terminal, para ello ejecutamos: $ python3 Python 3.5.3...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u05/index.html",
        "teaser": null
      },{
        "title": "Mi primer programa en python3",
        "excerpt":"Vamos a escribir nuestro primer programa para estudiar la estructura de un programa en python3. Pseudocódigo El programa que vamos a realizar es el siguiente: Programa que pida la edad y diga si es mayor de edad. Después de realizar el análisis y el diseño realizamos un pseudocódigo como este:...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u06/index.html",
        "teaser": null
      },{
        "title": "Datos y tipos de datos",
        "excerpt":"Literales, variables y expresiones Literales Los literales nos permiten representar valores. Estos valores pueden ser de diferentes tipos, de esta manera tenemos diferentes tipos de literales: Literales numéricos Para representar números enteros utilizamos cifras enteras (Ejemplos: 3, 12, -23). Para los números reales utilizamos un punto para separar la parte...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u07/index.html",
        "teaser": null
      },{
        "title": "Tipos de datos numéricos",
        "excerpt":"Python3 trabaja con varios tipos numéricos, pero en este curso sólo vamos a utilizar dos: Enteros (int): Representan todos los números enteros (positivos, negativos y 0), sin parte decimal. En python3 este tipo no tiene limitación de espacio. Reales (float): Sirve para representar los números reales, tienen una parte decimal...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u08/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos booleano y expresiones lógicas",
        "excerpt":"Tipo booleano El tipo booleano o lógico se considera en python3 como un subtipo del tipo entero. Se puede representar dos valores: verdadero o false (True, False). ¿Qué valores se interpretan como FALSO? Cuando se evalúa una expresión, hay determinados valores que se interpretan como False: False Cualquier número 0....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u09/index.html",
        "teaser": null
      },{
        "title": "Trabajando con variables",
        "excerpt":"Una variables es un identificador que referencia a un valor. No hay que declarar la variable antes de usarla, el tipo de la variable será el mismo que el del valor al que hace referencia. Por lo tanto su tipo puede cambiar en cualquier momento: &gt;&gt;&gt; var = 5 &gt;&gt;&gt;...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u10/index.html",
        "teaser": null
      },{
        "title": "Entrada y salida estándar",
        "excerpt":"Función input Nos permite leer por teclado información. Devuelve una cadena de caracteres y puede tener como argumento una cadena que se muestra en pantalla. Ejemplos &gt;&gt;&gt; nombre=input(\"Nombre:\") Nombre:jose &gt;&gt;&gt; nombre 'jose' &gt;&gt;&gt; edad=int(input(\"Edad:\")) Edad:23 &gt;&gt;&gt; edad 23 Función print Nos permite escribir en la salida estándar. Podemos indicar varios...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u11/index.html",
        "teaser": null
      },{
        "title": "Introducción a las cadenas de caracteres",
        "excerpt":"Las cadenas de caracteres (str): Me permiten guardar secuencias de caracteres. Definición de cadenas Podemos definir una cadena de caracteres de distintas formas: &gt;&gt;&gt; cad1 = \"Hola\" &gt;&gt;&gt; cad2 = '¿Qué tal?' &gt;&gt;&gt; cad3 = '''Hola, que tal?''' Operaciones básicas con cadenas de caracteres Algunas de las operaciones que puedo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u12/index.html",
        "teaser": null
      },{
        "title": "Pasando de pseudocódigo a python3",
        "excerpt":"Antes de empezar hacer ejercicios con la estructura secuencial, vamos a ver como convertimos algunas instrucciones en pseudocódigo a python3: Leer variables por teclado Leer cadenas de caracteres En pseudocódigo: Definir nombre Como Cadena; Escribir \"Dime tu nombre:\"; Leer nombre; En Python3: nombre = input(\"Dime tu nombre:\") Leer números enteros...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u13/index.html",
        "teaser": null
      },{
        "title": "Ejercicios estructura secuencial",
        "excerpt":"Ejercicio 1 Escribir un programa que pregunte al usuario su nombre, y luego lo salude. Ejercicio 2 Calcular el perímetro y área de un rectángulo dada su base y su altura. Ejercicio 3 Dados los catetos de un triángulo rectángulo, calcular su hipotenusa. Ejercicio 4 Dados dos números, mostrar la...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u14/index.html",
        "teaser": null
      },{
        "title": "Estructura de control: Alternativas",
        "excerpt":"Alternativa simple Al ejecutarse la instrucción if se evalúa la condición lógica. Si la condición lógica es True se ejecutan de manera secuencial el bloque de instrucciones . Si la condición es False no se ejecuta el bloque de instrucciones. Una vez ejecutado el if (opción verdadera o falsa) se...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u15/index.html",
        "teaser": null
      },{
        "title": "Ejercicios estructuras alternativas",
        "excerpt":"Ejercicio 1 Algoritmo que pida dos números e indique si el primero es mayor que el segundo o no. Ejercicio 2 Algoritmo que pida un número y diga si es positivo, negativo o 0. Ejercicio 3 Escribe un programa que lea un número e indique si es par o impar....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u16/index.html",
        "teaser": null
      },{
        "title": "Estructuras de control repetitivas: while",
        "excerpt":"La instrucción while ejecuta una secuencia de instrucciones mientras una condición sea verdadera. while &lt;condición&gt;: &lt;instrucciones&gt; Al ejecutarse esta instrucción, la condición es evaluada. Si la condición resulta verdadera, se ejecuta una vez la secuencia de instrucciones que forman el cuerpo del ciclo. Al finalizar la ejecución del cuerpo del...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u17/index.html",
        "teaser": null
      },{
        "title": "Estructuras de control repetitivas: for",
        "excerpt":"La estructura for nos permite recorrer los elementos de una secuencia (lista, tupla, cadena de caracteres,…). sin embargo en esta unidad vamos a a prender a usar for de forma similar a la instrucción Para de pseudocódigo, es decir, ejecutar una secuencia de instrucciones un número determinado de veces, desde...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u18/index.html",
        "teaser": null
      },{
        "title": "Uso específico de variables: contadores, acumuladores e indicadores",
        "excerpt":"Contadores Un contador es una variable entera que la utilizamos para contar cuando ocurre un suceso. Un contador: Se inicializa a un valor inicial. cont = 0; Se incrementa, cuando ocurre el suceso que estamos contado se le suma 1. cont = cont + 1; Otra forma de incrementar el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u19/index.html",
        "teaser": null
      },{
        "title": "Ejercicios estructuras repetitivas",
        "excerpt":"Ejercicio 1 Crea una aplicación que pida un número y calcule su factorial (El factorial de un número es el producto de todos los enteros entre 1 y el propio número y se representa por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120), Ejercicio 2...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u20/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos cadenas de caracteres",
        "excerpt":"Como vimos en una unidad anterior, las cadenas de caracteres (str): Me permiten guardar secuencias de caracteres. Además de las operaciones que ya hemos estudiado: Concatenación: +: El operador + me permite unir datos de tipos secuenciales, en este caso dos cadenas de caracteres. Repetición: *: El operador * me...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u21/index.html",
        "teaser": null
      },{
        "title": "Las cadenas de caracteres son inmutables",
        "excerpt":"Cuando creamos una variable de tipo cadena de caracteres, estamos creando un objeto de la clase str. Una clase especifica lo que podemos guardar en un tipo de datos y las operaciones que pueden realizar, cada vez que creamos una variable de una determinada clase, creamos un objeto, que además...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u22/index.html",
        "teaser": null
      },{
        "title": "Métodos principales de cadenas",
        "excerpt":"Aunque las cadenas de caracteres tiene muchos métodos definidos, vamos a estudiar los más importantes: Métodos de formato capitalize() nos permite devolver la cadena con el primer carácter en mayúsculas. &gt;&gt;&gt; cad = \"hola, como estás?\" &gt;&gt;&gt; print(cad.capitalize()) Hola, como estás? lower() y upper() convierte la cadena de caracteres en...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u23/index.html",
        "teaser": null
      },{
        "title": "Ejercicios cadena de caracteres",
        "excerpt":"Ejercicio 1 Escribir por pantalla cada carácter de una cadena introducida por teclado. Ejercicio 2 Realizar un programa que comprueba si una cadena leída por teclado comienza por una subcadena introducida por teclado. Ejercicio 3 Pide una cadena y un carácter por teclado (valida que sea un carácter) y muestra...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u24/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos secuencia: listas",
        "excerpt":"Si queremos guardar un conjunto de valores, en pseudocódigo utilizamos loas arreglos. Un array (o arreglo) es una estructura de datos con elementos homogéneos, del mismo tipo, numérico o alfanumérico, reconocidos por un nombre en común. Hay muchos lenguajes que implementan los arrays, pero esta estructura tiene dos limitaciones: son...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u25/index.html",
        "teaser": null
      },{
        "title": "Las listas son mutables",
        "excerpt":"Al igual que las cadenas el tipo de datos lista es una clase, cada vez que creamos una variable de la clase lista estamos creando un objeto que además de guardar un conjunto de datos, posee un conjunto de métodos que nos permiten trabajar con la lista. ¿Qué significa que...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u26/index.html",
        "teaser": null
      },{
        "title": "Métodos principales de listas",
        "excerpt":"Métodos de inserción: append, extend, insert append(): añade un elemento a la lista: &gt;&gt;&gt; lista = [1,2,3] &gt;&gt;&gt; lista.append(4) &gt;&gt;&gt; lista [1, 2, 3, 4] extend(): Une dos listas: &gt;&gt;&gt; lista2 = [5,6] &gt;&gt;&gt; lista.extend(lista2) &gt;&gt;&gt; lista [1, 2, 3, 4, 5, 6] insert(): Añade un elemento en un posición...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u27/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos secuencia: Tuplas",
        "excerpt":"Las tuplas (tuple): Sirven para los mismo que las listas (me permiten guardar un conjunto de datos que se pueden repetir y que pueden ser de distintos tipos), pero en este caso es un tipo inmutable. Construcción de una tupla Para crear una lista puedo usar los caracteres ( y...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u28/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de listas",
        "excerpt":"Ejercicio 1 Realizar un programa que inicialice una lista con 10 valores aleatorios (del 1 al 10) y posteriormente muestre en pantalla cada elemento de la lista junto con su cuadrado y su cubo. Ejercicio 2 Crea una lista e inicializala con 5 cadenas de caracteres leídas por teclado. Copia...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u29/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos mapa: diccionario",
        "excerpt":"Los diccionarios son tipos de datos que nos permiten guardar valores, a los que se puede acceder por medio de una clave (una cadena de caracteres o un número). Son tipos de datos mutables y los campos no tienen asignado orden. Definición de diccionarios. &gt;&gt;&gt; dicccionario = {'one': 1, 'two':...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u30/index.html",
        "teaser": null
      },{
        "title": "Métodos principales de diccionarios",
        "excerpt":"Métodos de eliminación clear(): Elimina los elementos de un diccionario. &gt;&gt;&gt; dict1 = {'one': 1, 'two': 2, 'three': 3} &gt;&gt;&gt; dict1.clear() &gt;&gt;&gt; dict1 {} Métodos de agregado y creación copy(): Como hemos explicado anteriormente nos permite copiar diccionarios. &gt;&gt;&gt; dict1 = {'one': 1, 'two': 2, 'three': 3} &gt;&gt;&gt; dict2 =...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u31/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de diccionarios",
        "excerpt":"Ejercicio 1 Escribe un programa python que pida un número por teclado y que cree un diccionario cuyas claves sean desde el número 1 hasta el número indicado, y los valores sean los cuadrados de las claves. Ejercicio 2 Escribe un programa que lea una cadena y devuelva un diccionario...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u32/index.html",
        "teaser": null
      },{
        "title": "Excepciones",
        "excerpt":"Errores sintácticos y errores de ejecución Los errores sintácticos se producen cuando tenemos algo mal escrito en nuestro código fuente. Veamos un ejemplo de error sintáctico: &gt;&gt;&gt; while True print('Hello world') File \"&lt;stdin&gt;\", line 1 while True print('Hello world') ^ SyntaxError: invalid syntax Una excepción o un error de ejecución...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u33/index.html",
        "teaser": null
      },{
        "title": "Introducción a los módulos",
        "excerpt":"Módulo: Cada uno de los ficheros .py que nosotros creamos se llama módulo. Los elementos creados en un módulo (funciones, clases, …) se pueden importar para ser utilizados en otro módulo. El nombre que vamos a utilizar para importar un módulo es el nombre del fichero. Python tiene sus propios...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u34/index.html",
        "teaser": null
      },{
        "title": "Introducción a las funciones",
        "excerpt":"Introducción a la programación estructurada y modular La programación estructurada es un paradigma de programación orientado a mejorar la claridad, calidad y tiempo de desarrollo de un programa de ordenador, utilizando únicamente subrutinas (funciones o procedimientos) y tres estructuras: secuencia, alternativas y repetitivas. La programación modular es un paradigma de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u35/index.html",
        "teaser": null
      },{
        "title": "Funciones recursivas",
        "excerpt":"En la unidad anterior hemos visto como crear una función para calcular el factorial de un número: Veamos un ejemplo de definición de función: &gt;&gt;&gt; def factorial(n): ... \"\"\"Calcula el factorial de un número\"\"\" ... resultado = 1 ... for i in range(1,n+1): ... resultado*=i ... return resultado El factorial...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u36/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de funciones",
        "excerpt":"Ejercicio 1 Crea un función EscribirCentrado, que reciba como parámetro un texto y lo escriba centrado en pantalla (suponiendo una anchura de 80 columnas; pista: deberás escribir 40 - longitud/2 espacios antes del texto). Además subraya el mensaje utilizando el carácter =. Ejercicio 2 Crea un programa que pida dos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u37/index.html",
        "teaser": null
      },{
        "title": "Más Ejercicios",
        "excerpt":"Ejercicio 1 Realice un programa que pregunte aleatoriamente una multiplicación. El programa debe indicar si la respuesta ha sido correcta o no (en caso que la respuesta sea incorrecta el programa debe indicar cuál es la correcta). El programa preguntará 10 multiplicaciones, y al finalizar mostrará el número de aciertos....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u38/index.html",
        "teaser": null
      },{
        "title": "Más Ejercicios",
        "excerpt":"La Programación Orientado a Objetos (POO) se basa en la agrupación de objetos de distintas clases que interactúan entre sí y que, en conjunto, consiguen que un programa cumpla su propósito. En Python cualquier elemento del lenguaje pertenece a una clase y todas las clases tienen el mismo rango y...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u39/index.html",
        "teaser": null
      },{
        "title": "Encapsulamiento en la programación orientada a objetos",
        "excerpt":"En la unidad anterior terminamos viendo que teníamos la posibilidad de cambiar los valores de los atributos de un objeto. En muchas ocasiones es necesario que esta modificación no se haga directamente, sino que tengamos utilizar un método para realizar la modificación y poder controlar esa operación. También puede ser...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u40/index.html",
        "teaser": null
      },{
        "title": "Herencia y delegación",
        "excerpt":"Herencia La herencia es un mecanismo de la programación orientada a objetos que sirve para crear clases nuevas a partir de clases preexistentes. Se toman (heredan) atributos y métodos de las clases bases y se los modifica para modelar una nueva situación. La clase desde la que se hereda se...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u41/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de programación orientada a objetos",
        "excerpt":"Ejercicio 1 Vamos a crear una clase llamada Persona. Sus atributos son: nombre, edad y DNI. Construye los siguientes métodos para la clase: Un constructor, donde los datos pueden estar vacíos. Los setters y getters para cada uno de los atributos. Hay que validar las entradas de datos. mostrar(): Muestra...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/programacion_python3/curso/u42/index.html",
        "teaser": null
      },{
        "title": "Curso: Introducción a python3",
        "excerpt":"Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en una sintaxis que favorezca un código legible. Se trata de un lenguaje de programación multiparadigma, ya que soporta orientación a objetos, programación imperativa y, en menor medida, programación funcional. Es un lenguaje interpretado, usa tipado dinámico y es...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/index.html",
        "teaser": null
      },{
        "title": "Introducción a python",
        "excerpt":"Presentación de la unidad Características de Python Python es un lenguaje: Intrepetado Alto nivel Multiparadigma, ya que soporta orientación a objetos, programación imperativa y programación funcional. Multipltaforma Libre ¿Por qué elegir python? Porque es fácil de aprender Sintaxis muy limpia y sencilla Hay que escribir menos Obtienes resultados muy rápido...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u01/index.html",
        "teaser": null
      },{
        "title": "Python2 us Python3",
        "excerpt":"Presentación de la unidad python 2.x y python 3.x La ultima versión 2.x fue la 2.7 de 2010, contando con soporte hasta el final de su vida útil. No está en desarrollo. La versión 3.x está bajo desarrollo activo, la última versión 3.6 salió el 23 de diciembre de 2016....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u02/index.html",
        "teaser": null
      },{
        "title": "Instalación de python3 ",
        "excerpt":"Presentación de la unidad La página principal para descargar las distintas versiones es:www.python.org/downloads/. Instalación en Linux Python viene preinstalado de serie en la mayoría de las distribuciones GNU/Linux. Si no tenemos a nuestra disposición paquetes para instalarlo. En Debian 8 Jessie, la versión por defecto es la 3.4.2 En Debian...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u03/index.html",
        "teaser": null
      },{
        "title": "Entornos de desarrollos y editores de texto",
        "excerpt":"Presentación de la unidad Una decisión importante que debes tomar cuando empiezas a trabajar en informática es acerca del editor o editores de texto que vas a utilizar. Hay muchas opciones y aspectos a considerar. Además en determinadas entornos es posible que no sea suficiente con utilizar un simple editor...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u04/index.html",
        "teaser": null
      },{
        "title": "Mi primer programa en python3",
        "excerpt":"Presentación de la unidad La documentación de este curso esta escrita usando la distribución GNU/Linux Debian Jessie. Algunas particularidades pueden cambiar en otras versiones, distribuciones o sistemas operativos. Uso del interprete Al instalar python3 el ejecutable del interprete lo podemos encontrar en /usr/bin/python3. Este directorio por defecto está en el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u05/index.html",
        "teaser": null
      },{
        "title": "Estructura del programa",
        "excerpt":"Presentación de la unidad Un programa python está formado por instrucciones que acaban en un caracter de “salto de línea”. El punto y coma “;” se puede usar para separar varias sentencias en una misma línea, pero no se aconseja su uso. Una línea empiza en la primera posición, si...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u06/index.html",
        "teaser": null
      },{
        "title": "Funciones y constantes predefinidas",
        "excerpt":"Presentación de la unidad Funciones predefinidas Tenemos una serie de funciones predefinidas en python3: abs() dict() help() min() setattr() all() dir() hex() next() slice() any() divmod() id() object() sorted() ascii() enumerate() input() oct() staticmethod() bin() eval() int() open() str() bool() exec() isinstance() ord() sum() bytearray() filter() issubclass() pow() super() bytes()...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u07/index.html",
        "teaser": null
      },{
        "title": "Datos",
        "excerpt":"Presentación de la unidad Literales, variables y expresiones Literales Los literales nos permiten representar valores. Estos valores pueden ser de diferentes tipos, de esta manera tenemos diferentes tipos de literales: Literales numéricos Para representar números enteros utilizamos cifras enteras (Ejemplos: 3, 12, -23). Si queremos representarlos de forma binaria comenzaremos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u08/index.html",
        "teaser": null
      },{
        "title": "Tipos de datos",
        "excerpt":"Presentación de la unidad Podemos concretar aún más los tipos de datos (o clases) de los objetos que manejamos en el lenguaje: Tipos númericos Tipo entero (int) Tipo real (float) Tipo numérico (complex) Tipos booleanos (bool) Tipo de datos secuencia Tipo lista (list) Tipo tuplas (tuple) Tipo rango (range) Tipo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u09/index.html",
        "teaser": null
      },{
        "title": "Trabajando con variables",
        "excerpt":"Presentación de la unidad Como hemos indicado anteriormente las variables en python no se declaran, se determina su tipo en tiempo de ejecución empleando una técnica que se lama tipado dinámico. ¿Qué es el tipado dinámico? En python cuando asignamos una variable, se crea una referencia (puntero) al objeto creado,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u10/index.html",
        "teaser": null
      },{
        "title": "Entrada y salida estándar",
        "excerpt":"Presentación de la unidad Función input No permite leer por teclado información. Devuelve una cadena de caracteres y puede tener como argumento una cadena que se muestra en pantalla. Ejemplos &gt;&gt;&gt; nombre=input(\"Nombre:\") Nombre:jose &gt;&gt;&gt; nombre 'jose' &gt;&gt;&gt; edad=int(input(\"Edad:\")) Edad:23 &gt;&gt;&gt; edad 23 Función print No permite escribir en la salida...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u11/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos numéricos",
        "excerpt":"Presentación de la unidad Python3 trabaja con tres tipos numéricos: Enteros (int): Representan todos los números enteros (positivos, negativos y 0), sin parte decimal. En python3 este tipo no tiene limitación de espacio. Reales (float): Sirve para representar los números reales, tienen una parte decimal y otra decimal. Normalmente se...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u12/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos booleanos",
        "excerpt":"Presentación de la unidad Tipo booleano El tipo booleano o lógico se considera en python3 como un subtipo del tipo entero. Se puede representar dos valores: verdadero o false (True, False). ¿Qué valores se interpretan como FALSO? Cuando se evalua una expresión, hay determinados valores que se interpretan como False:...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u13/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de programas sencillos",
        "excerpt":"Escribir un programa que pregunte al usuario su nombre, y luego lo salude. Solución #!/usr/bin/env python nombre=input(\"Dime tu nombre:\") print (\"Hola %s\" % nombre) Calcular el perímetro y área de un rectángulo dada su base y su altura. Solución #!/usr/bin/env python base=float(input(\"Dime la base:\")) altura=float(input(\"Dime la altura:\")) perimetro = 2*base...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u14/index.html",
        "teaser": null
      },{
        "title": "Estructura de control: Alternativas",
        "excerpt":"Presentación de la unidad Si al evaluar la expresión lógica obtenermos el resultado True ejecuta un bloque de instrucciones, en otro caso ejecuta otro bloque. Alternativas simples if numero&lt;0: print(\"Número es negativo\") Alternativas dobles if numero&lt;0: print(\"Número es negativo\") else: print(\"Número es positivo\") Alternativas múltiples if numero&gt;0: print(\"Número es negativo\")...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u15/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de alternativas",
        "excerpt":"Realiza un programa que pida dos números ‘a’ y ‘b’ e indique si su suma es positiva, negativa o cero. Solución #!/usr/bin/env python num1=int(input(\"Número 1:\")) num2=int(input(\"Número 2:\")) if num1+num2&gt;0: print(\"Suma positiva\") elif num1+num2&lt;0: print(\"Suma negativa\") else: print(\"Suma es 0\") Escribe un programa que lea un número e indique si es...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u16/index.html",
        "teaser": null
      },{
        "title": "Estructura de control: Repetitivas",
        "excerpt":"Presentación de la unidad while La estructura while nos permite repetir un bloque de instrucciones mientras al evaluar una expresión lógica nos devuelve True. Puede tener una estructura else que se ejecutará al terminar el bucle. Ejemplo año = 2001 while año &lt;= 2017: print (\"Informes del Año\", año) año...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u17/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de repetitivas",
        "excerpt":"Pedir un número por teclado y mostrar la tabla de multiplicar Solución con while #!/usr/bin/env python numero = int(input(\"Número:\")) cont = 1 while (cont&lt;11): print (\"%d * %d = %d\" % (cont, numero, cont * numero)) cont += 1 Solución con for #!/usr/bin/env python numero = int(input(\"Número:\")) for cont in...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u18/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos secuencia",
        "excerpt":"Presentación de la unidad Los tipos de datos secuencia me permiten guardar una sucesión de datos de diferentes tipos. Los tipos de datos secuencias en python son: Las listas (list): Me permiten guardar un conjunto de datos que se pueden repetir y que pueden ser de distintos tipos. Es un...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u19/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos secuencia: listas",
        "excerpt":"Presentación de la unidad Las listas (list) me permiten guardar un conjunto de datos que se pueden repetir y que pueden ser de distintos tipos. Es un tipo mutable. Construcción de una lista Para crear una lista puedo usar varias formas: Con los caracteres [ y ]: &gt;&gt;&gt; lista1 =...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u20/index.html",
        "teaser": null
      },{
        "title": "Métodos principales de listas",
        "excerpt":"Presentación de la unidad Cuando creamos una lista estamos creando un objeto de la clase list, que tiene definido un conjunto de métodos: lista.append lista.copy lista.extend lista.insert lista.remove lista.sort lista.clear lista.count lista.index lista.pop lista.reverse Métodos de inserción: append, extend, insert &gt;&gt;&gt; lista = [1,2,3] &gt;&gt;&gt; lista.append(4) &gt;&gt;&gt; lista [1, 2,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u21/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de listas",
        "excerpt":"Lee por teclado números y guardalo en una lista, el proceso finaliza cuando metamos un número negativo. Muestra el máximo de los números guardado en la lista, muestra los números pares. Solución #!/usr/bin/env python num=int(input(\"Número:\")) lista=[] while num&gt;0: lista.append(num) num=int(input(\"Número:\")) print(\"Maáximo: %d\" % max(lista)) for n in lista: if n...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u22/index.html",
        "teaser": null
      },{
        "title": "Operaciones avanzadas con secuencias",
        "excerpt":"Presentación de la unidad Las funciones que vamos a estudiar en esta unidad nos acercan al paradigna de la programación funcional que también nos ofrece python. La programación funcional es un paradigma de programación declarativa basado en el uso de funciones matemáticas, en contraste con la programación imperativa, que enfatiza...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u23/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos secuencia: Tuplas",
        "excerpt":"Las tuplas (tuple): Sirven para los mismo que las listas (me permiten guardar un conjunto de datos que se pueden repetir y que pueden ser de distintos tipos), pero en este caso es un tipo inmutable. Construcción de una tupla Para crear una lista puedo usar varias formas: Con los...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u24/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos secuencia: Rangos",
        "excerpt":"Los rangos (range): Es un tipo de secuencias que nos permite crear secuencias de números. Es un tipo inmutable y se suelen utilizar para realizar bucles. Definición de un rango. Constructor range Al crear un rango (secuencia de números) obtenemos un objeto que es de la clase range: &gt;&gt;&gt; rango...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u25/index.html",
        "teaser": null
      },{
        "title": "Codificación de caracteres",
        "excerpt":"Introducción a la codificación de caracteres ascii En los principios de la informática los ordenadores se diseñaron para utilizar sólo caracteres ingleses, por lo tanto se creó una codificación de caracteres, llamada ascii (American Standard Code for Information Interchange) que utiliza 7 bits para codificar los 128 caracteres necesarios en...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u26/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos cadenas de caracteres",
        "excerpt":"Las cadenas de caracteres (str): Me permiten guardar secuencias de caracteres. Es un tipo inmutable. Como hemos comentado las cadenas de caracteres en python3 están codificada con Unicode. Definición de cadenas. Constructor str Podemos definir una cadena de caracteres de distintas formas: &gt;&gt;&gt; cad1 = \"Hola\" &gt;&gt;&gt; cad2 = '¿Qué...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u27/index.html",
        "teaser": null
      },{
        "title": "Métodos principales de cadenas",
        "excerpt":"Cuando creamos una cadena de caracteres estamos creando un objeto de la clase str, que tiene definido un conjunto de métodos: cadena.capitalize cadena.isalnum cadena.join cadena.rsplit cadena.casefold cadena.isalpha cadena.ljust cadena.rstrip cadena.center cadena.isdecimal cadena.lower cadena.split cadena.count cadena.isdigit cadena.lstrip cadena.splitlines cadena.encode cadena.isidentifier cadena.maketrans cadena.startswith cadena.endswith cadena.islower cadena.partition cadena.strip cadena.expandtabs cadena.isnumeric cadena.replace cadena.swapcase cadena.find...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u28/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de cadenas",
        "excerpt":"Crear un programa que lea por teclado una cadena y un carácter, e inserte el carácter entre cada letra de la cadena. Ej: separar y , debería devolver s,e,p,a,r,a,r Solución #!/usr/bin/env python cadena=input(\"Cadena:\") caracter=input(\"Carácter:\") print(caracter.join(cadena)) Crear un programa que lea por teclado una cadena y un carácter, y reemplace todos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u29/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos binarios: bytes, bytearray",
        "excerpt":"Bytes El tipo bytes es una secuencia inmutable de bytes. Solo admiten caracteres ASCII. También se pueden representar los bytes mediante números enteros cuyo valores deben cumplir 0 &lt;= x &lt; 256. Definición de bytes. Constructor bytes Podemos definir un tipo bytes de distintas formas: &gt;&gt;&gt; byte1 = b\"Hola\" &gt;&gt;&gt;...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u30/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos conjuntos: set, frozenset",
        "excerpt":"set Los conjuntos (set): Me permiten guardar conjuntos (desornedos) de datos (a los que se puede calcular una función hash), en los que no existen repeticiones. Es un tipo de datos mutable. Normalmente se usan para comprobar si existe un elemento en el conjunto, eliminar duplicados y cálculos matématicos, como...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u31/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos: iterador y generador",
        "excerpt":"Iterador Un objeto iterable es aquel que puede devolver un iterador. Normalmente las colecciones que hemos estudiados son iterables. Un iterador me permite recorrer los elementos del objeto iterable. Definición de iterador. Constructor iter &gt;&gt;&gt; iter1 = iter([1,2,3]) &gt;&gt;&gt; type(iter1) &lt;class 'list_iterator'&gt; &gt;&gt;&gt; iter2 = iter(\"hola\") &gt;&gt;&gt; type(iter2) &lt;class 'str_iterator'&gt;...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u32/index.html",
        "teaser": null
      },{
        "title": "Tipo de datos mapa: diccionario",
        "excerpt":"Los diccionarios son tipos de datos que nos permiten guardar valores, a los que se puede acceder por medio de una clave. Son tipos de datos mutables y los campos no tienen asignado orden. Definición de diccionarios. Constructor dict &gt;&gt;&gt; a = dict(one=1, two=2, three=3) &gt;&gt;&gt; b = {'one': 1,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u33/index.html",
        "teaser": null
      },{
        "title": "Métodos principales de diccionarios",
        "excerpt":"dict1.clear dict1.get dict1.pop dict1.update dict1.copy dict1.items dict1.popitem dict1.values dict1.fromkeys dict1.keys dict1.setdefault Métodos de eliminación: clear &gt;&gt;&gt; dict1 = dict(one=1, two=2, three=3) &gt;&gt;&gt; dict1.clear() &gt;&gt;&gt; dict1 {} Métodos de agregado y creación: copy, dict.fromkeys, update, setdefault &gt;&gt;&gt; dict1 = dict(one=1, two=2, three=3) &gt;&gt;&gt; dict2 = dict1.copy() &gt;&gt;&gt; dict.fromkeys([\"one\",\"two\",\"three\"]) {'one': None, 'two':...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u34/index.html",
        "teaser": null
      },{
        "title": "Ejercicios de diccionarios",
        "excerpt":"Escribe un programa que lea una cadena y devuelva un diccionario con la cantidad de apariciones de cada palabra en la cadena. Por ejemplo, si recibe “Qué lindo día que hace hoy” debe devolver: ‘que’: 2, ‘lindo’: 1, ‘día’: 1, ‘hace’: 1, ‘hoy’: 1 Solución #!/usr/bin/env python dict = {}...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u35/index.html",
        "teaser": null
      },{
        "title": "Lectura y escritura de ficheros de textos",
        "excerpt":"Función open() La función open() se utiliza normalmente con dos parámetros (fichero con el que vamos a trabajar y modo de acceso) y nos devuelve un objeto de tipo fichero. &gt;&gt;&gt; f = open(\"ejemplo.txt\",\"w\") &gt;&gt;&gt; type(f) &lt;class '_io.TextIOWrapper'&gt; &gt;&gt;&gt; f.close() Modos de acceso Los modos que podemos indicar son los...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u36/index.html",
        "teaser": null
      },{
        "title": "Gestionar ficheros CSV",
        "excerpt":"Módulo CSV El módulo cvs nos permite trabajar con ficheros CSV. Un fichero CSV (comma-separated values) son un tipo de documento en formato abierto sencillo para representar datos en forma de tabla, en las que las columnas se separan por comas (o por otro carácter). Leer ficheros CSV Para leer...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u37/index.html",
        "teaser": null
      },{
        "title": "Gestionar ficheros json",
        "excerpt":"El módulo json nos permite gestionar ficheros con formato JSON (JavaScript Object Notation). La correspondecia entre JSON y Python la podemos resumir en la siguiente tabla: JSONPython objectdict arraylist stringstr number (int)int number (real)float trueTrue falseFalse nullNone Leer ficheros json Desde una cadena de caracteres: &gt;&gt;&gt; import json &gt;&gt;&gt; datos_json='{\"nombre\":\"carlos\",\"edad\":23}'...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u38/index.html",
        "teaser": null
      },{
        "title": "Excepciones",
        "excerpt":"Errores sintácticos y errores de ejecución Veamos un ejemplo de error sintáctico: &gt;&gt;&gt; while True print('Hello world') File \"&lt;stdin&gt;\", line 1 while True print('Hello world') ^ SyntaxError: invalid syntax Una excepción o un error de ejecución se produce durante la ejecución del programa. Las excepciones se puede manejar para que...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u39/index.html",
        "teaser": null
      },{
        "title": "Módulos y paquetes",
        "excerpt":"Módulo: Cada uno de los ficheros .py que nosotros creamos se llama módulo. Los elementos creados en un módulo (funciones, clases, …) se pueden importar para ser utilizados en otro módulo. El nombre que vamos a utilizar para importar un módulo es el nombre del fichero. Paquete: Para estructurar nuestros...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u40/index.html",
        "teaser": null
      },{
        "title": "Módulos estándares: módulos de sistema",
        "excerpt":"Python tiene sus propios módulos, los cuales forman parte de su librería de módulos estándar, que también pueden ser importados. En esta unidad vamos a estudiar las funciones porincipales de módulos realacionados con el sistema operativo. Módulo os El módulo os nos permite acceder a funcionalidades dependientes del Sistema Operativo....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u41/index.html",
        "teaser": null
      },{
        "title": "Módulos estándares: módulos matemáticos",
        "excerpt":"Módulo math El módulo math nos proporciones distintas funciones y operaciones matemáticas. &gt;&gt;&gt; import math &gt;&gt;&gt; math.factorial(5) 120 &gt;&gt;&gt; math.pow(2,3) 8.0 &gt;&gt;&gt; math.sqrt(7) 2.6457513110645907 &gt;&gt;&gt; math.cos(1) 0.5403023058681398 &gt;&gt;&gt; math.pi 3.141592653589793 &gt;&gt;&gt; math.log(10) 2.302585092994046 Módulo fractions El módulo fractions nos permite trabajar con fracciones. &gt;&gt;&gt; from fractions import Fraction &gt;&gt;&gt; a=Fraction(2,3)...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u42/index.html",
        "teaser": null
      },{
        "title": "Módulos estándares: módulos de hora y fechas",
        "excerpt":"Módulo time El tiempo es medido como un número real que representa los segundos transcurridos desde el 1 de enero de 1970. Por lo tanto es imposible representar fechas anteriores a esta y fechas a partir de 2038 (tamaño del float en la lubraría C (32 bits)). &gt;&gt;&gt; import time...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u43/index.html",
        "teaser": null
      },{
        "title": "Instalación de módulos",
        "excerpt":"Python posse una activa comunidad de desarrolladores y usuarios que desarrollan toanto los módulos estándar de python, como módulos y paquetes desarolados por terceros. PyPI y pip El Python Package Index o PyPI, es el repositorio de paquetes de software oficial para aplicaciones de terceros en el lenguaje de programación...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u44/index.html",
        "teaser": null
      },{
        "title": "Introducción a las funciones",
        "excerpt":"Introducción a la programación estructurada y modular La programación estructurada es un paradigma de programación orientado a mejorar la claridad, calidad y tiempo de desarrollo de un programa de ordenador, utilizando únicamente subrutinas (funciones o procedimientos) y tres estructuras: secuencia, alternativas y repetitivas. La programación modular es un paradigma de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u45/index.html",
        "teaser": null
      },{
        "title": "Conceptos avanzados sobre funciones",
        "excerpt":"Tipos de argumentos: posicionales o keyword Tenemos dos tipos de parámetros: los posiciónales donde el parámetro real debe coincidir en posición con el parámetro formal: &gt;&gt;&gt; def sumar(n1,n2): ... return n1+n2 ... &gt;&gt;&gt; sumar(5,7) 12 &gt;&gt;&gt; sumar(4) Traceback (most recent call last): File \"&lt;stdin&gt;\", line 1, in &lt;module&gt; TypeError: sumar()...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u46/index.html",
        "teaser": null
      },{
        "title": "Tipos especiales de funciones",
        "excerpt":"Funciones recursivas Una función recursiva es aquella que al ejecutarse hace llamadas a ella misma. Por lo tento tenemos que tener “un caso base” que hace terminar el bucle de llamadas. Veamos un ejemplo: &gt;&gt;&gt; def factorial(numero): ... if(numero == 0 or numero == 1): ... return 1 ... else:...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u47/index.html",
        "teaser": null
      },{
        "title": "Ejercicios con funciones",
        "excerpt":"Escribir dos funciones que permitan calcular: La cantidad de segundos en un tiempo dado en horas, minutos y segundos. La cantidad de horas, minutos y segundos de un tiempo dado en segundos. Solución #!/usr/bin/env python def calcular_segundos(horas,minutos,segundos): return horas*3600+minutos*60+segundos def calcular_horas(segundos): horas = segundos // 3600 segundos-=horas*3600 minutos = segundos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u48/index.html",
        "teaser": null
      },{
        "title": "Programación estructurada y modular: Ejemplo completo",
        "excerpt":"Partiendo del fichero csv liga.csv con los resultados de las jornadas de liga 2015-2016, realizar un programa que muestre la tabla de clasificación al final de la liga, en el que debe aparece el orden que ha quedado cada equipo, los partidos ganados, los empatados y perdidos, y por último...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u49/index.html",
        "teaser": null
      },{
        "title": "Programación orientada a objetos",
        "excerpt":"Introducción a la Programación Orientada a Objetos La Programación Orientado a Objetos (POO) se basa en la agrupación de objetos de distintas clases que interactúan entre sí y que, en conjunto, consiguen que un programa cumpla su propósito. En Python cualquier elemento del lenguaje pertenece a una clase y todas...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u50/index.html",
        "teaser": null
      },{
        "title": "Conceptos avanzados de programación orientada a objetos I",
        "excerpt":"Atributos de clase (estáticas) En Python, las variables definidas dentro de una clase, pero no dentro de un método, son llamadas variables estáticas o de clase. Estas variables son compartidas por todos los objetos de la clase. Para acceder a una variable de clase podemos hacerlo escribiendo el nombre de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u51/index.html",
        "teaser": null
      },{
        "title": "Conceptos avanzados de programación orientada a objetos II",
        "excerpt":"Propiedades: getters, setters, deleter Para implementar la encapsulación y no permitir el acceso directo a los atributos, podemos poner los atributos ocultos y declarar métodos especificos para acceder y modificar los atributos (mutadores). Estos métodos se denominan getters y setters. class circulo(): def __init__(self,radio): self.set_radio(radio) def set_radio(self,radio): if radio&gt;=0: self._radio...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u52/index.html",
        "teaser": null
      },{
        "title": "Polimorfismo, herencia y delegación",
        "excerpt":"Polimorfismo El polimorfismo es la técnica que nos posibilita que al invocar un determinado método de un objeto, podrán obtenerse distintos resultados según la clase del objeto. Esto se debe a que distintos objetos pueden tener un método con un mismo nombre, pero que realice distintas operaciones. Lo llevamos usando...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u53/index.html",
        "teaser": null
      },{
        "title": "Programación orientadas a objetos: Ejemplo completo",
        "excerpt":"Vamos a realizar la clase DNI donde vamos a guardar el número de DNI (lo vamos a guardar en una cadena de longitud 8) y la letra correspondiente. Vamos a crear el constructor, que recibe el número de DNI y calcula automáticamente la letra. Crearemos también los métodos seters y...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/python3/curso/u54/index.html",
        "teaser": null
      },{
        "title": "Actividad no presencial",
        "excerpt":"Sube un archivo comprimido con todos los ficheros que estimes oportunos, donde se muestre la realización de la tarea elegida.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Actividad_no_presencial",
        "teaser": null
      },{
        "title": "Alias y redirecciones",
        "excerpt":"Alias Cuando se define un alias para un determinado usuario se redirige el correo que llegue a otro usuario de la misma máquina. Los alias de correo se utilizan principalmente para gestionar el correo de las “cuentas de administración” y se definen en el fichero /etc/aliases, que tiene el siguiente...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Alias_y_redirecciones",
        "teaser": null
      },{
        "title": "Autenticación mediante LDAP en moodle",
        "excerpt":"Muchos CMS incluyen módulos para diferentes mecanismos de autenticación, como un ejemplo de ellos veremos la autenticación de usuarios en moodle sobre LDAP. La ventaja principal de esto es que permite tener un sistema único de auntenticación para todas las aplicaciones de una organización. Vamos a seguir los pasos que...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Autenticacion_mediante_LDAP_en_moodle",
        "teaser": null
      },{
        "title": "Centralización de usuarios usando LDAP y NFS",
        "excerpt":"Cuando vimos el servidor LDAP hicimos una práctica donde aprendimos a centralizar la autentificación de usuarios. En esa práctica nuestra usuaria Felisa se podía autentificar en cualquier ordenador ya que el sistema de autentificación estaba centralizado en un directorio LDAP. Sin embargo Felisa tenía un directorio home diferente en cada...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Centralizacion_de_usuarios_usando_LDAP_y_NFS",
        "teaser": null
      },{
        "title": "Compartir fichero con Mdns y avahi",
        "excerpt":"Vamos a instalar avahi, que es una implementación de multicastDNS: Comprueba que tienes instalado en mortadelo y en filemon el paquete avahi-daemon y libnss-mdns Modifica el fichero /etc/nsswitch.conf como indica la documentación, en cada una de las máquinas. Comprueba que se esta resolviendo el nombre de la máquina y la...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Compartir_fichero_con_Mdns_y_avahi",
        "teaser": null
      },{
        "title": "Compartir ficheros usando NFS",
        "excerpt":"Instalación de un servidor NFS Para instalar un servidor NFS es necesario instalar los siguientes paquetes: # apt-get install nfs-kernel-server nfs-common portmap Instala un servidor NFS en mortadelo. En los clientes es suficiente con los siguientes paquetes: # apt-get install nfs-common portmap Instala filemon como cliente NFS. Compartiendo ficheros con...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Compartir_ficheros_usando_NFS",
        "teaser": null
      },{
        "title": "Compartir ficheros usando SAMBA",
        "excerpt":"Instalación de SAMBA Simplemente: # apt-get install samba Durante la instalación se nos pregunta en que grupo de trabajo o dominio se va a unir nuestra máquina. Se nos pregunta también si queremos compatibilidad con WINS a lo que respondemos que No. Instala en mortadelo un servidor Samba. Configuración de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Compartir_ficheros_usando_SAMBA",
        "teaser": null
      },{
        "title": "Configuración básica de red",
        "excerpt":"Configurando las interfaces de red IP Estática La configuración de las interfaces de red se encuentran en el fichero: /etc/network/interfaces Un ejemplo de este fichero puede ser el siguiente: # The loopback network interface auto lo iface lo inet loopback # The primary network interface auto eth0 iface eth0 inet...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Configuracion_basica_de_red",
        "teaser": null
      },{
        "title": "Configuración de SNAT para la red virtual",
        "excerpt":"Tenemos la siguiente estructura de red: Todos los equipos de la red virtual 10.0.0.0/24 están conectados a través del switch virtual. El acceso a la red externa de Mortadelo (10.0.0.10) es mediante el dispositivo de NAT de VMware, que aparece en la imagen con dirección IP 10.0.0.2. Podemos verificar esto...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Configuracion_de_SNAT_para_la_red_virtual",
        "teaser": null
      },{
        "title": "Configuración de awstats para virtual hosting",
        "excerpt":"En la documentación que ofrecemos se muestra como instalar awstats en unservidor web. En esta práctica queremos configurar el sistema para que cada subdominio genere estadísticas separadas. Modifica los ficheros de configuración de los subdominios para que los logs lo escribe en ficheros distintos, por ejemplo: www.ies.org, guarde los logs...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Configuracion_de_awstats_para_virtual_hosting",
        "teaser": null
      },{
        "title": "Configuración de postfix para el uso de usuarios virtuales de un directorio LDAP",
        "excerpt":"El objetivo de esta práctica es configurar el servidor de correo postfix, para que utilice usuarios virtuales del sistema almacenados en un directorio open LDAP. Para ello vamos a seguir los siguientes puntos: Instalación necesaria En primer lugar necesitamos tener instalado el paquete postfix-ldap, que nos da la funcionalidad para...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Configuracion_de_postfix_para_el_uso_de_usuarios_virtuales_de_un_directorio_LDAP",
        "teaser": null
      },{
        "title": "Configuración de un proxy APT con approx",
        "excerpt":"Instala el paquete approx en mortadelo mediante: aptitude install approx Edita el fichero /etc/approx/approx.conf y define las réplicas http que quieres utilizar, por ejemplo: debian http://ftp.es.debian.org/debian security http://security.debian.org/debian-security Reinicia el demonio de approx. Edita el fichero /etc/apt/sources.list de mortadelo y deja las siguientes líneas: deb http://127.0.0.1:9999/debian lenny main contrib non-free...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Configuracion_de_un_proxy_APT_con_approx",
        "teaser": null
      },{
        "title": "Configuración de un servidor PXE para instalación por red",
        "excerpt":"Este sistema tiene dos componentes: Servidor DHCP que da una dirección de forma automática al equipo que se enciende. Servidor TFTP que envía al equipo una imagen similar a la que incluyen los CD de instalación. Instalación del servidor TFTP Instala el paquete tftpd-hpa Verifica que el fichero /etc/defaults/tftpd-hpa contiene...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Configuracion_de_un_servidor_PXE_para_instalacion_por_red",
        "teaser": null
      },{
        "title": "Configuración del servidor DHCP",
        "excerpt":"Configuración del servidor El fichero de configuración de DHCP es: /etc/dhcp3/dhcpd.conf El fichero de configuración está dividido en dos partes: Parte principal (valores por defecto): especifica los parámetros generales que definen la concesión y los parámetros adicionales que se proporcionarán al cliente. Secciones (concretan a la principal) Subnet: Especifican rangos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Configuracion_del_servidor_DHCP",
        "teaser": null
      },{
        "title": "Configurar postfix para enviar a través de un relay host autenticado",
        "excerpt":"   Sigue los pasos de la documentación y configura tu equipo de casa para enviar correo a través de Gmail  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Configurar_postfix_para_enviar_a_traves_de_un_relay_host_autenticado",
        "teaser": null
      },{
        "title": "Configurar un equipo cliente para autenticación mediante LDAP",
        "excerpt":"   Sigue los pasos de la documentación, instalando y configurando los paquetes libnss-ldap y libpam-ldap tanto en mortadelo como el filemon. Cuando esté todo configurado, debe ser posible hacer login con el usuario felisa en cualquiera de los equipos.   ¿Qué ocurre con el directorio /home/felisa?  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Configurar_un_equipo_cliente_para_autenticacion_mediante_LDAP",
        "teaser": null
      },{
        "title": "Consultas a un servidor DNS con dig",
        "excerpt":"dig es una herramienta que permite hacer consultas a un servidor DNS desde la línea de comandos, es el sustituto de los programas nslookup y host. La sintaxis es: dig \\[-t tipo de registro\\] \\[@servidor DNS\\] Consulta DNS El tipo de registro por defecto es ADDRESS y el servidor DNS...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Consultas_a_un_servidor_DNS_con_dig",
        "teaser": null
      },{
        "title": "Contenido del curso",
        "excerpt":"1.Introducción a los servicios en GNU/Linux Manejo elemental de APT y dpkg Estructura habitual de un paquete de un demonio Niveles de ejecución, parada y puesta en marcha de los servicios, gestión de procesos, señales, etc. Aspectos fundamentales de configuración de red: ifconfig y ficheros de configuración. 2.DNS con Bind9...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Contenido_del_curso",
        "teaser": null
      },{
        "title": "Cortafuegos con política por defecto DROP",
        "excerpt":"Escribe un script de iptables con las siguientes características: Se ejecuta en el host de VMware Da acceso a Internet a la red virtual a través de SNAT El equipo Ubuntu tiene todos los siguientes servicios accesibles: DNS HTTP HTTPS Los equipos de la red virtual tienen los siguientes servicios...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Cortafuegos_con_politica_por_defecto_DROP",
        "teaser": null
      },{
        "title": "Cortafuegos elemental con política por defecto ACCEPT",
        "excerpt":"Vamos a utilizar el equipo host de VMware como cortafuegos de la red virtual, pero en primer lugar hay que repetir el ejercicio Configuración de SNAT para la red virtual para que mortadelo y filemon salgan a Internet a través de la máquina host. Notas importantes La configuración de un...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Cortafuegos_elemental_con_politica_por_defecto_ACCEPT",
        "teaser": null
      },{
        "title": "Creación de un FTP Anónimo",
        "excerpt":"   Siguiendo las indicación de la documentación suministrada, configura el servidor proFTPd para crear un servidor FTP anónimo de sólo lectura.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Creacion_de_un_FTP_Anonimo",
        "teaser": null
      },{
        "title": "Crear la estructura básica de un directorio para la autenticación de usuarios",
        "excerpt":"Sigue los pasos del manual y crea la estructura básica del directorio, utilizando como base el dominio DNS cursolinux.net. El directorio debe contener cuatro objetos: la base, el usuario admin y las unidades organizativas People y Group. Borra con la instrucción deluser el usuario felisa creado anteriormente (utiliza el parámetro...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Crear_la_estructura_basica_de_un_directorio_para_la_autenticacion_de_usuarios",
        "teaser": null
      },{
        "title": "Crear manualmente un usuario en UNIX",
        "excerpt":"Con idea de comprender qué significa crear un usuario en UNIX, crearemos un usuario de forma manual siguiendo los siguientes pasos. Características del nuevo usuario: Nombre de usuario: felisa Nombre Completo: Felisa Gómez García Contraseña: 123456 Grupo principal: curso UID: 1010 GID:1010 Directorio home: /home/felisa Shell: /bin/bash Creamos el grupo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Crear_manualmente_un_usuario_en_UNIX",
        "teaser": null
      },{
        "title": "DNS dinámico",
        "excerpt":"Por servidor DNS dinámico se entiende aquel cuyos registros DNS se actualizan al cambiar de dirección los equipos de su zona, normalmente porque no tienen dirección IP estática sino que ésta es suministrada por un servidor DHCP. Sigue los pasos de la documentación para sincronizar el servidor DNS y DHCP...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/DNS_dinamico",
        "teaser": null
      },{
        "title": "Ejemplo de una comunicación SMTP (wikipedia)",
        "excerpt":"En primer lugar se ha de establecer una conexión entre el emisor (cliente) y el receptor (servidor). Esto puede hacerse automáticamente con un programa cliente de correo o mediante un simple cliente telnet. En el siguiente ejemplo se muestra una conexión típica. Se nombra con la letra C al cliente...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Ejemplo_de_una_comunicacion_SMTP_wikipedia",
        "teaser": null
      },{
        "title": "Estructura básica del paquete \"servicio\"",
        "excerpt":"Binarios propios: /usr/bin (/usr/sbin) Bibliotecas propias: /usr/lib/servicio/ Ficheros configurables: /etc/servicio/: Directorio de ficheros de configuración /etc/default/servicio: Opciones extra para el inicio o parada del demonio Ficheros de funcionamiento: /var/log/servicio (/var/log/syslog): Registro de actividad /var/lib/servicio: Datos modificados durante la ejecución /var/run: PID y socket /var/lock: Bloqueos Documentación: /usr/share/doc/servicio/: Información del paquete...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Estructura_basica_del_paquete_%22servicio%22",
        "teaser": null
      },{
        "title": "Ficheros importantes en la resolución de nombres",
        "excerpt":"/etc/hosts Fichero para la resolución estática de nombres (normalmente de la red local). Incluye nuevas líneas en este fichero para la resolución de nombres de la red local. Las líneas de /etc/hosts tienen el formato: dirección\\_IP nombre\\_largo nombre_corto 127.0.0.1 localhost.localdomain localhost 192.168.45.123 sauron.mordor.com sauron Comprueba su funcionamiento haciendo ping a...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Ficheros_importantes_en_la_resolucion_de_nombres",
        "teaser": null
      },{
        "title": "Indice de DHCP",
        "excerpt":"   Definición de DHCP   Instalación del servidor dhcp3   Configuración del servidor            Configuración básica del servidor       Reserva de direcciones IP asignada a equipos determinados           DNS Dinámico: Sincronización entre DNS y DHCP   Utilización de DHCP para configurar un servidor PXE  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Indice_de_DHCP",
        "teaser": null
      },{
        "title": "Índice de DNS",
        "excerpt":"Configuración de los clientes: ficheros /etc/resolv.conf y /etc/hosts Tipos de servidores DNS y usos habituales: Master Slave Forward Cache Servidor DNS: ¿interno o externo? Ventajas e inconvenientes en cada caso. Tipos de entradas DNS, consulta desde la línea de comando con dig. Configurar un servidor DNS forward para una RAL...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Indice_de_DNS",
        "teaser": null
      },{
        "title": "Indice de LAMP",
        "excerpt":"Servidor web Apache2 Instalación del servidor Web Configuración del servidor Virtual Hosting en Apache 2 Uso de herramientas de estadísticas: Awstats y Webalizer Uso de módulos en Apache2: utilización de userdir.mod Instalación e introducción aPHP5 Instalación del servidor de base de datos mySQL Introducción a la programación dinámica de páginas...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Indice_de_LAMP",
        "teaser": null
      },{
        "title": "Índice de NAT y proxy",
        "excerpt":"   Acceso compartido a Internet con SNAT   DNAT o redirección de puertos   Proxy-cache web con squid   Cache de paquetes deb con approx   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Indice_de_NAT_y_proxy",
        "teaser": null
      },{
        "title": "Índice de OpenLDAP",
        "excerpt":"   Introducción a los servicios de directorio   LDAP.            Características principales       Usos de LDAP       Implementaciones de LDAP           Autenticación de usuarios en UNIX   Sistema centralizado de usuarios con openLDAP   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Indice_de_OpenLDAP",
        "teaser": null
      },{
        "title": "Índice de correo electrónico",
        "excerpt":"Proceso de envío de correo electrónico: SMTP Recepción de correo electrónico: POP, IMAP y webmail Instalación y configuración de un servidor SMTP: postfix Redirecciones y alias de correo Componentes adicionales del servidor de correo electrónico: Usuarios virtuales en LDAP, BBDD, etc. Servidores POP e IMAP Webmail Configuración de postfix para...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Indice_de_correo_electronico",
        "teaser": null
      },{
        "title": "Índice de cortafuegos: iptables",
        "excerpt":"   Descripción de la tabla filter   Implementar un cortafuegos con política por defecto ACCEPT   Implementar un cortafuegos con política por defecto DROP   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Indice_de_cortafuegos_iptables",
        "teaser": null
      },{
        "title": "Índice de ficheros en red - NFS, SAMBA y Mdns",
        "excerpt":"   Compartir ficheros en entornos UNIX con NFS   Compartir ficheros e impresoras en redes CIFS con SAMBA   Compartir ficheros utilizando mdns: avahi   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Indice_de_ficheros_en_red_NFS_SAMBA_y_Mdns",
        "teaser": null
      },{
        "title": "Índice de introducción",
        "excerpt":"   Manejo elemental de APT y dpkg   Estructura habitual de un paquete de un servicio   Niveles de ejecución, parada y puesta en marcha de los servicios, gestión de procesos, señales, etc.   Aspectos fundamentales de configuración de red: ifconfig y ficheros de configuración.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Indice_de_introduccion",
        "teaser": null
      },{
        "title": "Indice de servidor FTP",
        "excerpt":"   Instalación del servidor proftpd   Pruebas de funcionamiento con usuarios reales   Utilización de usuarios virtuales con MySQL y LDAP.   Creación de un ftp anónimo.   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Indice_de_servidor_FTP",
        "teaser": null
      },{
        "title": "Instalación de Apache+PHP+MySQL",
        "excerpt":"Instalando Apache: # apt-get install apache2 Instalando MySQL: # apt-get install mysql-common mysql-client mysql-server Instalando Php 5.0: # apt-get install php5 libapache-mod-php5 php5-mysql Eso es todo, como gestor de la base de datos podemos utilizar phpmyadmin, programa php que me permite acceder a todas las funciones de mySql # apt-get...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Instalacion_de_Apache+PHP+MySQL",
        "teaser": null
      },{
        "title": "Instalación de phpldapadmin",
        "excerpt":"d  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Instalacion_de_phpldapadmin",
        "teaser": null
      },{
        "title": "Instalación de phpmyadmin",
        "excerpt":"d  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Instalacion_de_phpmyadmin",
        "teaser": null
      },{
        "title": "Instalación de squirrelmail",
        "excerpt":"d  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Instalacion_de_squirrelmail",
        "teaser": null
      },{
        "title": "Instalación de un CMS: Moodle",
        "excerpt":"En esta práctica vamos a instalar un gestor de contenido especializado para entornos educativo como es Moodle. Moodle está implementado con PHP y necesita una base de datos para guardar información. Siguiendo la documentación aportada instala php5 y mysql. Descarga la última versión de moodle: wget http://download.moodle.org/download.php/stable19/moodle-weekly-19.tgz Descomprime el fichero...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Instalacion_de_un_CMS_Moodle",
        "teaser": null
      },{
        "title": "Instalación del servidor DHCP",
        "excerpt":"Instalación del servicio DHCP      Busca el paquete del servidor dhcp3.   Instala el paquete correspondiente al servicio dhcp.   Al intentar inicializar el servidor nos da un error, esto es debido a que no hemos configurado el servidor.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Instalacion_del_servidor_DHCP",
        "teaser": null
      },{
        "title": "Instalación y configuración de Bind9 como servidor DNS master en una red local",
        "excerpt":"Planteamiento del problema Utilizaremos dos máquinas con nombres mortadelo y filemon, superagentes que trabajan en la T.I.A. (Técnicos Investigación Aeroterráquea) y que obviamente pertenecen al dominio tia.com mortadelo actuará como servidor y filemon como cliente en todas las tareas de este tema. Instalación y funcionamiento como dns cache Instala el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Instalacion_y_configuracion_de_Bind9_como_servidor_DNS_master_en_una_red_local",
        "teaser": null
      },{
        "title": "Instalación y configuración de DNSmasq como DNS cache/forward en una red local",
        "excerpt":"   Sigue los pasos del manual y configura mortadelo como servidor DNS cache de la red local utilizando el programa DNSmasq.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Instalacion_y_configuracion_de_DNSmasq_como_DNS_cache_forward_en_una_red_local",
        "teaser": null
      },{
        "title": "Instalación y configuración de squid",
        "excerpt":"        Configura squid en el host de VMware para que puedan acceder los equipos de la red virtual 10.0.0.0/24 y tengan restringido el acceso a varios dominios utilizando ACL con url_regex. Por ejemplo:         acl descargas_directas url_regex megaupload rapidshare gigasize   ...   http_access deny descargas_directas          ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Instalacion_y_configuracion_de_squid",
        "teaser": null
      },{
        "title": "Instalación y confuguración básica de postfix",
        "excerpt":"Vamos a explicar los pasos que se deben seguir para instalar en mortadelo un servidor de correos del dominio brenes.homelinux.net, dominio registrado el el servicio gratuito dyndns.org y asociado en este momento a la dirección IP pública del router ADSL del centro. El primer paso consiste en la instalación de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Instalacion_y_confuguracion_basica_de_postfix",
        "teaser": null
      },{
        "title": "Instalación y puesta en marcha del servidor proFTPd",
        "excerpt":"   Siguiendo las instrucciones de las documentación, instala el servidor FTP y comprueba con un cliente FTP que puedes acceder a los directorios de los usuarios de la máquina (mortadelo).  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Instalacion_y_puesta_en_marcha_del_servidor_proFTPd",
        "teaser": null
      },{
        "title": "Logs, obteniendo información del sistema",
        "excerpt":"¿Qué es un log(registro)? No es más que una entrada en un fichero donde se detalla el funcionamiento de alguna aplicación del sistema o del propio kérnel, normalmente con el formato “Día Hora Equipo Aplicación: Mensaje”, por ejemplo: Nov 23 10:10:00 talut dhclient: DHCPREQUEST on eth0 to 10.127.37.28 port 67...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Logs_obteniendo_informacion_del_sistema",
        "teaser": null
      },{
        "title": "Manejar paquetes en Debian",
        "excerpt":"Manejar paquetes en Debian El fichero sources.list En este fichero es donde se guardan donde se han de buscar los paquetes que están disponibles para instalar. Como medios de instalación podemos tener servidores web, de ftp, cdrom, dvd … En este archivo aquellas líneas que comienzan con # son las...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Manejar_paquetes_en_Debian",
        "teaser": null
      },{
        "title": "Más opciones de APT",
        "excerpt":"Actualizando los paquetes de nuestro sistema apt-get update Para actualizar la lista de paquetes disponibles con la información del fichero /etc/apt/sources.list apt-get upgrade Con esta instrucción actualizamos la instalación de los paquetes a su última versión sin tener en cuenta las dependencias. apt-get dist-upgrade Con esta instrucción actualizamos la instalación...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Mas_opciones_de_APT",
        "teaser": null
      },{
        "title": "Niveles de ejecución. Arranque y parada de los servicios",
        "excerpt":"Los niveles de ejecución ( Run Levels ) definen diferentes estados de funcionamiento de un Sistema Linux. 0 Parada del sistema 1 Modo monousuario 2 Modo multiusuario 3 Modo multiusuario 4 No usado 5 Modo multiusuario 6 Parada y arranque 7-9 No se usan Secuencia de arranque Debian arranca ejecutando...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Niveles_de_ejecucion_Arranque_y_parada_de_los_servicios",
        "teaser": null
      },{
        "title": "Proxy transparente con squid e iptables",
        "excerpt":"Supongamos que en una red local tenemos acceso a Internet mediante SNAT, pero instalamos un servidor proxy para agilizar la navegación y controlar el acceso. Si queremos que los equipos de la red utilicen el proxy hay, en principio, dos opciones: Cerramos el puerto destino 80/tcp para paquetes que salgan...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Proxy_transparente_con_squid_e_iptables",
        "teaser": null
      },{
        "title": "Servidor IMAP y POP",
        "excerpt":"   Sigue los pasos de la documentación e instala los servidores dovecot POP e IMAP en mortadelo y configura un cliente de correo en la máquina Ubuntu que se conecte a ellos.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Servidor_IMAP_y_POP",
        "teaser": null
      },{
        "title": "Servidor proFTPd: Usuarios virtuales con LDAP",
        "excerpt":"Al igual que otros muchos servicios proftp puede almacenar la información de autenticación de usuarios en LDAP, por lo que se suele denominar a éstos usuarios virtuales para diferenciarlos de los usuarios reales o del sistema. En Debian lenny al instalar el paquete proftpd, se instala por dependencias el paquete...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Servidor_proFTPd_Usuarios_virtuales_con_LDAP",
        "teaser": null
      },{
        "title": "Trabajando con los repositorios",
        "excerpt":"¿Qué son los repositorios? El repositorio es a todos los efectos un archivo ordenado donde son almacenados los paquetes Debian (sean estos paquetes binarios o fuentes) en un modo bien organizado, con una estructura bien definida y constantemente actualizados. Los paquetes contenidos en un repositorio son indexados en estos archivos:...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Trabajando_con_los_repositorios",
        "teaser": null
      },{
        "title": "Trabajando con paquetes. Instalando servicios",
        "excerpt":"Cuando usamos APT para instalar paquetes hace dos tareas por separado: en un primer paso descarga de los repositorios los paquetes que va a instalar, para a continuación usar la instrucción dpkg para desempaquetar y configurar cada paquete. Veamos algunas cuestiones relacionadas con estas dos tares. Descarga de los paquetes...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Trabajando_con_paquetes_Instalando_servicios",
        "teaser": null
      },{
        "title": "Uso básico de APT",
        "excerpt":"Instalar paquetes Vamos a instalar un servicio de ejemplo, utilizando la herramienta apt-get. El servicio que vamos a instalar es ntp, que nos permite la sincronización del reloj del sistema. Para ello vamos a utilizar la instrucción: # apt-get install ntp Leyendo lista de paquetes... Hecho Creando árbol de dependencias...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Uso_basico_de_APT",
        "teaser": null
      },{
        "title": "Uso de módulos en Apache2: userdir.mod",
        "excerpt":"El objetivo de esta práctica es usar el módulo userdir.mod de apache2 que nos va a permitir que cada usuario tenga un directorio público en su home (public_html) donde guardará su página personal. De esta manera los profesores o alumnos del departamento podrán tener su página personal en la dirección...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Uso_de_modulos_en_Apache2_userdir_mod",
        "teaser": null
      },{
        "title": "Virtual Hosting: Creación y gestión de dos subdominios",
        "excerpt":"El objetivo de esta práctica es la construcción de un sitio web que se pueda asemejar a las necesidades de un centro educativo. En las prácticas posteriores iremos mejorando la solución. Definición del problema Suponemos que el centro educativo ha comprado el siguiente dominio: ies.org. Nosotros vamos a crear dos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/Virtual_Hosting_Creacion_y_gestion_de_dos_subdominios",
        "teaser": null
      },{
        "title": "postfix_ldap_ou.ldif",
        "excerpt":"dn:ou=people,dc=ldap,dc=web-personal,dc=org objectClass: organizationalunit ou: people  dn:ou=groups,dc=ldap,dc=web-personal,dc=org objectClass: organizationalunit ou: groups  dn:ou=postfix,dc=ldap,dc=web-personal,dc=org ou: postfix slap    objectClass: top objectClass: organizationalUnit userPassword:{CRYPT}mdkQsdBAQepDU  dn:ou=alias,ou=postfix,dc=ldap,dc=web-personal,dc=org ou: alias objectClass: top objectClass: organizationalUnit  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/postfix_ldap_ou_ldif",
        "teaser": null
      },{
        "title": "webmail",
        "excerpt":"   Sigue los pasos de la documentación e instala squirrelmail en mortadelo.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/doc/webmail",
        "teaser": null
      },{
        "title": "Introducción a los Servicios en GNU/Linux (2008)",
        "excerpt":"Contenidos Introducción a los servicios en GNU/Linux DNS con Bind9 DHCPv3 OpenLDAP Correo electrónico FTP Puesta en marcha de un servidor LAMP: Linux, Apache, MySQL y PHP Acceso compartido a Internet: proxy y NAT Ficheros en red: NFS, CIFS y mDNS Cortafuegos con iptables Introducción a los servicios en GNU/Linux...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2008/index",
        "teaser": null
      },{
        "title": "Avatar como servidor de correo de los clientes de nuestra red ",
        "excerpt":"Figura: a la figura anterior le añadimos 2 situaciones más, los casos 4 y 5. El objetivo de este apartado es la configuración en equipos cliente de nuestra red MZ para posibilitar el envío de correo entre usuarios de nuestro dominio. Caso 4: Envío de correo desde el cliente a...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Avatar_como_servidor_de_correo_de_los_clientes_de_nuestra_red",
        "teaser": null
      },{
        "title": "Cómo obtener la certificación del curso",
        "excerpt":"Número de tareas a superar: Para obtener la certificación del curso es necesario tener superadas, al menos, todas las tareas menos una. Así: Curso básico: publicadas 6 tareas. Deben superarse, al menos, 5. Curso intermedio: publicadas 5 tareas. Deben superarse, al menos, 4. Cuestionario de evaluación Una vez entregadas las...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Como_obtener_la_certificacion_del_curso",
        "teaser": null
      },{
        "title": "Configuración de Postfix a través de un relay host autenticado",
        "excerpt":"Figura: cliente, Avatar, gmail En la figura anterior se observa que el usuario envía correo vía SMTP usando Avatar como servidor de correo local. Avatar recibirá el mensaje. Si el destinatario es de un dominio externo, y está definido en la lista de dominios a reenviar, no buscará el servidor...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Configuracion_de_Postfix_a_traves_de_un_relay_host_autenticado",
        "teaser": null
      },{
        "title": "4.- Configuración inicial del sistema",
        "excerpt":"Durante la instalación del sistema la mayoría de los parámetros que comentamos en esta sección quedarán definidos, aunque es conveniente repasar todos ellos para verificar la correcta configuración del sistema y familiarizarnos con algunos ficheros de configuración. Definición de los parámetros de red Siguiendo el primer esquema de red propuesto:...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Configuracion_inicial_del_sistema",
        "teaser": null
      },{
        "title": "Cortafuegos con iptables con política por defecto DROP",
        "excerpt":"Sube un fichero de texto (.txt) con las líneas de iptables necesarias para crear un cortafuegos con las siguientes características: Cliente puede acceder utilizar los protocolos HTTPS, SMTP, DNS, POP3 y LDAP Cliente tiene redireccionados los puertos 4662/tcp y 4672/udp para poder utilizar un programa tipo eMule/aMule. Cliente utiliza el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Cortafuegos_con_iptables_con_politica_por_defecto_DROP",
        "teaser": null
      },{
        "title": "Directivas a configurar ",
        "excerpt":"Revisemos las directivas a tener en cuenta en nuestra configuración (/etc/postfix/main.cf): Observa que en la configuración anterior se usa el nombre avatar.doesntexist.org y no avatar.dynalias.com. Usaremos este nombre en toda esta unidad. Observa que en la directiva mydestination se indican los dominios que serán propios del servidor Avatar, es decir,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Directivas_a_configurar",
        "teaser": null
      },{
        "title": "Ejemplos preliminares. Correo en Avatar",
        "excerpt":"Figura: Análisis de casos En la documentación entregada en pdf, se explica cómo montar un servidor de correo en Avatar, prácticas que se corresponden con los casos 1, 2 y 3 de la figura. Revisaremos los pasos a seguir, haciendo algunos matices: Caso 1: enviar correo desde Avatar a usuarios...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejemplos_preliminares_Correo_en_Avatar",
        "teaser": null
      },{
        "title": "Ejercicio: Abrir puertos en un cortafuegos con política DROP",
        "excerpt":"        Escribe en un fichero las reglas de iptables necesarias para permitir a cliente utilizar los siguientes protocolos:              DNS       HTTP       HTTPS       SMTP       POP3       IMAP4                Ejecuta ese fichero en avatar y comprueba el funcionamiento de todos los protocolos desde cliente      ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Abrir_puertos_en_un_cortafuegos_con_politica_DROP",
        "teaser": null
      },{
        "title": "Ejercicio: Autentificación de usuarios",
        "excerpt":"En este ejercicio vamos a ver distintas maneras de utilizar el servicio del proxy-cache. En primer lugar obligaremos al usuario a autentificarse para poder navegar por internet y a continuación introduciremos el concepto de proxy transparente, donde el cliente no tendrá que configurar el navegador y forzaremos que el acceso...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Autentificacion_de_usuarios",
        "teaser": null
      },{
        "title": "Ejercicio: Configuración",
        "excerpt":"Revisa tu fichero /etc/postfix/main.cf y asegúrate de tener una configuración similar a la explicada en el apartado anterior(directivas mydestination, myhostname, myorigin, mynetworks, relay_domains)  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Configuracion",
        "teaser": null
      },{
        "title": "Ejercicio: Configuración de NAT del entorno de trabajo",
        "excerpt":"   Configura tu entorno de trabajo de manera que los equipos de la red local tengan acceso a Internet y el puerto 80/tcp de avatar sea accesible desde Internet.   Utiliza el foro general para plantear cualquier duda que te surja.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Configuracion_de_NAT_del_entorno_de_trabajo",
        "teaser": null
      },{
        "title": "Ejercicio: Configuración inicial",
        "excerpt":"Configura las interfaces de red con las dirección indicadas en el documento anterior, realizando la adaptación necesaria a tu entorno (direcciones dinámicas, otro rango de red del router, etc.) Comprueba que tienes conectividad entre avatar y cliente haciendo ping de uno a otro. Comprueba el contenido del fichero /etc/resolv.conf y...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Configuracion_inicial",
        "teaser": null
      },{
        "title": "Consultas a un servidor DNS con dig",
        "excerpt":"dig es una herramienta que permite hacer consultas a un servidor DNS desde la línea de comandos, es el sustituto de los programas nslookup y host. La sintaxis es: dig \\[-t tipo de registro\\] \\[@servidor DNS\\] Consulta DNS El tipo de registro por defecto es ADDRESS y el servidor DNS...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Consultas_a_un_servidor_DNS_con_dig",
        "teaser": null
      },{
        "title": "Ejercicio: Control de acceso",
        "excerpt":"Control de acceso En este ejercicio vamos a restringir el acceso a determinadas páginas y vamos a impedir la descargas de algunos tipos de ficheros. Control de acceso a páginas webs Creamos una ACL del tipo url_regex que se llame descargas_directas y que nos permita restringir el acceso a páginas...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Control_de_acceso",
        "teaser": null
      },{
        "title": "Ejercicio: Cortafuegos elemental con política DROP",
        "excerpt":"El conjunto de reglas más simple que podríamos implementar en un equipo con política por defecto DROP sería el siguiente: iptables -P INPUT DROP iptables -P OUTPUT DROP iptables -P FORWARD DROP iptables -A FORWARD -p tcp -i eth1 -o eth0 -s 192.168.2.0/24 -j ACCEPT iptables -A FORWARD -p tcp...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Cortafuegos_elemental_con_politica_DROP",
        "teaser": null
      },{
        "title": "Ejercicio: Estudia el esquema de red implantado en tu centro",
        "excerpt":"Realiza un estudio de la configuración y esquema de red que hay implantada en tu instituto. ¿Tenéis conexión a Internet propia de los ciclos o utilizáis la del centro? ¿Existe un servidor que dé servicios a la Intranet? ¿Existe un servidor que dé servicios a Internet? ¿Qué sistema operativo tiene...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Estudia_el_esquema_de_red_implantado_en_tu_centro",
        "teaser": null
      },{
        "title": "Ejercicio: Gestión remota usando SSH",
        "excerpt":"En al mayoría de los casos no existe acceso físico al servidor, o simplemente la máquina no tiene conectada un monitor. Lo normal es acceder de forma remota. Nosotros vamos a usar ssh, para acceder de forma remota dede el cliente al servidor avatar. Instala ssh en avatar. Configura ssh...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Gestion_remota_usando_SSH",
        "teaser": null
      },{
        "title": "Ejercicio: Herramientas para gestionar las actualización de paquetes ",
        "excerpt":"Las actualizaciones automáticas de los paquetes del sistema, o la notificación de los mismos, es una tarea importante que deben realiza los administradores de sistema. Lo que pretendemos con este ejercicio es aprender herramientas que nos permiten automatizar las tareas de actualización que puede ser mas que beneficioso, sobre todo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Herramientas_para_gestionar_las_actualizacion_de_paquetes",
        "teaser": null
      },{
        "title": "Ejercicio: Instalación del sistema LAMP",
        "excerpt":"   Instala en avatar un sistema LAMP completo.   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Instalacion_del_sistema_LAMP",
        "teaser": null
      },{
        "title": "Ejercicio: Instalación del sistema operativo",
        "excerpt":"Instala el sistema operativo Debian lenny en avatar y utiliza el foro general para plantear cualquier problema o duda que te surja durante la instalación. Parámetros que necesitarás durante la instalación: Configuración de red: dependerá de la conexión a Internet y configuración de red local que tengas Servidores DNS: Los...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Instalacion_del_sistema_operativo",
        "teaser": null
      },{
        "title": "Ejercicio: Instalación y configuración de Bind9 como servidor DNS maestro",
        "excerpt":"Instalación y funcionamiento como dns cache Instala el paquete bind9 en avatar Modifica el fichero /etc/resolv.conf indicando la dirección IP de avatar (servidor DNS) Comprueba con dig que el servidor está funcionando como DNS cache y que es capaz de realizar consultas directas a los servidores raíz DNS. Instalación y...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Instalacion_y_configuracion_de_Bind9_como_servidor_DNS_maestro",
        "teaser": null
      },{
        "title": "Ejercicio: Instalación y configuración de squid",
        "excerpt":"Instalación del proxy-cache squid Instala el paquete squid en avatar Configuración del proxy-cache squid Vamos a realizar la configuración inicial de squid indicando algunos parámetros que pueden mejorar el funcionamiento de la caché: Cambia la cantidad de memoria RAM asignada al funcionamiento de squid (cache_mem) a 64 MB. Cambia el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Instalacion_y_configuracion_de_squid",
        "teaser": null
      },{
        "title": "Configuración del servidor DHCP",
        "excerpt":"Configuración del servidor El fichero de configuración de DHCP es: /etc/dhcp3/dhcpd.conf El fichero de configuración está dividido en dos partes: Parte principal (valores por defecto): especifica los parámetros generales que definen la concesión y los parámetros adicionales que se proporcionarán al cliente. Secciones (concretan a la principal) Subnet: Especifican rangos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Instalacion_y_configuracion_del_servidor_DHCP",
        "teaser": null
      },{
        "title": "Ejercicio: Instalar la plataforma educativa moodle",
        "excerpt":"Sigue los pasos de la documentación oficial de moodle e instala esta plataforma educativa en avatar. Si tienes cualqueri duda sobre la instalación, utiliza el foro general para plantearlas. Descárgate el curso de moodle Introducción a los servicios en GNU/Linux e instálalo en avatar. Configúralo para que sea accesible como...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Instalar_la_plataforma_educativa_moodle",
        "teaser": null
      },{
        "title": "Ejercicio: Lectura desde un cliente",
        "excerpt":"Sigue los pasos indicados en la documentación y recoge desde un cliente de la red el correo de la cuenta alumno@avatar.doesntexist.org. Usa Evolution, en primer lugar, y después haz una lectura con los comandos POP.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Lectura_desde_un_cliente",
        "teaser": null
      },{
        "title": "Ejercicio: Planificación y realización de copias de seguridad del servidor",
        "excerpt":"Realización de script para realizar la copia de seguridad del servidor En este ejercicio vamos a realizar un script en bash para realizar las copias de seguridad de nuestro servidor avatar, que cumpla las siguientes especificaciones: Realiza el proceso de forma completamente automático: Para ello vamos a hacer que el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Planificacion_y_realizacion_de_copias_de_seguridad_del_servidor",
        "teaser": null
      },{
        "title": "Ejercicio: Registro de actividades del sistema: logcheck",
        "excerpt":"logcheck Logcheck es una herramienta encargada de revisar periódicamente los logs del sistema y enviar un correo al administrador de lo que sea importante. Logcheck revisa periódicamente los logs del sistema, analizando cada una de las líneas y clasificándola según diferentes niveles de alerta, informando al administrador del sistema en...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Registro_de_actividades_del_sistema_logcheck",
        "teaser": null
      },{
        "title": "Ejercicio: Resolución de nombres en nuestra intranet",
        "excerpt":"Actualmente en nuestra red local 192.168.2.0/24 realizamos una resolución de nombres de forma local o estática. esta resolución se realiza mediante el fichero /etc/hosts, que en nuestro cliente debe estar de la siguiente manera: # nano /etc/hosts 192.168.2.1 avatar.dynalias.com avatar Es decir tanto el nombre avatar, como acatar.dynalias.com se resuelve...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Resolucion_de_nombres_en_nuestra_intranet",
        "teaser": null
      },{
        "title": "Ejercicio: Selección de implementación a utilizar en el curso",
        "excerpt":"Piensa en los recursos de los que dispones para hacer el curso (ordenadores, dispositivos de interconexión y conexión a Internet) y selecciona una de las tres alternativas ofrecidas para la implantación de la red.   Si tienes cualquier duda utiliza el foro general para comentarla y encontrar la solución.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Seleccion_de_implementacion_a_utilizar_en_el_curso",
        "teaser": null
      },{
        "title": "Ejercicio: Sincronización de directorios con Unison",
        "excerpt":"Sincronización de directorios con Unison Unison permite mantener actualizados árboles completos en el mismo ordenador (diferentes directorios) o en ordenadores remotos (usando ssh u otros métodos). Además propaga las modificaciones en ambos sentidos. Así es posible mantener sincronizados casi los ordenadores que queramos. Si no hay conflictos (i.e. el mismo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Sincronizacion_de_directorios_con_Unison",
        "teaser": null
      },{
        "title": "Ejercicio: Squirrelmail como webmail",
        "excerpt":"Lee la documentación del fichero en PDF. Siguiendo los pasos debes conseguir: Tener instalado y configurado Squirrelmail. Hacer uso de este cliente de correo: haz pruebas de envío de correos entre usuarios internos y otras cuentas de Internet (igual que hicimos en apartados anteriores pero en este a través de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Squirrelmail_como_webmail",
        "teaser": null
      },{
        "title": "Ejercicio: Utilización de APT y manejo básico del sistema",
        "excerpt":"Si no has utilizado anteriormente un sistema GNU/Linux o lo has hecho sólo desde el entorno gráfico, te recomendamos que realices a tu criterio alguna de las siguientes prácticas: Uso básico de APT Trabajando con los repositorios Más opciones de APT Trabajando con paquetes. Instalando servicios Niveles de ejecución. Arranque...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_Utilizacion_de_APT_y_manejo_basico_del_sistema",
        "teaser": null
      },{
        "title": "Ejercicio: configuración; solución a los casos 3 y 5.",
        "excerpt":"Usa el fichero PDF para documentarte sobre la configuración a realizar (“Configuración de main.cf”, “Datos de autenticación”,”Utilización del certificado adecuado”) Casos: comprobación de la configuración realizada: Caso 3: Repite los pasos indicados en el apartado “Ejemplos preliminares. Correo en Avatar“. Echa un vistazo al fichero de log (/var/log/mail.log) ¿Está el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_configuracion_solucion_a_los_casos_3_y_5",
        "teaser": null
      },{
        "title": "Ejercicio: correo interno en la red MZ ",
        "excerpt":"Objetivo Implantar un servicio de correo interno para la red MZ. En el ejercicio anterior haz conseguido enviar correo entre usuarios de Avatar, enviando y recibiendo mensajes desde el propio Avatar (correo local en Avatar). Ahora vas a realizar el envío entre usuarios del dominio de Avatar (avatar.doesntexist.org) pero desde...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_correo_interno_en_la_red_MZ",
        "teaser": null
      },{
        "title": "Ejercicio: correo local",
        "excerpt":"Haz pruebas del caso 1 poniendo en práctica el envío de correos local entre 2 usuarios de Avatar. Crea una cuenta de usuario en Avatar de nombre “usuario1”. Crea una cuenta de usuario en Avatar de nombre “usuario2”. Envía correo entre ambos usuarios y comprueba la correcta recepción haciendo uso...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_correo_local",
        "teaser": null
      },{
        "title": "Ejercicio: ficheros del servidor",
        "excerpt":"Explora tu sistema de archivos, localizando los ficheros indicados en el árbol anterior.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ejercicio_ficheros_del_servidor",
        "teaser": null
      },{
        "title": "2.- Elección del entorno de trabajo: máquinas físicas o virtuales",
        "excerpt":"Ya conocemos el esquema de red que vamos a implementar: un servidor (avatar) conectado a Internet por eth0, los clientes de nuestra red estarán conectados al servidor mediante la otra interfaz de red, eth1. El servidor se irá configurando y administrando para ofrecer distintos servicios a los clientes internos y...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Eleccion_del_entorno_de_trabajo_maquinas_fisicas_o_virtuales",
        "teaser": null
      },{
        "title": "1.- Esquema de la red de trabajo",
        "excerpt":"Por centrarnos en algún caso concreto, hemos pensado que sería una buena idea orientar el curso a simular el esquema de red que nos podemos encontrar en cualquier instituto e instalar y administrar un servidor para ofrecer todos los servicios necesarios en en centro. Esto se puede hacer de diversas...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Esquema_de_la_red_de_trabajo",
        "teaser": null
      },{
        "title": "Ficheros ",
        "excerpt":"Use el siguiente árbol para localizar los ficheros de Postfix:     ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Ficheros",
        "teaser": null
      },{
        "title": "Finalización de la Unidad 0",
        "excerpt":"Una vez que termines esta unidad ya debes tener totalmente operativo el entorno de trabajo con la máquina avatar y la máquina cliente conectadas, configuradas y con acceso a Internet. Esta unidad te deba haber servido para: Ver algunas ventajas e inconvenientes de los diferentes esquemas de red que podemos...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Finalizacion_de_la_Unidad_0",
        "teaser": null
      },{
        "title": "4.- Gestión de DNS externo",
        "excerpt":"El objetivo final de las dos primeras unidades, es configurar y administrar de manera básica nuestro servidor avatar, y montar un servidor web con una plataforma educativa moodle accesible desde Internet. Llegados a este punto tenemos el servidor avatar instalado y conectado a Internet, el router configurado para hacer NAT...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Gestion_de_DNS_externo",
        "teaser": null
      },{
        "title": " Índice de DHCP",
        "excerpt":"   Definición de DHCP   Instalación del servidor dhcp3   Configuración del servidor            Configuración básica del servidor       Reserva de direcciones IP asignada a equipos determinados           Configuración del servidor DHCP en el esquema de red seleccionado  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Indice_de_DHCP",
        "teaser": null
      },{
        "title": "Índice de DNS Dinámico",
        "excerpt":"   Configuración de los servidores bind9 y dhcp3-server para que se comuniquen a través del puerto 953/tcp   Pruebas de funcionamiento   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Indice_de_DNS_Dinamico",
        "teaser": null
      },{
        "title": "Índice de DNS: bind9",
        "excerpt":"Introducción: Servidor de Nombres de Dominio Tipos de servidores DNS y usos habituales: Master Slave Forward Cache Servidor DNS: ¿interno o externo? Ventajas e inconvenientes en cada caso. Tipos de entradas DNS, consulta desde la línea de comando con dig. Configuración de los clientes: ficheros /etc/resolv.conf y /etc/hosts Configurar un...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Indice_de_DNS_bind9",
        "teaser": null
      },{
        "title": "Indice de NAT, LAMP y gestión DNS externo",
        "excerpt":"   NAT: Compartir una dirección pública entre varios equipos   Instalación de un sistema LAMP (Linux, Apache, MySQL y PHP)   Instalación de la plataforma educativa moodle   Configuración de un DNS externo para acceder a nuestro sitio desde Internet  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Indice_de_NAT_LAMP_y_gestion_DNS_externo",
        "teaser": null
      },{
        "title": "Índice de Proxy Web: Squid",
        "excerpt":"   Definición de proxy-cache        Instalación y configuración de squid              Configuración del servidor       Configuración en el cliente           Control de acceso   Autentificación de usuarios   Proxy transparente  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Indice_de_Proxy_Web_Squid",
        "teaser": null
      },{
        "title": "Índice de Puesta en marcha del entorno de trabajo",
        "excerpt":"   Esquema de la red de trabajo   Elección del entorno de trabajo: máquinas físicas o virtuales   Instalación del sistema operativo   Configuración de la red  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Indice_de_Puesta_en_marcha_del_entorno_de_trabajo",
        "teaser": null
      },{
        "title": "Índice de Sistema centralizado de cuentas: Kerberos, LDAP y NFS4",
        "excerpt":"   Características del montaje   Instalación y configuración de LDAP   Instalación y configuración de Kerberos y LDAP   GSSAPI: Conexión entre Kerberos y LDAP   Autenticación del sistema con Kerberos (pam-krb)   NFS4 con Kerberos  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Indice_de_Sistema_centralizado_de_cuentas_Kerberos_LDAP_y_NFS4",
        "teaser": null
      },{
        "title": "Índice de correo electrónico: Postfix ",
        "excerpt":"   Introducción   Correo electrónico: documentación en pdf   Directivas a configurar   Ficheros   Ejemplos preliminares. Correo en Avatar.   Avatar como servidor de correo de los clientes de nuestra red  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Indice_de_correo_electronico_Postfix",
        "teaser": null
      },{
        "title": " Índice de cortafuegos con iptables",
        "excerpt":"   Sintaxis básica de iptables   Cortafuegos elemental con política DROP   Abrir puertos en un cortafuegos con política DROP            Cadenas INPUT y OUTPUT       Cadena FORWARD           Cadenas INPUT y OUTPUT   Source NAT y Destination NAT  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Indice_de_cortafuegos_con_iptables",
        "teaser": null
      },{
        "title": "Índice de gestión remota, estado del sistema, actualizaciones y copias de seguridad",
        "excerpt":"Gestión remota usando ssh Instalación de openssh Configuración del servidor openssh Configuración y uso del cliente openssh: ssh, scp, … Autentificación basada en clave pública Autentificación usuando Kerberos Registro de actividades del sistema: logcheck Instalación de logcheck Configuración de logcheck Herramientas para gestionar las actualización de paquetes Comprobación de paquetes...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Indice_de_gestion_remota_estado_del_sistema_actualizaciones_y_copias_de_seguridad",
        "teaser": null
      },{
        "title": "Índice de web segura: https",
        "excerpt":"   Características del protocolo https   Utilización de un certificado autofirmado   Utilización de un certificado emitido por una Autoridad Certificadora   Configuración de los navegadores web  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Indice_de_web_segura_https",
        "teaser": null
      },{
        "title": "3.- Instalación de la plataforma educativa moodle",
        "excerpt":"Moodle es un Ambiente Educativo Virtual, sistema de gestión de cursos, de distribución libre, que ayuda a los educadores a crear comunidades de aprendizaje en línea. Este tipo de plataformas tecnológicas también se conoce como LMS (Learning Management System). La página oficial de moodle es http://moodle.org/ La última versión de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Instalacion_de_la_plataforma_educativa_moodle",
        "teaser": null
      },{
        "title": "2.- Instalación de un servidor LAMP (Linux, Apache, MySQL y PHP)",
        "excerpt":"Instalación de LAMP Ahora vamos a instalar los paquetes necesarios para tener un entorno LAMP. Apache avatar:~# apt-get install apache2 MySQL avatar:~# apt-get install mysql-common mysql-client mysql-server Durante la instalación del servicio se nos pedirá la contraseña del usuario root del servidor mysql. PHP5 avatar:~# apt-get install php5 libapache2-mod-php5 php5-mysql...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Instalacion_de_un_servidor_LAMP_Linux_Apache_MySQL_y_PHP",
        "teaser": null
      },{
        "title": "3.- Instalación del sistema operativo",
        "excerpt":"El sistema operativo que vamos a utilizar en nuestro servidor avatar es Debian GNU/Linux 5.0 (Lenny). Lo próximo que tenemos que hacer es la instalación del sistema operativo en el servidor, para ello deberás descargarte una imagen ISO del instalador y realizar la instalación en el equipo que hayas elegido...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Instalacion_del_sistema_operativo",
        "teaser": null
      },{
        "title": "Lectura del correo: Dovecot IMAP + POP",
        "excerpt":"Objetivo Una vez conseguido el envío de correo a usuarios de nuestro dominio local (casos 1, 2 y 4) y a usuarios de otros dominios (casos 3 y 5 con ayuda del smarthost), nos queda pendiente la recepción del correo dirigido a usuarios de nuestro dominio avatar.doesntexist.org. Leeremos el correo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Lectura_del_correo_Dovecot_IMAP_+_POP",
        "teaser": null
      },{
        "title": "1.- NAT: Compartir una dirección IP pública entre varios equipos",
        "excerpt":"NAT NAT son las siglas del inglés Network Address Translation o traducción de direcciones de red y es un mecanismo que se usa ampliamente hoy en día, fundamentalmente porque permite compartir una dirección IP pública por muchos equipos y esto es imprescindible en muchas situaciones por la escasez de direcciones...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/NAT_Compartir_una_direccion_IP_publica_entre_varios_equipos",
        "teaser": null
      },{
        "title": "Tarea: Acceso a avatar mediante https",
        "excerpt":"Instala en avatar un certificado X.509 emitido por la autoridad certificadora CAcert asociado al nombre que tengas registrado en DynDNS. Configura moodle para que el login sea a través de https (Administración &gt; Seguridad &gt; Seguridad HTTP) Envíanos el nombre de tu equipo para que accedamos desde fuera mediante https...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Tarea_Acceso_a_avatar_mediante_https",
        "teaser": null
      },{
        "title": "Tarea: Acceso a moodle desde el exterior",
        "excerpt":"Para finalizar la parte común del curso, envíanos la dirección URL (nombre de dominio registrado en DynDns) para que podamos acceder a tu página y comprobar los siguientes puntos: En el nombre de la plataforma debe aparecer tu nombre completo. Se puede acceder al curso Introducción a los servicios en...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Tarea_Acceso_a_moodle_desde_el_exterior",
        "teaser": null
      },{
        "title": "Tarea: Configuración del servidor DHCP",
        "excerpt":"Siguiendo el esquema de red seleccionado: Vamos a configurar un servidor DHCP para repartir IP en la red 192.168.2.0/24 en nuestra red interna, para ello configura el servidor DHCP de avatar con las siguientes características: Tiempo de concesión: 1 mes Rango de direcciones: 192.168.2.100 - 192.168.2.150 Puerta de enlace: 192.168.2.1...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Tarea_Configuracion_del_servidor_DHCP",
        "teaser": null
      },{
        "title": "Tarea: Creación de un sistema de cuentas centralizadas",
        "excerpt":"Instala y configura los servicios ntp, slapd y kerberos en avatar y cliente siguiendo las indicaciones de la documentación. Realiza un login con el usuario pruebau (o cualquier otro que hayas creado en Kerberos/LDAP) en cliente y avatar. Instala y configura NFS4 para que se pueda montar de forma remota...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Tarea_Creacion_de_un_sistema_de_cuentas_centralizadas",
        "teaser": null
      },{
        "title": "Tarea: Envío y recepción de correos entre usuarios de nuestro dominio y usuarios de dominios externos.",
        "excerpt":"Objetivo: envío de correo desde Internet a una cuenta del dominio de Avatar y respuesta de éste al primero. Pasos: 1.Haciendo uso de tu cliente de correo habitual (gmail, hotmail, …), envía un mensaje de correo a una cuenta de tu dominio (alumno@avatar.doesntexist.org). Configura la recepción de mensajes en el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Tarea_Envio_y_recepcion_de_correos_entre_usuarios_de_nuestro_dominio_y_usuarios_de_dominios_externos",
        "teaser": null
      },{
        "title": "Tarea: Gestión remota, estado del sistema, actualizaciones y copias de seguridad",
        "excerpt":"   Manda el script que has realizado para hacer la copia de seguridad del servidor   Manda el fichero log de unison (/root/unison.log) trás realizar una copia del home del cliente.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Tarea_Gestion_remota_estado_del_sistema_actualizaciones_y_copias_de_seguridad",
        "teaser": null
      },{
        "title": "Tarea: Instalación y configuración del proxy-cache squid",
        "excerpt":"Instala el proxy-cache squid en avatar, configura el navegador del cliente para que acceda a internet a través del proxy de avatar, crea una ACL que deniegue el acceso a algunas páginas web y crea otra ACL que deniegue el acceso a contenido flash. En esta tarea tienes que entregar...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Tarea_Instalacion_y_configuracion_del_proxy-cache_squid",
        "teaser": null
      },{
        "title": "Tarea: Instalación y configuración del servidor bind9 en nuestra red local",
        "excerpt":"Tras realizar la instalación y configuración del servidor DNS en avatar, envía las salidas de los siguientes comandos ejecutados desde el cliente:     dig avatar.example.com   dig cliente.example.com   dig avatar.dynalias.com (pon aquí tu dirección de dyndns)   dig www.google.es  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Tarea_Instalacion_y_configuracion_del_servidor_bind9_en_nuestra_red_local",
        "teaser": null
      },{
        "title": "Tarea: Registros de funcionamiento ddns",
        "excerpt":"Sube un fichero que contenga las líneas relevantes de /var/log/syslog que demuestren el funcionamiento de DDNS en avatar. Para ello deberás realizar una actualización de la dirección IP de cliente mediante DHCP y mostrar la actualización del DNS en avatar.   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Tarea_Registros_de_funcionamiento_ddns",
        "teaser": null
      },{
        "title": "Utilización de DNS dinámico en una red local",
        "excerpt":"DNS dinámico Ventajas de utilizar DNS dinámico En el tema 3 de este curso se trata la configuración de un servidor DNS en la red local que actúe como servidor DNS caché para los equipos de la red local. En ese mismo tema también se explica cómo configurar Bind para...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/doc/Utilizacion_de_DNS_dinamico_en_una_red_local",
        "teaser": null
      },{
        "title": "Servicios en GNU/Linux. Portal Educativo (2010)",
        "excerpt":"Servicios en GNU/Linux. Portal Educativo de Alberto Molina Coballes, José Domingo Muñoz Rodríguez y José Luis Rodríguez Rodríguez tiene licencia Creative Commons Reconocimiento-Compartir bajo la misma licencia 3.0 Unported License Convocatoria del curso leeme.pdf Calendario del curso Cómo obtener la certificación del curso UNIDAD 0. Puesta en marcha del entorno...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2010/index",
        "teaser": null
      },{
        "title": "Consultas a un servidor DNS con dig",
        "excerpt":"dig es una herramienta que permite hacer consultas a un servidor DNS desde la línea de comandos, es el sustituto de los programas nslookup y host. La sintaxis es: dig \\[-t tipo de registro\\] \\[@servidor DNS\\] Consulta DNS El tipo de registro por defecto es ADDRESS y el servidor DNS...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Consultas_a_un_servidor_DNS_con_dig",
        "teaser": null
      },{
        "title": "Ejercicio: Gestión remota usando SSH",
        "excerpt":"En al mayoría de los casos no existe acceso físico al servidor, o simplemente la máquina no tiene conectada un monitor. Lo normal es acceder de forma remota. Nosotros vamos a usar ssh, para acceder de forma remota dede el cliente al servidor avatar. Instala ssh en avatar. Configura ssh...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Ejercicio_Gestion_remota_usando_SSH",
        "teaser": null
      },{
        "title": "Ejercicio: Herramientas para gestionar las actualización de paquetes ",
        "excerpt":"Las actualizaciones automáticas de los paquetes del sistema, o la notificación de los mismos, es una tarea importante que deben realiza los administradores de sistema. Lo que pretendemos con este ejercicio es aprender herramientas que nos permiten automatizar las tareas de actualización que puede ser mas que beneficioso, sobre todo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Ejercicio_Herramientas_para_gestionar_las_actualizacion_de_paquetes",
        "teaser": null
      },{
        "title": "Ejercicio: Planificación y realización de copias de seguridad del servidor",
        "excerpt":"Realización de script para realizar la copia de seguridad del servidor En este ejercicio vamos a realizar un script en bash para realizar las copias de seguridad de nuestro servidor avatar, que cumpla las siguientes especificaciones: Realiza el proceso de forma completamente automático: Para ello vamos a hacer que el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Ejercicio_Planificacion_y_realizacion_de_copias_de_seguridad_del_servidor",
        "teaser": null
      },{
        "title": "Ejercicio: Registro de actividades del sistema: logcheck",
        "excerpt":"logcheck Logcheck es una herramienta encargada de revisar periódicamente los logs del sistema y enviar un correo al administrador de lo que sea importante. Logcheck revisa periódicamente los logs del sistema, analizando cada una de las líneas y clasificándola según diferentes niveles de alerta, informando al administrador del sistema en...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Ejercicio_Registro_de_actividades_del_sistema_logcheck",
        "teaser": null
      },{
        "title": "Ejercicio: Sincronización de directorios con Unison",
        "excerpt":"Sincronización de directorios con Unison Unison permite mantener actualizados árboles completos en el mismo ordenador (diferentes directorios) o en ordenadores remotos (usando ssh u otros métodos). Además propaga las modificaciones en ambos sentidos. Así es posible mantener sincronizados casi los ordenadores que queramos. Si no hay conflictos (i.e. el mismo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Ejercicio_Sincronizacion_de_directorios_con_Unison",
        "teaser": null
      },{
        "title": "Índice",
        "excerpt":"   Introducción   Conceptos generales   Configuración previa   Instalación y configuración de Postfix en un equipo con dirección IP pública estática   Configuración de Postfix a través de un relay host autenticado   Dovecot POP e IMAP   Squirrelmail   Anexo: SMTP. Protocolos y comandos   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Indice",
        "teaser": null
      },{
        "title": "Índice: DNS dinámico",
        "excerpt":"   Instalación y configuración de bind9   Instalación y configuración de dhcp3-server   Configuración de los servidores bind9 y dhcp3-server para que se comuniquen a través del puerto 953/tcp   Configuración de los clientes DHCP   Pruebas de funcionamiento  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Indice_DNS_dinamico",
        "teaser": null
      },{
        "title": "Índice de Servidor apache: Módulos. HTTPS",
        "excerpt":"   Utilización de módulos en Apache   HTTPS en Apache   Utilización del acceso cifrado en un CMS (Joomla)   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Indice_de_Servidor_apache_Modulos_HTTPS",
        "teaser": null
      },{
        "title": "Índice de Sistema centralizado de cuentas: Kerberos, OpenLDAP y NFS4",
        "excerpt":"   Características del montaje   Instalación y configuración de LDAP   Instalación y configuración de Kerberos y LDAP   GSSAPI: Conexión entre Kerberos y LDAP   Autenticación del sistema con Kerberos (pam-krb)   NFS4 con Kerberos   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Indice_de_Sistema_centralizado_de_cuentas_Kerberos_OpenLDAP_y_NFS4",
        "teaser": null
      },{
        "title": "Índice de gestión remota, estado del sistema, actualizaciones y copias de seguridad",
        "excerpt":"Gestión remota usando ssh Instalación de openssh Configuración del servidor openssh Configuración y uso del cliente openssh: ssh, scp, … Autentificación basada en clave pública Registro de actividades del sistema: logcheck Instalación de logcheck Configuración de logcheck Herramientas para gestionar las actualización de paquetes Comprobación de paquetes actualizados: apticron y...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Indice_de_gestion_remota_estado_del_sistema_actualizaciones_y_copias_de_seguridad",
        "teaser": null
      },{
        "title": "Instalación del sistema operativo",
        "excerpt":"El sistema operativo que vamos a utilizar en nuestro servidor avatar es Debian GNU/Linux 5.0 (Lenny). Te ponemos algunos enlaces que te pueden ser de ayuda en la instalación: http://www.debian.org/index.es.html: Página oficial de esta distribución. http://www.debian.org/releases/lenny/debian-installer/index.en.html: Página de descarga de la última versión de Debian 5.0 (5.0.8) http://www.debian.org/releases/lenny/installmanual :Guía de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Instalacion_del_sistema_operativo",
        "teaser": null
      },{
        "title": "Preguntas y respuestas",
        "excerpt":"¿Qué voy a aprender en este curso? Los objetivos de este curso son los siguientes: Instalar y configurar servicios en GNU/Linux. (NIVEL INTERMEDIO) Configurar los componentes de un servidor de correo completo. Profundizar en el manejo del servidor web apache. Administrar de forma desatendida las zonas DNS mediante actualizaciones DHCP....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Preguntas_y_respuestas",
        "teaser": null
      },{
        "title": "Sitios recomendados",
        "excerpt":"   http://www.postfix.org/documentation.html   http://www.dovecot.org/   http://squirrelmail.org/   http://www.openssl.org   https://www.ietf.org/mailman/listinfo/sasl  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Sitios_recomendados",
        "teaser": null
      },{
        "title": "Tarea Correo",
        "excerpt":"Objetivo Envío de correo desde Internet a una cuenta del dominio de Avatar y respuesta de éste al primero. Pasos Haciendo uso de tu cliente de correo habitual (gmail, hotmail, …), envía un mensaje de correo a una cuenta de tu dominio (en el curso alumno@avatar.doesntexist.org). 2.Configura la recepción de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Tarea_Correo",
        "teaser": null
      },{
        "title": "Tarea: DNS dinámico",
        "excerpt":"Partiendo de las características del servidor DNS y el servidor DHCP presentadas en el documento: Utilización de DNS dinámico en una red local, configura ambos servicios para permitir la actualización dinámica de las direcciones IP asignadas en el servidor DNS. Para entregar: La salida del comando dig cliente.example.com, y las...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Tarea_DNS_dinamico",
        "teaser": null
      },{
        "title": "Tarea: Gestión remota, estado del sistema, actualizaciones y copias de seguridad",
        "excerpt":"   Manda el script que has realizado para hacer la copia de seguridad del servidor   Manda el fichero log de unison (/root/unison.log) trás realizar una copia del home del cliente.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Tarea_Gestion_remota_estado_del_sistema_actualizaciones_y_copias_de_seguridad",
        "teaser": null
      },{
        "title": "Tarea Servidor apache",
        "excerpt":"Esta tarea consiste en configurar un sitio web con el CMS Joomla y configurarlo para que el proceso de autenticación se realice de forma segura cifrando el acceso con SSL, para ello deberás realizar los siguientes pasos: Instala apache en avatar Crea un certificado autofirmado con una clave RSA de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Tarea_Servidor_apache",
        "teaser": null
      },{
        "title": "Tarea: Sistema de cuentas centralizadas",
        "excerpt":"Instala y configura los servicios ntp, slapd y kerberos en avatar y cliente siguiendo las indicaciones de la documentación. Realiza un login con el usuario prueba (o cualquier otro que hayas creado en Kerberos/LDAP) en cliente y avatar. Instala y configura NFS4 para que se pueda montar de forma remota...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Tarea_Sistema_de_cuentas_centralizadas",
        "teaser": null
      },{
        "title": "Utilización de DNS dinámico en una red local",
        "excerpt":"DNS dinámico Ventajas de utilizar DNS dinámico Suponemos que actualmente tenemos instalado en nuestro servidor avatar un servidor DNS caché que da servicio a los ordenadores de nuestra intranet y además actúa como servidor maestro (master) de un dominio DNS (example.com será el que utilizaremos siempre puesto que está reservado...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/doc/Utilizacion_de_DNS_dinamico_en_una_red_local",
        "teaser": null
      },{
        "title": "Servicios en GNU/Linux (Nivel Intermedio) (2011)",
        "excerpt":"Objetivos Instalar y configurar servicios en GNU/Linux. (NIVEL INTERMEDIO) Configurar los componentes de un servidor de correo completo. Profundizar en el manejo del servidor web apache. Administrar de forma desatendida las zonas DNS mediante actualizaciones DHCP. Profundizar en el conocimiento de servicios en sistemas GNU/Linux, tratando aplicaciones habituales como Kerberos,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/servicios2011/index",
        "teaser": null
      },{
        "title": "Añadir \"novedades\" de la Consejeria de Educación en el programa Liferea",
        "excerpt":"Añade el programa Liferea una nueva entrada para sindicar las noticias del apartador “novedades” de la Consejeria de Educación.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Anadir_%22novedades%22_de_la_Consejeria_de_Educacion_en_el_programa_Liferea",
        "teaser": null
      },{
        "title": "Autentificación en el sistema. Ventajas del trabajo multiusuario",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Autentificacion_en_el_sistema._Ventajas_del_trabajo_multiusuario",
        "teaser": null
      },{
        "title": "Componentes Hardware",
        "excerpt":"Cableado troncal Dispuesto a lo largo de todo el instituto en bandejas de PVC y encargado de conectar mediante cable de red todas las aulas con el armario de datos. Aunque un aula no sea TIC tiene una roseta que puede conectarla a la red TIC. Armario de datos Debe...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Componentes_Hardware",
        "teaser": null
      },{
        "title": "Crear una estructura de Carpetas",
        "excerpt":"        Crear en tu directorio HOME las siguiente carpetas, para clasificar la información:              Documentos: Carpeta donde guardaremos los documentos que hagamos.       Música: Para guardar los ficheros de audio.       Vídeo: Para guardar los ficheros de vídeo.       Descargas: Para guardar los ficheros que bajes de Internet.           ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Crear_una_estructura_de_Carpetas",
        "teaser": null
      },{
        "title": "Crear una presentación en Impress",
        "excerpt":"Crear una pequeña presentación de 3 diapositivas utilizando el programa Impress.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Crear_una_presentacion_en_Impress",
        "teaser": null
      },{
        "title": "Diseño y estructura",
        "excerpt":"Los pasos a seguir por parte del profesor para crear una “Caza del Tesoro” los podemos resumir así: Identificar una idea/concepto que queremos reforzar o introducir. Buscar en la Web sitios que refuercen/introducen el concepto. Elaborar cuestiones cuya respuesta el alumno encontrará en dichos sitios. Elaborar una hoja de trabajo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Diseno_y_estructura",
        "teaser": null
      },{
        "title": "Ejemplos de Cazas de Tesoro",
        "excerpt":"En Inglés hay muchos sitios Web con colecciones de “cazas de tesoros” hechas por docentes de todos los niveles y áreas. Si introducimos en cualquier buscador tipo Google la cadena ?treasure hunt? ? scavenger hunt ? o ?knowledge hunt ? encontraremos miles de ellas. En español sin embargo existen pocas....","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Ejemplos_de_Cazas_de_Tesoro",
        "teaser": null
      },{
        "title": "Ejemplos de WebQuests",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Ejemplos_de_WebQuests",
        "teaser": null
      },{
        "title": "Ejercicio con ficheros comprimidos",
        "excerpt":"Bajate el fichero comprimido de ejemplo, y descomprímelo en una carpeta que se llame “TIC”, a continuación identifica el formato de los ficheros que estaban comprimidos.   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Ejercicio_con_ficheros_comprimidos",
        "teaser": null
      },{
        "title": "Ejercicios de guardar archivos",
        "excerpt":"   Crea un pequeño documento con Writer y guardalo en la carpeta Documentos (si no existe esta carpeta debes crearla) con extensión doc.   Abre el documento del curso Guía Guadalinex v3 , y guárdalo en la carpeta Documentos.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Ejercicios_de_guardar_archivos",
        "teaser": null
      },{
        "title": "El paquete ofimático OpenOffice",
        "excerpt":"Introducción Una de las aplicaciones más importantes de Guadalinex es la suite ofimática OpenOffice.org2. La calidad de los componentes, versatilidad, cantidad de usuarios, internacionalización y documentación la colocan como el conjunto de aplicaciones de oficina más importantes del software libre. Una de las grandes ventajas de OpenOffice.org es que se...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/El_paquete_ofimatico_OpenOffice",
        "teaser": null
      },{
        "title": "El sistema de ficheros",
        "excerpt":"Introducción La jerarquía de ficheros de un sistema UNIX como Guadalinex puede resultar un poco extraña al principio, pero con el uso resulta muy cómoda y lógica. Además es la misma desde hace más de 30 años. Los ficheros se organizan mediante directorios en lo que se conoce como un...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/El_sistema_de_ficheros",
        "teaser": null
      },{
        "title": "Estructura",
        "excerpt":"Estructura de una WebQuest Introducción (al tema).Tiene dos objetivos: Orientar al alumno sobre lo que se va a encontrar Incrementar su interés por la actividad Tarea (para que el alumno realice). Se proporciona una descripción clara de lo que tendrá que haber hecho al finalizar la actividad. Se puede efectuar...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Estructura",
        "teaser": null
      },{
        "title": "Estudio de los componentes de un aula TIC",
        "excerpt":"Introducción El objetivo de este documento es dar orientaciones básicas para utilizar las aulas TIC. A continuación se muestran las orientaciones desglosadas en varios pasos. Antes de entrar en el aula Para poder entrar en una aula TIC necesitamos una llave maestra de aulas TIC, tenemos dos llaves maestras: las...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Estudio_de_los_componentes_de_un_aula_TIC",
        "teaser": null
      },{
        "title": "Estudio de los distintos formatos de ficheros",
        "excerpt":"Introducción Un formato de fichero es una manera particular de codificar información para almacenarla en un fichero informático. Dado que una unidad de disco, o de hecho cualquier almacenamiento informático, la computadora debe tener alguna manera de convertir la información a ceros y unos y viceversa. Hay diferentes tipos de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Estudio_de_los_distintos_formatos_de_ficheros",
        "teaser": null
      },{
        "title": "Filtro de contenidos",
        "excerpt":"Existe una aplicación en el servidor de seguridad que le permite modi?carlo. Se accede desde el propio centro en la URL http://f0/app/filtrodecontenido/ El nombre de usuario y contraseña para acceder al filtro de contenido deben ser de profesor. Si tras pulsar en el enlace le sale alguna ventana emergente referente...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Filtro_de_contenidos",
        "teaser": null
      },{
        "title": "Grabar CD / DVD",
        "excerpt":"Grabación de un CD-ROM o DVD-ROM en Guadalinex Introducción Fotografías de familia, trabajos del colegio, del instituto o de la universidad, vídeos domésticos digitalizados… ¿Quién no necesita el almacenamiento en soporte óptico digital? Hoy en día ya no es usual encontrar un equipo informático doméstico sin su correspondiente grabadora de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Grabar_CD___DVD",
        "teaser": null
      },{
        "title": "Guía del trabajo no presencial",
        "excerpt":"Con la realización de este trabajo pretendemos que los departamentos hagan una reflexión sobre las posibilidades que ofrece el proyecto TIC en nuestro centro. Durante las sesiones del curso hemos visto gran cantidad de aplicaciones educativas y posibilidades que nos ofrece el trabajo con ordenadores, pero quizás con este último...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Guia_del_trabajo_no_presencial",
        "teaser": null
      },{
        "title": "Hacer una copia de seguridad en un CD",
        "excerpt":"Copia en un CD virgen algunos archivos y carpetas de tu directorio personal.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Hacer_una_copia_de_seguridad_en_un_CD",
        "teaser": null
      },{
        "title": "Lectura de documentos pdf",
        "excerpt":"Hoy en día el formato pdf se ha convertido en el estándar a la hora de intercambiar ficheros en la Web. Principalmente se utiliza a la hora de compartir un fichero con otros que no necesitan modificarlo, simplemente quieren visualizarlo o imprimirlo. La gran ventaja del formato pdf es que...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Lectura_de_documentos_pdf",
        "teaser": null
      },{
        "title": "Lista de aplicaciones en Guadalinex v3",
        "excerpt":"Introducción Guadalinex no es sólo un sistema operativo que hace que tu ordenador arranque y que tu disco, pantalla, ratón y teclado funcionen. Tanto el escritorio gráfico, como las aplicaciones que se incluyen en Guadalinex V3 hacen que que este sea un sistema muy útil, potente, práctico y fácil de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Lista_de_aplicaciones_en_Guadalinex_v3",
        "teaser": null
      },{
        "title": "Manejo de unidades de memoria USB",
        "excerpt":"Inserta la unidad de memoria y explora su contenido Copia un fichero del escritorio a la unidad de memoria Copia un fichero de la unidad de memoria al escritorio Modifica los permisos de este último fichero a “sólo lectura” Intenta borrar el fichero anterior Desmonta correctamente la unidad de memoria...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Manejo_de_unidades_de_memoria_USB",
        "teaser": null
      },{
        "title": "Manual de uso de la cámara de vídeo digital (Captura de vídeo con Kino",
        "excerpt":"En este manual vamos a describir el proceso a seguir para extraer vídeo digital desde una cámara de vídeo digital utilizando Guadalinex-V3. Necesitaremos: Ordenador con puerto Firewire incorporado. Sistema operativo Guadalinex V3 con Kino 0.8 instalado. Videocámara digital Sony DCR-HC30E, HC32E ó HC35E. Cómo conectar la videcámara con el equipo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Manual_de_uso_de_la_camara_de_video_digital__Captura_de_video_con_Kino",
        "teaser": null
      },{
        "title": "Navegación por internet con Firefox",
        "excerpt":"Veamos algunos aspectos importantes del navegador Firefox: Navegación por pestañas Consiste en poder abrir en una sola ventana del programa varias páginas a la vez, pudiendo ir de una a otra a través de sendas pestañas (o fichas). De este modo, la navegación resulta más cómoda y organizada y se...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Navegacion_por_internet_con_Firefox",
        "teaser": null
      },{
        "title": "Normas de uso de las aulas TIC",
        "excerpt":"El alumnado ?nunca? debe quedar solo en el aula. El profesor/a abre el aula y cierra el aula en todos los cambios de clase. Cada alumno al comenzar cada hora de clase, firmará el cuadro de ocupación, poniendo su nombre completo y su firma. Los alumnos, al entrar revisarán el...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Normas_de_uso_de_las_aulas_TIC",
        "teaser": null
      },{
        "title": "Obteniendo información de Internet",
        "excerpt":"Desde el navegador de Internet, busca los siguientes elementos y guárdalos en tu disco duro: Busca una imagen y guárdala en la carpeta “Imágenes” dentro de tu carpeta personal. Busca un fichero pdf y guárdalo en la carpeta “Documentos” dentro de tu carpeta personal. Escoge un texto que te interese...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Obteniendo_informacion_de_Internet",
        "teaser": null
      },{
        "title": "OpenOffice y PDF",
        "excerpt":"Abre la aplicación OpenOffice Writer y escribe un documento de prueba, expórtalo a PDF y sube este fichero como ejercicio.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/OpenOffice_y_PDF",
        "teaser": null
      },{
        "title": "Operaciones con ficheros: Abrir, guardar,...",
        "excerpt":"Writer Una vez que has terminado de escribir el documento, tenemos que guardarlo. En el momento de guardar el documento creado utilizaremos, también, el menú Archivo pero usaremos la opción Guardar, con la que obtendremos el siguiente cuadro de diálogo: Hay que prestar especial atención a dos aspectos en esta...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Operaciones_con_ficheros_Abrir_guardar",
        "teaser": null
      },{
        "title": "Para saber más...",
        "excerpt":"   Internet en el aula: a la caza del tesoro   Cazas del tesoro, en aula21.net   Más Cazas del Tesoro  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Para_saber_mas",
        "teaser": null
      },{
        "title": "Para seber más...",
        "excerpt":"Recursos sobre Webquest      Webquest en aula21.net   ¿Qué son las webquest?   Las Webquest (Universidad de La Laguna)   Biblioteca semática de WebQuest   Una metodología para enseñar con Internet   Otra página sobre webquest   ¿Y qué dice la Wikipedia?  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Para_seber_mas",
        "teaser": null
      },{
        "title": "Presentación del curso",
        "excerpt":"Objetivos Queremos hacer una presentación general del Proyecto TIC, ofreciendo toda la información para entender por qué se ha optado por introducir software libre (Guadalinex), y la repercusión que tiene el uso de las nuevas tecnologías en la labor educativa del profesor. Hemos visto que con la incorporación al Proyecto...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Presentacion_del_curso",
        "teaser": null
      },{
        "title": "Programas Educativos en Gudalinex - Ciencias",
        "excerpt":"Kalzium Kalzium es una aplicación para Linux que nos muestra información sobre el sistema periódico de los elementos. Este programa puede ser usado como fuente de información o consulta por estudiantes o profesores, incluso investigadores químicos. Además, provee de dos tests distintos que pondrán a prueba nuestros conocimientos de Química...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Programas_Educativos_en_Gudalinex_-_Ciencias",
        "teaser": null
      },{
        "title": "Programas Educativos en Gudalinex - Geografía",
        "excerpt":"KGeography KGeography es una herramienta de geografía para KDE. Le permitirá aprender acerca de las divisiones políticas de algunos países (divisiones, capitales o aquellas divisiones y sus banderas asociadas si hay alguna). Los mapas disponibles en la versión actual son: África, Asia, Austria, Brasil, Canadá, China, Europa, Francia, Alemania, Italia,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Programas_Educativos_en_Gudalinex_-_Geografia",
        "teaser": null
      },{
        "title": "Programas Educativos en Gudalinex - Idiomas",
        "excerpt":"i2e Diccionario de inglés a español. KHangMan KHangMan es un juego basado en el conocido juego del ahorcado. Está dirigido a niños de seis años o más. Tiene cuatro niveles de dificultad: Animales (palabras de animales), Fácil, Medio y Difícil. Se escoge una palabra aleatoriamente, las letras están ocultas, se...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Programas_Educativos_en_Gudalinex_-_Idiomas",
        "teaser": null
      },{
        "title": "Programas Educativos en Gudalinex - Lengua",
        "excerpt":"gtypist Gtypist v2.6 te da la posibilidad de aprender a escribir correctamente a máquina de forma muy sencilla, mejorando tu habilidad mediante la práctica de ejercicios regulares. KTouch Ktouch es un programa informático que enseña a mecanografiar. El programa visualiza un teclado qwerty iluminando la siguiente tecla a pulsar y...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Programas_Educativos_en_Gudalinex_-_Lengua",
        "teaser": null
      },{
        "title": "Programas Educativos en Gudalinex - Matemáticas",
        "excerpt":"bc bc es una calculadora en línea de comandos. Introducción a bc geg Sencillo pero potente programa para representación de funciones, disponible en Guadalinex. Página principal de geg KBrush KBruch es un pequeño programa para practicar cálculos con fracciones. Para ello se ofrecen 4 tipos de ejercicios diferentes: Tarea de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Programas_Educativos_en_Gudalinex_-_Matematicas",
        "teaser": null
      },{
        "title": "Programas Educativos en Gudalinex - Música",
        "excerpt":"Audacity Audacity es un programa libre y de código abierto para grabar y editar sonidos. Manual de Audacity gtick Gtick es una aplicación de metrónomo gráfica y acústica, con muestra de tabla de acentos, posibilidad de ajuste de velocidad (de 30 a 250 pulsos por minuto) y volumen, y manejo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Programas_Educativos_en_Gudalinex_-_Musica",
        "teaser": null
      },{
        "title": "Programas Educativos en Gudalinex - Tecnología",
        "excerpt":"electric Programa que permite modelar circuitos eléctricos. Manual de electric ktechlab KTechlab es un programa de diseño electrónico, más concretamente para diseñar y simular circuitos con microcontroladores PIC’s (actualmente solo soporta 16F84). Entre otras muchas cosas permite: *Simulación de dispositivos lineales, no lineales y lógicas. *Programación mediante: Diagramas de flujos,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Programas_Educativos_en_Gudalinex_-_Tecnologia",
        "teaser": null
      },{
        "title": "Puesta a punto de un aula TIC",
        "excerpt":"Dirígete al aula asignada y realiza las siguientes tareas:      Enciende el cuadro de suministro eléctrico   Identifica las luces del punto de acceso y verifica el encendido correcto   Identifica el grupo de ordenadores que corresponde a cada diferencial   Encuentra el motivo por el que algunos equipos no funcionan   ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Puesta_a_punto_de_un_aula_TIC",
        "teaser": null
      },{
        "title": "Recomendaciones para aulas inalámbricas",
        "excerpt":"El medio físico por el que se transmiten los datos en una red inalámbrica (el aire) es de naturaleza inestable. Los datos están sujetos a solapamientos, interferencias, ruido, etc. Es por esto que desde la experiencia con las redes inalámbricas que tenemos en el CGA queríamos haceros llegar las siguientes...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Recomendaciones_para_aulas_inalambricas",
        "teaser": null
      },{
        "title": "Recursos sobre JClic",
        "excerpt":"Zona Clic**: Sitio web oficial de JClic, con información sobre el programa, descarga de cientos de aplicaciones educativas de todos los niveles realizadas con JClic, documentos, enlaces, etc. Aplicaciones educativas: Página dedicada a Clic en la recopilación de recursos educativos de Juan José Mateo Molina. Incluye aplicaciones no publicadas aún...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Recursos_sobre_JClic",
        "teaser": null
      },{
        "title": "Recursos webs sobre Hot Potatoes",
        "excerpt":"   Curso de Hot Potatoes, en Aula21.net   Tutoriales sobre Hot Potatoes   Curso de recursos informáticos: Hot Potatoes   Actividades Hot Potatoes  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Recursos_webs_sobre_Hot_Potatoes",
        "teaser": null
      },{
        "title": "Sindicación de contenidos web. Lectores de noticias",
        "excerpt":"Sindicación de contenidos web Según la wikipedia: Parte del contenido de una página web se pone a disposición de otros sitios o suscriptores individuales. El estándar de sindicación web más extendido es RSS, seguido por Atom. Los programas informáticos compatibles con alguno de estos estándares consultan periódicamente una página con...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Sindicacion_de_contenidos_web._Lectores_de_noticias",
        "teaser": null
      },{
        "title": "Solución de problemas más frecuentes que nos podemos encontrar en un aula TIC",
        "excerpt":"Los ordenadores no encienden. Compruebe el interruptor general del cuadro de suministro eléctrico, si está desconectado, conéctelo. Si está conectado, y sigue sin haber electricidad significa que no llega electricidad al aula. Esto puede estar debido a que el conector externo del aula esta desconectado. Para comprobar el conector externo...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Solucion_de_problemas_mas_frecuentes_que_nos_podemos_encontrar_en_un_aula_TIC",
        "teaser": null
      },{
        "title": "Trabajando con imágenes: Gimp, inkscape, gThumb Gimp",
        "excerpt":"GIMP es el acrónimo para GNU Image Manipulation Program. Es un programa libre apropiado para tareas como retoque fotográfico, y composición y edición de imagen. Es especialmente útil para la creación de logotipos y otros gráficos para páginas web. Tiene muchas de las herramientas y filtros que se esperaría encontrar...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Trabajando_con_imagenes_Gimp_inkscape_gThumb",
        "teaser": null
      },{
        "title": "Trabajando con unidades extraibles",
        "excerpt":"Introducción Existen diferentes tipos de dispositivos extraíbles, pero casi todos coinciden en la forma de utilizarse en Guadalinex. Hoy en día las memorias USB son los dispositivos más utilizados por su alta capacidad y rapidez. Los disquetes sólo se utilizan en contadas ocasiones y los CD/DVD para almacenar información de...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Trabajando_con_unidades_extraibles",
        "teaser": null
      },{
        "title": "Trabajando con video y sonido ¿Cómo ver películas DVD?",
        "excerpt":"El procedimiento para ver un dvd será tan simple como Abrir físicamente la bandeja del lector de DVD Colocar el DVD en la bandeja del lector Cerrar la bandeja y esperar. Automáticamente se reproducirá el contenido del DVD con el programa Totem. Explicación Animada Pincha en la imagen para ver...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Trabajando_con_video_y_sonido",
        "teaser": null
      },{
        "title": "Trabajar con ficheros comprimidos",
        "excerpt":"Introducción La compresión de archivos es un recurso muy utilizado en el mundo de la informática. A grandes rasgos, la compresión consiste en crear un archivo de menor tamaño partiendo de uno o varios ficheros. Las ventajas de la compresión son indudables ya que permiten un mejor aprovechamiento de los...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Trabajar_con_ficheros_comprimidos",
        "teaser": null
      },{
        "title": "Trabajar con permisos de ficheros",
        "excerpt":"Permisos de ficheros El hecho de utilizar un sistema multiusuario implica que cada fichero tiene un propietario y obliga inmediatamente a establecer permisos de lectura y escritura para los demás usuarios. Por ejemplo, sobre el directorio donde almacene mi correo electrónico nadie debe tener permiso de lectura, mientras que en...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Trabajar_con_permisos_de_ficheros",
        "teaser": null
      },{
        "title": "Uso de los ordenadores en una aula TIC",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Uso_de_los_ordenadores_en_una_aula_TIC",
        "teaser": null
      },{
        "title": "Usuarios remotos: Gesuser 2",
        "excerpt":"Gesuser es una herramienta que se utiliza para gestionar los usuarios del centro de una manera intuitiva y con la posibilidad de repartir las tareas de coordinación con los compañeros. Acceso a la Aplicación. Gesuser es una aplicación web, por lo que el acceso a ésta se realiza mediante un...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Usuarios_remotos_Gesuser_2",
        "teaser": null
      },{
        "title": "Utilidades y programas educativos en el servidor de contenidos",
        "excerpt":"   Para más información sobre el proyecto Descartes, visita esta página.  ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Utilidades_y_programas_educativos_en_el_servidor_de_contenidos",
        "teaser": null
      },{
        "title": "Utilización del cañon virtual Cañon de Red Virtual (CRV)",
        "excerpt":"El Cañón de Red Virtual (CRV) es una aplicación creada para transmitir contenido audiovisual a través de una red local, en este caso entre los ordenadores de un aula TIC, facilitando al personal docente su labor haciendo uso de las nuevas tecnologías. Permite la transmisión de contenidos desde cualquier ordenador...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Utilizacion_del_canon_virtual",
        "teaser": null
      },{
        "title": "Webs Educativas",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/Webs_Educativas",
        "teaser": null
      },{
        "title": "¿Qué es Hot Potatoes?",
        "excerpt":"HOT POTATOES es una aplicación distribuida desde la web de la Universidad de Victoria de Canadá que permite crear páginas web dinámicas con ejercicios de autoevaluación y comprensión, sin necesidad de tener ningún tipo de conocimiento sobre lenguajes web (HTML) o de script (Javascript). ¿Qué puedo hacer con Hot Potatoes?...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/%C2%BFQue_es_Hot_Potatoes_",
        "teaser": null
      },{
        "title": "¿Qué es JClic?",
        "excerpt":"JClic es una herramienta de autor que permite al profesorado crear con facilidad recursos educativos digitales. JClic está formado por un conjunto de aplicaciones informáticas que sirven para realizar diversos tipos de actividades educativas: rompecabezas, asociaciones, ejercicios de texto, palabras cruzadas … Las actividades no se acostumbran a presentar solas,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/%C2%BFQue_es_JClic_",
        "teaser": null
      },{
        "title": "¿Qué es Squeak?",
        "excerpt":"Squeak busca ser un meta-medio. Un lugar donde convivan todos los medios de expresión conocidos hasta la fecha (texto, video, sonido, música, gráficos 2D, gráficos 3D, TextToSpeech, etc) y que sirva, a su vez, como soporte para el desarrollo de nuevos medios. Esta característica, sumada a la capacidad de simulación,...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/%C2%BFQue_es_Squeak_",
        "teaser": null
      },{
        "title": "¿Qué es una WebQuest?",
        "excerpt":"Definición Una de las actividades más corrientes efectuadas por los alumnos en Internet es la búsqueda de información, a menudo con ayuda de los motores de búsqueda como Google, Alta Vista o Yahoo. Sin embargo, estas investigaciones son actividades difíciles que toman mucho tiempo y que pueden resultar frustrantes si...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/%C2%BFQue_es_una_WebQuest_",
        "teaser": null
      },{
        "title": "¿Qué son?",
        "excerpt":"Se trata de algo tan sencillo como una hoja de trabajo o una página web con una serie de preguntas y un listado de direcciones de Internet en las que los alumnos han de buscar las respuestas. Al final se debe incluir la ?gran pregunta?, cuya respuesta no aparece directamente...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/doc/%C2%BFQue_son_",
        "teaser": null
      },{
        "title": "Curso TIC - IES Gonzalo Nazareno (2007)",
        "excerpt":"Presentación del curso Documentación General del Curso Guía Guadalinex v3 Guía Centros TIC Introducción al uso de la plataforma educativa Moodle Motivación y presentación del proyecto GNU/Linux, Guadalinex, TIC, conocimiento libre, … Presentación de Unidad 1 (odp) Presentación Unidad 1 (pdf) Posibilidades Educativas de las TIC’s Recursos interesantes: Proyecto Guadalinex...","categories": [],
        "tags": [],
        "url": "/pledin/cursos/tic2007/index",
        "teaser": null
      }]
