import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { GrauPertencaDTO } from './grau-pertenca.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['grau'])
export class GrauPertenca {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  grau: string;

  init(body: GrauPertencaDTO): GrauPertenca {
    this.id = body.id;
    this.grau = body.grau;
    return this;
  }
}
