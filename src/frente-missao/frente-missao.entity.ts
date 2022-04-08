import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { FrenteMissaoDTO } from './frente-missao.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['missao'])
export class FrenteMissao {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  missao: string;

  @Column('int')
  @IsInt()
  idCidade: number;

  init(body: FrenteMissaoDTO): FrenteMissao {
    this.id = body.id;
    this.missao = body.missao;
    this.idCidade = body.idCidade;
    return this;
  }
}
