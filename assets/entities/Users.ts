import { Roles } from './Roles';
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("users")
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // front-end info

    @Column()
    username!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column({
        // unique: true
    })
    email!: string;

    @Column()
    password!: string;

    // back-end info

    @OneToOne(() => Roles)
    @JoinColumn()
    role: Roles;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    password_set: Date;

    @CreateDateColumn()
    last_login: Date;

    @Column({
        default: 1,
        type: "int"
    })
    login_attempts: number;
}