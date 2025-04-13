package com.example.demo;

import com.example.demo.controller.PedidoController;
import com.example.demo.entity.Pedido;
import com.example.demo.respository.PedidoRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class TestGet {

    @MockBean
    private PedidoRepository pedidoRepository; // Mockamos o Repository real

    @Autowired
    private PedidoController pedidoController; // Injetamos o Controller real

    protected static List<Pedido> criarPedidoList(){

        Pedido pedido = new Pedido();
        pedido.setCliente("nome");
        pedido.setEmail("nome@email.com");

        List<Pedido> pedidos = new ArrayList<>();
        pedidos.add(pedido);

        return pedidos;
    }

    @BeforeEach
    void injectData(){
        Mockito.when(pedidoRepository.findAll()).thenReturn(criarPedidoList());
    }

    @Test
    void testGetAll() {
        var resultado = pedidoController.listarPedidos();
        assertNotNull(resultado, "Lista não pode ser nula");
    }
}
