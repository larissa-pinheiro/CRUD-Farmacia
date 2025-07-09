import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty({ message: 'O nome da categoria é obrigatório.' })
  @IsString({ message: 'O nome da categoria deve ser um texto.' })
  @MaxLength(100, { message: 'O nome da categoria ultrapassou o limite permitido.' })
  @Column({ length: 100, nullable: false })
  nome: string;
}
