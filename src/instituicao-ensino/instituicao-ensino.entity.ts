import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { InstituicaoEnsinoDTO } from './instituicao-ensino.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['instituicao'])
export class InstituicaoEnsino {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  instituicao: string;

  init(body: InstituicaoEnsinoDTO): InstituicaoEnsino {
    this.id = body.id;
    this.instituicao = body.instituicao;
    return this;
  }
}
