package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.util.Assert;

import com.example.demo.controller.PedidoController;
import com.example.demo.entity.Pedido;
import com.example.demo.respository.PedidoRepository;

@SpringBootTest
class TestGet  {

    @MockBean
    PedidoRepository pedidoRepository;

    @Autowired
    PedidoController pedidoController;

    protected static List<Pedido> criarPedidoList(){

        Pedido pedido = new Pedido();
        pedido.setCliente("nome");
        pedido.setCliente("nome@email.com");

        List<Pedido> pedidos = new ArrayList<>();
        pedidos.add(pedido);

        return pedidos;
    }

    @BeforeEach
    void injectData(){
        Mockito.when(pedidoRepository.findAll()).thenReturn(criarPedidoList());
    }
    
    @Test
    void TestGetAll()
    {
        var pedidos = pedidoController.listarPedidos();
        Assert.notNull(pedidos, "nulo");
    }


}
