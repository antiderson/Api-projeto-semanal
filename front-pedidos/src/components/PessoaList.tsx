import React, { useEffect, useState } from 'react';
import { Pessoa } from '../types/Pessoa';
import api from '../api'; // usando o mesmo client axios

interface PessoaListProps {
    onEdit: (pessoa: Pessoa) => void;
    reloadTrigger: boolean;
}

const PessoaList: React.FC<PessoaListProps> = ({ onEdit, reloadTrigger }) => {
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);

    const fetchPessoas = async () => {
        try {
            const { data } = await api.get<Pessoa[]>('/pessoas');
            setPessoas(data);
        } catch (error) {
            console.error('Erro ao buscar pessoas:', error);
        }
    };

    useEffect(() => {
        fetchPessoas();
    }, [reloadTrigger]);

    const handleDelete = async (id: number | undefined) => {
        if (!id) return;
        try {
            await api.delete(`/pessoas/${id}`);
            fetchPessoas();
        } catch (error) {
            console.error('Erro ao deletar pessoa:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Pessoas</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {pessoas.map((pessoa) => (
                    <li key={pessoa.id}>
                        {pessoa.nome} - {pessoa.idade} anos - {pessoa.sexo}
                        <div>
                            <button onClick={() => onEdit(pessoa)}>Editar</button>
                            <button onClick={() => handleDelete(pessoa.id)}>Deletar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PessoaList;
