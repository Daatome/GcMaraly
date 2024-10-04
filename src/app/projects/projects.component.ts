import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, HostListener } from '@angular/core';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  // Declare height and width variables
  scrHeight:any;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }

  // Constructor
  constructor() {
      this.getScreenSize();

  }



  losreyesPark: Array<object>= [
    {
      image: 'assets/images/projects/losReyes/1.jpeg',
      thumbImage: 'assets/images/projects/losReyes/1.jpeg',
      alt: 'Los Reyes',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    },
    {
      image: 'assets/images/projects/losReyes/2.jpeg',
      thumbImage: 'assets/images/projects/losReyes/2.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/3.jpeg',
      thumbImage: 'assets/images/projects/losReyes/3.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/4.jpeg',
      thumbImage: 'assets/images/projects/losReyes/4.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/5.jpeg',
      thumbImage: 'assets/images/projects/losReyes/5.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/6.jpeg',
      thumbImage: 'assets/images/projects/losReyes/6.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/7.jpeg',
      thumbImage: 'assets/images/projects/losReyes/7.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/8.jpeg',
      thumbImage: 'assets/images/projects/losReyes/8.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/9.jpeg',
      thumbImage: 'assets/images/projects/losReyes/9.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/10.jpeg',
      thumbImage: 'assets/images/projects/losReyes/10.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/11.jpeg',
      thumbImage: 'assets/images/projects/losReyes/11.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/12.jpeg',
      thumbImage: 'assets/images/projects/losReyes/12.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/13.jpeg',
      thumbImage: 'assets/images/projects/losReyes/13.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/14.jpeg',
      thumbImage: 'assets/images/projects/losReyes/14.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/15.jpeg',
      thumbImage: 'assets/images/projects/losReyes/15.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/16.jpeg',
      thumbImage: 'assets/images/projects/losReyes/16.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/17.jpeg',
      thumbImage: 'assets/images/projects/losReyes/17.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/18.jpeg',
      thumbImage: 'assets/images/projects/losReyes/18.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/19.jpeg',
      thumbImage: 'assets/images/projects/losReyes/19.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/20.jpeg',
      thumbImage: 'assets/images/projects/losReyes/20.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/21.jpeg',
      thumbImage: 'assets/images/projects/losReyes/21.jpeg',
      alt: 'Los Reyes',

    },
    {
      image: 'assets/images/projects/losReyes/22.jpeg',
      thumbImage: 'assets/images/projects/losReyes/22.jpeg',
      alt: 'Los Reyes',

    },

  ];

  kavi: Array<object>= [
    {
      image: 'assets/images/projects/kavi/1.jpeg',
      thumbImage: 'assets/images/projects/kavi/1.jpeg',
      alt: 'KAVI',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    },
    {
      image: 'assets/images/projects/kavi/2.jpeg',
      thumbImage: 'assets/images/projects/kavi/2.jpeg',
      alt: 'KAVI',

    },
    {
      image: 'assets/images/projects/kavi/3.jpeg',
      thumbImage: 'assets/images/projects/kavi/3.jpeg',
      alt: 'KAVI',

    },
    {
      image: 'assets/images/projects/kavi/4.jpeg',
      thumbImage: 'assets/images/projects/kavi/4.jpeg',
      alt: 'KAVI',

    },
    {
      image: 'assets/images/projects/kavi/5.jpeg',
      thumbImage: 'assets/images/projects/kavi/5.jpeg',
      alt: 'KAVI',

    },
    {
      image: 'assets/images/projects/kavi/6.jpeg',
      thumbImage: 'assets/images/projects/kavi/6.jpeg',
      alt: 'KAVI',

    },
    {
      image: 'assets/images/projects/kavi/7.jpeg',
      thumbImage: 'assets/images/projects/kavi/7.jpeg',
      alt: 'KAVI',

    },
    {
      image: 'assets/images/projects/kavi/8.jpeg',
      thumbImage: 'assets/images/projects/kavi/8.jpeg',
      alt: 'KAVI',

    },
    {
      image: 'assets/images/projects/kavi/9.jpeg',
      thumbImage: 'assets/images/projects/kavi/9.jpeg',
      alt: 'KAVI',

    },
    {
      image: 'assets/images/projects/kavi/10.jpeg',
      thumbImage: 'assets/images/projects/kavi/10.jpeg',
      alt: 'KAVI',

    },
    {
      image: 'assets/images/projects/kavi/11.jpeg',
      thumbImage: 'assets/images/projects/kavi/11.jpeg',
      alt: 'KAVI',

    },
    {
      image: 'assets/images/projects/kavi/12.jpeg',
      thumbImage: 'assets/images/projects/kavi/12.jpeg',
      alt: 'KAVI',

    },
    {
      image: 'assets/images/projects/kavi/13.jpeg',
      thumbImage: 'assets/images/projects/kavi/13.jpeg',
      alt: 'KAVI',

    },
    {
      image: 'assets/images/projects/kavi/14.jpeg',
      thumbImage: 'assets/images/projects/kavi/14.jpeg',
      alt: 'KAVI',

    },
    {
      image: 'assets/images/projects/kavi/15.jpeg',
      thumbImage: 'assets/images/projects/kavi/15.jpeg',
      alt: 'KAVI',

    },
    {
      image: 'assets/images/projects/kavi/16.jpeg',
      thumbImage: 'assets/images/projects/kavi/16.jpeg',
      alt: 'KAVI',

    },

  ];

  olimpoPark: Array<object>= [
    {
      image: 'assets/images/projects/olimpoPark/1.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/1.jpeg',
      alt: 'olimpo Park',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    },
    {
      image: 'assets/images/projects/olimpoPark/2.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/2.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/3.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/3.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/4.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/4.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/5.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/5.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/6.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/6.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/7.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/7.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/8.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/8.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/9.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/9.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/10.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/10.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/11.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/11.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/12.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/12.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/13.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/13.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/14.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/14.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/15.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/15.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/16.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/16.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/17.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/17.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/18.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/18.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/19.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/19.jpeg',
      alt: 'olimpo Park',

    },
    {
      image: 'assets/images/projects/olimpoPark/20.jpeg',
      thumbImage: 'assets/images/projects/olimpoPark/20.jpeg',
      alt: 'olimpo Park',

    },
  ];

  mitikah: Array<object> = [
    {
      image: 'assets/images/projects/mitikah/1.jpeg',
      thumbImage: 'assets/images/projects/mitikah/1.jpeg',
      alt: 'mitikah',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    },
    {
      image: 'assets/images/projects/mitikah/2.jpeg',
      thumbImage: 'assets/images/projects/mitikah/2.jpeg',
      alt: 'mitikah',
    },
    {
      image: 'assets/images/projects/mitikah/3.jpeg',
      thumbImage: 'assets/images/projects/mitikah/3.jpeg',
      alt: 'mitikah',
    },
    {
      image: 'assets/images/projects/mitikah/4.jpeg',
      thumbImage: 'assets/images/projects/mitikah/4.jpeg',
      alt: 'mitikah',
    },
    {
      image: 'assets/images/projects/mitikah/5.jpeg',
      thumbImage: 'assets/images/projects/mitikah/5.jpeg',
      alt: 'mitikah',
    },
    {
      image: 'assets/images/projects/mitikah/6.jpeg',
      thumbImage: 'assets/images/projects/mitikah/6.jpeg',
      alt: 'mitikah',
    },
    {
      image: 'assets/images/projects/mitikah/7.jpeg',
      thumbImage: 'assets/images/projects/mitikah/7.jpeg',
      alt: 'mitikah',
    },
    {
      image: 'assets/images/projects/mitikah/8.jpeg',
      thumbImage: 'assets/images/projects/mitikah/8.jpeg',
      alt: 'mitikah',
    },
    {
      image: 'assets/images/projects/mitikah/9.jpeg',
      thumbImage: 'assets/images/projects/mitikah/9.jpeg',
      alt: 'mitikah',
    },
    {
      image: 'assets/images/projects/mitikah/10.jpeg',
      thumbImage: 'assets/images/projects/mitikah/10.jpeg',
      alt: 'mitikah',
    },
    {
      image: 'assets/images/projects/mitikah/11.jpeg',
      thumbImage: 'assets/images/projects/mitikah/11.jpeg',
      alt: 'mitikah',
    },
    {
      image: 'assets/images/projects/mitikah/12.jpeg',
      thumbImage: 'assets/images/projects/mitikah/12.jpeg',
      alt: 'mitikah',
    },


  ];
  centroBancomer: Array<object> = [
    {
      image: 'assets/images/projects/centroBancomer/1.jpeg',
      thumbImage: 'assets/images/projects/centroBancomer/1.jpeg',
      alt: 'centroBancomer',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    },
    {
      image: 'assets/images/projects/centroBancomer/2.jpeg',
      thumbImage: 'assets/images/projects/centroBancomer/2.jpeg',
      alt: 'centroBancomer',
    },
    {
      image: 'assets/images/projects/centroBancomer/3.jpeg',
      thumbImage: 'assets/images/projects/centroBancomer/3.jpeg',
      alt: 'centroBancomer',
    },
    {
      image: 'assets/images/projects/centroBancomer/4.jpeg',
      thumbImage: 'assets/images/projects/centroBancomer/4.jpeg',
      alt: 'centroBancomer',
    },
    {
      image: 'assets/images/projects/centroBancomer/5.jpeg',
      thumbImage: 'assets/images/projects/centroBancomer/5.jpeg',
      alt: 'centroBancomer',
    },
    {
      image: 'assets/images/projects/centroBancomer/6.jpeg',
      thumbImage: 'assets/images/projects/centroBancomer/6.jpeg',
      alt: 'centroBancomer',
    },
    {
      image: 'assets/images/projects/centroBancomer/7.jpeg',
      thumbImage: 'assets/images/projects/centroBancomer/7.jpeg',
      alt: 'centroBancomer',
    },



  ];

  centroSalud: Array<object> = [
    {
      image: 'assets/images/projects/centroSalud/1.jpeg',
      thumbImage: 'assets/images/projects/centroSalud/1.jpeg',
      alt: 'centroSalud',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    },
    {
      image: 'assets/images/projects/centroSalud/2.jpeg',
      thumbImage: 'assets/images/projects/centroSalud/2.jpeg',
      alt: 'centroSalud',
    },
    {
      image: 'assets/images/projects/centroSalud/3.jpeg',
      thumbImage: 'assets/images/projects/centroSalud/3.jpeg',
      alt: 'centroSalud',
    },
    {
      image: 'assets/images/projects/centroSalud/4.jpeg',
      thumbImage: 'assets/images/projects/centroSalud/4.jpeg',
      alt: 'centroSalud',
    },
    {
      image: 'assets/images/projects/centroSalud/5.jpeg',
      thumbImage: 'assets/images/projects/centroSalud/5.jpeg',
      alt: 'centroSalud',
    },
    {
      image: 'assets/images/projects/centroSalud/6.jpeg',
      thumbImage: 'assets/images/projects/centroSalud/6.jpeg',
      alt: 'centroSalud',
    },
    {
      image: 'assets/images/projects/centroSalud/7.jpeg',
      thumbImage: 'assets/images/projects/centroSalud/7.jpeg',
      alt: 'centroSalud',
    },
    {
      image: 'assets/images/projects/centroSalud/8.jpeg',
      thumbImage: 'assets/images/projects/centroSalud/8.jpeg',
      alt: 'centroSalud',
    },
    {
      image: 'assets/images/projects/centroSalud/9.jpeg',
      thumbImage: 'assets/images/projects/centroSalud/9.jpeg',
      alt: 'centroSalud',
    },
    {
      image: 'assets/images/projects/centroSalud/10.jpeg',
      thumbImage: 'assets/images/projects/centroSalud/10.jpeg',
      alt: 'centroSalud',
    },
    {
      image: 'assets/images/projects/centroSalud/11.jpeg',
      thumbImage: 'assets/images/projects/centroSalud/11.jpeg',
      alt: 'centroSalud',
    },



  ];

  helipuerto: Array<object> = [
    {
      image: 'assets/images/projects/helipuertoMitikah/1.jpeg',
      thumbImage: 'assets/images/projects/helipuertoMitikah/1.jpeg',
      alt: 'helipuertoMitikah',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    },
    {
      image: 'assets/images/projects/helipuertoMitikah/2.jpeg',
      thumbImage: 'assets/images/projects/helipuertoMitikah/2.jpeg',
      alt: 'helipuertoMitikah',
    },
    {
      image: 'assets/images/projects/helipuertoMitikah/3.jpeg',
      thumbImage: 'assets/images/projects/helipuertoMitikah/3.jpeg',
      alt: 'helipuertoMitikah',
    },




  ];


  avenidaUniversidad: Array<object> = [
    {
      image: 'assets/images/projects/avenidaUniversidad/1.png',
      thumbImage: 'assets/images/projects/avenidaUniversidad/1.png',
      alt: 'avenidaUniversidad',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    },
    {
      image: 'assets/images/projects/avenidaUniversidad/2.png',
      thumbImage: 'assets/images/projects/avenidaUniversidad/2.png',
      title:'Demolición de banquetas',
      alt: 'avenidaUniversidad',
    },
    {
      image: 'assets/images/projects/avenidaUniversidad/3.png',
      thumbImage: 'assets/images/projects/avenidaUniversidad/3.png',
      title:'Preeliminares para recibir banquetas',
      alt: 'avenidaUniversidad',
    },
    {
      image: 'assets/images/projects/avenidaUniversidad/4.png',
      thumbImage: 'assets/images/projects/avenidaUniversidad/4.png',
      title:'Preeliminares para recibir banquetas',
      alt: 'avenidaUniversidad',
    },
    {
      image: 'assets/images/projects/avenidaUniversidad/5.png',
      thumbImage: 'assets/images/projects/avenidaUniversidad/5.png',
      title:'Preeliminares para recibir banquetas',
      alt: 'avenidaUniversidad',
    },
    {
      image: 'assets/images/projects/avenidaUniversidad/6.png',
      thumbImage: 'assets/images/projects/avenidaUniversidad/6.png',
      title:'Colado de banqueta y guarnición',
      alt: 'avenidaUniversidad',
    },
    {
      image: 'assets/images/projects/avenidaUniversidad/7.png',
      thumbImage: 'assets/images/projects/avenidaUniversidad/7.png',
      title:'Colado de banqueta y guarnición',
      alt: 'avenidaUniversidad',
    },
    {
      image: 'assets/images/projects/avenidaUniversidad/8.png',
      thumbImage: 'assets/images/projects/avenidaUniversidad/8.png',
      title:'Colado de banqueta y guarnición',
      alt: 'avenidaUniversidad',
    },
  ];
  laViga: Array<object> = [
    {
      image: 'assets/images/projects/laViga/1.png',
      thumbImage: 'assets/images/projects/laViga/1.png',
      alt: 'laViga',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    },
    {
      image: 'assets/images/projects/laViga/2.png',
      thumbImage: 'assets/images/projects/laViga/2.png',
      title: 'Demolicion de losa existente',
      alt: 'laViga',
    },
    {
      image: 'assets/images/projects/laViga/3.png',
      thumbImage: 'assets/images/projects/laViga/3.png',
      title: 'Foso de elevadores',
      alt: 'laViga',
    },
    {
      image: 'assets/images/projects/laViga/4.png',
      thumbImage: 'assets/images/projects/laViga/4.png',
      title: 'Colocación de casetón y armado de losa',
      alt: 'laViga',
    },
    {
      image: 'assets/images/projects/laViga/5.png',
      thumbImage: 'assets/images/projects/laViga/5.png',
      title: 'Colocación de casetón y armado de losa',
      alt: 'laViga',
    },
    {
      image: 'assets/images/projects/laViga/6.png',
      thumbImage: 'assets/images/projects/laViga/6.png',
      title: 'Armado de nevaduras',
      alt: 'laViga',
    },
    {
      image: 'assets/images/projects/laViga/7.png',
      thumbImage: 'assets/images/projects/laViga/7.png',
      title: 'Cimbrado de jardineras',
      alt: 'laViga',
    },
    {
      image: 'assets/images/projects/laViga/8.png',
      thumbImage: 'assets/images/projects/laViga/8.png',
      title: 'Colado con acabado floteado',
      alt: 'laViga',
    },

  ];
  metroZapata: Array<object> = [
    {
      image: 'assets/images/projects/metroZapata/1.png',
      thumbImage: 'assets/images/projects/metroZapata/1.png',
      alt: 'metroZapata',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    },
    {
      image: 'assets/images/projects/metroZapata/2.png',
      thumbImage: 'assets/images/projects/metroZapata/2.png',
      alt: 'metroZapata',
    },
    {
      image: 'assets/images/projects/metroZapata/3.png',
      thumbImage: 'assets/images/projects/metroZapata/3.png',
      alt: 'metroZapata',
    },
    {
      image: 'assets/images/projects/metroZapata/4.png',
      thumbImage: 'assets/images/projects/metroZapata/4.png',
      alt: 'metroZapata',
    },
    {
      image: 'assets/images/projects/metroZapata/5.png',
      thumbImage: 'assets/images/projects/metroZapata/5.png',
      alt: 'metroZapata',
    },
    {
      image: 'assets/images/projects/metroZapata/6.png',
      thumbImage: 'assets/images/projects/metroZapata/6.png',
      alt: 'metroZapata',
    },
    {
      image: 'assets/images/projects/metroZapata/7.png',
      thumbImage: 'assets/images/projects/metroZapata/7.png',
      alt: 'metroZapata',
    },
    {
      image: 'assets/images/projects/metroZapata/8.png',
      thumbImage: 'assets/images/projects/metroZapata/8.png',
      alt: 'metroZapata',
    },
    {
      image: 'assets/images/projects/metroZapata/9.png',
      thumbImage: 'assets/images/projects/metroZapata/9.png',
      alt: 'metroZapata',
    },
    {
      image: 'assets/images/projects/metroZapata/10.png',
      thumbImage: 'assets/images/projects/metroZapata/10.png',
      alt: 'metroZapata',
    },
    {
      image: 'assets/images/projects/metroZapata/11.png',
      thumbImage: 'assets/images/projects/metroZapata/11.png',
      alt: 'metroZapata',
    },
    {
      image: 'assets/images/projects/metroZapata/12.png',
      thumbImage: 'assets/images/projects/metroZapata/12.png',
      alt: 'metroZapata',
    },

  ];
  plazaCitadina: Array<object> = [
    {
      image: 'assets/images/projects/plazaCitadina/1.jpeg',
      thumbImage: 'assets/images/projects/plazaCitadina/1.jpeg',
      alt: 'plazaCitadina',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    },
    {
      image: 'assets/images/projects/plazaCitadina/2.jpeg',
      thumbImage: 'assets/images/projects/plazaCitadina/2.jpeg',
      alt: 'plazaCitadina',
    },
    {
      image: 'assets/images/projects/plazaCitadina/3.jpeg',
      thumbImage: 'assets/images/projects/plazaCitadina/3.jpeg',
      alt: 'plazaCitadina',
    },
    {
      image: 'assets/images/projects/plazaCitadina/4.jpeg',
      thumbImage: 'assets/images/projects/plazaCitadina/4.jpeg',
      alt: 'plazaCitadina',
    },
    {
      image: 'assets/images/projects/plazaCitadina/5.jpeg',
      thumbImage: 'assets/images/projects/plazaCitadina/5.jpeg',
      alt: 'plazaCitadina',
    },
    {
      image: 'assets/images/projects/plazaCitadina/6.jpeg',
      thumbImage: 'assets/images/projects/plazaCitadina/6.jpeg',
      alt: 'plazaCitadina',
    },
    {
      image: 'assets/images/projects/plazaCitadina/7.jpeg',
      thumbImage: 'assets/images/projects/plazaCitadina/7.jpeg',
      alt: 'plazaCitadina',
    },
    {
      image: 'assets/images/projects/plazaCitadina/8.jpeg',
      thumbImage: 'assets/images/projects/plazaCitadina/8.jpeg',
      alt: 'plazaCitadina',
    },

  ];
  plazaPuertaLaVictoria: Array<object> = [
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/1.jpeg',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/1.jpeg',
      alt: 'plazaPuertaLaVictoria',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    },
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/2.jpeg',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/2.jpeg',
      alt: 'plazaPuertaLaVictoria',
    },
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/3.jpeg',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/3.jpeg',
      alt: 'plazaPuertaLaVictoria',
    },
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/4.jpeg',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/4.jpeg',
      alt: 'plazaPuertaLaVictoria',
    },
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/5.jpeg',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/5.jpeg',
      alt: 'plazaPuertaLaVictoria',
    },
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/6.jpeg',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/6.jpeg',
      alt: 'plazaPuertaLaVictoria',
    },
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/7.jpeg',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/7.jpeg',
      alt: 'plazaPuertaLaVictoria',
    },
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/8.jpeg',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/8.jpeg',
      alt: 'plazaPuertaLaVictoria',
    },
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/9.jpeg',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/9.jpeg',
      alt: 'plazaPuertaLaVictoria',
    },


  ];
  searsAveranda: Array<object> = [
    {
      image: 'assets/images/projects/searsAveranda/1.png',
      thumbImage: 'assets/images/projects/searsAveranda/1.png',
      alt: 'searsAveranda',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    },
    {
      image: 'assets/images/projects/searsAveranda/2.png',
      thumbImage: 'assets/images/projects/searsAveranda/2.png',
      alt: 'searsAveranda',
    },
    {
      image: 'assets/images/projects/searsAveranda/3.png',
      thumbImage: 'assets/images/projects/searsAveranda/3.png',
      alt: 'searsAveranda',
    },
    {
      image: 'assets/images/projects/searsAveranda/4.png',
      thumbImage: 'assets/images/projects/searsAveranda/4.png',
      alt: 'searsAveranda',
    },
    {
      image: 'assets/images/projects/searsAveranda/5.png',
      thumbImage: 'assets/images/projects/searsAveranda/5.png',
      alt: 'searsAveranda',
    },
    {
      image: 'assets/images/projects/searsAveranda/6.png',
      thumbImage: 'assets/images/projects/searsAveranda/6.png',
      alt: 'searsAveranda',
    },

  ];


}
