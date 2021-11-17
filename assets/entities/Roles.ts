import { Users } from './Users';
import { BaseEntity, Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';



@Entity("roles")
export class Roles extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column({
        unique: true
    })
    name: string;

    @OneToOne(() => Users, user => user.role)
    user: Users;
}