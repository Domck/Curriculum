import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  correo="ing.jhersonherrera@gmail.com";
  AcercaMi="Soy un profesional con experiencia en la gestión, diseño y desarrollo de soluciones tecnológicas, enfocado en la optimización de procesos y mejora de la eficiencia operativa. Domino metodologías ágiles como Scrum y Kanban, logrando reducir tiempos de entrega y potenciar la productividad. Cuento con capacidad para liderar equipos multidisciplinarios, junto con sólidos conocimientos técnicos, me permite ejecutar proyectos estratégicos con resultados tangibles. ";
  cursos1: string[] = [
    'Kanban para equipos ágiles | Universidad ESAN',
    'SCRUM | Escuela de Postgrado UPC',
    'Design thinking en proyectos digitales | Escuela de Postgrado USIL',
    'Gestión y proyectos | Escuela de Postgrado USIL'
  ];
  cursos2: string[] = [
    'Java | Universidad Autónoma del Perú',
    'Desarrollador de software y programación segura | Universidad Autónoma del Perú',
    'Oracle Database | Udemy',
    'Angular | Udemy',
    'JavaScript | Udemy',
    'PHP | Udemy',
    'HTML5 | Udemy',
    'Python | Udemy'
  ];
  cursos3: string[] = [
    'SQL | Universidad Autónoma del Perú',
    'Power BI | Universidad Autónoma del Perú',
    'Microsoft Excel Profesional | Universidad Autónoma del Perú'
  ];

  habilidades:string[]=[
    'Gestión eficiente del tiempo y priorización de tareas.',
    'Adaptabilidad y proactividad en entornos dinámicos.',
    'Trabajo bajo presión con enfoque en resultados.',
    'Comunicación efectiva y liderazgo colaborativo',
    'Resolución de problemas y pensamiento crítico.'
  ];
  whatsapp="https://wa.me/946349079?text=Hola%20Jherson";
  universidad:string[]=[
  "Ingeniería de Sistemas",
  ];
  experiencia:string[]=[
    "Desarrollador y líder de proyectos (Mayo 2023 – Febrero 2025)",
    ];
AnalisiSistema:string[]=[
"Lenguajes: Java, Python, JavaScript, TypeScript, PHP",
"Frameworks y Bibliotecas: Angular, Bootstrap",
'Liderazgo de equipos de desarrollo',
'Bases de Datos: MySQL, PostgreSQL, MongoDB, Oracle',
'Plataformas de Desarrollo: Oracle APEX',
];

Front:string[]=[
  "AWS : Gestión de almacenamiento en la nube, configuración de buckets, control de versiones, políticas IAM, y optimización de costos para manejo eficiente de datos.",
  "Power Apps: Creación de aplicaciones empresariales personalizadas, integradas con plataformas como Microsoft 365 y Power Automate para optimizar flujos de trabajo y mejorar la productividad.",
  "Google Apps Script: Desarrollo de soluciones automatizadas para la integración de sistemas y personalización de procesos en Google Workspace.",
  "Apache NiFi: Configuración y gestión de flujos de datos automatizados para la integración, transformación y monitorización de datos."
  ];
Back:string[]=[
    "Git",
    "Bitbucket"
    ];
Cloud:string[]=[
      "Modelado UML: Creación de diagramas de Casos de Uso, Secuencia, Estados y Actividades para el análisis y diseño de sistemas.",
      "Documentación: Elaboración de Casos de Uso con especificaciones funcionales detalladas para equipos de desarrollo."
      ];
datos:string[]=[
  'Sistemas Operativos: Linux, Windows',
  'Comandos: Uso de comandos en Linux y Windows (CMD) para administración de usuarios, permisos, manejo de archivos, procesos y servicios'
  ];
datos1:string[]=[
    'Herramientas de visualización de datos: Power BI, Excel',
    'Lenguajes de consulta: SQL'
    ];
      openPdf() {
        const pdfUrl = 'certificado.pdf';
        window.open(pdfUrl, '_blank');
      }

}
