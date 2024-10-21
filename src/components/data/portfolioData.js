/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 * @property {number} price Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/paris/1.jpg',
		title: 'París y la Costa Azul',
		skills: [],
		descripcion:
			'Vive lo mejor de Francia con este exclusivo paquete que te llevará de París a la Costa Azul. Disfruta de visitas a iconos como el Louvre y Orsay, clases de repostería, y cenas en restaurantes de renombre. Luego, relájate en Niza con recorridos vinícolas, sesiones de fotos en la costa y visitas a Cannes y Grasse. Un viaje perfecto para los amantes de la cultura, la gastronomía y el lujo.',
		demoURL: './paquetes/paris-y-la-costa-azul',
		repoURL: '',
		anim: 'fade-right',
		price: 3000,
	},
	{
		imgSrc: '/img/portugal/1.jpg',
		title: 'Portugal, Lisboa – Oporto',
		skills: [],
		descripcion:
			'Portugal cuenta con una gran cantidad de lugares declarados Patrimonio de la Humanidad por la UNESCO y, aunque no es posible visitarlos todos en un solo viaje, sí que se pueden ver los lugares más destacados. La encantadora Sintra, la ciudad literaria de Óbidos, Batalha , Aveiro (famosa por sus canales y sus barcos moliceiros), Braga y Guimaraes esperan tu visita. Enamórate de la historia y la cultura de Lisboa (vistas espectaculares desde las colinas de Alfama o del Castillo de San Jorge, clima agradable durante todo el año y gente amable) y tómate un tiempo para explorar el centro de la UNESCO de Oporto.',
		demoURL: './paquetes/portugal-lisboa-oporto',
		repoURL: '',
		anim: 'fade-right',
		price: 3000,
	},
	{
		imgSrc: '/img/espana/1.jpg',
		title: 'Epaña, Barcelona – Madrid',
		skills: [],
		descripcion:
			'Combina Barcelona y Madrid, gloriosas ciudades de España, viajando entre ellas en tren. Visita Barcelona que combina un patrimonio cultural único con lo mejor en gastronomía, estilo, música y buenos momentos junto a Madrid una viva, enérgica y vibrante ciudad con una merecida reputación por su vida nocturna y sus contribuciones culturales con sus diversos museos españoles.',
		demoURL: './paquetes/espana-barcelona-madrid',
		repoURL: '',
		anim: 'fade-right',
		price: 1057,
	},
	{
		imgSrc: '/img/grecia/1.jpg',
		title: 'Grecia, Atenas – Tesalónica',
		skills: [],
		descripcion:
			'Este paquete de 10 días te llevará a explorar la rica cultura de Grecia, comenzando en Atenas con una clase de cocina, recorridos gastronómicos y visitas a la Acrópolis y Corinto. Luego, viajarás a Tesalónica, donde disfrutarás de paseos históricos, degustaciones locales y un recorrido del patrimonio judío. Combina la historia, la gastronomía y la cultura griega en un viaje único con alojamientos cómodos y opciones de cenas tradicionales.',
		demoURL: './paquetes/grecia-atenas-tesalonica',
		repoURL: '',
		anim: 'fade-right',
		price: 3100,
	},
	{
		imgSrc: '/img/italia/1.jpg',
		title: 'Italia, Roma - Florencia',
		skills: [],
		descripcion:
			'Con este paquete de vacaciones flexible, disfrutará visitando los principales sitios de Roma (la Ciudad Eterna, con su impresionante arquitectura como el Coliseo y el Foro Romano y su deliciosa comida) y Florencia (capital de la región de Toscana en Italia, hogar de muchas obras maestras del arte y la arquitectura renacentistas), degustando una comida increíble y viendo arte inspirador de siglos de artistas célebres.',
		demoURL: './paquetes/italia-roma-florencia',
		repoURL: '',
		anim: 'fade-right',
		price: 2800,
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
