package com.example.demo.respository;

import com.example.demo.entity.*;
import org.springframework.data.jpa.repository.*;

public interface PessoaRepository extends JpaRepository<Pessoa, Long> {
}
