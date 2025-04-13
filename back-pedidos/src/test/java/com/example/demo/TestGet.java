package com.example.demo;

import com.example.demo.controller.PedidoController;
import com.example.demo.entity.Pedido;
import com.example.demo.respository.PedidoRepository;
import com.example.demo.service.PedidoService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(PedidoController.class)
public class TestGet {

    @MockBean
    private PedidoService pedidoService;

    @Autowired
    private PedidoController pedidoController;

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
        Mockito.when(pedidoService.listarTodosPedidos()).thenReturn(criarPedidoList());
    }

    @Test
    void testGetAll() {
        var resultado = pedidoController.listarPedidos();
        assertNotNull(resultado, "Lista não pode ser nula");
    }
}