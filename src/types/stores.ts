
export interface iProduct {
  id: number;
  nome: string;
  text: string;
  categoria: string;
  imagem: string;
  preco: string;
}

export interface iCartProduct extends iProduct {
  amount: number;
}