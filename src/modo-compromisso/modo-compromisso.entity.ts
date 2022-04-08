import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { ModoCompromissoDTO } from './modo-compromisso.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['modo'])
export class ModoCompromisso {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  modo: string;

  init(body: ModoCompromissoDTO): ModoCompromisso {
    this.id = body.id;
    this.modo = body.modo;
    return this;
  }
}
