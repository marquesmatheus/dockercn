import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { GrauInstrucaoDTO } from './grau-instrucao.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['grau'])
export class GrauInstrucao {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  grau: string;

  init(body: GrauInstrucaoDTO): GrauInstrucao {
    this.id = body.id;
    this.grau = body.grau;
    return this;
  }
}
