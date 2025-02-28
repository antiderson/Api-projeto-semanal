package com.example.demo.service;

import com.example.demo.entity.*;
import com.example.demo.respository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public class PedidoService {
	@Autowired
	private PedidoRepository pedidoRepository;

	public Pedido criarPedido(Pedido pedido) {
		return pedidoRepository.save(pedido);
	}

	public List<Pedido> listarTodosPedidos() {
		return pedidoRepository.findAll();
	}

	public Optional<Pedido> obterPedidoPorId(UUID id) {
		return pedidoRepository.findById(id);
	}

	public Pedido atualizarStatus(UUID id, StatusPedido status) {
		Pedido pedido = pedidoRepository.findById(id).orElseThrow(() -> new RuntimeException("Pedido não encontrado"));
		pedido.setStatus(status);
		return pedidoRepository.save(pedido);
	}

	public void deletarPedido(UUID id) {
		pedidoRepository.deleteById(id);
	}
}
