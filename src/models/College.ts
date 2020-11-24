import { Entity, Column, OneToOne } from 'typeorm';
import Identifier from './Identifier';
import Teacher from './Teacher';

@Entity()
export default class College {
  @Column(type => Identifier)
  identification: Identifier;

  @Column()
  graduations: string;

  @Column()
  year: number;

  @OneToOne(type => Teacher, college => College)
  teacher: Teacher;
}
