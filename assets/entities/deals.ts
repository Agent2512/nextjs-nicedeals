import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Categorys } from "./Categorys";
import { Partners } from "./Partners";


@Entity("deals")
export class Deals extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    // front-end info

    @Column({ type: "varchar", length: 255 })
    title: string;

    @Column({ type: "varchar", length: 255 })
    teaser: string;

    @Column({ type: "longtext"})
    text: string;

    // back-end info

    @Column({ type: "varchar", length: 255 })
    imageurl: string;

    @Column({ type: "varchar", length: 255 })
    slug: string;

    @Column({ type: "datetime"})
    startdate: Date;

    @Column({ type: "datetime"})
    enddate: Date;

    @Column({ type: "int" })
    partner_id: number;

    @Column({ type: "int" })
    price: number;

    @Column({ type: "int" })
    value: number;

    @Column({ type: "int" })
    saving: number;

    @Column({ type: "int" })
    units: number;

    // relations

    @Column({ type: "varchar", length: 60 })
    @ManyToOne(() => Categorys, categorys => categorys.deals)
    @JoinColumn({ name: "category" })
    category: Categorys;

    @ManyToOne(() => Partners, partners => partners.deals, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: "partner_id" })
    partner:Partners
}