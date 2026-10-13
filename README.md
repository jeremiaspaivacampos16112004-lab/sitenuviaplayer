# Nuvia Player — Site

Landing page da **Nuvia Player**, plataforma de TV corporativa. *Sua empresa em movimento.*

Site estático (HTML, CSS e JavaScript puro), sem build e sem dependências.

## Estrutura

```
index.html        Página
css/style.css     Estilos e responsividade
js/config.js      Configurações (link do painel e contato comercial)
js/main.js        Demonstrações interativas
assets/           Favicon
```

## Configuração

Edite `js/config.js`:

- `painel.url`: link externo do painel de controle (botões "Acessar painel").
- `contato.url`, `contato.whatsapp` ou `contato.email`: canal do botão "Solicitar demonstração".

## Versão dos arquivos

O `index.html` carrega `css/style.css`, `js/config.js` e `js/main.js` com `?v=AAAAMMDD`.
Ao alterar qualquer um deles, troque esse número nas três linhas (ex.: `?v=20261020`;
segunda mudança no mesmo dia: `?v=20261020b`). Sem isso, quem já visitou o site
continua vendo a versão antiga por até 10 minutos (cache do GitHub Pages).

## Publicar no GitHub Pages

1. No repositório, abra **Settings → Pages**.
2. Em **Source**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Salve. O site fica disponível em `https://<usuario>.github.io/<repositorio>/`.

> As demonstrações usam uma loja fictícia (Mercado Lumina) e dados ilustrativos.
