# II Workshop do CEMOL — kit de divulgação

Kit de divulgação estático e sem dependências externas. Todo o conteúdo confirmado está incorporado; informações ainda não definidas aparecem como “em breve”.

## Arquivos

- `index.html`: página completa e responsiva do evento.
- `styles.css`: identidade visual, responsividade e acessibilidade.
- `script.js`: navegação móvel, animações progressivas e configuração dos links de inscrição.
- `card.html` e `card.css`: card vertical em 1080 × 1350 px.
- `assets/hero-science.png`: arte científica gerada para o projeto.
- `assets/hero-cerrado-ai.png`: hero panorâmico que integra Cerrado, química farmacêutica e inteligência artificial.
- `assets/lucas-maciel.png`: retrato tratado de Lucas Maciel.
- `assets/igor-oliveira.png`: retrato tratado de Igor Oliveira.
- `assets/anax-oliveira.png`: retrato tratado de Anax Oliveira.
- `assets/maita-munoz.png`: retrato tratado de Maíta Muñoz.
- `assets/thiago-lourenco.png`: retrato tratado de Thiago Lourenço.
- `assets/hugo-machado.png`: retrato tratado de Hugo Machado.
- `assets/logo-ueg.png`: logotipo oficial da Universidade Estadual de Goiás.
- `assets/logo-cemol-oficial.png`: logotipo oficial do CEMOL preparado com transparência para uso sobre fundos escuros.
- `assets/logo-aima.png`: logotipo oficial da Aima Toxicologia.
- `assets/logo-mestrado-ciencias-moleculares.png`: logotipo do Mestrado em Ciências Moleculares.
- `assets/logo-protonaction.png`: logotipo da ProtonAction tratado para uso na seção final de parceiros.
- `assets/social-card.png`: exportação do card para redes sociais.
- `conteudos-divulgacao.md`: legendas, WhatsApp, e-mail, release e registro de pendências.

## Visualização

Abra `index.html` em um navegador moderno. A página não exige instalação, servidor ou conexão com a internet.

## Link de inscrição

O formulário oficial está configurado no atributo do `body` em `index.html`:

```html
<body data-registration-url="https://forms.gle/aCswComTDWikFgrj9">
```

Os dois botões “Inscreva-se gratuitamente” abrem o formulário em uma nova aba.

## Atualizar palestrantes e parceiros

1. Ajuste os títulos e horários na seção `#programacao` caso a organização altere a grade confirmada.
2. Substitua as iniciais nos cards dos palestrantes pelas fotografias oficiais quando forem recebidas.
3. Adicione apenas parceiros formalmente confirmados à seção `#parceiros`.
4. Atualize o registro em `conteudos-divulgacao.md`.

## Exportar novamente o card

O card foi projetado em tamanho fixo de 1080 × 1350 px. Abra `card.html` em uma janela com essas dimensões e exporte uma captura PNG sem redimensionamento.

## Arte científica

Gerada com a ferramenta integrada de geração de imagens, usando o seguinte direcionamento final:

> Hero científico ultrapanorâmico em fundo azul-marinho quase preto, com estrutura molecular orgânica translúcida conectada a uma rede neural e traços analíticos em ciano, turquesa e magenta; composição rigorosa, sem texto, logotipos, pessoas ou símbolos médicos e com espaço negativo para a chamada principal.
