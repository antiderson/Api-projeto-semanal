import PedidoForm from './components/PedidoForm';
import PedidoList from './components/PedidoList';
import { useState } from 'react';

function App() {
  const [reload, setReload] = useState(false);

  const toggleReload = () => setReload(!reload);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Sistema de Pedidos Apresentação novo teste de pipe</h1>
      <PedidoForm onSuccess={toggleReload} />
      <PedidoList key={reload ? 'a' : 'b'} />
    </div>
  );
}

export default App;
