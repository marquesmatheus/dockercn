import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { StatusDTO } from './status.dto';
import { IsInt, IsString, ValidateIf } from 'class-validator';

@Entity()
@Unique(['status'])
export class Status {
  @PrimaryGeneratedColumn('increment')
  @ValidateIf((c) => !!c.id)
  @IsInt()
  id: number;

  @Column({ length: 100 })
  @IsString()
  status: string;

  init(body: StatusDTO): Status {
    this.id = body.id;
    this.status = body.status;
    return this;
  }
}
