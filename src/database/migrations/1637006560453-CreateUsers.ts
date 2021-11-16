import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1637006560453 implements MigrationInterface {

    // up -> criar a tabela 
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                //nome da tabela 
                name: "users",
                //array de colunas da tabela 
                columns: [
                    {
                        name: "id",
                        type: "uuid", //id unico, universal e nao se repete
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "admin",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
            })
        )
    }

    //down -> desfazer a tabela 
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
