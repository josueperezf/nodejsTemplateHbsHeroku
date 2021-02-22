## infomacion general

1. para este proyecto se utilizo express, se creo una carpeta llamada public y se dio acceso public para poder renderizar desde ella imagenes y demas 'app.use(express.static(__dirname +'/public'));'

2. se instalo el motor de plantilla *app.set('view engine', 'hbs');* para poder importar secciones de html y enviarle parametro, nota, estoy archivos no son extension html, sino hbs, aunque se le puede cambiar la extension. 


## Preparar web para subirlo a un hosting:

pasos:


1. debemos crear un archivo .env en la raiz del sitio, le agregamos: PORT=xxxx, lo requerimos en nuestro app.js *require('dotenv').config(); const port = process.env.PORT;*. si el servidor nos asigna un puerto por default, entonces nuestro const port tendra lo que el server le asigne sin hacer cambios. posterior a ello instalamos
    ```
    npm i dotenv
    ```

2. debemos ir al archivo package.json, en la seccion de scripts y agregar *start* ya que lo que este alli sera lo que ejecutara el servidor para levantar nuestro sitio app.js es un ejemplo, podria ser una /hola/app.js:
    ```
    "start": "node app.js"
    ```

3. no es obligatorio, pero se recomienda subir el sitio a git, teniendo el .gitignore para la carpeta node_module/ 

## plugins basicos

si se instala un paquete indicando que es de tipo save, sera un paquete de produccion, si decimos que es de tipo *--save-dev* es que ese paquete nos sirve solo cuando estemos programando, que cuando subamos codigos al servidor no se instalaran alla, ejemplo nodemon, nos sirve para que compile y demas, pero en produccion no nos sirve de nada


1. *npm install hbs* sirve para hacer lo que hace .blade en laravel, este plugin se llama *handlebars* pero en la documentacion, cuando buscamos que es para express, nos da *hbs*. este plugin ademas permite hacer importaciones de fragmentos de html como *blade*. este plugin fue muy famoso, ahora no lo es tanto. se usa para contenido o paginas sencillas. si al crear un partial o un template no lo carga en el navegador o arroja un error, bajemos el proyecto con control 'c' y lo levantamos de nuevo 

