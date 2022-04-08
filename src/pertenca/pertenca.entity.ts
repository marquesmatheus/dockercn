import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { PertencaDTO } from './pertenca.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['pertenca'])
export class Pertenca {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  pertenca: string;

  init(body: PertencaDTO): Pertenca {
    this.id = body.id;
    this.pertenca = body.pertenca;
    return this;
  }
}
