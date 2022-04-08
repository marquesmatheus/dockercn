import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { MotivoDesligamentoDTO } from './motivo-desligamento.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['motivo'])
export class MotivoDesligamento {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  motivo: string;

  init(body: MotivoDesligamentoDTO): MotivoDesligamento {
    this.id = body.id;
    this.motivo = body.motivo;
    return this;
  }
}
