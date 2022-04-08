export interface Response {
  status: keyof typeof Status;
}

enum Status {
  'sucesso',
  'erro',
  'duplicado',
  'sem efeito',
  'dados invalidos',
}
