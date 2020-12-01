import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  JoinTable,
  OneToOne,
} from 'typeorm';

import { IsEmail, Max, Min, MaxLength, MinLength } from 'class-validator';
import Lesson from './Lesson';
import College from './College';

@Entity('teacher')
export default class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(30, { message: 'No máximo 30 caracteres' })
  @MinLength(2, { message: 'No mínimo 2 caracteres' })
  name: string;

  @Column()
  @Max(2048, { message: 'Chave inválida' })
  @Min(1024, { message: 'Chave inválida' })
  key: number;

  @Column()
  phone: string;

  @Column()
  @IsEmail()
  email: string;

  @OneToOne(type => Lesson, teacher => Teacher)
  @JoinTable()
  lesson: Lesson;

  @OneToOne(type => College, teacher => Teacher)
  @JoinTable()
  college: College;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
