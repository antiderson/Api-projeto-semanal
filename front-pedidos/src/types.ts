export interface Item {
    produto: string;
    quantidade: number;
    preco: number;
  }

  export interface Pedido {
    id: string;
    cliente: string;
    email: string;
    itens: Item[];
    total: number;
    status: string;
    data_criacao: string;
    data_atualizacao: string;
  }
