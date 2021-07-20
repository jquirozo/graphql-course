import { IResolvers } from "graphql-tools";

const query : IResolvers = {
    Query : {
        hola(): string{
            return 'Hola Mundo';
        },
        holaConNombre(_: void,{ nombre }): string {
            return `Hola Mundo con ${nombre}`;
        },
        holaAlCursoGraphQL(): string {
            return 'Hola Mundo en el curso de GraphQL';
        }
    }
}

export default query;