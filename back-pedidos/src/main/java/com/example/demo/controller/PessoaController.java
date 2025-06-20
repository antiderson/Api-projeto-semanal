package com.example.demo.controller;


import com.example.demo.entity.*;
import com.example.demo.respository.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/pessoas")
@CrossOrigin(origins = "*")
public class PessoaController {

	private final PessoaRepository repository;

	public PessoaController(PessoaRepository repository){
		this.repository = repository;
	}

	@GetMapping
	public List<Pessoa> listar(){
		return repository.findAll();
	}

	@PostMapping
	public Pessoa criar(@RequestBody Pessoa pessoa){
		return repository.save(pessoa);
	}

	@PutMapping("/{id}")
	public Pessoa atualizar(@PathVariable(name = "id") Long id, @RequestBody Pessoa pessoa){
		pessoa.setID(id);
		return repository.save(pessoa);
	}

	@DeleteMapping("/{id}")
	public void deletar(@PathVariable(name = "id") Long id) {
		repository.deleteById(id);
	}
}
