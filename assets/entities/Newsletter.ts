import { Users } from './Users';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity("newsletter")
export class Newsletter extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // front-end info

    @Column({ type: "varchar", length: 255 })
    email: string;

    @Column({ type: "varchar", length: 255 })
    name: string;

    // back-end info

    @CreateDateColumn()
    created_at: Date;

    // relations

    @Column({ type: "int", nullable: true, name: "user_id", default: null })
    @OneToOne(() => Users, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    user: Users | null;
}