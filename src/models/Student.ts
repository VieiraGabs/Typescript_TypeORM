import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { IsEmail, Max, Min, MaxLength, MinLength } from 'class-validator';
import Class from './Class';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(50, { message: 'Nome precisar no máximo 50 caracteres' })
  @MinLength(2, { message: 'Nome deve possuir no mínimo 2 caracteres' })
  name: string;

  @Column()
  @Max(2048, { message: 'Chave inválida' })
  @Min(1024)
  key: number;

  @Column()
  @IsEmail()
  email: string;

  @ManyToMany(type => Class)
  @JoinTable()
  classes: Class;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
