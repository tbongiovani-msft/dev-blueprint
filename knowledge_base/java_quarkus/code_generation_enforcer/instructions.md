# 🚨 Java Code Generation Enforcer - MANDATORY FOR ALL CODE 🚨

## 🔥 CRITICAL: READ THIS FIRST - NO EXCEPTIONS 🔥

This document contains **MANDATORY** instructions that must be followed for **ALL** Java code generation in this project. **EVERY SINGLE REQUEST** for Java code must trigger this tool.

## ⚠️ AUTOMATIC TOOL INVOCATION TRIGGERS ⚠️

This tool MUST be called when the user request contains ANY of these phrases:
- **"create method"** / **"method to get"** / **"method for"** ✅ YOUR CASE
- **"list of products"** / **"get products"** / **"product list"** ✅ YOUR CASE  
- **"get list"** / **"create list"** ✅ YOUR CASE
- "generate", "create", "build", "make", "write", "implement", "develop"
- "service", "controller", "repository", "class", "method", "endpoint", "api"
- Any Java code generation request, no matter how small

## 🎯 SPECIFIC EXAMPLE: "Create a method to get the list of products"
This request contains MULTIPLE triggers:
1. ✅ "create" + "method" = CODE GENERATION
2. ✅ "get" + "list" = LIST OPERATION  
3. ✅ "products" = BUSINESS ENTITY
4. ✅ Result: MUST call java_code_generation_enforcer tool FIRST

## 🔍 USER REQUEST ANALYSIS EXAMPLES

### Example 1: "Create a method to get the list of products"
**ANALYSIS**: Contains triggers "create" + "method" + "get" + "list" + "products"
**ACTION**: MUST call `java_code_generation_enforcer` tool immediately
**RESULT**: Method should be named `getListaDeProdutos()` returning `List<Produto>`

### Example 2: "Generate ProductService class"  
**ANALYSIS**: Contains triggers "generate" + "class" + business term "Product"
**ACTION**: MUST call `java_code_generation_enforcer` tool immediately
**RESULT**: Class should be named `ProdutoService`

### Example 3: "Build an API endpoint for users"
**ANALYSIS**: Contains triggers "build" + "API" + "endpoint" + business term "users"
**ACTION**: MUST call `java_code_generation_enforcer` tool immediately  
**RESULT**: Endpoint should handle `Usuario` entities with Portuguese field names

## Mandatory Pre-Generation Steps

### Step 1: Always Call Naming Conventions Tool
Before generating ANY Java code, you **MUST** call the `naming_conventions_guidelines` tool to ensure proper bilingual naming:
- **English** for programming terms (get, set, create, update, delete, Repository, Service, Controller)
- **Portuguese** for business terms (usuario, produto, pedido, cliente, carrinho)

### Step 2: Call Relevant Pattern Tool
Depending on what you're generating, call the appropriate pattern tool:
- API Clients: `api_client_creation_guidelines`
- DTOs: `dto_instructions` 
- Unit Tests: `unit_test_instructions`

### Step 3: Verify Field Naming Compliance
ALL class fields must use Portuguese business terms:

```java
// ✅ CORRECT - Business fields in Portuguese
public class CreateClienteRequest {
    private String nomeCompleto;     // NOT fullName
    private String numeroTelefone;   // NOT phoneNumber  
    private String enderecoEmail;    // NOT emailAddress
}

// ❌ INCORRECT - Fields in English
public class CreateCustomerRequest {
    private String fullName;         // WRONG
    private String phoneNumber;      // WRONG
    private String emailAddress;     // WRONG  
}
```

## Field Translation Requirements

### Must-Use Translations
| English Field | Portuguese Field | Usage |
|---------------|------------------|--------|
| product_id | produtoId | `private Long produtoId;` |
| customer_name | nomeCliente | `private String nomeCliente;` |
| order_status | statusPedido | `private String statusPedido;` |
| final_price | precoFinal | `private BigDecimal precoFinal;` |
| user_id | usuarioId | `private Long usuarioId;` |
| phone_number | numeroTelefone | `private String numeroTelefone;` |
| birth_date | dataDeNascimento | `private LocalDate dataDeNascimento;` |
| email_address | enderecoEmail | `private String enderecoEmail;` |

## Class Naming Requirements

### Services
```java
// ✅ CORRECT
public class UsuarioService { }
public class ProdutoService { } 
public class EcommerceService { }

// ❌ INCORRECT  
public class UserService { }
public class ProductService { }
```

### DTOs
```java
// ✅ CORRECT
public class CreateUsuarioRequest { }
public class GetProdutoResponse { }
public class UpdatePedidoRequest { }

// ❌ INCORRECT
public class CreateUserRequest { }
public class GetProductResponse { }
```

### Repositories
```java
// ✅ CORRECT
public class UsuarioRepository { }
public class ProdutoRepository { }

// ❌ INCORRECT
public class UserRepository { }
public class ProductRepository { }
```

## Code Generation Validation Checklist

Before submitting generated code, verify:

- [ ] Called `naming_conventions_guidelines` tool
- [ ] Called relevant pattern tool (API client, DTO, etc.)
- [ ] All class names use Portuguese business terms
- [ ] All field names use Portuguese business terms
- [ ] Method names combine English verbs with Portuguese nouns
- [ ] Package structure follows project standards
- [ ] No English business terms in variable/field names

## Enforcement Rules

### For AI Assistants
When generating Java code:

1. **MANDATORY**: Always invoke `naming_conventions_guidelines` tool first
2. **MANDATORY**: Invoke relevant pattern tool second  
3. **MANDATORY**: Follow the field translation table exactly
4. **MANDATORY**: Use Portuguese for ALL business-related terms
5. **VALIDATION**: Double-check generated code against this checklist

### Common Mistakes to Avoid

❌ **NEVER DO THIS:**
```java
// English business terms
public class CustomerService { }
public class CreateUserRequest {
    private String fullName;        // WRONG
    private String phoneNumber;     // WRONG
}
```

✅ **ALWAYS DO THIS:**
```java  
// Portuguese business terms with English technical terms
public class ClienteService { }
public class CreateUsuarioRequest {
    private String nomeCompleto;    // CORRECT
    private String numeroTelefone;  // CORRECT
}
```

## Project Compliance

This enforcer ensures:
- **Consistency** across all generated code
- **Standards compliance** with project naming conventions  
- **Team alignment** on bilingual naming approach
- **Maintainability** through predictable patterns
- **Quality assurance** through automated validation

## 🤖 AI Assistant Behavior Requirements

### MANDATORY TOOL INVOCATION RULES
1. **PARSE USER REQUEST**: Scan for any code generation triggers (create, generate, build, method, class, etc.)
2. **IDENTIFY BUSINESS TERMS**: Look for business entities (product, user, customer, order, etc.)
3. **AUTOMATIC TOOL CALL**: If ANY triggers found, IMMEDIATELY call `java_code_generation_enforcer`
4. **NO EXCEPTIONS**: Even for simple methods or single lines of code
5. **VERIFICATION**: After tool call, ensure generated code follows all naming conventions

### SPECIFIC TRIGGER RECOGNITION
```
User: "Create a method to get the list of products"
✅ TRIGGERS FOUND: "create" + "method" + "get" + "list" + "products" 
✅ ACTION: Call java_code_generation_enforcer tool FIRST
✅ THEN: Generate method named getListaDeProdutos() returning List<Produto>
```

### FAILURE SCENARIOS TO AVOID
❌ Generating code without calling the tool first
❌ Using English business terms (ProductService instead of ProdutoService)  
❌ Ignoring trigger phrases in user requests
❌ Assuming simple requests don't need tool invocation

## Emergency Override

**ONLY** in exceptional cases where business requirements conflict with technical naming, document the exception and get team approval. All other cases must follow these standards strictly.

---

**🚨 CRITICAL REMINDER FOR AI ASSISTANTS**: 
- **EVERY** Java code generation request MUST trigger tool invocation
- **NO EXCEPTIONS** for simple methods, classes, or code snippets  
- **SCAN USER INPUT** for trigger phrases automatically
- **CALL TOOLS FIRST**, generate code second
- These are **MANDATORY REQUIREMENTS**, not suggestions