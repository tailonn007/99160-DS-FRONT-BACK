import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Necessário para o ngModel

@Component({
  selector: 'app-adicionar-usuario',
  standalone: true,
  imports: [FormsModule], // Adicione isso se for standalone
  templateUrl: './adicionar-usuario.html',
  styleUrl: './adicionar-usuario.css'
})
export class AdicionarUsuario {
  // Adicione estas duas linhas:
  nome: string = '';
  email: string = '';

  // Sua lista de usuários (para o @for funcionar)
  usuarios: any[] = []; 

  adicionarUsuario() {
    // Lógica para adicionar o usuário na lista
    this.usuarios.push({
      nome: this.nome,
      email: this.email
    });
    
    // Limpar os campos após adicionar
    this.nome = '';
    this.email = '';
  }
}