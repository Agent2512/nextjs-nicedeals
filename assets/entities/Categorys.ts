import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Deals } from "./deals";



@Entity("categorys")
export class Categorys extends BaseEntity {
    // front-end info

    @PrimaryColumn({ type: "varchar", length: 60 })
    name: string;

    // back-end info

    @Column({ type: "varchar", length: 60 })
    slug: string;

    // relations

    @OneToMany(() => Deals, deals => deals.category)
    deals: Deals[];
}