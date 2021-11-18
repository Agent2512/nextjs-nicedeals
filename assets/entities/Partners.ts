import { Users } from './Users';
import { Entity, BaseEntity, PrimaryColumn, Column, CreateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Deals } from './deals';


@Entity("partners")
export class Partners extends BaseEntity {
    @PrimaryColumn({ type: "int" })
    user_id: number;

    // front-end info

    @Column({ type: "varchar", length: 60 })
    contact_name: string;

    @Column({ type: "varchar", length: 60 })
    contact_email: string;

    @Column({ type: "varchar", length: 25 })
    contact_phone: string;

    @Column({ type: "varchar", length: 10 })
    cvr: string;

    // back-end info

    @CreateDateColumn()
    created_at: Date;

    // relations

    @OneToOne(() => Users, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "user_id" })
    user: Users;

    @OneToMany(() => Deals, deal => deal.partner)
    deals: Deals[]
}