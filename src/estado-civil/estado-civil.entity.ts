import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { EstadoCivilDTO } from './estado-civil.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
export class EstadoCivil {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  estado: string;

  init(body: EstadoCivilDTO): EstadoCivil {
    this.id = body.id;
    this.estado = body.estado;
    return this;
  }
}
