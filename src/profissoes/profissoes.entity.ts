import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { ProfissoesDTO } from './profissoes.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['profissao'])
export class Profissoes {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  profissao: string;

  init(body: ProfissoesDTO): Profissoes {
    this.id = body.id;
    this.profissao = body.profissao;
    return this;
  }
}
