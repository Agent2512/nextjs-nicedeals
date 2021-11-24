import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role, Roles } from './Roles';


@Entity("users")
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    // front-end info

    @Column({ type: "varchar", length: 60 })
    username: string;

    @Column({ type: "varchar", length: 60 })
    firstName: string;

    @Column({ type: "varchar", length: 60 })
    lastName: string;

    @Column({ type: "varchar", length: 60, unique: true })
    email: string;

    @Column({ type: "varchar", length: 255 })
    password: string;

    // back-end info

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

    // relations

    @Column({ type: "enum", enum: Role, default: Role.USER, })
    @ManyToOne(() => Roles, Roles => Roles.user)
    @JoinColumn({ name: "role" })
    role: Role;
}