# LinsTv+

Landing page responsiva da LinsTv+, criada para apresentar os conteúdos e planos do serviço e facilitar o contato de novos clientes pelo WhatsApp.

## Recursos

- Layout responsivo para desktop, tablet e celular
- Seções de catálogo, vantagens, planos e perguntas frequentes
- FAQ interativo
- Formulário que prepara uma mensagem e abre o WhatsApp
- Navegação mobile
- Política de Privacidade

## Como executar

Não é necessário instalar dependências. Clone o repositório e abra `index.html` no navegador.

Para servir localmente com Python:

```bash
python -m http.server 8000
```

Abra `http://localhost:8000` no navegador.

## Estrutura

| Arquivo | Descrição |
| --- | --- |
| `index.html` | Conteúdo e estrutura da página |
| `styles.css` | Estilos, layout e responsividade |
| `script.js` | Menu mobile, FAQ e envio do formulário para o WhatsApp |

## Configuração do WhatsApp

Os links e o número de destino do WhatsApp estão definidos em `index.html` e `script.js`. Atualize-os caso queira usar outro número.

O formulário não salva dados em um servidor: ele monta uma mensagem com o nome e o aparelho selecionado e abre o WhatsApp. A pessoa precisa enviar a mensagem no aplicativo.
