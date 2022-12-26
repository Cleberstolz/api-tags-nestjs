import { EtiquetaEntity } from "src/etiqueta/etiqueta.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PalavraEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    palavra: string;

    @ManyToMany(() => EtiquetaEntity)
    @JoinTable()
    etiquetas: EtiquetaEntity[]
}