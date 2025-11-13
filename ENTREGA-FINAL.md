# Atividade: Análise Estática e Refatoração

## Dados do Estudante
- **Nome:** João Gabriel dos Santos Felipe
- **Disciplina:** Qualidade de Software (EAD)

## Projeto Analisado
- **Nome:** Calculator
- **Repositório Original:** https://github.com/zxcodes/Calculator
- **Repositório Refatorado:** [Meu Fork](https://github.com/codebygabes/Calculator)

## Ferramentas Utilizadas
- **ESLint** - Análise estática
- **VS Code** - Editor e terminal
- **Git** - Controle de versão

## Análise Estática Inicial
### Problemas Identificados:
1. **Função `keyboardInputHandler` com complexidade 18** (máximo recomendado: 5)
2. **Função com 61 linhas** (máximo recomendado: 15)
3. **Código repetitivo** - 10 condições separadas para números (0-9)
4. **Condições duplicadas** - `e.key == "+"` e `e.key == "/"` repetidas

### Evidências:
- Relatório ESLint inicial: 13 problemas identificados
- Complexidade ciclomática: 18 (crítico)

## Refatoração Realizada
### Mudanças Implementadas:
- **Redução da complexidade** de 18 para 4 (-78%)
- **Redução de linhas** de 61 para 13 (-79%)
- **Eliminação de código duplicado**
- **Organização por categorias** (números, operadores, teclas especiais)

### Código Antigo vs Novo:

**ANTES (Problema):**
![problmea_1](image.png)
![problema_2](image-1.png)
![problema_3](image-3.png)
![problema_4](image-4.png)
```javascript
// 61 linhas de condições if/else repetitivas
if (e.key == "0") { res.value += "0"; }
else if (e.key == "1") { res.value += "1"; }
else if (e.key == "2") { res.value += "2"; }
// ... continua por 50+ linhas ...
else if (e.key == "+") { res.value += "+"; }
else if (e.key == "+") { res.value += "+"; } // ❌ DUPLICADO!

**DEPOIS (Solução):**
// 13 linhas - código limpo e organizado
function keyboardInputHandler(e) {
    const key = e.key;
    const numbers = "0123456789";
    const operators = "+-*/";
    
    if (numbers.includes(key)) {
        res.value += key;
    } else if (operators.includes(key)) {
        res.value += key;
    } else if (key === "Enter") {
        calculate(res.value);
    } else if (key === "Backspace") {
        res.value = res.value.slice(0, -1);
    }
}