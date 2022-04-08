import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { AfastamentoTemporarioDTO } from './afastamento-temporario.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['afastamento'])
export class AfastamentoTemporario {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  afastamento: string;

  init(body: AfastamentoTemporarioDTO): AfastamentoTemporario {
    this.id = body.id;
    this.afastamento = body.afastamento;
    return this;
  }
}
