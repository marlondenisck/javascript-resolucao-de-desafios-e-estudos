## Rodando o JavaScript:

- Podemos executar js no console do navegador.

- Também podemos executá-lo em um `script` tag:

```javascript
<script>console.log('Olá Mundo!');</script>
```

Tente sempre ter a tag `script` antes de fechar a tag `body`, porque podemos acessar os elementos HTML escritos acima da tag `script`, pois estão acima do JS.

- Além disso, podemos executar JS em outro arquivo usando a tag `script` dentro de `src`:

```javascript
<script src="caminho_relativo_para_o_arquivo_javascript"></script>
```

- Também podemos executá-lo via Node.js - em vez de executar no contexto de um site, executamos o ir em uma máquina real. No console, execute: `node_file.js`
