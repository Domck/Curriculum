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
    'POWER BI | Universidad Autónoma del Perú',
    'MICROSOFT® EXCEL PROFESIONAL | Universidad Autónoma del Perú',
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
  "Universidad Autónoma del Perú | 2019 - 2024 (Estudios finalizados)",
  ];
  experiencia:string[]=[
    "Desarrollador de Configuraciones y Líder de Proyectos",
    "2023-2024",
    ];
AnalisiSistema:string[]=[
"Diagramas de Casos de Uso, Secuencia, Estados y Actividades",
"Especificaciones de Casos de Uso",
'Liderazgo de equipos de desarrollo',
'Planificación, ejecución y control de proyectos tecnológicos',
'Gestión de tareas y cronogramas con Trello, Jira',
"Conocimiento en metodologías ágiles: Scrum, RUP, Kanban",
"Aplicación de metodologías ágiles en proyectos",
];

Front:string[]=[
  "Frameworks: Angular",
  "Lenguajes y Tecnologías: HTML, CSS, JavaScript, typeScript",
  "Herramientas: Figma, Bootstrap, Metodología BEM",
  ];
Back:string[]=[
    "Python",
    "Java",
    "PHP",
    ];
Cloud:string[]=[
      "Amazon Web Services (AWS) ",
      ];

idioma:string[]=[
'Español',
'Ingles',
];

datos:string[]=[
  'Herramientas de visualización de datos: Power BI',
  'Análisis de datos con Excel',
  'Gestión de bases de datos: MySQL, SQL Server',
  'Lenguajes de consulta: SQL',
  ];
      openPdf() {
        const pdfUrl = 'certificado.pdf';
        window.open(pdfUrl, '_blank');
      }

}
