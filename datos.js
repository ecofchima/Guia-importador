/* =========================================================================
   DATOS EDITABLES DE LA GUÍA · InnovationsMX
   Edita este archivo para cambiar precios, tarifas, productos y contacto.
   Reglas: respeta comas, comillas y corchetes. Guarda y recarga la página.
   ========================================================================= */
/* ===================== Datos ===================== */
/* 1) CONTACTO: WhatsApp (solo números, con 52) y correo que reciben las cotizaciones */
const IMX = {wa:'525516931100', mail:'innovationsmx.client@gmail.com'};
/* 2) CATEGORÍAS: [clave, nombre visible, palabra de ejemplo]. La foto es img/<clave>.jpg */
const CATS = [
  ['electronicos','Electrónicos','audífonos bluetooth'],['ropa','Ropa','playeras'],['joyeria','Joyería','aretes'],
  ['juguetes','Juguetes','juguetes didácticos'],['oficina','Oficina','organizador de escritorio'],['hogar','Hogar','organizador de cocina'],
  ['belleza','Belleza','brochas de maquillaje'],['mascotas','Mascotas','juguetes para perro'],['deportes','Deportes','bandas de resistencia'],
  ['bebes','Bebés','biberón'],['herramientas','Herramientas','juego de herramientas'],['salud','Cuidado personal','cuidado facial']
];
const CAT = Object.fromEntries(CATS.map(c=>[c[0],{label:c[1],kw:c[2]}]));
/* 3) PAÍSES Y TARIFAS: fx = moneda local por 1 USD · sea = USD por CBM · air = RMB por kg
      allIn = true si la tarifa ya incluye impuestos · vat = IVA % · sell = precio de venta de ejemplo */
const COUNTRIES = {
  MX:{n:'México',f:'🇲🇽',amz:'https://www.amazon.com.mx',ml:'https://www.mercadolibre.com.mx',geo:'MX',shein:'https://mx.shein.com',cur:'MXN',fx:18.55,sea:600,air:120,allIn:true,vat:16,sell:199},
  CO:{n:'Colombia',f:'🇨🇴',amz:'https://www.amazon.com',ml:'https://www.mercadolibre.com.co',geo:'CO',shein:'https://www.shein.com',cur:'COP',fx:3236,sea:0,air:0,allIn:false,vat:19,sell:39900},
  PE:{n:'Perú',f:'🇵🇪',amz:'https://www.amazon.com',ml:'https://www.mercadolibre.com.pe',geo:'PE',shein:'https://www.shein.com',cur:'PEN',fx:3.37,sea:0,air:0,allIn:false,vat:18,sell:39.9},
  CL:{n:'Chile',f:'🇨🇱',amz:'https://www.amazon.com',ml:'https://www.mercadolibre.cl',geo:'CL',shein:'https://cl.shein.com',cur:'CLP',fx:900,sea:0,air:0,allIn:false,vat:19,sell:9990},
  EC:{n:'Ecuador',f:'🇪🇨',amz:'https://www.amazon.com',ml:'https://www.mercadolibre.com.ec',geo:'EC',shein:'https://www.shein.com',cur:'USD',fx:1,sea:0,air:0,allIn:false,vat:15,sell:12.99},
  ES:{n:'España',f:'🇪🇸',amz:'https://www.amazon.es',ml:null,geo:'ES',shein:'https://es.shein.com',cur:'EUR',fx:0.89,sea:0,air:0,allIn:false,vat:21,sell:14.99},
  OT:{n:'Otro',f:'🌎',amz:'https://www.amazon.com',ml:null,geo:'',shein:'https://www.shein.com',cur:'local',fx:1,sea:0,air:0,allIn:false,vat:0,sell:0}
};
const AMZ_SLUG = {
  MX:{electronicos:'electronics',ropa:'shoes',joyeria:'shoes',juguetes:'toys',oficina:'officeproduct',hogar:'kitchen',belleza:'beauty',mascotas:'pet-supplies',deportes:'sports',bebes:'baby',herramientas:'tools',salud:'hpc'},
  ES:{electronicos:'electronics',ropa:'fashion',joyeria:'fashion',juguetes:'toys',oficina:'office',hogar:'kitchen',belleza:'beauty',mascotas:'pet-supplies',deportes:'sports',bebes:'baby',herramientas:'tools',salud:'hpc'},
  US:{electronicos:'electronics',ropa:'fashion',joyeria:'fashion',juguetes:'toys-and-games',oficina:'office-products',hogar:'kitchen',belleza:'beauty',mascotas:'pet-supplies',deportes:'sporting-goods',bebes:'baby-products',herramientas:'hi',salud:'hpc'}
};
const ML_CAT = {electronicos:'1000',ropa:'1430',joyeria:'3937',juguetes:'1132',oficina:'1499',hogar:'1574',belleza:'1246',mascotas:'1071',deportes:'1276',bebes:'1384',herramientas:'',salud:''};
const ML_PRE = {MX:'MLM',CO:'MCO',PE:'MPE',CL:'MLC',EC:'MEC'};
/* 4) TOP 3 POR CATEGORÍA (México y España). Para actualizar: copia el código ASIN de Amazon (10 caracteres),
      nombre, precio, palabra para Google Trends y 1 si hay versión sin marca en fábrica (0 si no). */
/* Más vendidos de Amazon (16 nov 2026): [asin, nombre, precio, término Google Trends, ¿hay genérico en fábrica?] */
const TOP = {
  MX:{
    electronicos:[['B0DVJX97PM','Amazon Fire TV Stick HD','$349','tv stick',1],['B09WNK39JN','Amazon Echo Pop','$649','bocina inteligente',1],['B0FRTXXGVH','Telcel Paquete Amigo','$10','recarga telcel',0]],
    ropa:[['B0CD8Z5Y92','Hanes playera clásica hombre','$218','playera hombre',1],['B01M9K52LV','Fruit of the Loom bóxers','$145','boxer hombre',1],['B0DLH9W5W9','Michael Kors chamarra bomber','$800','chamarra bomber',1]],
    juguetes:[['B0H77XCW4M','Pokémon TCG 30th · Mew','$749','pokemon tcg',0],['B0H786SFFS','Pokémon TCG 30th · Mewtwo','$1,499','pokemon tcg',0],['B0H784PD4X','Pokémon TCG 30th Ultra-Premium','$6,300','pokemon tcg',0]],
    oficina:[['B0BN69G3C2','Prismacolor Junior 24 colores','$152','colores',1],['B005O2ZU68','Prismacolor Premier 150 colores','$1,499','colores profesionales',1],['B0848R7G3P','Sharpie punta fina, 12 piezas','$115','plumones',1]],
    hogar:[['B07R8YNPTN','Pinol El Original 5.1 L','$134','limpiador multiusos',0],['B0BT8HWSSK','EasyWare recipientes de vidrio, 10','$537','recipientes de vidrio',1],['B0DKXYK5V8','Oster freidora de aire 6 L','$1,049','freidora de aire',1]],
    belleza:[['B09Y9KJ16N',"L'Oréal Elvive Óleo Extraordinario",'$95','aceite para cabello',0],['B06XDZFGWY','Maybelline Super Stay Matte Ink','$104','labial mate',0],['B07C5XD33D','CeraVe gel limpiador','$240','limpiador facial',0]],
    mascotas:[['B01N5YFF78','Cat Chow Delimix 15 kg','$545','croquetas gato',0],['B01FKNX648','Minino Plus 10 kg','$455','croquetas gato',0],['B0B1W1ZZGQ','Churu premios para gato, 50','$571','churu',0]],
    deportes:[['B0CWB662HK','Garmin Forerunner 165','$3,779','reloj deportivo',1],['B0FFTLNC5S','Owala FreeSip termo','$542','termo con popote',1],['B0CB44845Q','Mancuernas ajustables 20/30 kg','$1,300','mancuernas ajustables',1]],
    bebes:[['B09CFG3G2H','Huggies toallitas, 960','$454','toallitas húmedas',0],['B07FK8NWV4','Huggies Cuidado Puro toallitas','$91','toallitas húmedas',0],['B0B2QK54G6','Huggies Cuidado Puro, 640','$262','toallitas húmedas',0]],
    herramientas:[['B0D5SFNDGH','Bosch rotomartillo inalámbrico','$1,999','rotomartillo',1],['B005FEGYCO','Lepro linterna LED con zoom','$478','linterna led',1],['B01NCXCY4L','Bosch set de 103 puntas','$549','juego de brocas',1]],
    salud:[['B079K4QLHM','Regio Just 1, 12 rollos','$120','papel higiénico',0],['B089ZWVJ2K','Birdman creatina 450 g','$335','creatina',0],['B0HGC4HV2C','Regio Almond, 32 rollos','$186','papel higiénico',0]]
  },
  ES:{
    electronicos:[['B00NTCH52W','Amazon Basics pilas AA, 20','','pilas aa',0],['B07MLFBJG3','Amazon Basics pilas AA, 40','','pilas aa',0],['B01CG0TO76','Duracell CR2032, 4','','pilas cr2032',0]],
    ropa:[['B08DD7CT8Y','PUMA calcetines cortos, 5','','calcetines',1],['B0D44WM77X','Spray impermeabilizante calzado','','spray impermeabilizante',0],['B00124Y9K0','Calvin Klein bóxers, 3','','boxer hombre',1]],
    juguetes:[['B0FF4J5VDK','Patrulla Canina moto de Liberty','','patrulla canina',0],['B006CZ0LGA','Catan juego de mesa','','juegos de mesa',0],['B0DHSBBV6R','LEGO Speed Champions Ferrari','','lego',0]],
    hogar:[['B0812BKN39','Arcos cuchillos mondadores, 3','','cuchillos cocina',1],['B0BSXDVQG7','BRITA Maxtra Pro, 6','','filtro brita',0],['B077T9VNSB','Protector de colchón impermeable','','protector colchón',1]],
    belleza:[['B0DTKCN3Z4','medicube Capsule Cream PDRN','','pdrn',0],['B0B2RM68G2','BIODANCE mascarilla colágeno','','mascarilla colágeno',0],['B09SZ5JX2Y',"d'alba Multi Balm",'','cosmética coreana',0]],
    mascotas:[['B00NABTGY2','Bolsas para perro con dispensador','','bolsas perro',1],['B083VBXG2S','Arena de bentonita 10 L','','arena gatos',0],['B00MW8G3YU','Empapadores para cachorro','','empapadores perro',1]],
    deportes:[['B0FHWMCNWK','Hornillo de camping + 4 cartuchos','','hornillo camping',1],['B0DJ9FFGGV','Campingaz Camp Bistro 3','','hornillo camping',1],['B078XXP3RH','Mancuernas de neopreno','','mancuernas',1]],
    bebes:[['B07M98CL6Y','Dodot Sensitive talla 4','','pañales',0],['B0DP7K72L5','Dodot toallitas Pure Aqua','','toallitas bebé',0],['B08MXT5VDK','WaterWipes Sensitive+','','toallitas bebé',0]],
    salud:[['B07M7L3J7Y','Magnesio bisglicinato','','magnesio',0],['B07Q31N9D4','Healthy Fusion Whey Protein','','proteína whey',0],['B07BF9RJNV','HSN creatina 1 kg','','creatina',0]]
  }
};

/* 5) EJEMPLOS (paso 4). BASE = tipos de cambio, tarifas y comisiones del análisis.
      En cada caso: fob = precio de fábrica en USD · dims = medidas del empaque en cm · kg = peso con empaque
      sell = precio de venta en MXN · retail/fobTxt = textos que se muestran · img = foto en la carpeta img/ */
/* ===== Casos de éxito (precios leídos el 16 nov 2026) =====
   precio fábrica en USD; medidas del empaque individual (cm); peso con empaque (kg); venta sugerida MXN */
const BASE = {usdcny:6.68, mxn:18.55, sea:600, air:120, agent:0.05, fee:0.15, eff:0.85};
const CASES = [
  {k:'mouse', mode:'sea', name:'Mouse ergonómico vertical', img:'mouse.jpg',
   retail:'$159 – $1,189 · mediana $399', retailSrc:'Amazon México, 12 resultados',
   fob:3.20, fobTxt:'MX$46 – 67 (US$2.5 – 3.6)', fobSrc:'Alibaba, recargable 2.4G', dims:[14,10,8], kg:0.15, sell:299,
   note:'Compite debajo de UGREEN ($399), que vende 500+ al mes. Sin marca y con caja propia, gana posicionamiento por precio.', verdict:'Excelente'},
  {k:'moto', mode:'sea', name:'Soporte de celular para moto con cargador USB y protector de lluvia', img:'moto.jpg',
   retail:'$120 – $1,177 · mediana $500', retailSrc:'Amazon México, 12 resultados',
   fob:5.50, fobTxt:'US$4.50 – 6.50', fobSrc:'Alibaba, MOQ 100', dims:[15,10,9], kg:0.30, sell:349,
   note:'Mercado en crecimiento por repartidores en moto. Ofrece kit (soporte + cargador + cubierta) para subir el ticket.', verdict:'Excelente'},
  {k:'secadora', mode:'sea', name:'Secadora de cabello alta velocidad (tipo Dyson)', img:'secadora.jpg',
   retail:'$499 – $2,617 · mediana $899', retailSrc:'Amazon México, 12 resultados',
   fob:28, fobTxt:'US$27 – 32 (110,000 rpm)', fobSrc:'Alibaba, MOQ 100', dims:[35,16.5,8.5], kg:0.9, sell:899,
   note:'Ticket alto y ganancia por pieza alta, pero ocupa más volumen. Es aparato eléctrico: requiere NOM antes de vender en México.', verdict:'Bueno'},
  {k:'lentes', mode:'air', name:'Lentes para leer plegables (2 pares con estuche)', img:'lentes.jpg',
   retail:'$119 – $473 · mediana $329 (paquete de 2)', retailSrc:'Amazon México, 12 resultados',
   fob:3.00, fobTxt:'US$1.05 – 1.70 por par', fobSrc:'Alibaba y Global Sources', dims:[16,7,5], kg:0.09, sell:299,
   note:'Ideal para avión: pesa casi nada y se vende caro. El mejor margen de los seis.', verdict:'Excelente'},
  {k:'bolsas', mode:'air', name:'Bolsas de regalo de organza (100 piezas)', img:'bolsas.jpg',
   retail:'$50 – $249 · mediana $160 (100 piezas)', retailSrc:'Amazon México, 12 resultados',
   fob:1.80, fobTxt:'≈ ¥12 por 100 piezas (estimado)', fobSrc:'Rango típico de mayoristas de Yiwu', dims:[20,15,2], kg:0.18, sell:149,
   note:'Por avión solo conviene la organza o el celofán. Las bolsas de papel y los manteles pesan demasiado: mándalos en barco.', verdict:'Bueno'},
  {k:'globos', mode:'air', name:'Kit de arco de globos para fiesta (100 piezas)', img:'globos.jpg',
   retail:'$136 – $539 · mediana $219', retailSrc:'Amazon México, 12 resultados',
   fob:3.30, fobTxt:'¥19.5 – 25 por kit', fobSrc:'Yiwugo y Alibaba, MOQ 100', dims:[24,16,3], kg:0.32, sell:249,
   note:'Por avión el margen es corto; sirve para probar diseños. Cuando un diseño se venda, pásalo a barco y la ganancia casi se triplica.', verdict:'Para probar'}
];
