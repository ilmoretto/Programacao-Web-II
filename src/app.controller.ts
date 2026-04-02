import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('autenticacao/login')
  loginPrincipal(): object {
    return {
      titulo: 'Entrar no sistema',
    };
  }

  @Get('inicial')
  @Render('inicial')
  getHome(): object {
    return {
      titulo: 'Navegação',
      rotas: [
        { path: '/contato', label: 'Contato' },
        { path: '/sobre', label: 'Sobre' },
        { path: '/curriculo', label: 'Currículo' },
        { path: '/produtos', label: 'Produtos' },
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
      nome: 'Alencar Ferreira Morete da Cruz',
      curso: 'Análise e Desenvolvimento de Sistemas - IFRO',
      resumo:
        'Acadêmico de ADS no IFRO com base em conceitos de TI e linguagem C#. Atua desde 2022 como Secretário Setor Geral no Conservatório de Música Sonata LTDA, desenvolvendo organização, comunicação e resolução de problemas.',
      objetivo:
        'Atuar em oportunidades de tecnologia para aplicar habilidades técnicas e administrativas, evoluir profissionalmente e gerar valor para a equipe e para a empresa.',
      habilidades: ['C#', 'TypeScript', 'NestJS', 'HTML/CSS', 'SQL'],
      hobbies: ['Programar', 'Jogos', 'Música', 'Leitura', 'Culinária'],
    };
  }
}
