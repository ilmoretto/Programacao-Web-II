import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('inicial')
  getInicial(): object {
    return {
      titulo: 'App Web com NestJS',
      horaAgora: new Date(),
      listaPessoas: [
        { nome: 'Alencar Morete', email: 'morete.alencar@gmail.com' },
        { nome: 'Jéssica Machado', email: 'j.machado.psi@gmail.com' },
      ],
    };
  }

  @Get('contato')
  @Render('contato')
  getContato(): object {
    return { titulo: 'Informações de contato' };
  }

  @Get('sobre')
  @Render('sobre')
  getSobre(): object {
    return {
      titulo: 'Sobre mim',
      nome: 'Seu Nome Aqui',
      curso: 'Desenvolvimento Web',
      hobbies: ['Programar', 'Jogos', 'Música'],
    };
  }

  @Get('curriculo')
  @Render('curriculo')
  getCurriculo(): object {
    return {
      titulo: 'Meu Currículo',
      nome: 'Alencar Morete',
      email: 'morete.alencar@estudante.ifro.edu.br',
      habilidades: ['TypeScript', 'NestJS', 'HTML/CSS', 'SQL'],
      experiencias: [
        { cargo: 'Secretário Administrativo', empresa: 'Sonata MD', ano: '2022' },
      ],
      formacao: [
        {
          curso: 'Análise e Desenv. de Sistemas',
          instituicao: 'Instituto Federal De Rondônia',
          ano: '2024–2026',
        },
      ],
    };
  }
}
