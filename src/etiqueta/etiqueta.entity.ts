import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { PalavraEntity } from "src/palavra/palavra.entity"; 


@Entity()
export class EtiquetaEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    etiqueta: string;
}