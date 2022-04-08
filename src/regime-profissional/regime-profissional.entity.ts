import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { RegimeProfissionalDTO } from './regime-profissional.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['regime'])
export class RegimeProfissional {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  regime: string;

  init(body: RegimeProfissionalDTO): RegimeProfissional {
    this.id = body.id;
    this.regime = body.regime;
    return this;
  }
}
