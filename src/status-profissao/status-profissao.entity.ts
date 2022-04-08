import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { StatusProfissaoDTO } from './status-profissao.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['status'])
export class StatusProfissao {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  status: string;

  init(body: StatusProfissaoDTO): StatusProfissao {
    this.id = body.id;
    this.status = body.status;
    return this;
  }
}
