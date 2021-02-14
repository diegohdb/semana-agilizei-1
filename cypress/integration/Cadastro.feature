Feature: Cadastro

Scenario: Cadastro de usuario no site
    Given que acesso o site
    When informar os meus dados
    And salvar
    Then devo ser cadastrado com sucesso
