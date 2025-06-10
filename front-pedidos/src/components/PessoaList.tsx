import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pessoa } from '../types/Pessoa';

interface PessoaListProps {
    onEdit: (pessoa: Pessoa) => void;
    reloadTrigger: boolean;
}

const PessoaList: React.FC<PessoaListProps> = ({ onEdit, reloadTrigger }) => {
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);

    const fetchPessoas = () => {
        axios.get<Pessoa[]>('http://localhost:8080/pessoas')
            .then((res) => setPessoas(res.data));
    };

    useEffect(() => {
        fetchPessoas();
    }, [reloadTrigger]);

    const handleDelete = (id: number | undefined) => {
        if (!id) return;
        axios.delete(`http://localhost:8080/pessoas/${id}`).then(fetchPessoas);
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
