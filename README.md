# Test Banco Estado

### Backend

- La ruta *http://localhost:3001/products* retorna una Json con el indice "products" y un array de productos

- La ruta *http://localhost:3001/products/<int>* retorna una Json con el indice "products" y un array de un so lo item con un producto si encuentra ese `ID`  


### Frontend

- La ruta de inicio contiene una tabla con la lista de produtos y sus propiedades.


### Ejecutar en local

Simplente ejecutar ```nmp install``` dentro de cada servicios y utilizar las mismas URLs, ademas....


#### Para el backend

``` npm run start ```

#### Para el frontend

``` ng serve --open ```
