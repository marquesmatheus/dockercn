import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { CidadesDTO } from './cidades.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';
import { Estados } from 'src/estados/estados.entity';

@Entity()
@Unique(['nome'])
export class Cidades {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  nome: string;

  @ManyToOne(() => Estados, (estados) => estados.id)
  @JoinColumn()
  doEstado: number;

  init(body: CidadesDTO): Cidades {
    this.id = body.id;
    this.nome = body.nome;
    this.doEstado = body.idEstado;
    return this;
  }
}
