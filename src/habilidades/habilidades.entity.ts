import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { HabilidadesDTO } from './habilidades.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['habilidade'])
export class Habilidades {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  habilidade: string;

  init(body: HabilidadesDTO): Habilidades {
    this.id = body.id;
    this.habilidade = body.habilidade;
    return this;
  }
}
