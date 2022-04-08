import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { GovernoLocalDTO } from './governo-local.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['cargo'])
export class GovernoLocal {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  cargo: string;

  init(body: GovernoLocalDTO): GovernoLocal {
    this.id = body.id;
    this.cargo = body.cargo;
    return this;
  }
}
