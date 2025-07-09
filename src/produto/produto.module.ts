import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from '../categoria/entities/categoria.entity';
import { ProdutoController } from './controllers/produto.controller';
import { Produto } from './entities/produto.entity';
import { ProdutoService } from './services/produto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, Categoria])],
  providers: [ProdutoService],
  controllers: [ProdutoController],
  exports: [],
})
export class ProdutoModule { }