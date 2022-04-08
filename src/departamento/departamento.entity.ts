import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { DepartamentoDTO } from './departamento.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['departamento'])
export class Departamento {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  departamento: string;

  init(body: DepartamentoDTO): Departamento {
    this.id = body.id;
    this.departamento = body.departamento;
    return this;
  }
}
