package com.example.demo.entity;

import jakarta.persistence.*;

import java.math.*;
@Entity
public class ItemPedido {
	@Id
	private String produto;
	private int quantidade;
	private BigDecimal preco;

	public String getProduto() {
		return produto;
	}

	public void setProduto(String produto) {
		this.produto = produto;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	public BigDecimal getPreco() {
		return preco;
	}

	public void setPreco(BigDecimal preco) {
		this.preco = preco;
	}
}
