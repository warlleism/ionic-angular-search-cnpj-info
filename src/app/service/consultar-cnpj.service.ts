import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultarCnpjService {

  constructor() { }

  async getCnpj(cnpj: string): Promise<any> {
    try {
      const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const refactoredData = {
        cnpj: data.cnpj,
        razao_social: data.razao_social,
        natureza_juridica: data.natureza_juridica,
        nome_fantasia: data.nome_fantasia,
        data_inicio_atividade: data.data_inicio_atividade,
        ddd_telefone_1: data.ddd_telefone_1,
        ddd_fax: data.ddd_fax,
        capital_social: data.capital_social,
        qsa: data.qsa,
        endereco: {
          numero: data.numero,
          bairro: data.bairro,
          cep: data.cep,
          complemento: data.complemento,
          logradouro: data.logradouro,
          municipio: data.municipio,
          uf: data.uf
        }
      }
      return refactoredData;
    } catch (error) {
      console.error('Failed to fetch CNPJ:', error);
      throw error;
    }
  }
}
