import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('inicial')
  getHome(): object {
    return {
      titulo: 'Navegação',
      rotas: [
        { path: '/contato', label: 'Contato' },
        { path: '/sobre', label: 'Sobre' },
        { path: '/curriculo', label: 'Currículo' },
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

  @Get('curriculo')
  @Render('curriculo')
  getCurriculo(): object {
    return {
      titulo: 'Meu Currículo',
      nome: 'Alencar Ferreira Morete da Cruz',
      telefone: '(69) 99277-5254',
      email: 'morete.alencar@gmail.com',
      resumo:
        'Acadêmico de Análise e Desenvolvimento de Sistemas pelo IFRO, com conhecimento em conceitos de TI e linguagem C#. Atua como Secretário Setor Geral no Conservatório de Música Sonata LTDA desde 2022, com foco em organização, comunicação e resolução de problemas. Está pronto para aplicar suas habilidades técnicas e administrativas e crescer profissionalmente, agregando valor à empresa.',
      identificacao: [
        { campo: 'Nome em citações bibliográficas', valor: 'CRUZ, A. F. M.' },
        { campo: 'Lattes iD', valor: 'http://lattes.cnpq.br/2524588822655503' },
        { campo: 'Cor ou raça', valor: 'Parda' },
        { campo: 'País de nacionalidade', valor: 'Brasil' },
      ],
      formacaoAcademica: [
        {
          periodo: '2024 - Atual',
          curso: 'Graduação em Análise e Desenvolvimento de Sistemas (em andamento)',
          instituicao: 'Instituto Federal de Rondônia/Campus Ji-Paraná (IFRO)',
        },
        {
          periodo: '2017 - 2019',
          curso: 'Ensino Médio (2º grau)',
          instituicao: 'Escola Estadual de Ensino Fundamental e Médio 28 de Novembro',
        },
      ],
      formacaoComplementar: [
        {
          periodo: '2024 - 2024',
          curso: 'Linguagem de Programação C# - Básico',
          cargaHoraria: '5h',
          instituicao: 'Fundação Bradesco',
        },
        {
          periodo: '2024 - 2024',
          curso: 'Curso de Word',
          cargaHoraria: '2h',
          instituicao: 'Escola do Trabalhador 4.0',
        },
        {
          periodo: '2024 - 2024',
          curso: 'Ambientação AVA: Explorando as Potencialidades do Ambiente Virtual',
          cargaHoraria: '20h',
          instituicao: 'Instituto Federal de Educação, Ciência e Tecnologia de Rondônia',
        },
        {
          periodo: '2018 - 2018',
          curso: 'Conhecimentos Bancários',
          cargaHoraria: '20h',
          instituicao: 'Petromaster Cursos',
        },
        {
          periodo: '2016 - 2016',
          curso: 'Informática Avançada',
          cargaHoraria: '40h',
          instituicao: 'Sindicato dos Trabalhadores Públicos Municipais de Ouro Preto do Oeste',
        },
        {
          periodo: '2011 - 2011',
          curso: 'Digitação Windows, Word, Excel, Power Point e Internet Explorer',
          cargaHoraria: '70h',
          instituicao: 'Sindicato dos Trabalhadores no Comércio de Bens e Serviços',
        },
      ],
      atuacaoProfissional: [
        {
          empresa: 'Conservatório de Música Sonata LTDA (SONATAMD), Brasil',
          periodo: '2022 - Atual',
          vinculo: 'Empregado CLT',
          cargo: 'Secretário Setor Geral',
          cargaHoraria: '44 horas semanais',
        },
      ],
    };
  }
  @Get('login')
  @Render('autenticacao/login')
  login(): object{
    return{

    };
  }
}
