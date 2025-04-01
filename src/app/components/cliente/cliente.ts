export interface Cliente {
    id: number
    nome: string,
    cpf: string,
    dataNascimento: string | Date,
    endereco: string
}