import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PaisesDTO } from './paises.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
export class Paises {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  nome: string;

  init(body: PaisesDTO): Paises {
    this.id = body.id;
    this.nome = body.nome;
    return this;
  }
}
