/**
 * Entidade = Tabela 
 * Entidade < - > ORM < - > BD (users)
 *  */ 

import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";

//users - nome da tabela 
//PrimaryColumn - chave primaria
//Column - colunas 
//CreateDateColumn - criar data
//UpdateDateColumn - atualizar data 
@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string; //id será apenas para leitura

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    //construtor - new User() - criaçao de um novo usuario 
    constructor(){
        //verificar se o id está preenchido 
        if(!this.id) {
            this.id = uuid(); //toda vez que o id nao estiver preenchido, ira criar um novo id.
        }
    }
}

export { User };