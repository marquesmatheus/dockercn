import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { CargosConselhoDTO } from './cargos-conselho.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['cargo'])
export class CargosConselho {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  cargo: string;

  init(body: CargosConselhoDTO): CargosConselho {
    this.id = body.id;
    this.cargo = body.cargo;
    return this;
  }
}
