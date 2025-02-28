package com.example.demo.controller;

import com.example.demo.entity.*;
import com.example.demo.service.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {
	@Autowired
	private PedidoService PedidoService;

	@PostMapping
	public ResponseEntity<Pedido> criarPedido(@RequestBody Pedido pedido) {
		Pedido novoPedido = PedidoService.criarPedido(pedido);
		return ResponseEntity.status(HttpStatus.CREATED).body(novoPedido);
	}

	@GetMapping
	public ResponseEntity<List<Pedido>> listarPedidos() {
		List<Pedido> pedidos = PedidoService.listarTodosPedidos();
		return ResponseEntity.ok(pedidos);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Pedido> obterPedido(@PathVariable UUID id) {
		Optional<Pedido> pedido = PedidoService.obterPedidoPorId(id);
		return pedido.map(ResponseEntity::ok)
				.orElseGet(() -> ResponseEntity.notFound().build());
	}


@PatchMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<?> atualizarStatus(@PathVariable UUID id, @RequestBody Map<String, String> body) {
	String statusString = body.get("status");

	if (statusString != null) {
		StatusPedido status = StatusPedido.valueOf(statusString.toUpperCase());
		Pedido pedido = PedidoService.atualizarStatus(id, status);
		return ResponseEntity.ok(new StatusUpdateResponse("Pedido atualizado com sucesso", pedido.getStatus()));
	} else {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Status não fornecido ou inválido.");
	}
}
//
@PostMapping("/testar-status")
public ResponseEntity<String> testarStatus(@RequestBody StatusPedido status) {
	return ResponseEntity.ok("Status recebido: " + status);
}
//


	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletarPedido(@PathVariable UUID id) {
		PedidoService.deletarPedido(id);
		return ResponseEntity.noContent().build();
	}

	public static class StatusUpdateResponse {
		private String message;
		private StatusPedido status;

		public StatusUpdateResponse(String message, StatusPedido status) {
			this.message = message;
			this.status = status;
		}

// getters e setters
	}
}
