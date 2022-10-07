import http from '@/Api/http-common'

class FormulacionApi {
  //-----------------------------CLASIFICADORES---------------------------------------//
  //Obtener listado de Clasificadores
  getListarClasificadores() {
    return http.get('/Financiero/ListarClasificadores')
  }

  //Obtener clasificador especifico
  getClasificador(Clasificador) {
    return http.get(`/ingresoslista/filtrarClasificadores/?obj=${Clasificador}`)
  }
  //-----------------------------CLASIFICADORES---------------------------------------//

  //-----------------------------ESTRUCTURA PROGRAMATICA---------------------------------------//

  getListarEstructuraProgramatica() {
    return http.get('/Financiero/ListarProgramatico')
  }

  //-----------------------------ESTRUCTURA PROGRAMATICA---------------------------------------//

  //-----------------------------FUENTE ESPECIFICA---------------------------------------//
  getFuenteEspecifica() {
    return http.get('/Financiero/ListarFuentesEsp')
  }
  //-----------------------------FUENTE ESPECIFICA---------------------------------------//

  //-----------------------------FUENTE FINANCIAMIENTO---------------------------------------//
  getListarFuentesFinanciamiento() {
    return http.get('/Financiero/ListarFuentes')
  }
  //-----------------------------FUENTE FINANCIAMIENTO---------------------------------------//

  //-----------------------------ORGANISMOS---------------------------------------//
  getListarFinancieroCatalogoOrganismos() {
    return http.get('/Financiero/ListarFinancieroCatalogoOrganismos')
  }
  //----------------------------ORGANISMOS---------------------------------------//

  //-----------------------------PROYECTOS---------------------------------------//
  getListarProyecto(id_ayuntamiento, ano_fiscal) {
    return http.get(
      `/Financiero/ListarProyecto/?ano=${ano_fiscal}&id=${id_ayuntamiento}`,
    )
  }
  //-----------------------------PROYECTOS---------------------------------------//

  //-----------------------------INGRESOS---------------------------------------//
  getListarIngresos(id_ayuntamiento, ano_fiscal) {
    return http.get(
      `/Financiero/ListarIngresos/?ano=${ano_fiscal}&id=${id_ayuntamiento}`,
    )
  }
  getTotalIngresos(id_ayuntamiento, ano_fiscal) {
    return http.get(
      `/ingresoslista/ListarIngresosTotalizado/?ano=${ano_fiscal}&id=${id_ayuntamiento}`,
    )
  }
  //-----------------------------INGRESOS---------------------------------------//

  //-----------------------------GASTOS---------------------------------------//
  getListarGastos() {
    return http.get('/Financiero/ListarGastos')
  }
  //-----------------------------GASTOS---------------------------------------//

 
//-----------------------------CATALOGO---------------------------------------//
  getListarCatalogo() {
    return http.get('/Financiero/ListarCatalogoFunciones')
  }
//-----------------------------CATALOGO---------------------------------------//

//   createProyecto(data) {
//     return http.post('/api/ingresos/guardarPresProyecto', data)
//   }
}

export default new FormulacionApi()
