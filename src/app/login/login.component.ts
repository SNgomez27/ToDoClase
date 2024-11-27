import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Importa Router

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router  // Inyecta Router
    ) { }

    ngOnInit(): void {

        this.loginForm = this.fb.group({
            nombre: ['', Validators.required],
            contraseña: ['', Validators.required]
        });
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            console.log('Formulario enviado con éxito', this.loginForm.value);

            this.goPagPrincipal();
        } else {
            console.log('Formulario no válido');
        }
    }

    goPagPrincipal() {
        console.log('Redirigiendo a la página principal...');
        this.router.navigate(['/pagprinci']);
    }

    goPagRegister() {
        console.log('Redirigiendo al registro...');
        this.router.navigate(['/register']);
    }

}

