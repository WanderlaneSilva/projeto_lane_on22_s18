API musical

Nesta aplicação você poderá armazenar suas músicas, organizar e pesquisar;

Por id, por títulos...

Adicionar uma informação...

Alterar ou deletar uma informação utilizando o id...

Para a instalação é simples, apenas fazer um fork desta api do GitHub para sua máquina...

DAS INSTALAÇÕES:

É necessário, que após a criação da arquitetura das pastas, faça a utilização dos comandos de instalação:

NPM INIT -Y  
NPM I EXPRESS CORS --SAVE
NPM I -D NODEMON
NPM I MONGOOSE
NPM INSTALL JSONWEBTOKEN
NPM INSTALL BCRYPT
NPM I SWAGGER-AUTOGEN SWAGGER-UI-EXPRESS

Em seguinda, criar as routers, controllers, models , banco de dados, proteção de senhas, interligá-los ao mongodb
________________________________________
### ✨ **Instalação e Contribuição no projeto**
________________________________________
1. Faça um **fork** do projeto.
2. Realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>`
3. Crie uma nova branch com as suas alterações: `git checkout -b minha-branch`
4. Instale as dependências necessárias à execução da API através do comando `npm install`
5. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: Minha contribuição"`
6. Envie as suas
7. Envie as suas alterações: `git push origin minha-branch`

________________________________________
### 🏗️ **Arquitetura MVC**
________________________________________

```
  📁 festival_API   
  |       
  |-  📁 node_modules
  |-  📁 Swagger    
  |         |- 📄 swagger_output.json   
  |-  📁 src  
  |    |- 📁 database  
  |         |- 📄 bdConnect.js    
  |    |- 📁 controllers   
            |- 📄 musicController.js  
  |    |- 📁 models  
            |- 📄 musicModel.js
|    |- 📁 routes  
            |- 📄 musicRoutes.js     
  |    |- 📄 app.js

  |-  📄 .env
  |-  📄 .env.example 
  |-  📄 .gitignore 
  |-  📄 package-lock.json   
  |-  📄 pakage.json 
  |-  📄 README.md 
  |-  📄 server.js
  |-  📄 Swagger.js
  |-  📁 material    
  ```










