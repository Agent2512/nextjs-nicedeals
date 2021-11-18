import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Users } from './Users';

export enum Role {
    ADMIN = 'admin',
    USER = 'user',
    PARTNER = 'partner',
}

@Entity("roles")
export class Roles extends BaseEntity {
    @PrimaryColumn({
        type: 'enum',
        unique: true,
        enum: Role
    })
    roleName: Role;

    // relations

    @OneToMany(() => Users, user => user.role)
    user: Users;
}