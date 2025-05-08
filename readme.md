# Playplaywright 

Este projeto explora o uso do Playwright para realizar testes automatizados que vão além do trivial. O objetivo é testar a reprodução de uma música, desde o início até o momento de pausa, garantindo uma experiência fluida e funcional.

## Funcionalidades Testadas

https://parodify.vercel.app/

- **Reprodução de Música**: Verifica se a música inicia corretamente ao pressionar o botão de "Play".
- **Controle de Tempo**: Confirma que o tempo de reprodução avança conforme esperado.
- **Validação de Estado**: Testa os estados visuais e funcionais do player durante a reprodução e pausa.

## Tecnologias Utilizadas

- [Playwright](https://playwright.dev): Framework para automação de testes de ponta a ponta.
- Node.js: Ambiente de execução para JavaScript.

## Como Executar

1. Instale as dependências:
    ```bash
    npm install
    ```

2. Execute os testes:
    ```bash
    npx playwright test
    ```

## Estrutura do Projeto

- `tests/`: Contém os testes automatizados.
- `playwright.config.js`: Configuração do Playwright.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
