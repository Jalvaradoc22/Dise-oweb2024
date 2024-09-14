import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { IsString, MinLength, IsNumber, Min } from 'class-validator';

@Entity('prod')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  @MinLength(3)
  nombre: string;

  @Column({ nullable: true })
  descripcion?: string;

  @Column('decimal')
  @IsNumber()
  @Min(0.01)
  precio: number;

  @Column('int')
  @IsNumber()
  @Min(0)
  stock: number;

  @CreateDateColumn()
  fechaCreacion: Date;
}
