import React, { useEffect, useState } from 'react';
import { Pessoa } from '../types/Pessoa';
import api from '../api';

interface PessoaFormProps {
    pessoaEditada: Pessoa | null;
    onSave: () => void;
}

export default function PessoaForm({ pessoaEditada, onSave }: PessoaFormProps) {
    const [pessoa, setPessoa] = useState<Pessoa>({
        nome: '',
        idade: 0,
        sexo: '',
    });

    useEffect(() => {
        if (pessoaEditada) {
            setPessoa(pessoaEditada);
        } else {
            setPessoa({ nome: '', idade: 0, sexo: '' });
        }
    }, [pessoaEditada]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPessoa((prev) => ({
            ...prev,
            [name]: name === 'idade' ? parseInt(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (pessoa.id) {
            await api.put(`/pessoas/${pessoa.id}`, pessoa);
        } else {
            await api.post('/pessoas', pessoa);
        }

        onSave();
        setPessoa({ nome: '', idade: 0, sexo: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="nome"
                value={pessoa.nome}
                onChange={handleChange}
                placeholder="Nome"
                required
            />
            <input
                name="idade"
                type="number"
                value={pessoa.idade}
                onChange={handleChange}
                placeholder="Idade"
                required
            />
            <select
                name="sexo"
                value={pessoa.sexo}
                onChange={handleChange}
                required
            >
                <option value="">Selecione o sexo</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
            </select>
            <button type="submit">Salvar</button>
        </form>
    );
}
