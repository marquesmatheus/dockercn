import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { CursandoDTO } from './cursando.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['curso'])
export class Cursando {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  curso: string;

  init(body: CursandoDTO): Cursando {
    this.id = body.id;
    this.curso = body.curso;
    return this;
  }
}
