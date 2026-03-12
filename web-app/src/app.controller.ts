import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('Inicial')
  getHello(): object {

    let pessoas = [
      { nome: 'Alencar Morete', email: 'morete.alencar@gmail.com' },
      { nome: 'Jéssica Machado', email: 'j.machado.psi@gmail.com' },
      { nome: 'Ivan Ilitch', email: 'ilitch.ivan@gmail.com' },
      { nome: 'Dom Casmurro', email: 'capituebentinhoforever@gmail.com' },

    ]

    return {
      titulo: 'App Web com NestJS',
      horaAgora: new Date(),
      listaPessoas: pessoas
    };
  }

  //contato
  @Get()
  @Render('contato')
  getContato(): object {
    return { titulo: 'Informações de contato' }
  }

}
