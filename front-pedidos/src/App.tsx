import { useState } from 'react';
import PessoaForm from './components/PessoaForm';
import PessoaList from './components/PessoaList';
import { Pessoa } from './types/Pessoa';

function App() {
  const [pessoaEditada, setPessoaEditada] = useState<Pessoa | null>(null);
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setPessoaEditada(null);
    setReload(!reload);
  };

  return (
    <div>
      <h1>CRUD de Pessoas</h1>
      <PessoaForm pessoaEditada={pessoaEditada} onSave={handleReload} />
      <PessoaList onEdit={setPessoaEditada} reloadTrigger={reload} />

      {/*
      <div style={{ padding: '2rem' }}>
        <h1>Sistema de Pedidos Apresentação com alterações</h1>
        <PedidoForm onSuccess={toggleReload} />
        <PedidoList key={reload ? 'a' : 'b'} />
        <span>teste novo </span>
      </div>
      */}
    </div>
  );
}

export default App;
