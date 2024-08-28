export interface CNPJInfo {
    cnpj: string;  
    razao_social: string;
    natureza_juridica: string;
    nome_fantasia: string;
    data_inicio_atividade: string;
    ddd_telefone_1: string;  
    ddd_fax: string;        
    capital_social: number;
    qsa: any[];
    endereco: {
      bairro: string;
      cep: string;
      numero: string;       
      complemento: string;
      logradouro: string;
      municipio: string;
      uf: string;
    };
  }
  