import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { ValidadePassaporteDTO } from './validade-passaporte.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['validade'])
export class ValidadePassaporte {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  validade: string;

  init(body: ValidadePassaporteDTO): ValidadePassaporte {
    this.id = body.id;
    this.validade = body.validade;
    return this;
  }
}
