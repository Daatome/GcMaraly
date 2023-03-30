import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  navbar:any;
  imagenes:string[];
  clientes: any[];

  constructor(){
    this.navbar= document.querySelector("#navbarOpacity");

    window.addEventListener('scroll', () => {
      if(document.documentElement.scrollTop>30){
        this.navbar.classList.remove('opacity-75');
      }
      else{
        this.navbar.classList.add('opacity-75');

      }
    });

    this.imagenes=[
      'https://media.licdn.com/dms/image/D4E0BAQEyAdTwW0tn1A/company-logo_200_200/0/1667409951781?e=2147483647&v=beta&t=H7mYgjfCLsAH5D36d_dafk-DAodsoXkAnZgAnjW0-xU',
      'https://media.licdn.com/dms/image/C4D0BAQG0oO-wwLNaYQ/company-logo_200_200/0/1519922058732?e=2147483647&v=beta&t=lNLx7962hA66a_Arr1PkCQr2kAtKviuyRsLNj-OSNC4',
      'https://media.licdn.com/dms/image/C560BAQEU7dj9hs1ASQ/company-logo_200_200/0/1671582330991?e=2147483647&v=beta&t=zt8Pqu_r8dOdR1r-Ez6h-eJs2uE7s2EYl52Q5zWhc9w'
    ];
    this.clientes=[
      {
        "nombre": "Parks",
        imagen:"https://media.licdn.com/dms/image/D4E0BAQEyAdTwW0tn1A/company-logo_200_200/0/1667409951781?e=2147483647&v=beta&t=H7mYgjfCLsAH5D36d_dafk-DAodsoXkAnZgAnjW0-xU",
        descripcion:"PARKS es una empresa dedicada al desarrollo,construcción y comercialización de una amplia gama de negocios inmobiliarios, entre ellos Industriales, comerciales, corporativos y de uso mixto. Cuenta con uno de los proyectos más exclusivos de México llamado MITIKAH.",
        sitioWeb: "https://www.parks.com.mx/"
      },
      {
        nombre: "Postensa",
        imagen:"https://media.licdn.com/dms/image/C4D0BAQG0oO-wwLNaYQ/company-logo_200_200/0/1519922058732?e=2147483647&v=beta&t=lNLx7962hA66a_Arr1PkCQr2kAtKviuyRsLNj-OSNC4",
        descripcion:"Con una historia continua de expansión y éxito que abarca más de seis décadas, POSTENSA es actualmente una empresa líder en el diseño y construcción de estructuras postensadas.",
        sitioWeb: "https://www.postensa.com.mx/"

      },
      {
        nombre: "SEICA",
        imagen:"https://media.licdn.com/dms/image/C560BAQEU7dj9hs1ASQ/company-logo_200_200/0/1671582330991?e=2147483647&v=beta&t=zt8Pqu_r8dOdR1r-Ez6h-eJs2uE7s2EYl52Q5zWhc9w",
        descripcion:"Desde el año 2000, SEICA ha sido una empresa especializada en proyectos industriales y comerciales a lo largo de la república mexicana. Líder en el sector de construcción y administración de proyectos sustentables, proyectos BIM, sistema Tilt-Up, Proyectos para Certificación LEED.",
        sitioWeb:"http://seica.com.mx/"
      }
    ];
    
  }
  
  

  
  

}
