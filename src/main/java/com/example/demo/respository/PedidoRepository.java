package com.example.demo.respository;

import com.example.demo.entity.*;
import org.springframework.data.jpa.repository.*;

import java.util.*;

public interface PedidoRepository extends JpaRepository<Pedido, UUID> {
}
