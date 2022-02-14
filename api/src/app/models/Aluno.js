import { Model, DataTypes } from 'sequelize';

class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        cep: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'aluno'
      }
    );

    return this;
  }

  

  async destroy(sequelize, id){
    Model.destroy('id LIKE "' + id +'" ').success(function(){
      console.log('usuario removido');
    });
  }
  
}


export default Aluno;
