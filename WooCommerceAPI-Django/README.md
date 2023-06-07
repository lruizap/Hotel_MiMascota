# Hotel MiMascota

# Proyecto Integrado DAW

| Autor | Lucas Ruiz Zapata |
| --- | --- |
| Tutor | Fernando Pérez Fernández |

I.E.S. Francisco Romero Vargas (Jerez de la Frontera)

---

Desarrollo de Aplicaciones Web

---

Curso: 2022/2023

---

## Introducción

El proyecto "Hotel MiMascota" es una aplicación web desarrollada como parte del segundo año de Desarrollo de Aplicaciones Web (DAW). Esta aplicación combina un sitio web basado en WordPress con una tienda en línea gestionada a través de un panel de administración creado con Django.

El objetivo principal del proyecto es proporcionar al cliente tanto la web como un panel de administración de esta para que sea el propio cliente el que pueda gestionar su tienda. El sitio web basado en WordPress ofrece información detallada sobre el hotel, sus servicios y tarifas, así como una sección de contacto para consultas y reservas y una tienda con productos para animales.

La funcionalidad clave del proyecto se encuentra en la tienda en línea, donde los usuarios pueden acceder a una amplia gama de productos y servicios relacionados con el cuidado de las mascotas. Esto incluye opciones de alojamiento, servicios de alimentación, cuidado veterinario, accesorios y mucho más. El panel de administración desarrollado con Django permite a los propietarios del hotel gestionar de manera eficiente los productos de la tienda en línea.

El proyecto "Hotel MiMascota" refleja una mezcla entre un CMS popular como WordPress con un framework robusto como Django para ofrecer una solución completa y funcional. 

La documentación del proyecto está dividida en varios puntos: 

## Índice

1. [Finalidad](Hotel%20MiMascota%20f7fff2e00c244ec5ad14416ec3ab3e5f.md) 
2. [Objetivos](Hotel%20MiMascota%20f7fff2e00c244ec5ad14416ec3ab3e5f.md) 
3. [Medios Necesarios](Hotel%20MiMascota%20f7fff2e00c244ec5ad14416ec3ab3e5f.md) 
4. [Planificación](Hotel%20MiMascota%20f7fff2e00c244ec5ad14416ec3ab3e5f.md) 
5. [Documentación del proyecto](Hotel%20MiMascota%20f7fff2e00c244ec5ad14416ec3ab3e5f.md) 
    - [Panel de Administración para WooCommerce](Hotel%20MiMascota%20f7fff2e00c244ec5ad14416ec3ab3e5f/Panel%20de%20Administracio%CC%81n%20para%20WooCommerce%204c4e3cf1e0864fb3ab1c0993dfd4eedc.md)
    - [Guía de Usuario](Hotel%20MiMascota%20f7fff2e00c244ec5ad14416ec3ab3e5f/Gui%CC%81a%20de%20Usuario%20e39df334cf96419997419b7c9de68b15.md)
6. [Manejo de Errores](Hotel%20MiMascota%20f7fff2e00c244ec5ad14416ec3ab3e5f.md) 
7. [Bibliografía](Hotel%20MiMascota%20f7fff2e00c244ec5ad14416ec3ab3e5f.md) 
8. [Conclusión](Hotel%20MiMascota%20f7fff2e00c244ec5ad14416ec3ab3e5f.md) 

## Finalidad

El objetivo principal del proyecto es proporcionar una forma de administrar la tienda hecha con Wordpress a través de una aplicación web desarrollada con Django para así simplificar y agilizar el proceso de gestión de productos y edición de estos.

La finalidad básica es proporcionar una herramienta que sea intuitiva y fácil de usar y que permita agregar, editar y eliminar productos de una forma muy sencilla y a tiempo real, es decir, que todos los cambios realizados en la aplicación también se realicen en el propio WordPress que administra al mismo tiempo. 

Además que al ser una aplicación destinada para un cliente en concreto, esta cuenta con medidas de seguridad así como inicios de sesión con usuarios destinados a la administración de la tienda.

En resumen, la funcionalidad básica del proyecto es proporcionarle al cliente un sitio web para que pueda administrar su tienda sin tener que acceder al panel de administración de WordPress.

## Objetivos

Los objetivos que se planea cumplir con este proyecto son los siguientes:

- Construir la aplicación web con Django para la administración de una tienda hecha con WordPress

Este primer objetivo es el objetivo principal del proyecto, ser capaz de desarrollar una aplicación web que pueda servir para cualquier página creada con WordPress, es decir, hacer la aplicación lo más global posible para que funcione en cualquier web.

- Crear y gestionar una web con un CMS (En este caso WordPress)
- Crear una aplicación web con Django
- Administrar la tienda de la web hecha con Wordpress con la aplicación creada con Django
- Utilizar APIs como la de WooCommerce y Cloudinary para llevar a cabo los objetivos de administración, creación y publicación de productos
- Crear un sitio web seguro, intuitivo y accesible para que el cliente pueda modificar sus productos desde cualquier dispositivo

## Medios Necesarios

Los medios que se han necesitado para la elaboración del proyecto son los siguientes:

1. Equipo básico de hardware.
    
    Con esto me refiero a un ordenador, con sus periféricos, con su sistema operativo, en mi caso Windows; y con conexión a internet.
    
2. Visual Studio Code
    
    Visual Studio Code es un editor de código desarrollado por Microsoft y es una herramienta altamente versátil y potente que proporciona una amplia gama de características y funcionalidades para facilitar el proceso de escritura y edición de código.
    
    Dentro de este apartado hago mención a las extensiones creadas por la comunidad para facilitar la codificación en distintos lenguajes. 
    
    Quiero mencionar a la extensión de `Prettier`, por su función de ayudar a darle formato al código.
    
3. Notion
    
    Notion es una plataforma de productividad y gestión de proyectos que combina características de un procesador de textos, una hoja de cálculo, una herramienta de gestión de tareas y mucho más. Es una aplicación todo en uno que permite a los usuarios organizar y gestionar información de manera flexible y colaborativa.
    
    Esta herramienta ha sido muy útil a la hora de crear la documentación del proyecto y para realizar notas, apuntes, gestión de tareas y administración del mismo.
    
4. Tailwind CSS
    
    Tailwind CSS es un framework de diseño de código abierto basado en CSS que se enfoca en la creación de interfaces web altamente personalizables y eficientes. A diferencia de otros frameworks CSS, Tailwind CSS se basa en la idea de proporcionar una amplia gama de clases utilitarias predefinidas que se pueden aplicar directamente en el marcado HTML para estilizar los elementos.
    
5. WordPress
    
    WordPress es un sistema de gestión de contenido (CMS, por sus siglas en inglés) que permite crear y administrar fácilmente sitios web, blogs y tiendas en línea. Es una de las plataformas más populares y utilizadas en todo el mundo debido a su facilidad de uso y su amplia variedad de características y personalizaciones.
    
6. Lenguajes de Programación
    
    Dentro de este proyecto hay unos cuantos lenguajes de programación que he usado para la realización del mismo. Entre ellos destacan Python, JavaScript y Jinja.
    
7. Librerías de Python
    
    En este apartado incluyo todas las librerías que he necesitado para llevar a cabo el proyecto y al entorno virtual de trabajo. 
    
    Entre estas destacan `venv, django, cloudinary y woocommerce`
    
8. Django
    
    Django es un framework de desarrollo web de alto nivel, basado en el lenguaje de programación Python. Fue creado con el objetivo de simplificar y acelerar el proceso de desarrollo de aplicaciones web robustas y seguras.
    
9. OVH
    
    OVH es una empresa francesa líder en servicios de alojamiento web, servidores dedicados, servicios en la nube y registro de dominios. OVH es uno de los proveedores más reconocidos y confiables en la industria de la tecnología.
    
10. FileZilla
    
    FileZilla es un software de código abierto y multiplataforma que se utiliza como cliente FTP (Protocolo de Transferencia de Archivos) para facilitar la transferencia de archivos entre un ordenador local y un servidor remoto a través de Internet. Es una herramienta popular y ampliamente utilizada por desarrolladores web y administradores de sistemas.
    
    Esta herramienta me ha ayudado mucho para realizar copias de seguridad del sitio web creado con WordPress y para subir ficheros al mismo.
    
11. APIs
    
    En este apartado destacan las dos APIs que sin ellas, el planteamiento del proyecto no hubiese sido el mismo y por tanto el resultado habría cambiado considerablemente.
    
    Estas APIs son:
    
    - WooCommerce API
    
    [WooCommerce REST API Documentation - WP REST API v3](https://woocommerce.github.io/woocommerce-rest-api-docs/?python#introduction)
    
    - Cloudinary API
    
    [Python SDK – Python Upload + Image, Video Transformations | Cloudinary](https://cloudinary.com/documentation/django_integration)
    

## Planificación

En este apartado se mostrará la planificación que tiene el proyecto. He de resaltar que dicha planificación ha sido modificada a lo largo de la realización de este debido a una serie de fallos, errores e imprevistos que han sucedido. 

Por todo esto, la planificación final queda en:

- Instalación del Software necesario: 1 horas.
- Construcción de la parte visual del WordPress: 14 horas.
- Configuración y administración de todos los plugins de la web: 17 horas.
- Investigación a cerca de detalles de la web: 4 horas.
- Investigación a cerca de detalles sobre el panel de administración: 7 horas
- Inicialización del proyecto: 3 hora.
- Realización de copias de seguridad: 4 horas.
- Realización de las vistas del panel de administración: 20 horas.
- Realización del apartado visual del panel de administración: 10 horas.
- Investigación a cerca de las APIs utilizadas: 7 horas.
- Realización de las funcionalidades internas de la aplicación: 12 horas.
- Realización de la documentación: 6 horas.
- Realización de los login de usuarios y modificación de las plantillas según si había un usuario registrado o no: 3 horas.
- Realización del modelo de imágenes y trabajar con ellas: 8 horas.

Horas totales que se planifican para el proyecto: 116 horas.

Durante la realización del proyecto sucedió un imprevisto que me hizo perder la página web creada con WordPress, por tanto, a la planificación hay que añadirle de nuevo tanto la construcción como la administración de dicho sitio web.

Por tanto, las horas totales que se planifican para el proyecto fueron de: 147 horas.

## Documentación del proyecto

A continuación se encuentra la documentación del proyecto entregado. En concreto esta es la parte del código y la parte de la creación del WordPress.

1. Código
    
    En este documento se encuentra todo lo relacionado con el código del proyecto
    
    [Panel de Administración para WooCommerce]([Hotel%20MiMascota%20f7fff2e00c244ec5ad14416ec3ab3e5f/Panel%20de%20Administracio%CC%81n%20para%20WooCommerce%204c4e3cf1e0864fb3ab1c0993dfd4eedc.md](https://www.notion.so/lruizap/Panel-de-Administraci-n-para-WooCommerce-4c4e3cf1e0864fb3ab1c0993dfd4eedc?pvs=4))
    
2. WordPress
    
    En este apartado tengo la guía de usuario del WordPress junto con la guía de estilos y de plugins del mismo
    
    [Guía de Usuario]([Hotel%20MiMascota%20f7fff2e00c244ec5ad14416ec3ab3e5f/Gui%CC%81a%20de%20Usuario%20e39df334cf96419997419b7c9de68b15.md](https://www.notion.so/lruizap/Gu-a-de-Usuario-e39df334cf96419997419b7c9de68b15?pvs=4))
    

## Manejo de Errores

En cuanto a los errores y el manejo de estos sucedidos durante la creación del proyecto, voy a recalcar tres que me han hecho cambiar tanto la forma en la que he planteado el como hacer las cosas como las herramientas necesarias para ello.

Para comenzar, el primer error sucedió en la creación del formulario de edición del producto. En este punto del proyecto, ya tenía los JSON con las características de cada producto, el problema venía a la hora de modificar dicho JSON y volver a enviarlo a la API.

Podía enviar el JSON con los datos del producto a la vista que yo quería pero a la hora de enviar de vuelta los datos se complicaba un poco puesto que no tenía forma de enviarlos con Django de vuelta al código de Python puesto que no he creado los formularios a través de Django y antes quería verificar dicho formulario con JavaScript.

La solución a esto fue controlar el `submit` del formulario con JavaScript para que después de verificar los datos, desde JavaScript creo un JSON para modificar el producto con los datos nuevos y una vez esté creado, lo guardo en un input oculto para recoger los datos de dicho input con Python. 

El segundo error fue a la hora de querer implementar las imágenes dentro del JSON anterior puesto que la API de WooCommerce, a la hora de introducir imágenes, solo aceptaba links de imágenes que estaban subidos a internet. Por lo tanto, las imágenes locales no servían para ser enviadas al servidor. 

La solución a este problema la encontré gracias a buscar mucha información al respecto y esta fue Cloudinary.  

Cloudinary es una plataforma de gestión de medios en la nube que ofrece una amplia gama de servicios y soluciones para almacenar, manipular y entregar imágenes, videos y otros archivos multimedia en aplicaciones web y móviles.

Con Cloudinary, los desarrolladores pueden cargar fácilmente sus archivos multimedia a la nube y acceder a ellos a través de una API sencilla de usar. La plataforma ofrece una gran cantidad de herramientas para manipular y transformar los medios, como recortar, redimensionar, aplicar efectos, ajustar la calidad, entre otros.

Gracias a la API de Cloudinary, pude subir las fotos a la plataforma para después obtener el link y añadírselo de forma manual al JSON de datos para actualizar el producto que se esté modificando.

Por último, el error más importante que tuve y el que más tiempo me llevó arreglar con diferencia fue la pérdida total de mi WordPress inicial. 

Debido a un error desconocido y el cuál, a día de hoy sigo sin comprender porqué sucedió, perdí totalmente la página con la que estaba trabajando de un día para otro y sin haber tocado nada. Este error fue tan crítico que ni yo con las copias de seguridad que tenía guardadas de la página ni el administrador restaurando una copia de seguridad, pudimos recuperar la página.

Esto fue un contratiempo importante para el desarrollo del proyecto puesto que no tenía una tienda para poder seguir desarrollando la aplicación. La solución a este problema vino muy bien para el completo desarrollo del proyecto puesto que mientras volvía a montar de nuevo la página con WordPress y su tienda, decidí hacer las pruebas con otra tienda hecha con WooCommerce que tenía para pruebas.

Gracias a esta tienda, realicé unas cuantas modificaciones dentro del código de Python para que el proyecto sea lo más global posible, es decir, actualmente el proyecto es capaz de manejar cualquier WordPress y que por tanto, la aplicación no solo servirá para está página en concreto si no que también para cualquier otra página de WordPress con tienda hecha con WooCommerce.

Lo único que hay que hacer para cambiar de tienda en el proyecto es cambiar las keys de la API de WooCommerce y listo. 

Una vez completado el código y probando que todo funcionaba correctamente, volví a montar la página web de Hotel MiMascota de cero y comprobar que todo funcionaba correctamente.

Con esto termino el apartado del manejo de errores, he de recalcar que durante la elaboración del proyecto han habido muchos más errores pero ninguno con la gravedad de los descritos anteriormente, por tanto, he decidido resaltarlos tanto los errores como las soluciones y consecuencias que estoas han tenido.

## Posibles mejoras del proyecto

Las posibles mejoras del proyecto son claras ya que a la hora de trabajar en la creación de este me he topado con una serie de problemas que me ha hecho plantearme las mejoras de este.

1. Utilizar otro lenguaje de programación más eficaz para la creación del proyecto.
    
    Con este apartado quiero dejar claro que aunque Python es un lenguaje de programación que permite realizar muchas cosas, no esta bien optimizado para trabajar con la API de WooCommerce o es la propia API la que no esta preparada para trabajar con Python.
    
    Debido a esto, cada petición a la API es bastante lenta y puede llegar a causar algún error inesperado en el servidor web debido a la enorme cantidad de datos que se obtienen de ella
    
    Por tanto, la principal mejora para el proyecto sería cambiar de lenguaje de programación de Python a PHP.
    
2. Añadir más imágenes a los productos.
    
    A la hora de trabajar con las imágenes he tenido infinidad de problemas debido a como está hecha la API de WooCommerce, que solo acepta imágenes que estén publicadas en servidores Web. 
    
    Por tanto, he limitado las imágenes que se pueden añadir a cada producto a través de la aplicación a una.
    
3. Añadir un modo oscuro o modo claro a la aplicación.
    
    Este apartado es más estético que funcional pero no vendría mal para que el cliente se sienta cómodo con la opción de estilos que el elija.
    
4. Un panel de filtrado en base a las etiquetas.
    
    Se puede realizar un panel de filtrado ne base a las etiquetas y a los tags de los productos. No he indagado mucho en eso debido a la cantidad de problemas que he tenido con la aplicación pero creo que se podría hacer.
    
5. Un botón de búsqueda.
    
    Añadir un método de búsqueda de los productos en base al nombre.
    
6. Un método de Caché para que la aplicación no tarde tanto en realizar peticiones
    
    Este método de caché estaría basado en modificar manualmente un JSON mientras se está usando la aplicación para que luego, al terminar haya un botón de actualizar que te permita mandar los cambios a la aplicación.
    
    El inconveniente de esto es que se pierde lo que yo pretendía con la aplicación, que los cambios se realizasen a tiempo real. Por esto no he implementado dicho sistema.
    

## Bibliografía

La bibliografía utilizada para el proyecto no es muy extensa pero esto se debe a dos factores.

El primero es la poca información que existe de la API de WooCommerce a la hora de trabajarla con Python.

Y el segundo es que gracias a la documentación de las APIs y a mis propios apuntes y proyectos realizados durante el curso he tenido una base muy buena en la que basarme a la hora de trabajar con estas herramientas.

- API WooCommerce

[WooCommerce REST API Documentation - WP REST API v3](https://woocommerce.github.io/woocommerce-rest-api-docs/?python#introduction)

- API Cloudianry

[Python SDK – Python Upload + Image, Video Transformations | Cloudinary](https://cloudinary.com/documentation/django_integration)

- Documentación Django

[Django](https://www.djangoproject.com/)

[Django](https://mentecatodev.github.io/django/)

- Proyectos propios hechos con Django
    
    [Django](https://www.notion.so/Django-9656f1a0539a40f1a07f46e041a0d45b?pvs=21) 
    
    [Django Apps](https://www.notion.so/Django-Apps-76ed77cc0dfe4609b0e7919c020a134b?pvs=21) 
    
    [Django CRUD con Autenticación y Despliegue](https://www.notion.so/Django-CRUD-con-Autenticaci-n-y-Despliegue-c91c3dc313e9474c9b918bdb235e6d7d?pvs=21) 
    
- Documentación de Jinja

[Jinja — Jinja Documentation (3.1.x)](https://jinja.palletsprojects.com/en/3.1.x/)

- Documentación de Tailwind CSS

[Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.](https://tailwindcss.com/)

- Documentación `venv` y otros ficheros de Python

[venv — Creación de entornos virtuales](https://docs.python.org/es/3/library/venv.html)

[Archivos .env en Python](https://davidcasr.medium.com/archivos-env-en-python-c80ec95cb991)

- Markdown

[Basic Syntax | Markdown Guide](https://www.markdownguide.org/basic-syntax/)

[Documentacion/syntax.md at master · ricval/Documentacion](https://github.com/ricval/Documentacion/blob/master/Markdown/daringfireball/syntax.md)

- Stack Overflow

[Stack Overflow - Where Developers Learn, Share, & Build Careers](https://stackoverflow.com/)

## Conclusión

Para finalizar con la documentación del proyecto he decidido añadir un apartado de conclusión para hablar sobre mi experiencia como programador a la hora de realizar este proyecto y sobre las conclusiones que he tomado al final de este.

Lo primero que quiero mencionar es que debido a la poca información que había sobre como hacer una aplicación usando la API de WooCommerce, asique he tenido que ir enfrentándome a los desafíos que me suponía esta aplicación de la mejor forma que se me ocurrían.

Por internet hay montones de tutoriales de como hacer CRUD básicos con Django pero ninguno se adaptaba a las necesidades de mi proyecto, por tanto todo el código que se ha escrito está basado en como creo que mejor funcionaría para este proyecto.

Otra observación que me gustaría hacer sobre la API de WooCommerce es lo mal preparada que está para trabajar con Python y por tanto con Django. Esto lo digo en base a los errores que causa la propia API debido a su tiempo de solicitud. 

Aunque el código este bien escrito y los cambios se realicen, esta puede provocar un error en la web y por tanto, estropear la experiencia del usuario.

Por otro lado, durante la realización de la aplicación he pensado en varios temas como por ejemplo en que plataforma debería crear la aplicación, el lenguaje de programación y si debería ser una aplicación de escritorio o no.

La conclusión de este planteamiento creo que es la acertada porque gracias a crear una aplicación web, el cliente no tiene que instalarse ningún software en su dispositivo y además puede acceder a dicha aplicación desde cualquier dispositivo y lugar.

En resumen, gracias a la poca información que había sobre la API, los problemas que me ha causado la aplicación y WordPress y los planteamientos que he tenido para mejorar en la medida de lo posible la experiencia de usuario para el cliente, creo que este proyecto me ha servido de mucho no solo para trabajar de una forma más profesional con las tecnologías que he usado para la realización de este, si no también para mejorar mi enfoque a cerca de la experiencia de usuario, accesibilidad y facilidad para que el cliente esté contento con el producto que le estoy ofreciendo.

Me ha parecido una muy buena experiencia y tal y como la he querido plantear me ha servido para mejorar no solo en el ámbito de la programación, si no también la lógica, la capacidad para documentarme, el estilo y diseño de mis trabajos y por último, en la capacidad de ponerte en el lugar del cliente para ver como podrías solucionarle los problemas que pueden plantear tu aplicación o que busca solucionar comprándote la aplicación.

---

---

Muchas gracias por llegar hasta aquí y espero que la documentación sea clara, concisa, completa y fácil de entender para el lector. 

Para cualquier duda a cerca del proyecto pueden contactar con su creador, Lucas Ruiz Zapata a través del siguiente correo electrónico: lruizap2502@g.educaand.es.
