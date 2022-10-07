<template lang="">
  <div>
    <CRow>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
        @click="gotToPrueba"
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998;"
          :values="[{ title: 'Formulacion Presupuesto', value: '' }]"
        >
          <template #icon>
            <img class="card-img-top" src="../assets/images/Presupuesto.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998"
          :values="[{ title: 'Ejecucion Presupuesto', value: '' }]"
        >
          <template #icon>
            <img
              class="card-img-top"
              src="../assets/images/EjecucionPresupuesto.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998"
          :values="[{ title: 'Activos fijos', value: '' }]"
        >
          <template #icon>
            <img class="card-img-top" src="../assets/images/ActivosFijos.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998"
          :values="[{ title: 'Nomina', value: '' }]"
        >
          <template #icon>
            <img class="card-img-top" src="../assets/images/Nomina.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998"
          :values="[{ title: 'Contabilidad', value: '' }]"
        >
          <template #icon>
            <img class="card-img-top" src="../assets/images/Contabilidad.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998"
          :values="[{ title: 'Conciliacion bancaria', value: '' }]"
        >
          <template #icon>
            <img
              class="card-img-top"
              src="../assets/images/ConciliacionBancaria.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998"
          :values="[{ title: 'Cuentas por pagar', value: '' }]"
        >
          <template #icon>
            <img
              class="card-img-top"
              src="../assets/images/CuentasPorPagar.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998"
          :values="[{ title: 'Facturación y cobros', value: '' }]"
        >
          <template #icon>
            <img
              class="card-img-top"
              src="../assets/images/FacturacionYCobro.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
    </CRow>
  </div>
</template>
<script>
export default {
  name: 'Fianciero',
  methods:{
    gotToPrueba(){this.$router.push({name:'clasificadores'})},
  }
}
</script>
<style lang=""></style>
