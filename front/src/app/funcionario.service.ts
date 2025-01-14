import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  uri = '/funcionario';

  constructor(private http: HttpClient) { }

  // Método responsável por adicionar um novo 'Funcionário' btn 'Adicionar Funcionário':
  adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador) {
    const objFuncionario = {
      nomeFuncionario: nomeFuncionario,
      cargo: cargo,
      numeroIdentificador: numeroIdentificador
    };

    console.log(objFuncionario); // nomeFuncionario: 'Glaucia Lemos' cargo: 'Desenvolvedora' numeroIdentificador: 123
    this.http.post(`${this.uri}/add`, objFuncionario)
      .subscribe(res => console.log('Ok'));

  }
}
