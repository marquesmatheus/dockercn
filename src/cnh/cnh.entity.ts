import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { CnhDTO } from './cnh.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['cnh'])
export class Cnh {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  cnh: string;

  init(body: CnhDTO): Cnh {
    this.id = body.id;
    this.cnh = body.cnh;
    return this;
  }
}
