# graphql-course

Curso paso a paso de UDEMY: 

Introduccion a GraphQL desde las bases hasta crear APIs: https://www.udemy.com/course/introduccion-a-graphql-desde-las-bases-hasta-crear-apis/learn/lecture/18279216?start=15#announcements

Requisitos (julio 2021):
NodeJS: v14.16.1
VSCode: v1.58.2
SO: Windows

Instalar ambiente desde cero (desde consola de VSCode):
>npm init
>npx tsc --init --rootDir src --outDir build --lib dom,es6 --module commonjs --removeComments --target es6

Instalar dependencias de produccion:
>npm install express express-graphql graphql ncp http graphql-import-node compression cors typescript graphql-tools graphql-playground-middleware-express

Instalar dependencias de desarrollo:
>npm install @types/compression @types/express @types/cors @types/express-graphql @types/node @types/graphql -D

Para evitar problemas de compilacion (usar slash [\]):
>"build:dev": "nodemon \"src/server.ts\" --exec \"ts-node\" src/server.ts -e ts,graphql"

Instalar version 3 actual de Apollo Server, la cual requiere un pequeño cambio en la definicion, la cual se encuentra aqui:
https://www.apollographql.com/docs/apollo-server/migration/
> npm install apollo-server-express

Instalar lodash
> npm install lodash
> npm install @types/lodash -D

Fix para leer JSON:
https://mariusschulz.com/blog/importing-json-modules-in-typescript
