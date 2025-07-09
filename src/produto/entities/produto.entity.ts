import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString({ message: 'O nome deve ser um texto.' })
  @MaxLength(255, { message: 'O nome ultrapassou o limite permitido.' })
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty({ message: 'O preço é obrigatório.' })
  @IsNumber({}, { message: 'O preço deve ser um número.' })
  @Min(0, { message: 'O preço não pode ser negativo.' })
  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  preco: number;

  @IsOptional() // faz com que o class-validator ignore os outros validadores se o campo não estiver presente na requisição.
  @IsString({ message: 'A descrição deve ser um texto.' })
  @MaxLength(255, { message: 'A descrição ultrapassou o limite permitido.' })
  @Column({ type: 'text', nullable: true })
  descricao?: string;

  @IsOptional()
  @IsString({ message: 'A imagem deve ser uma URL válida.' })
  @MaxLength(255, {
    message: 'A URL da imagem ultrapassou o limite permitido.',
  })
  @Column({ length: 5000, nullable: true })
  imagem?: string;

  @ManyToOne(() => Categoria, categoria => categoria.produtos, { eager: true })
  categoria: Categoria;
}
