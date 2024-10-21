# Sistema de Varejo

### Sobre

Sistema de consumir a API do sistema de Varejo.


## Dependências

O projeto depende das seguintes bibliotecas:

- **React**: Biblioteca JavaScript para construir interfaces de usuário. **Versão:** `^18.3.1`
- **React DOM**: Complemento para usar React em ambientes web. **Versão:** `^18.3.1`
- **React Router DOM**: Para gerenciamento de rotas no aplicativo. **Versão:** `^6.27.0`
- **Ant Design**: Conjunto de componentes UI para React. **Versão:** `^5.21.4`
- **Axios**: Cliente HTTP baseado em promessa para fazer requisições. **Versão:** `^1.7.7`

### Dependências de Desenvolvimento

Além das dependências principais, o projeto também usa:

- **Vite**: Ferramenta de construção que fornece um ambiente de desenvolvimento rápido. **Versão:** `^5.4.8`
- **ESLint**: Ferramenta de linting para identificar e relatar padrões problemáticos no código. **Versão:** `^9.11.1`
- **Plugins ESLint**: Para suporte a regras específicas do React e hooks. **Versão:** `^7.37.0`
- **@vitejs/plugin-react**: Plugin para suporte a React no Vite. **Versão:** `^4.3.2`

## Instalação

1. Clone o repositório:
```bash
   git clone https://github.com/wandersonnew/Varejo_Consumo_API.git
   cd VarejoFrontEnd
   npm install
   npm run dev
```

## Configurações

Para que este projeto rode sem problemas, é necessário no projeto Varejo em config/custom.php

```php
<?php

return [
    'host' => env('CUSTOM_HOST', 'http://localhost'),
    'port' => env('CUSTOM_PORT', 5175),
];
```

setar o host onde este projeto está rodando e a porta para que seja enviado por e-mail o link correto para esta aplicação.

### Autor
---

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/40368246?s=400&u=a7402c2d5af1e41852d39eaf80cb2154223f80db&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Wanderson Duarte Alves</b></sub>

- **Ciências da Computação**
- **Física**
- **Ciências de Dados**
- **Inteligência Artificial**

Contato!

[![Gmail Badge](https://img.shields.io/badge/-wandersondrtlvs.new@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:wandersondrtlvs.new@gmail.com)](mailto:wandersondrtlvs.new@gmail.com)
