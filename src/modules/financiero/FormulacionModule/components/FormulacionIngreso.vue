<template>
  <h3 class="text-center">Formulacion ingreso</h3>
  <hr>
  <div class="">
    <div class="d-inline p-2">
      <CButton
        color="info"
        @click="
          () => {
            lgDemo = true
          }
        "
        >Agregar</CButton
      >
    </div>

    <div class="d-inline p-2">
      <CButton style="font-weight: bold" color="info" @click="IngresoReport"
        >Imprimir</CButton
      >
    </div>
  </div>
  <hr />
  <CSmartTable
    clickableRows
    :tableProps="{
      striped: true,
      hover: true,
    }"
    :tableHeadProps="{}"
    :activePage="1"
    footer
    header
    :items="items"
    :columns="columns"
    columnFilter
    tableFilter
    cleaner
    itemsPerPageSelect
    :itemsPerPage="5"
    columnSorter
    :sorterValue="{ column: 'status', state: 'asc' }"
    pagination
  >
    <template #status="{ item }">
      <td>
        <CBadge :color="getBadge(item.status)">{{ item.status }}</CBadge>
      </td>
    </template>
    <template #show_details="{ item, index }">
      <td class="py-2">
        <CButton
          color="primary"
          variant="outline"
          square
          size="sm"
          @click="toggleDetails(item, index)"
        >
          {{ Boolean(item._toggled) ? 'Hide' : 'Show' }}
        </CButton>
      </td>
    </template>
    <template #details="{ item }">
      <CCollapse :visible="this.details.includes(item._id)">
        <CCardBody>
          <h4>
            {{ item.username }}
          </h4>
          <p class="text-muted">User since: {{ item.registered }}</p>
          <CButton size="sm" color="info" class=""> User Settings </CButton>
          <CButton size="sm" color="danger" class="ml-1"> Delete </CButton>
        </CCardBody>
      </CCollapse>
    </template>
  </CSmartTable>
  <CModal
    size="lg"
    :visible="lgDemo"
    @close="
      () => {
        lgDemo = false
      }
    "
  >
    <CModalHeader>
      <CModalTitle>Formulación Ingreso</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CCardBody>
        <CForm
          class="row g-3 needs-validation"
          novalidate
          :validated="validatedCustom01"
          @submit="handleSubmitCustom01"
        >
          <CCol :md="4">
            <CFormLabel for="validationCustom01">Clasificador</CFormLabel>
            <CFormInput id="validationCustom01" required />
            <button
              class="btn btn-primary btn-block mt-1"
              @click="getClasificador"
            >
              Buscar
            </button>
            <CFormFeedback valid> Exito! </CFormFeedback>
            <CFormFeedback invalid> Favor agregar el campo </CFormFeedback>
          </CCol>
          <CCol :md="4">
            <CFormLabel for="validationCustom02">Cta. Control</CFormLabel>
            <CFormInput disabled id="validationCustom02" required />
            <CFormFeedback valid> Exito! </CFormFeedback>
            <CFormFeedback invalid> Favor agregar el campo </CFormFeedback>
          </CCol>
          <CCol :md="4">
            <CFormLabel for="validationCustomUsername">Detalle</CFormLabel>
            <CInputGroup class="has-validation">
              <CFormInput
                disabled
                id="validationCustomUsername"
                value=""
                aria-describedby="inputGroupPrepend"
                required
              />
              <CFormFeedback valid> Exito! </CFormFeedback>
              <CFormFeedback invalid> Favor agregar el campo </CFormFeedback>
            </CInputGroup>
          </CCol>
          <CCol :md="6">
            <CFormLabel for="validationCustom03"
              >Fuente Financiamiento</CFormLabel
            >
            <CFormInput disabled id="validationCustom03" required />
            <CFormFeedback valid> Exito! </CFormFeedback>
            <CFormFeedback invalid> Favor agregar el campo </CFormFeedback>
          </CCol>
          <CCol :md="3">
            <CFormLabel for="validationCustom04">Fuente Especifica</CFormLabel>
            <CFormInput disabled id="validationCustom04"> </CFormInput>
            <CFormFeedback valid> Exito! </CFormFeedback>
            <CFormFeedback invalid> Favor agregar el campo </CFormFeedback>
          </CCol>
          <CCol :md="3">
            <CFormLabel for="validationCustom05"
              >Organismo Financiador</CFormLabel
            >
            <CFormInput disabled id="validationCustom05" required />
            <CFormFeedback invalid> Favor agregar el campo </CFormFeedback>
          </CCol>
          <hr />
          <CCol :md="4">
            <CFormLabel for="validationCustom04">Año Anterior</CFormLabel>
            <CFormInput id="validationCustom04" value="0"> </CFormInput>
            <CFormFeedback valid> Exito! </CFormFeedback>
            <CFormFeedback invalid> Favor agregar el campo </CFormFeedback>
          </CCol>
          <CCol :md="4">
            <CFormLabel for="validationCustom04">A la Fecha</CFormLabel>
            <CFormInput id="validationCustom04" value="0"></CFormInput>
            <CFormFeedback valid> Exito! </CFormFeedback>
            <CFormFeedback invalid> Favor agregar el campo </CFormFeedback>
          </CCol>
          <CCol :md="4">
            <CFormLabel for="validationCustom04">Presupuesto Formulado</CFormLabel>
            <CFormInput id="validationCustom04" value="0"></CFormInput>
            <CFormFeedback valid> Exito! </CFormFeedback>
            <CFormFeedback invalid> Favor agregar el campo </CFormFeedback>
          </CCol>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              v-on:click="submitForm"
              type="button"
              class="btn btn-primary"
            >
              Guardar
            </button>
          </div>
        </CForm>
      </CCardBody>
    </CModalBody>
  </CModal>
</template>
<script>
import { CSmartTable } from '@coreui/vue-pro'
import { CModal } from '@coreui/vue'
export default {
  components: {
    CSmartTable,
    CModal,
  },
  data: () => {
    return {
      validatedCustom01: null,
      lgDemo: false,
      columns: [
        { key: 'name', _style: { width: '40%' } },
        'registered',
        { key: 'role', filter: false, sorter: false, _style: { width: '20%' } },
        { key: 'status', _style: { width: '20%' } },
        {
          key: 'show_details',
          label: '',
          _style: { width: '1%' },
          filter: false,
          sorter: false,
          // _props: { color: 'primary', class: 'fw-semibold'}
        },
      ],
      details: [],
      items: [
        {
          name: 'John Doe',
          registered: '2018/01/01',
          role: 'Guest',
          status: 'Pending',
        },
        {
          name: 'Samppa Nori',
          registered: '2018/01/01',
          role: 'Member',
          status: 'Active',
        },
        {
          name: 'Estavan Lykos',
          registered: '2018/02/01',
          role: 'Staff',
          status: 'Banned',
        },
        {
          name: 'Chetan Mohamed',
          registered: '2018/02/01',
          role: 'Admin',
          status: 'Inactive',
        },
        {
          name: 'Derick Maximinus',
          registered: '2018/03/01',
          role: 'Member',
          status: 'Pending',
        },
        {
          name: 'Friderik Dávid',
          registered: '2018/01/21',
          role: 'Staff',
          status: 'Active',
        },
        {
          name: 'Yiorgos Avraamu',
          registered: '2018/01/01',
          role: 'Member',
          status: 'Active',
        },
        {
          name: 'Avram Tarasios',
          registered: '2018/02/01',
          role: 'Staff',
          status: 'Banned',
        },
        {
          name: 'Quintin Ed',
          registered: '2018/02/01',
          role: 'Admin',
          status: 'Inactive',
        },
        {
          name: 'Enéas Kwadwo',
          registered: '2018/03/01',
          role: 'Member',
          status: 'Pending',
        },
        {
          name: 'Agapetus Tadeáš',
          registered: '2018/01/21',
          role: 'Staff',
          status: 'Active',
        },
        {
          name: 'Carwyn Fachtna',
          registered: '2018/01/01',
          role: 'Member',
          status: 'Active',
        },
        {
          name: 'Nehemiah Tatius',
          registered: '2018/02/01',
          role: 'Staff',
          status: 'Banned',
        },
        {
          name: 'Ebbe Gemariah',
          registered: '2018/02/01',
          role: 'Admin',
          status: 'Inactive',
        },
        {
          name: 'Eustorgios Amulius',
          registered: '2018/03/01',
          role: 'Member',
          status: 'Pending',
        },
        {
          name: 'Leopold Gáspár',
          registered: '2018/01/21',
          role: 'Staff',
          status: 'Active',
        },
        {
          name: 'Pompeius René',
          registered: '2018/01/01',
          role: 'Member',
          status: 'Active',
        },
        {
          name: 'Paĉjo Jadon',
          registered: '2018/02/01',
          role: 'Staff',
          status: 'Banned',
        },
        {
          name: 'Micheal Mercurius',
          registered: '2018/02/01',
          role: 'Admin',
          status: 'Inactive',
        },
        {
          name: 'Ganesha Dubhghall',
          registered: '2018/03/01',
          role: 'Member',
          status: 'Pending',
        },
        {
          name: 'Hiroto Šimun',
          registered: '2018/01/21',
          role: 'Staff',
          status: 'Active',
        },
        {
          name: 'Vishnu Serghei',
          registered: '2018/01/01',
          role: 'Member',
          status: 'Active',
        },
        {
          name: 'Zbyněk Phoibos',
          registered: '2018/02/01',
          role: 'Staff',
          status: 'Banned',
        },
        {
          name: 'Aulus Agmundr',
          registered: '2018/01/01',
          role: 'Member',
          status: 'Pending',
        },
        {
          name: 'Ford Prefect',
          registered: '2001/05/25',
          role: 'Alien',
          status: "Don't panic!",
        },
      ],
    }
  },
  methods: {
    handleSubmitCustom01(event) {
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      this.validatedCustom01 = true
    },
    getBadge(status) {
      switch (status) {
        case 'Active':
          return 'success'
        case 'Inactive':
          return 'secondary'
        case 'Pending':
          return 'warning'
        case 'Banned':
          return 'danger'
        default:
          'primary'
      }
    },
    toggleDetails(item) {
      if (this.details.includes(item._id)) {
        this.details = this.details.filter((_item) => _item !== item._id)
        return
      }
      this.details.push(item._id)
    },
  },
}
</script>
