import { useEffect, useState } from 'react';
import { Pedido } from '../types';
import api from '../api';

export default function PedidoList() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const carregarPedidos = async () => {
    const { data } = await api.get('/pedidos');
    setPedidos(data);
  };

  useEffect(() => {
    carregarPedidos();
  }, []);

  const atualizarStatus = async (id: string) => {
    await api.patch(`/pedidos/${id}`, { status: 'ENVIADO' });
    carregarPedidos();
  };

  const deletar = async (id: string) => {
    await api.delete(`/pedidos/${id}`);
    carregarPedidos();
  };

  return (
    <div>
      <h2>Pedidos</h2>
      <ul>
        {pedidos.map(p => (
          <li key={p.id}>
            <strong>{p.cliente}</strong> - R$ {(p.total ?? 0).toFixed(2)} - <em>{p.status}</em>

            <ul>
              {p.itens.map((item, index) => (
                <li key={index}>
                  {item.produto} - {item.quantidade} x R$ {item.preco.toFixed(2)}
                </li>
              ))}
            </ul>

            <button onClick={() => atualizarStatus(p.id)}>Marcar como Enviado</button>
            <button onClick={() => deletar(p.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
