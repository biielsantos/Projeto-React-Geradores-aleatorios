import React, { useState } from 'react';
import Chance from 'chance';
import { Table } from '@mantine/core';
import { Button } from '@mantine/core';
import { Text } from '@mantine/core';
import { Input } from '@mantine/core';
import { ScrollArea } from '@mantine/core';
import Home from './styles/home.css'

const chance = new Chance();

function Generator() {
  const [name, setName] = useState(chance.name(''));
  const [cpf, setCPF] = useState(chance.cpf(''));
  const [email, setEmail] = useState(chance.email(''));
  const [listaDeItens, setListaDeItens] = useState([
    { name: '', email: '', cpf: '' },
  ]);

  const domains = ['hotmail.com', 'gmail.com', 'outlook.com', 'proton.me'];

  const handleGenerateName = () => {
    setName(chance.name());
  }

  const handleGenerateCpf = () => {
    setCPF(chance.cpf());
  };
  
  const handleGenerateEmail = () => {
    const generatedDomain = chance.pickone(domains);
    setEmail(`${name.toLowerCase().split(" ").join(".")}.${chance.natural({
      min: 10,
      max: 999
    })}@${generatedDomain}`);
  }
  
  const handleAdicionarItem = () => {
    setListaDeItens([...listaDeItens, { name, email, cpf }]);
  
  };
  
  const rows = listaDeItens.map((item) => (
    <tr>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.cpf}</td>

    </tr>
  ));

 

  return (
    <div className='card'>
      <div className='centralizando'>
      <p><Text fw={500}>Nome</Text><input className='inputtxt' type="text" value={name} onChange={e => setName(e.target.value)} /></p>
      <p><button className='btngerar' onClick={handleGenerateName}>Gerar nome</button></p>
      </div>
      
      
      <div className='centralizando'>
      <p><Text fw={500}>Email</Text><input className='inputtxt' type="text" value={email} onChange={e => setEmail(e.target.value)} /></p>
        <p><button className='btngerar' onClick={handleGenerateEmail}>Gerar um Email</button></p>
      </div>

      <div className='centralizando'>
      <p><Text fw={500}>CPF</Text><input className='inputtxt' type="text" value={cpf} onChange={e => setCPF(e.target.value)} /></p>
      <p><button className='btngerar' onClick={handleGenerateCpf}>Gerar um CPF</button></p>
      </div>

      <thead className='thead'>
          <tr>
            <th className='titlelista1'><Text>Nome</Text></th>
            <th className='titlelista2'><Text>Email</Text></th>
            <th className='titlelista3'><Text>CPF</Text></th>
            
          </tr>
        </thead>
      <ScrollArea style={{ height: 120 }}>
        <Table striped>
        
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
    <p className='segurando'><button className='btngerar' onClick={handleAdicionarItem}>Adicionar item</button></p>
    </div>
  );
}

export default Generator;