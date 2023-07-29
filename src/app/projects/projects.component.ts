import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  mitikah: Array<object> = [
    {
      image: 'assets/images/projects/mitikah/1.png',
      thumbImage: 'assets/images/projects/mitikah/1.png',
      alt: 'mitikah',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    }, 
    {
      image: 'assets/images/projects/mitikah/2.png',
      thumbImage: 'assets/images/projects/mitikah/2.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/3.png',
      thumbImage: 'assets/images/projects/mitikah/3.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/4.png',
      thumbImage: 'assets/images/projects/mitikah/4.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/5.png',
      thumbImage: 'assets/images/projects/mitikah/5.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/6.png',
      thumbImage: 'assets/images/projects/mitikah/6.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/7.png',
      thumbImage: 'assets/images/projects/mitikah/7.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/8.png',
      thumbImage: 'assets/images/projects/mitikah/8.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/9.png',
      thumbImage: 'assets/images/projects/mitikah/9.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/10.png',
      thumbImage: 'assets/images/projects/mitikah/10.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/11.png',
      thumbImage: 'assets/images/projects/mitikah/11.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/12.png',
      thumbImage: 'assets/images/projects/mitikah/12.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/13.png',
      thumbImage: 'assets/images/projects/mitikah/13.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/14.png',
      thumbImage: 'assets/images/projects/mitikah/14.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/15.png',
      thumbImage: 'assets/images/projects/mitikah/15.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/16.png',
      thumbImage: 'assets/images/projects/mitikah/16.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/instalacionDeTuberias.png',
      thumbImage: 'assets/images/projects/mitikah/instalacionDeTuberias.png',
      title:"Instalación de tuberias",
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/17.png',
      thumbImage: 'assets/images/projects/mitikah/17.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/18.png',
      thumbImage: 'assets/images/projects/mitikah/18.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/19.png',
      thumbImage: 'assets/images/projects/mitikah/19.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/20.png',
      thumbImage: 'assets/images/projects/mitikah/20.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/21.png',
      thumbImage: 'assets/images/projects/mitikah/21.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/22.png',
      thumbImage: 'assets/images/projects/mitikah/22.png',
      alt: 'mitikah',
    }, 
    {
      image: 'assets/images/projects/mitikah/23.png',
      thumbImage: 'assets/images/projects/mitikah/23.png',
      alt: 'mitikah',
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
      image: 'assets/images/projects/plazaCitadina/1.png',
      thumbImage: 'assets/images/projects/plazaCitadina/1.png',
      alt: 'plazaCitadina',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    }, 
    {
      image: 'assets/images/projects/plazaCitadina/2.png',
      thumbImage: 'assets/images/projects/plazaCitadina/2.png',
      alt: 'plazaCitadina',
    }, 
    {
      image: 'assets/images/projects/plazaCitadina/3.png',
      thumbImage: 'assets/images/projects/plazaCitadina/3.png',
      alt: 'plazaCitadina',
    }, 
    {
      image: 'assets/images/projects/plazaCitadina/4.png',
      thumbImage: 'assets/images/projects/plazaCitadina/4.png',
      alt: 'plazaCitadina',
    }, 
    {
      image: 'assets/images/projects/plazaCitadina/5.png',
      thumbImage: 'assets/images/projects/plazaCitadina/5.png',
      alt: 'plazaCitadina',
    }, 
    {
      image: 'assets/images/projects/plazaCitadina/6.png',
      thumbImage: 'assets/images/projects/plazaCitadina/6.png',
      alt: 'plazaCitadina',
    }, 
    {
      image: 'assets/images/projects/plazaCitadina/7.png',
      thumbImage: 'assets/images/projects/plazaCitadina/7.png',
      alt: 'plazaCitadina',
    }, 
    {
      image: 'assets/images/projects/plazaCitadina/8.png',
      thumbImage: 'assets/images/projects/plazaCitadina/8.png',
      alt: 'plazaCitadina',
    }, 
    {
      image: 'assets/images/projects/plazaCitadina/9.png',
      thumbImage: 'assets/images/projects/plazaCitadina/9.png',
      alt: 'plazaCitadina',
    }, 
    {
      image: 'assets/images/projects/plazaCitadina/10.png',
      thumbImage: 'assets/images/projects/plazaCitadina/10.png',
      alt: 'plazaCitadina',
    }, 
    {
      image: 'assets/images/projects/plazaCitadina/11.png',
      thumbImage: 'assets/images/projects/plazaCitadina/11.png',
      alt: 'plazaCitadina',
    }, 
    {
      image: 'assets/images/projects/plazaCitadina/12.png',
      thumbImage: 'assets/images/projects/plazaCitadina/12.png',
      alt: 'plazaCitadina',
    }, 
    {
      image: 'assets/images/projects/plazaCitadina/13.png',
      thumbImage: 'assets/images/projects/plazaCitadina/13.png',
      alt: 'plazaCitadina',
    }, 
    
  ];
  plazaPuertaLaVictoria: Array<object> = [
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/1.png',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/1.png',
      alt: 'plazaPuertaLaVictoria',
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType

    }, 
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/2.png',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/2.png',
      alt: 'plazaPuertaLaVictoria',
    }, 
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/3.png',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/3.png',
      alt: 'plazaPuertaLaVictoria',
    }, 
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/4.png',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/4.png',
      alt: 'plazaPuertaLaVictoria',
    }, 
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/5.png',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/5.png',
      alt: 'plazaPuertaLaVictoria',
    }, 
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/6.png',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/6.png',
      alt: 'plazaPuertaLaVictoria',
    }, 
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/7.png',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/7.png',
      alt: 'plazaPuertaLaVictoria',
    }, 
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/8.png',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/8.png',
      alt: 'plazaPuertaLaVictoria',
    }, 
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/9.png',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/9.png',
      alt: 'plazaPuertaLaVictoria',
    }, 
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/10.png',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/10.png',
      alt: 'plazaPuertaLaVictoria',
    }, 
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/11.png',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/11.png',
      alt: 'plazaPuertaLaVictoria',
    }, 
    {
      image: 'assets/images/projects/plazaPuertaLaVictoria/12.png',
      thumbImage: 'assets/images/projects/plazaPuertaLaVictoria/12.png',
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
    {
      image: 'assets/images/projects/searsAveranda/7.png',
      thumbImage: 'assets/images/projects/searsAveranda/7.png',
      alt: 'searsAveranda',
    }, 
  ];
  

}
