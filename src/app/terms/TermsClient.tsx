"use client";

interface Props {
  content: {
    title: string;
    text1?: string;
    text2?: string;
    image1: string;
    image2: string;

  };
}

export default function TermsClient({ content }: Props ) {

  return (
    <main className="">
      <section id="" className="relative overflow-hidden py-8 md:py-12 w-full flex flex-col items-center justify-center">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl font-bold mb-4">Términos y Condiciones de Privacidad para el Manejo de Datos</h1>
          <h2 className="text-3xl font-bold mb-4 text-muted-foreground">INOVAC SAS</h2>
          <h1 className="text-3xl font-bold mb-4">Introducción</h1>
          <p className="mb-4">La presente política de privacidad establece los términos bajo los cuales la empresa INOVAC SAS de diseño y construcción (en adelante “la Empresa”) realiza la recolección, uso, conservación y protección de los datos personales de las personas usuarias que acceden y utilizan el sitio web de la Empresa. El acceso y uso del sitio implica la aceptación expresa de estos términos y condiciones.</p>
          <h1 className="text-3xl font-bold mb-4">Recolección de información</h1>
          <p className="mb-4">La Empresa recopila datos personales que pueden incluir, de manera enunciativa y no limitativa, nombres, direcciones de correo electrónico, números telefónicos, direcciones postales, datos de facturación, información sobre proyectos, preferencias de diseño y cualquier otro dato que las personas usuarias proporcionen voluntariamente al interactuar con el sitio web, formularios de contacto, suscripciones a boletines, solicitudes de cotización, comentarios o consultas.</p>
          <h2 className="text-2xl font-semibold mb-3 pl-4">Datos recopilados automáticamente</h2>
          <p className="mb-4 pl-4">Al navegar por el sitio web, se pueden recopilar datos técnicos de manera automática, como direcciones IP, tipo de navegador, sistema operativo, páginas visitadas, tiempo de visita y otros datos de navegación a través de cookies y tecnologías similares. Estos datos se utilizan para mejorar la experiencia de navegación, optimizar el sitio y realizar análisis estadísticos internos.</p>
          <h1 className="text-3xl font-bold mb-4">Finalidad del manejo de datos</h1>
          <li className="mb-4">Los datos personales recopilados por la Empresa tienen como finalidad principal:</li>
          <li className="mb-4">Brindar información sobre los servicios de diseño y construcción ofrecidos.</li>
          <li className="mb-4">Gestionar y responder solicitudes, consultas o comentarios realizados por las personas usuarias.</li>
          <li className="mb-4">Elaborar y enviar cotizaciones, contratos, facturas y demás documentación relacionada con servicios.</li>
          <li className="mb-4">Personalizar la experiencia de la persona usuaria en el sitio web y adaptar contenidos a sus intereses.</li>
          <li className="mb-4">Enviar boletines informativos, promociones, novedades y comunicaciones comerciales, siempre que la persona usuaria lo haya autorizado expresamente.</li>
          <li className="mb-4">Realizar análisis estadísticos y estudios de mercado para mejorar los servicios y la funcionalidad del sitio.</li>
          <li className="mb-4">Cumplir con obligaciones legales y requerimientos de autoridades competentes.</li>
          <h1 className="text-3xl font-bold mb-4">Consentimiento</h1>
          <p className="mb-4">El consentimiento para el manejo de datos se considera otorgado desde el momento en que la persona usuaria proporciona datos personales a través del sitio web, acepta las casillas de verificación o continúa navegando tras la notificación de uso de cookies. La Empresa solicitará el consentimiento expreso cuando la legislación lo requiera.</p>
          <h1 className="text-3xl font-bold mb-4">Conservación y seguridad de los datos</h1>
          <p className="mb-4">La Empresa se compromete a resguardar los datos personales en sistemas seguros, empleando medidas administrativas, técnicas y físicas apropiadas. Los datos serán conservados únicamente durante el tiempo necesario para cumplir con las finalidades descritas, salvo disposición legal en contrario. El acceso a los datos estará restringido únicamente a aquellas personas autorizadas que requieran dicha información para el cumplimiento de sus funciones.</p>
          <h2 className="text-2xl font-semibold mb-3 pl-4">Transferencia y cesión de datos</h2>
          <p className="mb-4 pl-4">La Empresa no venderá, cederá ni transferirá datos personales a terceros sin el consentimiento expreso de la persona usuaria, excepto en casos legalmente permitidos o requeridos por autoridades. En caso de ser necesario compartir datos para la prestación de servicios (por ejemplo, con proveedores, subcontratistas o empresas asociadas), se garantizará que dichos terceros cumplen con estándares de seguridad y confidencialidad equivalentes.</p>
          <h2 className="text-2xl font-semibold mb-3 pl-4">Uso de cookies y tecnologías similares</h2>
          <p className="mb-4 pl-4">El sitio web utiliza cookies propias y de terceros para personalizar la experiencia, analizar tendencias y administrar el sitio. La persona usuaria puede configurar su navegador para rechazar el uso de cookies, aunque ello podría limitar la funcionalidad de ciertas secciones del sitio.</p>
          <h1 className="text-3xl font-bold mb-4">Derechos de las personas usuarias</h1>
          <p className="mb-4">Las personas usuarias tienen derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales (“Derechos ARCO”), conforme a la legislación vigente. Para ejercer estos derechos, la persona usuaria podrá contactar a la Empresa a través de los medios indicados en la sección de contacto del sitio web, presentando la solicitud correspondiente. La Empresa dará respuesta en los plazos establecidos por la ley.</p>
          <h1 className="text-3xl font-bold mb-4">Modificaciones a la política de privacidad</h1>
          <p className="mb-4">La Empresa se reserva el derecho de modificar, actualizar o ampliar en cualquier momento estos términos y condiciones para adaptarlos a cambios legislativos, jurisprudenciales, mejoras tecnológicas o nuevas prácticas comerciales. Las modificaciones serán publicadas en el sitio web y se considerarán aceptadas por las personas usuarias que continúen utilizando el sitio.</p>
          <h1 className="text-3xl font-bold mb-4">Enlaces a sitios de terceros</h1>
          <p className="mb-4">El sitio web puede contener enlaces a páginas externas operadas por otras entidades. La Empresa no se responsabiliza por las prácticas de privacidad ni por el contenido de dichos sitios. Se recomienda a las personas usuarias revisar las políticas de privacidad de cada sitio que visiten.</p>
          <h1 className="text-3xl font-bold mb-4">Contacto</h1>
          <p className="mb-4">Para dudas, aclaraciones o solicitudes relacionadas con la protección de datos, las personas usuarias pueden contactar a la Empresa a través del formulario de contacto disponible en el sitio web o mediante el correo electrónico oficial indicado en la sección correspondiente.</p>
          <h1 className="text-3xl font-bold mb-4">Legislación aplicable</h1>
          <p className="mb-4">Esta política de privacidad se rige por las leyes y regulaciones aplicables en materia de protección de datos personales en la jurisdicción donde la Empresa ofrece sus servicios, principalmente la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás normativas relevantes.</p>
          <h1 className="text-3xl font-bold mb-4">Reconocimiento y aceptación</h1>
          <p className="mb-4">El uso continuado del sitio web implica el reconocimiento y aceptación de estos términos y condiciones de privacidad para el manejo de datos. Se recomienda revisar periódicamente esta política para estar al tanto de cualquier actualización.</p>
        </div>
      </section>

    </main>
);
}