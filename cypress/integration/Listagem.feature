Feature: Listagem

Scenario: Listagem sem registro
Given o site não possui registro
When acessar a Listagem
Then devo visualizar a listagem vazia
