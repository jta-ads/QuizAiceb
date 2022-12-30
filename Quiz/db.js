export function abreConexao(){
  this.db = window.openDatabase('quiz', '1.0', 'jogo de perguntas biblicas', 1*1024*1024);
}

abreConexao.prototype.abreTabela = function(){
   this.db.transaction(function(tx){
      tx.executeSql('create table if not exists quiz (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nome TEXT NOT NULL, ponto INTEGER NOT NULL)', [], function(tx, msg){
        console.log('DB conectado!')
        console.log(msg)
      }, function(tx, erro){
        console.log('erro')
        console.log(erro)
      }  );
   })
}

abreConexao.prototype.setItem = function(nome, ponto){
    this.db.transaction(function(tx){
      tx.executeSql('insert into quiz(nome, ponto) values(?,?)', [nome, ponto], function(tx, msg){
        console.log('Insert Sucesso!')
        console.log(msg)
      }, function(tx, erro){
        console.log('ERRO')
        console.log(erro)
      })
    })
}