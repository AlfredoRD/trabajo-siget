export default {
  name: 'Financiero',
  redirect: '/FinancieroModule/clasificadores',
  component: () =>
    import('@/modules/financiero/FormulacionModule/layout/TemplateLayout.vue'),
  children: [
    {
      path: 'clasificadores',
      name: 'clasificadores',
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ '@/modules/financiero/FormulacionModule/components/Clasificadores.vue'
        ),
    },
    {
      path: 'estructuraProgramatica',
      name: 'Estructuras Programaticas',
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ '@/modules/financiero/FormulacionModule/components/EstructuraProgramatica.vue'
        ),
    },
    {
      path: 'fuenteEspecifica',
      name: 'Fuente Especifica',
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ '@/modules/financiero/FormulacionModule/components/FuenteEspecifica.vue'
        ),
    },
    {
      path: 'fuenteFinanciamiento',
      name: 'Fuente Financiamiento',
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ '@/modules/financiero/FormulacionModule/components/FuenteFinanciamiento.vue'
        ),
    },
    {
      path: 'organismos',
      name: 'Organismos',
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ '@/modules/financiero/FormulacionModule/components/Organismos.vue'
        ),
    },
    {
      path: 'proyectos',
      name: 'Proyectos',
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ '@/modules/financiero/FormulacionModule/components/Proyectos.vue'
        ),
    },
    {
      path: 'formulacionIngreso',
      name: 'Formulacion Ingreso',
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ '@/modules/financiero/FormulacionModule/components/FormulacionIngreso.vue'
        ),
    },
    {
      path: 'formulacionGasto',
      name: 'Formulacion Gasto',
      component: () =>
        import(
          /* webpackChunkName: "daybook-no-entry" */ '@/modules/financiero/FormulacionModule/components/FormulacionGasto.vue'
        ),
    },

    //  {
    //     path: '',
    //     name: 'no-entry',
    //     component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/financiero/FormulacionModule/components/Prueba.vue'),
    // },
  ],
}
