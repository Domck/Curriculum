import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  correo="jhersonjh44@gmail.com";
  AcercaMi="Soy un profesional con un enfoque en la gestión, diseño y desarrollo de soluciones tecnológicas innovadoras. Mi sólida capacidad para identificar y resolver problemas de manera creativa ha resultado en la optimización de procesos y un aumento significativo en la eficiencia operativa. Además, mi enfoque orientado a resultados y mi habilidad para colaborar efectivamente en equipos multidisciplinarios me han permitido contribuir de manera significativa en proyectos tecnológicos de alto impacto.";
  cursos: string[] = [
    'Kanban para Equipos Ágiles | Universidad ESAN',
    'Scrum | Escuela de Postgrado UPC',
    'SQL | Curso de Database Design and Programming with SQL | Universidad Autónoma del Perú',
    'Administrador de Redes y Comunicaciones | Universidad Autónoma del Perú',
    'Angular | Udemy',
    'JavaScript | Udemy',
    'Java | Universidad Autónoma del Perú',
    'Laravel / PHP | Udemy',
    'HTML5 | Udemy',
  ];
  habilidades:string[]=[
    'Comunicación asertiva',
    'Resolución de problemas',
    'Desarrollo ágil',
    'Trabajo en equipo',
    'Proactivo',
    'Liderazgo',
  ];
  whatsapp="https://wa.me/946349079?text=Hola%20Jherson";
  universidad:string[]=[
  "Universidad Autónoma del Perú",
  "2019-2024 (Estudio universitario culminado)"
  ];
  experiencia:string[]=[
    "Desarrollador de Configuraciones y Líder de Proyectos",
    "2023-2024"
    ];
AnalisiSistema:string[]=[
"Diagramas de Casos de Uso, Secuencia, Estados y Actividades",
"Especificaciones de Casos de Uso",
"Conocimiento en metodologías ágiles: Scrum, RUP, Kanban",
"Aplicación de metodologías ágiles en proyectos",
];

Front:string[]=[
  "Frameworks: Angular",
  "Lenguajes y Tecnologías: HTML, CSS, JavaScript, typeScript",
  "Conocimiento en metodologías ágiles: Scrum, RUP, Kanban",
  "Herramientas: Figma, Bootstrap, Metodología BEM",
  ];
Back:string[]=[
    "Python",
    "Java",
    "PHP",
    ];
Cloud:string[]=[
      "Amazon Web Services ",
      ];

idioma:string[]=[
'Español',
'Ingles',
];
      openPdf() {
        const pdfUrl = 'certificado.pdf'; // Cambia esto a la ruta de tu PDF
        window.open(pdfUrl, '_blank'); // Abre el PDF en una nueva pestaña
      }

}
