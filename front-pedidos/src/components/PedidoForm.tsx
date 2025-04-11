import React, { useState } from 'react';
import api from '../api';

export default function PedidoForm({ onSuccess }: { onSuccess: () => void }) {
  const [cliente, setCliente] = useState('');
  const [email, setEmail] = useState('');
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [preco, setPreco] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const novoPedido = {
      cliente,
      email,
      itens: [{ produto, quantidade, preco }],
    };
    await api.post('/pedidos', novoPedido);
    onSuccess();
    setCliente('');
    setEmail('');
    setProduto('');
    setQuantidade(1);
    setPreco(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Novo Pedido</h2>
      <input placeholder="Cliente" value={cliente} onChange={e => setCliente(e.target.value)} required />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input placeholder="Produto" value={produto} onChange={e => setProduto(e.target.value)} required />
      <input type="number" placeholder="Quantidade" value={quantidade} onChange={e => setQuantidade(+e.target.value)} />
      <input type="number" placeholder="Preço" value={preco} onChange={e => setPreco(+e.target.value)} />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
