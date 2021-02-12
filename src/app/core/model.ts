import * as moment from "moment";

export class Usuario {
  codigo: number;
  nome: string;
  email: string;
}

export class Etiqueta {
  codigo: number;
}

export class Tarefa {
  codigo: number;
  descricao: string;
  dataRealizacao: Date;
  observacao: string;
  usuario = new Usuario();
  etiqueta = new Etiqueta();

  static toJson(tarefa: Tarefa): any {
    return {
      codigo: tarefa.codigo,
      descricao: tarefa.descricao,
      dataRealizacao: moment(tarefa.dataRealizacao).format('DD/MM/YYYY'),
      observacao: tarefa.observacao,
      usuario: tarefa.usuario,
      etiqueta: tarefa.etiqueta
    };
  }
}
