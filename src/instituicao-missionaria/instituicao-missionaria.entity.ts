import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { InstituicaoAtuacaoDTO } from './instituicao-missionaria.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['instituicao'])
export class InstituicaoAtuacao {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  instituicao: string;

  init(body: InstituicaoAtuacaoDTO): InstituicaoAtuacao {
    this.id = body.id;
    this.instituicao = body.instituicao;
    return this;
  }
}
