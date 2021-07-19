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

Instalar Dependencias de produccion:
>npm install express express-graphql graphql ncp http graphql-import-node compression cors typescript graphql-tools graphql-playground-middleware-express
Dependencias de desarrollo:
>npm install @types/compression @types/express @types/cors @types/express-graphql @types/node @types/graphql -D
Para evitar problemas con dependencias de graphql 15.X:
Para evitar problemas de compilacion(usar slash [\]):
"build:dev": "nodemon \"src/server.ts\" --exec \"ts-node\" src/server.ts -e ts,graphql"
