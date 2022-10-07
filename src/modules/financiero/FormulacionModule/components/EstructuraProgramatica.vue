<template>
  <h3 class="text-center">Estructuras Programaticas</h3>
  <hr>
  <div>
    <div class="d-inline p-2">
      <CButton style="font-weight: bold;" color="info" @click="IngresoReport">Imprimir</CButton>
    </div>
  </div>
  <hr />
  <CSmartTable 
    clickableRows
    :tableProps="{
      striped: true,
      hover: true,
    }"
    :tableHeadProps="{
      
    }"
    :activePage="1"
    footer
    header
    :items="this.$store.state.Formulacion.estructuras"
    :columns="item"
    columnFilter
    tableFilter
    cleaner
    itemsPerPageSelect
    :itemsPerPage="5"
    columnSorter
    :sorterValue="{ column: 'status', state: 'asc' }"
    pagination
  >
  <template #status="{item}">
    <td><CBadge :color="getBadge(item.status)">{{item.status}}</CBadge></td>
    </template>
    <template #show_details="{item, index}">
      <td class="py-2">
        <CButton
          color="primary"
          variant="outline"
          square
          size="sm"
          @click="toggleDetails(item, index)"
        >
          {{Boolean(item._toggled) ? 'Hide' : 'Show'}}
        </CButton>
      </td>
    </template>
    <template #details="{item}">
      <CCollapse :visible="this.details.includes(item._id)">
        <CCardBody>
          <h4>
            {{item.username}}
          </h4>
          <p class="text-muted">User since: {{item.registered}}</p>
          <CButton size="sm" color="info" class="">
            User Settings
          </CButton>
          <CButton size="sm" color="danger" class="ml-1">
            Delete
          </CButton>
        </CCardBody>
      </CCollapse>
    </template>
  </CSmartTable>
</template>
<script>

import { CSmartTable } from '@coreui/vue-pro'
  export default {
    components: {
      CSmartTable
    },
    data: () => {
      return {
        columns: [
          { key: 'actividad', _style: { width: '40%'} },
          'codigo',
          { key: 'contrato', filter: false, sorter: false, _style: { width: '20%'} },
          { key: 'denominacion', _style: { width: '20%'} },
          { key: 'estProgControl', _style: { width: '20%'} },
          { key: 'funcion', _style: { width: '20%'} },
          { key: 'id', _style: { width: '20%'} },
          { key: 'participacion', _style: { width: '20%'} },
          { key: 'pnap', _style: { width: '20%'} },
          { key: 'programa', _style: { width: '20%'} },
          { key: 'proyecto', _style: { width: '20%'} },
          { key: 'tipo', _style: { width: '20%'} },
          { key: 'unidadResponsable', _style: { width: '20%'} },
          {
            key: 'show_details',
            label: '',
            _style: { width: '1%' },
            filter: false,
            sorter: false,
            // _props: { color: 'primary', class: 'fw-semibold'}
          }
        ],
        details: [],
      
      }
    },
    methods: {
      getBadge (status) {
        switch (status) {
          case 'Active': return 'success'
          case 'Inactive': return 'secondary'
          case 'Pending': return 'warning'
          case 'Banned': return 'danger'
          default: 'primary'
        }
      },
      toggleDetails (item) {
        if (this.details.includes(item._id)) {
          this.details = this.details.filter((_item) => _item !== item._id)
          return
        }
        this.details.push(item._id)
      }
    },
    computed:{
      getEstructuras(){
        return this.$store.getters['Formulacion/getEstructurasProgramaticas']
      }
    },
    mounted(){
      //console.log(this.$store.state['Formulacion'].clasificadores)
      this.$store.dispatch('Formulacion/getEstructurasProgramaticas');
    }

  }
</script>