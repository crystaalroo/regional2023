import Box from '@mui/material/Box'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'
import type { NextPage } from 'next'
import BoardCard from '../components/BoardCard'
import MainBoard from '../components/MainBoard'
import {
  List,
  ListItem,
  Typography,
  Link as ExternalLink,
  SxProps,
  Theme
} from '@mui/material'

// ********************************************************************************

interface Props {
  children: React.ReactNode
  sx?: SxProps<Theme> | undefined
}
const Item: React.FC<Props> = ({ children, sx }) => {
  return (
    <ListItem sx={{ ...sx }}>
      <Typography variant="body1" component="div" color={'text.secondary'}>
        {children}
      </Typography>
    </ListItem>
  )
}
const Masters: NextPage = () => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <MainBoard
        sx={{ padding: { md: '100px 50px 0 50px', xs: '80px 0 0 0' } }}
      >
        <BoardCard barSide="none" sx={{ padding: '70px 0 0 0' }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'primary.contrastText'}
            sx={{
              margin: 'auto 20px 20px 20px',
              display: 'block',
              width: '100%'
            }}
          >
            The 2023 ICPC Masters Mexico Regional #ICPCMX2023 Edition
          </Typography>
        </BoardCard>
        <BoardCard barSide="right">
          {' '}
          <Box
            component="img"
            src="/assets/masters.jpg"
            alt="icpcmx"
            sx={{ width: '60%' }}
          />
        </BoardCard>
        <BoardCard barSide="left">
          <Typography color={'text.secondary'} sx={{ width: '100%' }}>
            La Dirección de la Región México del ICPC convoca a exconcursantes,
            exentrenadores y entrenadores activos del ICPC en México y de otras
            regiones ICPC de Latinoamérica a participar en el ICPC Masters
            Mexico Edición Regional #ICPCMX2023, que se celebrará, en modalidad
            ONLINE, el 14 de octubre de 2023.
          </Typography>
        </BoardCard>
        <BoardCard barSide="right">
          <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
            <Typography color={'text.secondary'} sx={{ width: '100%' }}>
              <b>The 2023 ICPC Masters Mexico Regional #ICPCMX2023 Edition</b>
            </Typography>
            <Typography color={'text.secondary'} sx={{ width: '100%' }}>
              El ICPC MASTERS MÉXICO Edición Regional #ICPCMX2023 es un concurso
              que se organiza bajo las reglas de los Concursos Regionales del
              ICPC y está dirigido, fundamentalmente, a los ICPC Alumni en
              México y en toda Latinoamérica. Solamente se ajustan los puntos
              relacionados con la composición de los equipos y las instituciones
              a la que representan dichos equipos.
            </Typography>
          </Box>
        </BoardCard>
        <BoardCard barSide="right">
          <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
            <Typography color={'text.secondary'} sx={{ width: '100%' }}>
              <b>COMPOSICIÓN</b>
            </Typography>
            <Typography color={'text.secondary'} sx={{ width: '100%' }}>
              Se mantiene la COMPOSICIÓN oficial de un equipo en un concurso en
              formato ICPC, un (1) entrenador y tres (3) concursantes. En caso
              de que el entrenador original no esté disponible, uno de los
              concursantes puede asumir el doble rol de entrenador /
              concursantes. <br></br> La COMPOSICIÓN DESEABLE, es la COMPOSICIÓN
              ORIGINAL, es decir, la misma composición del equipo en la etapa en
              que eran competidores estudiantiles del ICPC. <br></br> En caso de
              que no se pueda reunir la COMPOSICIÓN ORIGINAL, las alternativas
              serían:
              <List
                sx={{
                  listStyleType: 'disc',
                  color: 'text.secondary',
                  width: '100%'
                }}
              >
                <Item sx={{ display: 'list-item' }}>
                  Equipos representativos de una INSTITUCIÓN EDUCATIVA. Estarían
                  formados por excompetidores egresados de la misma institución,
                  entrenadores y exentrenadores que colaboren en la misma
                  institución y combinaciones de las anteriores.{' '}
                </Item>
                <Item sx={{ display: 'list-item' }}>
                  {' '}
                  Equipos representativos de una ORGANIZACIÓN que NO SEA una
                  INSTITUCIÓN EDUCATIVA. La ORGANIZACIÓN puede ser una COMPAÑÍA
                  TECNOLÓGICA o de otro tipo, una entidad GUBERNAMENTAL u
                  organizaciones de otro tipo. Los equipos estarían formados por
                  excompetidores, entrenadores o exentrenadores que colaboren
                  actualmente en la misma ORGANIZACIÓN.{' '}
                </Item>
                <Item sx={{ display: 'list-item' }}>
                  Equipos que estén formados por integrantes de una misma
                  FAMILIA. Los integrantes pueden ser excompetidores,
                  entrenadores y exentrenadores. • INSTITUCIÓN • En el caso que
                  el equipo tenga la composición original, entonces la
                  INSTITUCIÓN del equipo sería la misma que cuando eran
                  competidores estudiantiles del ICPC.{' '}
                </Item>
                <Item sx={{ display: 'list-item' }}>
                  Para otras composiciones, el equipo podría seleccionar la
                  INSTITUCIÓN de mayor afinidad de los integrantes la cual
                  podría ser una INSTITUCIÓN EDUCATIVA, una COMPAÑÍA tecnológico
                  o de otro tipo, una entidad GUBERNAMENTAL o cualquier tipo de
                  ORGANIZACIÓN en donde colaboren o tengan relación los
                  integrantes.{' '}
                </Item>
              </List>
            </Typography>
          </Box>
        </BoardCard>
        <BoardCard barSide="right">
          <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
            <Typography color={'text.secondary'} sx={{ width: '100%' }}>
              <b>ELEGIBILIDAD</b>
            </Typography>
            <Typography color={'text.secondary'} sx={{ width: '100%' }}>
              Los tres (3) concursantes deben ser NO ELEGIBLES para el ciclo
              actual de competencia y los siguientes, de acuerdo con las reglas
              de los Concursos Regionales del ICPC. Pueden ser excompetidores de
              cualquier nivel de competencia (Preliminares, Regionales o Finales
              Mundiales) y exentrenadores y entrenadores activos igualmente de
              cualquier nivel de competencia.
            </Typography>
          </Box>
        </BoardCard>
        <BoardCard barSide="right">
          <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
            <Typography color={'text.secondary'} sx={{ width: '100%' }}>
              <b>MODALIDAD DE COMPETENCIA</b>
            </Typography>
            <Typography color={'text.secondary'} sx={{ width: '100%' }}>
              La modalidad de competencia del ICPC MASTERS MÉXICO Edición
              Regional #ICPCMX2023 será <b>ONLINE</b>, tomando como referencia
              el CÓDIGO DE CONDUCTA que se adoptó para las competencias ICPC en
              Latinoamérica durante la pandemia. Este código permite que los
              tres concursantes de cada equipo participen desde lugares
              distintos cada uno utilizando un equipo de cómputo. No obstante,
              es deseable que los tres concursantes participen desde un solo
              lugar, utilizando un solo equipo de cómputo.
            </Typography>
          </Box>
        </BoardCard>
        <BoardCard barSide="right">
          <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
            <Typography color={'text.secondary'} sx={{ width: '100%' }}>
              <b>REGISTRO</b>
            </Typography>
            <Typography color={'text.secondary'} sx={{ width: '100%' }}>
              El registro de los equipos cuenta de <b>DOS PARTES</b>:
              <List
                sx={{
                  listStyleType: 'disc',
                  color: 'text.secondary',
                  width: '100%'
                }}
              >
                <Item sx={{ display: 'list-item' }}>
                  1. Registro del <b>EQUIPO</b> en el ICPC Website. El nombre
                  del equipo debe hacer referencia a la composición, es decir,
                  si es un <b>EQUIPO ORIGINAL</b>, debe conservar el nombre
                  original, solo agregando el año o los años en que fueron
                  competidores o el año que fueron finalistas mundiales. En caso
                  de que representen a una INSTITUCIÓN EDUCATIVA, ORGANIZACIÓN o
                  FAMILIA, el nombre debe hacer referencia a las mismas.
                </Item>
                <Item sx={{ display: 'list-item' }}>
                  2. Envío de dos fotos a{' '}
                  <a href="mailto:guillot@icpcmexico.org" target="blank">
                    <u>guillot@icpcmexico.org.</u>{' '}
                  </a>
                  . La primera foto es del equipo (o los equipos) a los que
                  pertenecieron los integrantes en su etapa de competidores
                  ICPC. La segunda es una foto actual de los integrantes del
                  equipo.
                </Item>
              </List>
            </Typography>
          </Box>
        </BoardCard>
        <BoardCard barSide="right">
          <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
            <Typography color={'text.secondary'} sx={{ width: '100%' }}>
              <b>PREMIOS</b>
            </Typography>
            <Typography color={'text.secondary'} sx={{ width: '100%' }}>
              Se anunciarán próximamente. <br></br>Para cualquier aclaración o
              para solicitar cualquier información adicional, enviar correo a{' '}
              <a href="mailto:guillot@icpcmexico.org" target="blank">
                <u>guillot@icpcmexico.org.</u>{' '}
              </a>
            </Typography>
          </Box>
        </BoardCard>
        {/* <BoardCard barSide="right" sx={{ padding: 0 }}>
          <Typography color={'text.secondary'} sx={{ width: '100%' }}>
            Dado que el ITESO es una Donataria Autorizada, los ingresos
            registrados no generan IVA y, por tanto, la factura generada no
            tendrá este concepto.
          </Typography>
        </BoardCard>
        <BoardCard barSide="right">
          <List
            sx={{ listStyleType: 'disc', color: 'text.secondary', padding: 0 }}
          >
            <Typography color={'text.secondary'}>
              Comentarios sobre costos y pagos:
            </Typography>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              El pago INCLUYE TODOS los consumos considerados dentro de la
              agenda y TODO el material que se entrega a cada participante de
              acuerdo con su rol.
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              El pago NO INCLUYE el hospedade, la transportación desde la
              institución o ciudad de origen a la institución sede, las
              transportaciones entre la sede y los hoteles donde se hospeden y,
              en general, cualquier otro gasto que esté fuera de la agenda.
              Busque mas información sobre el hospedaje en la opción
              correspondiente en este sitio.
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              Se recomienda el hospedaje en los hoteles sede publicados, sobre
              todo en los cercanos al campus ITESO, dado que se tendrían mejores
              tarifas y no se incurriría en muchos gastos de transportación
              local.
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              Los equipos participantes han sido promovidos desde el Gran Premio
              de México 2022 y están en estatus PENDIENTE. Para que el estatus
              del equipo sea cambiado a ACEPTADO, todos los integrantes
              registrados del equipo tanto la COMPOSICIÓN OFICIAL (Entrenador +
              3 Concursantes) como los INTEGRANTES ADICIONALES (Co Entrenador,
              Reservas, Asistentes), deben pagar de acuerdo con su rol en el
              concurso.
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              En caso de que un equipo modificar los integrantes que lo forman,
              sobre todo eliminando INTEGRANTES ADICIONALES, debe notificarlo a{' '}
              <ExternalLink key="Sede" color="text.primary">
                guillot@icpcmexico.org
              </ExternalLink>
              , para hacer el ajuste en el sistema de registro y considerarlo
              para el pago de los integrantes asociados al equipo y para el
              cambio de estatus de este.{' '}
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              Una vez que el estatus del equipo haya cambiado a ACEPTADO, NO se
              podrán agregar nuevos integrantes al mismo. En caso de que exista
              interés en agregar otro participante al evento por parte la
              institución o comunidad a la que pertenece el equipo, deberá
              hacerlo considerando el rol y la tarifa de Director de Sede,
              enviando la petición a{' '}
              <ExternalLink key="Sede" color="text.primary">
                guillot@icpcmexico.org.
              </ExternalLink>
              .
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              En caso de que un participante esté registrado en DOS o MAS
              EQUIPOS, ej.: si es ENTRENADOR de un equipo y CO ENTRENADOR DE
              otros, solo deberá pagar una vez, considerando la tarifa más
              económica. En el ejemplo debería pagar solo UNA VEZ en el rol de
              ENTRENADOR.
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              De igual manera si tiene más de un rol en el evento, ej.: si es
              ENTRENADOR de un equipo y además es DIRECTOR DE SEDE solo deberá
              pagar una vez, considerando la tarifa más económica. En el ejemplo
              debería pagar solo UNA VEZ en el rol de ENTRENADOR, sin embargo,
              podría participar en la reunión de DIRECTORES DE SEDE, por lo
              tanto, debería confirmar su participación y comentar en el correo
              de confirmación que ya ha pagado como ENTRENADOR. Es importante
              que esto sería verificado y la referencia es como esté la
              información registrada en el ICPC Website.
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              Recomendamos que se haga un pago por TODO EL EQUIPO, sumando lo
              correspondiente a cada integrante.
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              Si requiere la factura para el mismo mes que se realizó el pago,
              le recomendamos que no haga el pago en los días finales de enero o
              febrero, sino que lo haga con margen suficiente (de preferencia,
              los días iniciales del mes de febrero).
            </Item>
          </List>
        </BoardCard>
        <BoardCard barSide="left">
          <List
            sx={{
              listStyleType: 'decimal',
              padding: 0,
              color: 'text.secondary'
            }}
          >
            <Typography color={'text.secondary'}>
              Instrucciones para el Pago y Facturación.
            </Typography>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              Enviar la Constancia de Situación Fiscal de la institución o
              persona física al correo{' '}
              <ExternalLink key="Sede" color="text.primary">
                zulma@iteso.mx
              </ExternalLink>
              . Con esta información se generará un número de expediente
              (referencia) para la institución o persona física a la cual se
              facturará. (Copiar en el correo a{' '}
              <ExternalLink key="Sede" color="text.primary">
                navila@iteso.mx
              </ExternalLink>{' '}
              y{' '}
              <ExternalLink key="Sede" color="text.primary">
                acm@iteso.mx
              </ExternalLink>
              )
            </Item>
            <Item
              sx={{
                textAlign: 'justify',
                display: 'list-item',
                color: 'text.secondary'
              }}
            >
              Una vez se cuente con el número de expediente se puede realizar el
              pago. Le recomendamos, en el caso de los EQUIPOS, hacer un solo
              pago sumando los correspondiente a todos los integrantes. Las
              alternativas para esto son:
              <List
                sx={{ listStyleType: 'lower-alpha', color: 'text.secondary' }}
              >
                <Item
                  sx={{
                    textAlign: 'justify',
                    display: 'list-item'
                  }}
                >
                  <strong>
                    Para instituciones o personas sin cuenta BBVA BANCOMER
                  </strong>
                  <List
                    sx={{
                      listStyleType: 'lower-roman',
                      color: 'text.secondary'
                    }}
                  >
                    <Item
                      sx={{
                        textAlign: 'justify',
                        display: 'list-item'
                      }}
                    >
                      Desde el portal del banco de cada persona que pagará, se
                      debe seleccionar PAGO INTERBANCARIO con el número CLABE:
                      <strong> 012914002000800120</strong>.
                    </Item>
                    <Item
                      sx={{
                        textAlign: 'justify',
                        display: 'list-item'
                      }}
                    >
                      En el concepto de pago, se debe poner el número de
                      referencia, incluyendo los tres números del verificador,
                      sin espacios ni guiones entre sí: &lt;referencia&gt;.
                    </Item>
                    <Item
                      sx={{
                        textAlign: 'justify',
                        display: 'list-item'
                      }}
                    >
                      Al final, el concepto de pago debe quedar con el número de
                      &lt;referencia&gt;. sin espacios ni guiones.
                    </Item>
                    <Item
                      sx={{
                        textAlign: 'justify',
                        display: 'list-item'
                      }}
                    >
                      Si el portal del banco emisor necesita forzosamente
                      teclear un número de referencia, favor de poner{' '}
                      <strong>80012 </strong>. Si el portal no lo tiene como
                      dato obligatorio, favor de dejarlo en blanco.
                    </Item>
                  </List>
                </Item>
                <Item
                  sx={{
                    textAlign: 'justify',
                    display: 'list-item'
                  }}
                >
                  <strong>
                    Para instituciones o personas cliente avanzado BBVA
                    BANCOMER.
                  </strong>
                  <List
                    sx={{
                      listStyleType: 'lower-roman',
                      color: 'text.secondary'
                    }}
                  >
                    <Item
                      sx={{
                        textAlign: 'justify',
                        display: 'list-item'
                      }}
                    >
                      Si eres cliente avanzado de BBVA BANCOMER, en donde pagas
                      tus servicios (Tel. Gas. Agua. Luz etc.) Encontrarás un
                      ICONO CIE dar doble clic, te abrirá una ventana para
                      registrar el <strong>CONVENIO CIE 80012</strong>, después
                      te solicitará la &lt;referencia&gt;, deberás digitarla sin
                      espacios ni guiones.
                    </Item>
                  </List>
                </Item>
                <Item
                  sx={{
                    textAlign: 'justify',
                    display: 'list-item'
                  }}
                >
                  <strong>
                    Pago EXPRESS, con tarjeta VISA, MASTERCARD y AMERICAN
                    EXPRESS
                  </strong>{' '}
                  en la liga{' '}
                  <ExternalLink key="Sede" color="text.primary">
                    https://pagoexpress.iteso.mx/
                  </ExternalLink>
                  . Se recomienda el navegador Mozilla Firefox. Se solicitará
                  &lt;referencia&gt;.
                </Item>
              </List>
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              INDEPENDIENTEMENTE DE LA FORMA DE PAGO ELEGIDA, ENVÍA EL
              COMPROBANTE DE PAGO AL CORREO{' '}
              <ExternalLink key="Sede" color="text.primary">
                guillot@icpcmexico.org
              </ExternalLink>{' '}
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              Para solicitar la factura, se debe enviar la petición con la
              referencia al correo{' '}
              <ExternalLink key="Sede" color="text.primary">
                facturacion@iteso.mx
              </ExternalLink>{' '}
              (Copiar en el correo a{' '}
              <ExternalLink key="Sede" color="text.primary">
                navila@iteso.mx
              </ExternalLink>{' '}
              y{' '}
              <ExternalLink key="Sede" color="text.primary">
                acm@iteso.mx
              </ExternalLink>
              )
            </Item>
          </List> 
        </BoardCard> */}
      </MainBoard>
      <Footer />
    </Box>
  )
}

export default Masters
