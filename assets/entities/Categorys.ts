import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Deals } from "./deals";

export enum Category {
    GAVEKORT = 'Gavekort',
    MAD_OG_VIN = 'Mad og vin',
    OPHOLD = 'Ophold',
    PRODUKTER = 'Produkter',
    REJSER = 'Rejser',
    SIDSTE_CHANCE = 'Sidste chance',
}

@Entity("categorys")
export class Categorys extends BaseEntity {
    // front-end info

    @PrimaryColumn({ type: "enum", enum: Category, unique: true })
    name: Category;

    // back-end info

    @Column({ type: "varchar", length: 60, unique: true })
    slug: string;

    // relations

    @OneToMany(() => Deals, deals => deals.category)
    deals: Deals[];
}

export function setDefaultCategorys() {
    const values = Object.values(Category);

    for (let i = 0; i < values.length; i++) {
        Categorys.create({
            name: values[i],
            slug: values[i].replaceAll(' ', '-').toLowerCase()
        }).save();
    }
}