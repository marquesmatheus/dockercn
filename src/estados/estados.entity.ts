import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { EstadosDTO } from './estados.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';
import { Paises } from 'src/paises/paises.entity';

@Entity()
export class Estados {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  nome: string;

  @ManyToOne(() => Paises, (paises) => paises.id)
  @JoinColumn()
  doPais: number;

  init(body: EstadosDTO): Estados {
    this.id = body.id;
    this.nome = body.nome;
    this.doPais = body.idPais;
    return this;
  }
}
